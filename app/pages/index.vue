<script setup lang="ts">
const { data: mandatoryreads } = await useFetch(`/api/v1/mandatoryreads`);
const { data: appLinks } = useFetch(`/api/v1/apps`, { query: { limit: 9 } });
// const { data: pinnedLinks } = useFetch(`/api/v1/pinned`, {});

const { description } = useMeta();
</script>

<template>
  <UContainer>
    <UPageHero
      :title="`Hillsborough County External Agency Access`"
      :description="description"
      :links="[
        {
          label: 'Get started',
          href: '/Interact',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
      ]"
    />
  </UContainer>
</template>
