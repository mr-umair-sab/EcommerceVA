<template>
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce-slow"
    aria-label="Chat on WhatsApp">
    <UIcon name="i-mdi-whatsapp" class="w-8 h-8" />
  </a>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
