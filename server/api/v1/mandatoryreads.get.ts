export default defineCachedEventHandler(
  async (event) => {
    const client = useInteractAuthenticatedClient();
    return await client<InteractMandatoryRead[]>(`/api/mandatoryread`);
  },
  {
    maxAge: 60 * 60, // 60 minutes
  }
);
