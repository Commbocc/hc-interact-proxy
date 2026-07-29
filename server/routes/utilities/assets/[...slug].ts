export default defineEventHandler(async (event) => {
  //   const slug = getRouterParam(event, "slug");
  const { asset, size } = getQuery(event);

  const client = useInteractAuthenticatedClient();

  const data = await client<Blob>(`/api/asset/${asset}`, {
    query: {
      size,
    },
  });

  return sendStream(event, data.stream());
});
