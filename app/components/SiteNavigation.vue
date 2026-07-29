<script setup lang="ts">
import type { ContentNavigationLink } from "@nuxt/ui";

const { data: navigation } = useFetch(`/api/v1/navigation`, {
  transform: (data: NavigationRoot): ContentNavigationLink[] => {
    return data.Sections.map((section) => ({
      title: section.Title,
      path: section.Url,
      target: section.Url ? "_blank" : undefined,
      children: section.ChildItems.map(mapItem),
      defaultOpen: false,
    }));
  },
});

function mapItem(item: NavigationItem): ContentNavigationLink {
  return {
    title: item.Title,
    path: item.Url,
    target: item.Url ? "_blank" : undefined,
    children: item.ChildItems?.length
      ? item.ChildItems.map(mapItem)
      : undefined,
    defaultOpen: true,
  };
}
</script>

<template>
  <UContentNavigation type="multiple" :navigation="navigation" />
</template>
