<template>
  <section class="py-24 bg-gray-900 text-white overflow-hidden relative">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-amber-500 opacity-10 blur-[80px]" />
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-[100px]" />

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-amber-500 font-bold uppercase tracking-wide text-sm mb-2">
          Testimonials
        </h2>
        <h3 class="text-3xl md:text-4xl font-extrabold mb-6">
          What My Clients Say
        </h3>
        <p class="text-lg text-gray-400">
          Don't just take my word for it. Hear from the business owners who have scaled their operations with my VA services.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative mt-8">
          <div class="absolute -top-6 left-8">
            <div class="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl shadow-lg">
              <UIcon name="i-heroicons-chat-bubble-left-quote" class="w-6 h-6" />
            </div>
          </div>
          <div class="flex items-center mb-6 pt-4">
            <div class="w-12 h-12 rounded-full bg-gray-600 mr-4 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center text-gray-400 font-bold text-xl">
                {{ testimonial.name.charAt(0) }}
              </div>
            </div>
            <div>
              <h4 class="font-bold text-white">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-400">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
          <div class="flex text-amber-400 mb-4">
            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-5 h-5" />
          </div>
          <p class="text-gray-300 italic leading-relaxed">
            "{{ testimonial.text }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Michael T.',
    role: 'Amazon FBA Seller',
    text: 'Hiring AlishaVAPro was the best decision for my Amazon business. The PPC campaigns were optimized perfectly, dropping my ACoS from 45% to 18% within just two months. Highly recommended!'
  },
  {
    name: 'Sarah J.',
    role: 'eBay Store Owner',
    text: 'I was struggling to keep up with order fulfillment and customer service on eBay. Now, everything is handled automatically. My seller rating has never been higher, and sales are up 60%.'
  },
  {
    name: 'David W.',
    role: 'E-commerce Brand Owner',
    text: 'The product hunting research provided was incredibly detailed. We launched two of the recommended products and both hit page 1 for our main keywords within weeks. True professional.'
  }
]
</script>
