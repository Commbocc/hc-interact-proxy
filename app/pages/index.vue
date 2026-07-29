<script setup lang="ts">
const { data: mandatoryreads } = await useFetch(`/api/v1/mandatoryreads`);
const { data: appLinks } = useFetch(`/api/v1/apps`, { query: { limit: 9 } });
// const { data: pinnedLinks } = useFetch(`/api/v1/pinned`, {});
</script>

<template>
  <UContainer>
    <UPageHero
      title="Hillsborough County External Agency LAWN Springboard"
      description="This site provides authorized external agency users with secure access to designated County intranet resources. Your access is based on limited permissions, so some content and applications may not be visible or available."
      :links="[
        {
          label: 'Get started',
          to: '/search',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
        {
          label: 'Public Website',
          to: 'https://hcfl.gov',
          target: '_blank',
          icon: 'i-lucide-globe',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    />

    <UPageSection
      id="features"
      title="Suggested Reading"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae ad hic dicta cumque aliquid eos sunt rerum dolor eius, mollitia magni unde, ipsa, quibusdam molestias aperiam soluta quaerat illo."
    >
      <template #body>
        <SuggestedContent />
      </template>
    </UPageSection>

    <UPageSection
      title="Applications"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae ad hic dicta cumque aliquid eos sunt rerum dolor eius, mollitia magni unde, ipsa, quibusdam molestias aperiam soluta quaerat illo."
    >
      <template #features>
        <UserLinks :links="appLinks?.Items" />
        <!-- <UserLinks :links="pinnedLinks?.Items" /> -->
      </template>
    </UPageSection>
  </UContainer>
</template>
