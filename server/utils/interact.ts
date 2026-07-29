/**
 * Shared Interact API client configured with tenant headers.
 * See: https://developer.interactsoftware.com/reference
 *
 * This client is used for request types that do not require an authenticated
 * user session, such as token acquisition and public Interact API endpoints.
 */
export const useInteractClient = () => {
  const { interactApiEndpoint, interactTenantGuid } = useRuntimeConfig();

  return $fetch.create({
    baseURL: interactApiEndpoint,
    headers: {
      "X-Tenant": interactTenantGuid,
    },
  });
};

/**
 * Creates a client for authenticated Interact API requests.
 *
 * It fetches an access token, then forwards the original request options to
 * the API with an Authorization header set.
 */
export const useInteractAuthenticatedClient = () => {
  const { interactApiEndpoint, interactTenantGuid } = useRuntimeConfig();

  return $fetch.create({
    baseURL: interactApiEndpoint,
    async onRequest({ options }) {
      const { access_token } = await fetchInteractAccessToken();

      options.headers.set("X-Tenant", interactTenantGuid);
      options.headers.set("Authorization", `Bearer ${access_token}`);
    },
  });
};

/**
 * Requests an access token from the Interact token endpoint.
 *
 * The token request uses the configured tenant and user credentials from
 * environment variables, sending them as a key/secret authorization code.
 *
 * @returns A promise resolving to the Interact access token response.
 */
export async function fetchInteractAccessToken() {
  const {
    public: { interactOperatingUserId },
    interactAdminApiKey,
    interactAdminApiSecret,
  } = useRuntimeConfig();
  const client = useInteractClient();

  return client<{
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    tenant: string;
    expires: string;
    issued: string;
  }>("/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: `${interactAdminApiKey}__${interactAdminApiSecret}`,
      context: "KeySecret",
    }),
    query: {
      personid: interactOperatingUserId,
    },
  });
}
