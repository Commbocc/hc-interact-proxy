export default defineEventHandler(async (event) => {
  const url = await interactRedirectorUrl(event, "/");
  return sendRedirect(event, url, 302);
});
