<template>
  <div>
    <!-- Page Header -->
    <div class="bg-gray-900 text-white pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-linear-to-b from-gray-900 to-gray-800" />
      </div>
      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          My <span class="text-amber-500">Services</span>
        </h1>
        <p class="text-lg text-gray-400">
          Comprehensive solutions to launch, manage, and scale your E-commerce business.
        </p>
      </div>
    </div>

    <ServicesSection />

    <!-- Detailed Service Explanation -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
            How I Work
          </h2>

          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="flex flex-col md:flex-row gap-6 md:gap-10">
              <div class="md:w-1/4">
                <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  01
                </div>
              </div>
              <div class="md:w-3/4">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Audit & Strategy
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Before executing any tasks, I perform a comprehensive audit of your current store, listings, and PPC campaigns. This helps me identify leaks in your profitability and areas with the highest growth potential. From this, I develop a tailored strategy aligned with your business goals.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col md:flex-row gap-6 md:gap-10">
              <div class="md:w-1/4">
                <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  02
                </div>
              </div>
              <div class="md:w-3/4">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Execution & Optimization
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  With the strategy in place, I begin execution. This includes optimizing listings with high-volume keywords, structuring your PPC campaigns for maximum efficiency, and implementing automated processes for inventory and pricing management.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col md:flex-row gap-6 md:gap-10">
              <div class="md:w-1/4">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  03
                </div>
              </div>
              <div class="md:w-3/4">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Scaling & Reporting
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Once the foundation is solid and profitable, we scale. I continuously monitor metrics, adjust bids, source new product opportunities, and provide you with clear, easy-to-understand weekly/monthly performance reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Services | VAPro',
  meta: [
    { name: 'description', content: 'Detailed list of Amazon FBA/FBM and eBay Virtual Assistant services.' }
  ]
})
</script>
