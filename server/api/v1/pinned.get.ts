export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const client = useInteractAuthenticatedClient();

    return await client<UserLinksResult>(
      `/api/application-bar/user-links/pinned`,
      { query }
    );
  },
  {
    maxAge: 60 * 60, // 60 mins
  }
);
