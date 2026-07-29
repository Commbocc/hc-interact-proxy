<script setup lang="ts">
const props = defineProps<{
  limit?: number;
  offset?: number;
}>();

const { data } = useFetch(`/api/v1/suggested-content`, { query: { ...props } });
</script>

<template>
  <UPageList divide>
    <UPageCard
      v-for="(suggestion, index) in data"
      :key="index"
      variant="ghost"
      :to="suggestion.Url"
      target="_blank"
    >
      <template #body>
        <UUser
          :name="suggestion.Title"
          :description="suggestion.Reason"
          :avatar="{
            src: `/utilities/assets/handler/asset.ashx?asset=${suggestion.AvatarId}&size=4`,
            alt: suggestion.Title,
          }"
          size="xl"
          class="relative"
        />
      </template>
      <template #footer>
        <small>
          {{ suggestion.Summary }}
        </small>
      </template>
    </UPageCard>
  </UPageList>
</template>
