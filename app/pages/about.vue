<template>
  <div>
    <!-- Page Header -->
    <div class="bg-gray-900 text-white pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-linear-to-b from-gray-900 to-gray-800" />
        <div class="absolute right-0 top-0 w-1/2 h-full bg-amber-500 opacity-5 blur-[150px]" />
      </div>
      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          About <span class="text-amber-500">Me</span>
        </h1>
        <p class="text-lg text-gray-200">
          Dedicated to helping e-commerce sellers achieve their full potential.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1 space-y-6">
            <h2 class="text-3xl font-bold text-white">
              Your Partner in E-commerce Growth
            </h2>
            <p class="text-gray-300 leading-relaxed">
              With over 4 years of experience navigating the complexities of Amazon, eBay, Walmart, Mercari, TikTok Shop, and Etsy, I've developed a deep understanding of what it takes to succeed in the competitive e-commerce landscape.
            </p>
            <p class="text-gray-300 leading-relaxed">
              My journey started as an independent seller, where I learned the ropes through trial and error. I quickly realized my passion lay in the strategic side of the business—optimizing listings, finding hidden product gems, and engineering profitable PPC campaigns.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Today, I partner with brand owners and sellers worldwide to take the operational burden off their shoulders, allowing them to focus on high-level strategy and business growth.
            </p>

            <div class="pt-6 grid grid-cols-2 gap-6">
              <div class="bg-amber-500/10 p-6 rounded-2xl border border-amber-500/20">
                <h4 class="text-4xl font-extrabold text-amber-500 mb-2">
                  4+
                </h4>
                <p class="text-gray-300 font-medium">
                  Years Experience
                </p>
              </div>
              <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
                <h4 class="text-4xl font-extrabold text-blue-500 mb-2">
                  24/7
                </h4>
                <p class="text-gray-300 font-medium">
                  Support & Monitoring
                </p>
              </div>
            </div>
          </div>

          <div class="order-1 md:order-2 relative">
            <div class="aspect-4/5 bg-gray-800 rounded-3xl overflow-hidden relative shadow-2xl border border-gray-700">
              <!-- Placeholder for profile image -->
              <div class="absolute inset-0 bg-linear-to-tr from-gray-800 to-gray-700 flex items-center justify-center">
                <UIcon name="i-heroicons-user" class="w-32 h-32 text-gray-600 opacity-50" />
                <p class="absolute bottom-10 text-center text-white/80 font-medium w-full px-6">
                  Your Professional Image Here
                </p>
              </div>
            </div>
            <!-- Experience badge -->
            <div class="absolute -bottom-8 -left-8 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-check-badge" class="w-7 h-7" />
                </div>
                <div>
                  <p class="text-gray-400 text-sm font-semibold">
                    Certified
                  </p>
                  <p class="text-white font-bold">
                    Amazon Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-800/50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-white mb-6">
            My Core Values
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-700 text-center hover:border-amber-500/50 transition-colors">
            <div class="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-eye" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">
              Transparency
            </h3>
            <p class="text-gray-400">
              Honest communication about expectations, performance metrics, and strategic decisions.
            </p>
          </div>
          <div class="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-700 text-center hover:border-blue-500/50 transition-colors">
            <div class="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-chart-bar" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">
              Data-Driven
            </h3>
            <p class="text-gray-400">
              Every decision from keyword targeting to pricing strategies is backed by hard data.
            </p>
          </div>
          <div class="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-700 text-center hover:border-green-500/50 transition-colors">
            <div class="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-shield-check" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">
              Reliability
            </h3>
            <p class="text-gray-400">
              Consistent execution, meeting deadlines, and keeping your accounts healthy and safe.
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
  title: 'About Me | AlishaVAPro',
  meta: [
    { name: 'description', content: 'Learn about my experience as a dedicated Virtual Assistant for Amazon, eBay, Walmart, Mercari, TikTok Shop, and Etsy.' }
  ]
})
</script>
