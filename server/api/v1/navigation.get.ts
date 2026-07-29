export default defineCachedEventHandler(
  async (event) => {
    const client = useInteractAuthenticatedClient();
    return await client<NavigationRoot>(`/api/navigation/top-menu`);
  },
  {
    maxAge: 60 * 60, // 60 minutes
  }
);
