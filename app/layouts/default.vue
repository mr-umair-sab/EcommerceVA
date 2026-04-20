<template>
  <div class="min-h-screen flex flex-col font-sans">
    <AppNavbar />
    <main class="grow">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>
