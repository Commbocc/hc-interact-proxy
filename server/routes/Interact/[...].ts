export default defineEventHandler(async (event) => {
  const client = useInteractAuthenticatedClient();

  const { login_token } = await client<{
    login_token: string;
  }>(`/api/logintoken`);

  const { pathname, search } = getRequestURL(event);

  const {
    public: { interactWebUrl },
  } = useRuntimeConfig();

  const webUrl = interactWebUrl;

  const url = [
    webUrl,
    "/redirector?",
    new URLSearchParams({
      token: login_token,
      returnUrl: webUrl + pathname + search,
    }).toString(),
  ].join("");

  return sendRedirect(event, url, 302);
});
