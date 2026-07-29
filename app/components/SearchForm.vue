<script setup lang="ts">
import type { InputProps } from "@nuxt/ui";

const props = defineProps<{
  size?: InputProps["size"];
  buttonLabel?: string;
}>();

const { query } = useRoute();
const router = useRouter();

const { searchTerm, searchResults } = useSearch();

const { refresh, pending } = await useFetch(`/api/v1/search`, {
  query: {
    ...query,
    searchTerm,
  },
  watch: false,
  immediate: searchTerm.value !== "",
  transform: (data: InteractSearchResponse) => {
    searchResults.value = data;
  },
});

const submit = async (_e: SubmitEvent) => {
  router.push({
    path: "/search",
    query: { ...query, searchTerm: searchTerm.value },
  });
  await refresh();
};
</script>

<template>
  <form
    @submit.prevent="submit"
    method="GET"
    action="/search"
    class="flex space-x-2 my-5"
  >
    <UInput
      v-model="searchTerm"
      placeholder="Search Term"
      name="searchTerm"
      class="w-full"
      :size="size"
    />

    <UButton
      type="submit"
      :size="size"
      icon="i-lucide-search"
      :label="buttonLabel"
      :loading="pending"
    />
  </form>
</template>
