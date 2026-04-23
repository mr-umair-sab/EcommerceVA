<template>
  <div>
    <!-- Page Header -->
    <div class="bg-gray-900 text-white pt-32 pb-32 px-4 md:px-6 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-linear-to-b from-gray-900 to-gray-800" />
        <div class="absolute left-0 top-0 w-1/3 h-full bg-blue-600 opacity-5 blur-[120px]" />
      </div>
      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          My <span class="text-amber-500">Portfolio</span>
        </h1>
        <p class="text-lg text-gray-200">
          Case studies and results from my successful E-commerce projects.
        </p>
      </div>
    </div>

    <PortfolioSection />

    <!-- More Portfolio Items (Case Studies) -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto space-y-16">
          <!-- Case Study 1 -->
          <div class="border border-gray-800 rounded-3xl p-8 md:p-12 bg-gray-800/30 backdrop-blur-sm shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-amber-500" />
              <h3 class="text-2xl font-bold text-white">
                PPC Turnaround for Pet Supplies Brand
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
                <p class="text-red-400 font-bold mb-2">
                  Before
                </p>
                <ul class="space-y-2 text-sm text-red-300/80">
                  <li>• ACoS: 65%</li>
                  <li>• Monthly Spend: $5,000</li>
                  <li>• Monthly Sales: $7,690</li>
                  <li>• Profitability: Negative</li>
                </ul>
              </div>
              <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
                <p class="text-green-400 font-bold mb-2">
                  After (3 Months)
                </p>
                <ul class="space-y-2 text-sm text-green-300/80">
                  <li>• ACoS: 22%</li>
                  <li>• Monthly Spend: $3,500</li>
                  <li>• Monthly Sales: $15,900</li>
                  <li>• Profitability: Highly Profitable</li>
                </ul>
              </div>
            </div>

            <h4 class="font-bold text-white mb-2">
              The Strategy:
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              We audited the existing campaigns and found heavy spend on broad match keywords with low conversion rates. We paused bleeding keywords, structured exact match campaigns for top converters, and implemented aggressive negative keyword targeting. We also optimized the main image to improve CTR.
            </p>
          </div>

          <!-- Case Study 2 -->
          <div class="border border-gray-800 rounded-3xl p-8 md:p-12 bg-gray-800/30 backdrop-blur-sm shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <UIcon name="i-heroicons-globe-americas" class="w-6 h-6 text-blue-500" />
              <h3 class="text-2xl font-bold text-white">
                eBay, Walmart & TikTok Shop Expansion
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
              <div class="bg-gray-900/50 p-6 rounded-2xl border border-white/5">
                <p class="text-3xl font-extrabold text-white mb-1">
                  0 to 500
                </p>
                <p class="text-xs text-amber-500 uppercase font-bold tracking-wider">
                  Active Listings
                </p>
              </div>
              <div class="bg-gray-900/50 p-6 rounded-2xl border border-white/5">
                <p class="text-3xl font-extrabold text-white mb-1">
                  100%
                </p>
                <p class="text-xs text-amber-500 uppercase font-bold tracking-wider">
                  Positive Feedback
                </p>
              </div>
              <div class="bg-gray-900/50 p-6 rounded-2xl border border-white/5">
                <p class="text-3xl font-extrabold text-white mb-1">
                  $12k
                </p>
                <p class="text-xs text-amber-500 uppercase font-bold tracking-wider">
                  Month 1 Revenue
                </p>
              </div>
            </div>

            <h4 class="font-bold text-white mb-2">
              The Strategy:
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              Successfully expanded a single-channel seller across eBay, Walmart, and TikTok Shop. Integrated automated software for inventory syncing across all platforms to prevent overselling. Created SEO-optimized titles and descriptions tailored to each marketplace's specific search algorithm.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio | AlishaVAPro',
  meta: [
    { name: 'description', content: 'Explore my Virtual Assistant case studies across Amazon, eBay, Walmart, Mercari, TikTok Shop, and Etsy.' }
  ]
})
</script>
