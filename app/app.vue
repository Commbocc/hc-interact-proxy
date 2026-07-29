<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
});

const open = ref(false);
</script>

<template>
  <UApp>
    <UDashboardGroup>
      <UDashboardSidebar v-model:open="open">
        <template #header="{}">
          <strong>Site Navigation</strong>
        </template>

        <SiteNavigation />
      </UDashboardSidebar>

      <UDashboardPanel>
        <template #header>
          <UDashboardNavbar :ui="{ right: 'gap-3' }">
            <template #title>
              <NuxtLink to="/">
                <img src="/login-logo.png" alt="" class="w-auto h-10" />
              </NuxtLink>
            </template>

            <template #right>
              <UButton
                to="https://hcfl.gov"
                target="_blank"
                icon="i-lucide-globe"
                aria-label="HCFL.Gov"
                color="neutral"
                variant="ghost"
              />

              <!-- <UColorModeButton /> -->

              <SearchForm size="sm" />
            </template>
          </UDashboardNavbar>

          <!-- <UDashboardToolbar>tools</UDashboardToolbar> -->
        </template>

        <template #body>
          <UMain>
            <NuxtPage />

            <USeparator icon="i-simple-icons-nuxtdotjs" />

            <UFooter>
              <template #left>
                <p class="text-sm text-muted">
                  Hillsborough County, Florida • ©
                  {{ new Date().getFullYear() }}
                </p>
              </template>

              <template #right>
                <UButton
                  to="https://hcfl.gov"
                  target="_blank"
                  icon="i-lucide-globe"
                  aria-label="HCFL.Gov"
                  color="neutral"
                  variant="ghost"
                />
              </template>
            </UFooter>
          </UMain>
        </template>
      </UDashboardPanel>
    </UDashboardGroup>
  </UApp>
</template>
