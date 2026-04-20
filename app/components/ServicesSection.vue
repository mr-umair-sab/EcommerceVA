<template>
  <section id="services" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-amber-500 font-bold uppercase tracking-wide text-sm mb-2">
          What I Do
        </h2>
        <h3 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Comprehensive E-Commerce Services
        </h3>
        <p class="text-lg text-gray-600">
          From product hunting to complete account management, I provide end-to-end solutions for your Amazon and eBay stores.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div class="w-14 h-14 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
            <UIcon :name="service.icon" class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-4">
            {{ service.title }}
          </h4>
          <p class="text-gray-600 mb-6 line-clamp-3">
            {{ service.description }}
          </p>
          <ul class="space-y-2">
            <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-start text-sm text-gray-600">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Product Hunting & Research',
    description: 'Finding high-demand, low-competition products with excellent profit margins using premium tools like Helium 10, Jungle Scout, and Keepa.',
    icon: 'i-heroicons-magnifying-glass',
    features: ['Keyword Research', 'Competitor Analysis', 'Profit Margin Calculation']
  },
  {
    title: 'Listing Optimization',
    description: 'Creating SEO-optimized product titles, bullet points, and descriptions that convert visitors into buyers and rank higher on search results.',
    icon: 'i-heroicons-document-text',
    features: ['SEO Keyword Integration', 'A+ Content/EBC Creation', 'Image Optimization Guidelines']
  },
  {
    title: 'PPC Campaign Management',
    description: 'Setting up, monitoring, and optimizing Amazon Sponsored Ads to lower ACoS and maximize your Return on Ad Spend (RoAS).',
    icon: 'i-heroicons-chart-pie',
    features: ['Campaign Setup & Strategy', 'Bid Optimization', 'Negative Keyword Targeting']
  },
  {
    title: 'eBay Dropshipping & Arbitrage',
    description: 'Complete management of your eBay store including product sourcing from reliable suppliers, listing creation, and order fulfillment.',
    icon: 'i-heroicons-shopping-bag',
    features: ['Supplier Sourcing', 'Automated Pricing Strategies', 'Customer Service Management']
  },
  {
    title: 'Account Management (A to Z)',
    description: 'Full-service management of your Seller Central or eBay account so you can focus on scaling your business while I handle the daily operations.',
    icon: 'i-heroicons-briefcase',
    features: ['Inventory Management', 'Account Health Monitoring', 'Customer Support & Reviews']
  },
  {
    title: 'Sourcing & Logistics',
    description: 'Finding reliable manufacturers on Alibaba, negotiating prices, arranging samples, and managing freight forwarding to FBA warehouses.',
    icon: 'i-heroicons-truck',
    features: ['Supplier Negotiation', 'Sample Evaluation', 'FBA Shipment Creation']
  }
]
</script>
