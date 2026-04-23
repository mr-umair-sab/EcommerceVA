<template>
  <section class="relative bg-gray-900 text-white min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90" />
      <div class="absolute right-0 top-0 w-1/2 h-full bg-amber-500 opacity-5 blur-[150px] transform rotate-12" />
      <div class="absolute left-0 bottom-0 w-1/3 h-1/2 bg-blue-600 opacity-10 blur-[120px]" />
    </div>

    <div class="container mx-auto px-4 md:px-6 z-10 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8">
          <div class="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-medium text-sm mb-4">
            🚀 Multi-Platform E-commerce Virtual Assistant
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Scale Your <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">E-Commerce</span> Empire Faster
          </h1>
          <p class="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
            I help sellers dominate Amazon, eBay, Walmart, Mercari, TikTok Shop, and Etsy through expert product hunting, optimized listings, and complete account management.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink to="/contact">
              <UButton size="xl" color="primary" variant="solid" class="rounded-full font-semibold px-8 py-3 w-full sm:w-auto text-center justify-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow">
                Book Free Consultation
              </UButton>
            </NuxtLink>
            <NuxtLink to="/portfolio">
              <UButton size="xl" color="success" variant="ghost" class="rounded-full font-semibold px-8 py-3 w-full sm:w-auto text-center justify-center text-white hover:bg-white/10 transition-colors">
                View My Successes
              </UButton>
            </NuxtLink>
          </div>

          <div class="pt-8 flex items-center gap-6">
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-white">50+</span>
              <span class="text-sm text-gray-300 uppercase tracking-wider font-medium">Clients Helped</span>
            </div>
            <div class="w-px h-12 bg-gray-700" />
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-white">$2M+</span>
              <span class="text-sm text-gray-300 uppercase tracking-wider font-medium">Revenue Generated</span>
            </div>
          </div>
        </div>

        <!-- Image/Visual Content -->
        <div class="relative hidden lg:block">
          <div class="relative w-full aspect-square rounded-full border-2 border-dashed border-gray-700 p-4 animate-[spin_60s_linear_infinite]">
            <div class="w-full h-full rounded-full border-2 border-gray-600 p-4">
              <div class="w-full h-full rounded-full bg-linear-to-tr from-gray-800 to-gray-700 relative overflow-hidden shadow-2xl">
                <!-- Using a generic placeholder image or visual representation -->
                <div class="absolute inset-0 flex items-center justify-center opacity-20">
                  <UIcon name="i-heroicons-chart-bar" class="w-64 h-64 text-amber-500" />
                </div>
              </div>
            </div>
          </div>
          <!-- Floating cards -->
          <div class="absolute top-1/4 -left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl transform -translate-y-1/2 animate-[bounce_4s_infinite]">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <UIcon name="i-heroicons-arrow-trending-up" class="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-300">
                  Sales Increase
                </p>
                <p class="text-lg font-bold text-white">
                  +145% YoY
                </p>
              </div>
            </div>
          </div>
          <div class="absolute bottom-1/4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl transform translate-y-1/2 animate-[bounce_5s_infinite]">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <UIcon name="i-heroicons-star" class="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-300">
                  Seller Rating
                </p>
                <p class="text-lg font-bold text-white">
                  4.9/5 Average
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
