<template>
  <section id="portfolio" class="py-24 bg-gray-200">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-amber-500 font-bold uppercase tracking-wide text-sm mb-2">
          My Results
        </h2>
        <h3 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Proven Success Stories
        </h3>
        <p class="text-lg text-gray-600">
          See how I've helped clients scale their Amazon and eBay businesses with strategic planning and execution.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div v-for="(item, index) in portfolio" :key="index" class="bg-gray-300 rounded-3xl overflow-hidden shadow-sm border border-gray-300 hover:shadow-xl transition-shadow duration-300">
          <div class="h-64 bg-gray-400 relative">
            <div class="absolute inset-0 bg-linear-to-tr" :class="item.gradient" />
            <div class="absolute inset-0 flex items-center justify-center p-8">
              <div class="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg text-center w-full max-w-sm">
                <p class="text-gray-500 text-sm font-bold uppercase mb-2">
                  {{ item.platform }}
                </p>
                <p class="text-3xl font-extrabold text-gray-900">
                  {{ item.metric }}
                </p>
                <p class="text-sm text-gray-600 mt-1">
                  {{ item.metricLabel }}
                </p>
              </div>
            </div>
          </div>
          <div class="p-8">
            <h4 class="text-2xl font-bold text-gray-900 mb-3">
              {{ item.title }}
            </h4>
            <p class="text-gray-600 mb-6">
              {{ item.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, idx) in item.tags" :key="idx" class="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/portfolio">
          <UButton color="gray" variant="outline" size="lg" class="rounded-full px-8 font-semibold">
            View Full Portfolio
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolio = [
  {
    platform: 'Amazon FBA PL',
    title: 'Home & Kitchen Brand Scaling',
    description: 'Took a struggling PL brand from $10k/month to $85k/month in 6 months by optimizing listings, restructuring PPC campaigns, and adding A+ content.',
    metric: '750%',
    metricLabel: 'Revenue Growth in 6 Months',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['PPC Optimization', 'Listing SEO', 'A+ Content']
  },
  {
    platform: 'eBay Dropshipping',
    title: 'Automated Electronics Store',
    description: 'Built a fully automated eBay dropshipping store from scratch. Sourced top-selling electronics from reliable suppliers and optimized automated repricing.',
    metric: '$45,000',
    metricLabel: 'Monthly Revenue Achieved',
    gradient: 'from-amber-400 to-orange-500',
    tags: ['Product Sourcing', 'Store Automation', 'Customer Service']
  }
]
</script>
