<script setup lang="ts">
const { searchResults } = useSearch();

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date(date));
</script>

<template>
  <article class="mx-auto py-10 prose dark:prose-invert">
    <SearchForm button-label="Search" size="xl" class="mb-10" />

    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Search results</h1>

        <span class="text-sm text-gray-500">
          {{ searchResults?.TotalResults ?? 0 }} results
        </span>
      </div>

      <!-- Results -->
      <div class="space-y-4">
        <UPageCard
          v-for="item in searchResults?.Results"
          :key="item.Id"
          class="hover:ring-1 hover:ring-primary-500 transition"
          :to="item.Url"
          target="_blank"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-2">
              <!-- Title -->
              <span
                :to="`/${item.Type}/${item.Id}`.toLowerCase()"
                class="text-lg font-semibold text-primary hover:underline"
              >
                {{ item.Title }} - {{ item.SearchItemType }}
              </span>

              <!-- Summary -->
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ item.Summary }}
              </p>

              <!-- <pre>{{ item }}</pre> -->

              <!-- Meta -->
              <div
                class="flex flex-wrap items-center gap-3 text-xs text-gray-500"
              >
                <template
                  v-for="(text, i) in [
                    item.Author,
                    item.Location,
                    `Updated
                  ${formatDate(item.DateUpdated ?? item.DateAdded)}`,
                  ].filter(Boolean)"
                >
                  <span v-if="i !== 0">•</span>
                  <span>{{ text }}</span>
                </template>

                <UBadge
                  v-if="item.IsBestBet"
                  color="primary"
                  variant="subtle"
                  size="xs"
                >
                  Best Bet
                </UBadge>
              </div>
            </div>

            <!-- Action -->
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              variant="ghost"
            />
          </div>
        </UPageCard>
      </div>

      <!-- Empty state -->
      <UCard v-if="!searchResults?.TotalResults">
        <div class="text-center text-gray-500">No results found</div>
      </UCard>
    </div>
  </article>
</template>
