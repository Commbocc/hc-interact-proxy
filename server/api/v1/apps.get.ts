export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);

    const client = useInteractAuthenticatedClient();

    return await client<UserLinksResult>(
      `/api/application-bar/user-links/app-library`,
      { query }
    );
  },
  {
    maxAge: 60 * 60, // 60 mins
  }
);
