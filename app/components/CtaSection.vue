<template>
  <section class="py-20 bg-amber-500 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="cta-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#cta-pattern)" />
      </svg>
    </div>

    <div class="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <div class="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl">
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Scale Your E-commerce Business?
        </h2>
        <p class="text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
          Let's discuss your goals and how my expert VA services for Amazon, eBay, Walmart, TikTok Shop, and Etsy can help you achieve them faster.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <NuxtLink v-if="false" to="/contact">
            <UButton size="xl" color="gray" variant="solid" class="rounded-full font-bold px-8 py-4 w-full sm:w-auto text-gray-900 bg-white hover:bg-gray-50 shadow-xl hover:-translate-y-1 transition-transform">
              Book a Free Consultation
            </UButton>
          </NuxtLink>
          <NuxtLink to="/contact">
            <UButton size="xl" color="gray" variant="solid" class="rounded-full font-bold px-8 py-4 w-full sm:w-auto text-gray-900 bg-white hover:bg-gray-50 shadow-xl hover:-translate-y-1 transition-transform">
              Send a Message
            </UButton>
          </NuxtLink>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <UButton size="xl" color="black" variant="outline" class="rounded-full font-bold px-8 py-4 w-full sm:w-auto text-white border-2 border-white hover:bg-white/10 transition-colors">
              <UIcon name="i-mdi-whatsapp" class="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </UButton>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
