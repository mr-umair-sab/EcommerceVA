<template>
  <div class="calendly-inline-widget min-h-[650px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100" data-url="https://calendly.com/your-calendly-link">
    <!-- Fallback content if script fails or is loading -->
    <div v-if="!scriptLoaded" class="flex flex-col items-center justify-center h-[650px] bg-gray-50 text-center p-8">
      <UIcon name="i-heroicons-calendar-days" class="w-16 h-16 text-amber-500 mb-4 animate-pulse" />
      <h3 class="text-xl font-bold text-gray-800 mb-2">
        Loading Scheduling Calendar...
      </h3>
      <p class="text-gray-500">
        Please wait while we connect to Calendly.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const scriptLoaded = ref(false)

onMounted(() => {
  // Load Calendly widget script dynamically
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  script.onload = () => {
    scriptLoaded.value = true
  }
  document.head.appendChild(script)
})
</script>
