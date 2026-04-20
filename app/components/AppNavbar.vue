<template>
  <nav class="fixed w-full z-50 transition-all duration-300" :class="{ 'bg-gray-900 shadow-md py-3': isScrolled, 'bg-transparent py-5': !isScrolled }">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-white">
          Alisha<span class="text-amber-500">VAPro</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="link in links" :key="link.path" :to="link.path" class="text-sm font-medium transition-colors hover:text-amber-500" :class="{ 'text-gray-300': isScrolled || !isHome, 'text-gray-200': !isScrolled && isHome }">
            {{ link.name }}
          </NuxtLink>
          <NuxtLink to="/contact">
            <UButton color="primary" variant="solid" class="font-medium rounded-full px-6 transition-transform hover:scale-105">
              Hire Me
            </UButton>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button class="focus:outline-none text-white" @click="isOpen = !isOpen">
            <UIcon :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-gray-900 shadow-lg absolute w-full left-0 top-full flex flex-col border-t border-gray-800 animate-fade-in">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path" class="px-6 py-4 border-b border-gray-800 text-gray-300 font-medium hover:text-amber-500 hover:bg-gray-800" @click="isOpen = false">
        {{ link.name }}
      </NuxtLink>
      <div class="px-6 py-4">
        <NuxtLink to="/contact" @click="isOpen = false">
          <UButton color="primary" variant="solid" block class="rounded-full">
            Hire Me
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const isHome = computed(() => route.path === '/')

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
