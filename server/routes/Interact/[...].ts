export default defineEventHandler(async (event) => {
  const { pathname, search } = getRequestURL(event);
  const url = await interactRedirectorUrl(event, pathname + search);
  return sendRedirect(event, url, 302);
});
