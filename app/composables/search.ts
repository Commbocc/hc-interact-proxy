export const useSearch = () => {
  const { query } = useRoute();

  const searchTerm = useState(
    "searchTerm",
    () => query.searchTerm?.toString() || ""
  );

  const searchResults = useState<InteractSearchResponse | null>(
    "searchResults",
    () => null
  );

  return { searchTerm, searchResults };
};
