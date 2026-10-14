export default defineEventHandler(async (event) => {
  // reset user data
  try {
    await $fetch<any>(`/api/v1/reset-user`, { method: "PATCH" });
  } catch (error) {
    console.warn("Unable to reset user data", error);
  }

  // redirect
  const url = await interactRedirectorUrl(event, "/");
  return sendRedirect(event, url, 302);
});
