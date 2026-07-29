export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const client = useInteractAuthenticatedClient();

    return await client<Suggestion[]>(`/api/suggest/content`, { query });
  },
  {
    maxAge: 60 * 60, // 60 mins
  }
);
