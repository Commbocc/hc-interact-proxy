export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const client = useInteractAuthenticatedClient();

    return await client<InteractSearchResponse>(`/api/search`, {
      query: {
        ...query,
        excludedTypes: [
          // "Category",
          // "TopMenuSection",
          // "Calendar",
          // "ExternalLink",
        ].join(","),
      },
    });
  },
  {
    maxAge: 60 * 5, // 5 minutes
  }
);
