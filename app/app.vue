<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.png" }],
  htmlAttrs: {
    lang: "en",
  },
});

const { title, description, lawnLogo } = useMeta();

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: lawnLogo,
  twitterImage: lawnLogo,
  twitterCard: "summary_large_image",
});

await navigateTo(`/Interact?q=${Date.now()}`);
</script>

<template>
  <UApp>
    <UContainer class="my-10">
      <UEmpty loading :title="title" :description="description" />
    </UContainer>
  </UApp>
</template>
