import type { H3Event } from "h3";

export const interactRedirectorUrl = async (event: H3Event, path: string) => {
  const client = useInteractAuthenticatedClient();

  const { login_token } = await client<{
    login_token: string;
  }>(`/api/logintoken`);

  const {
    public: { interactWebUrl },
  } = useRuntimeConfig();

  const url = [
    interactWebUrl,
    "/redirector?",
    new URLSearchParams({
      token: login_token,
      returnUrl: interactWebUrl + path,
    }).toString(),
  ].join("");

  return url;
};
