<script setup lang="ts">
const props = defineProps<{
  links?: UserLinkItem[];
}>();
</script>

<template>
  <UPageCard
    v-for="item in links ?? []"
    :to="item.Url"
    :title="item.Title"
    :description="item.Description"
    target="_blank"
    variant="soft"
  >
    <template #leading>
      <UAvatar
        :src="`/utilities/assets/handler/asset.ashx?asset=${item.AssetId}&size=4`"
        :alt="item.Title"
        :ui="{
          root: 'bg-primary',
        }"
        class="relative"
      />
    </template>
  </UPageCard>
</template>
