<template>
  <footer class="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-1">
          <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-white mb-4 block">
            Alisha<span class="text-amber-500">VAPro</span>
          </NuxtLink>
          <p class="text-sm text-gray-300 mb-6">
            Expert Amazon and eBay Virtual Assistant services to scale your e-commerce business effectively.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <UIcon name="i-mdi-linkedin" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <UIcon name="i-mdi-twitter" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <UIcon name="i-mdi-facebook" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-amber-500 transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-amber-500 transition-colors">About Me</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="hover:text-amber-500 transition-colors">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-amber-500 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">
            Services
          </h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">Amazon FBA/FBM</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">Product Hunting</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">PPC Campaigns</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">eBay Dropshipping</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">Account Management</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4 text-lg">
            Contact Info
          </h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-3 text-amber-500 shrink-0" />
              <span>hello@AlishaVAPro.com</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-3 text-amber-500 shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-3 text-amber-500 shrink-0" />
              <span>Remote / Global Services</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-xs text-gray-400">
          &copy; {{ new Date().getFullYear() }} AlishaVAPro Services. All rights reserved.
        </p>

        <p class="text-xs text-gray-400 mt-2 md:mt-0">
          created by <a href="https://umairdevelperking.web.app/" target="_blank" rel="noopener noreferrer" class="text-green-500 hover:text-green-400 font-medium transition-colors">Umair Developer</a>
        </p>
      </div>
    </div>
  </footer>
</template>
