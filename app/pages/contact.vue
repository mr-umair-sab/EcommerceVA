<template>
  <!-- cspell:ignore Formspree firestore -->
  <div>
    <!-- Page Header -->
    <div class="bg-gray-900 text-white pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-linear-to-b from-gray-900 to-gray-800" />
        <div class="absolute right-0 bottom-0 w-1/3 h-1/2 bg-amber-500 opacity-10 blur-[100px]" />
      </div>
      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          Let's <span class="text-amber-500">Connect</span>
        </h1>
        <p class="text-lg text-gray-400">
          Ready to scale your business? Book a consultation or send me a message.
        </p>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Left Column: Calendly -->
          <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">
              Book a Free Strategy Call
            </h2>
            <p class="text-gray-600 mb-6 text-sm">
              Select a time that works for you to discuss your business goals.
            </p>
            <CalendlyEmbed class="grow" />
          </div>

          <!-- Right Column: Contact Form & Info -->
          <div class="space-y-8">
            <!-- Contact Form -->
            <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>
              <!-- Formspree/EmailJS Form Action Placeholder -->
              <form class="space-y-4" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input v-model="form.firstName" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 outline-none" placeholder="John">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input v-model="form.lastName" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 outline-none" placeholder="Doe">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input v-model="form.email" type="email" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 outline-none" placeholder="john@example.com">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Select Service Area</label>
                  <select v-model="form.service" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 outline-none">
                    <option>Amazon FBA/FBM</option>
                    <option>eBay Dropshipping/Wholesale</option>
                    <option>PPC Campaign Management</option>
                    <option>Product Hunting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea v-model="form.message" rows="4" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 outline-none resize-none" placeholder="Tell me about your business and goals..." />
                </div>
                <UButton
                  type="submit"
                  color="primary"
                  variant="solid"
                  block
                  class="rounded-xl py-3 font-bold text-base shadow-md"
                  :loading="isSubmitting">
                  Send Message
                </UButton>

                <div v-if="submitSuccess" class="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-sm">
                  Thanks for your message! I'll get back to you shortly.
                </div>
                <div v-if="submitError" class="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">
                  There was an error sending your message. Please try again or contact via WhatsApp.
                </div>
              </form>
            </div>

            <!-- Direct Contact Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:hello@AlishaVAPro.com" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-amber-300 transition-colors group">
                <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">Email Me</p>
                  <p class="text-gray-900 font-semibold">hello@AlishaVAPro.com</p>
                </div>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-green-300 transition-colors group">
                <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                  <UIcon name="i-mdi-whatsapp" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-medium">WhatsApp</p>
                  <p class="text-gray-900 font-semibold">+1 234 567 890</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

useHead({
  title: 'Contact | AlishaVAPro',
  meta: [
    { name: 'description', content: 'Contact me to scale your Amazon or eBay business.' }
  ]
})

const { $firestore } = useNuxtApp()

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  service: 'Amazon FBA/FBM',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  try {
    await addDoc(collection($firestore, 'contact_messages'), {
      ...form,
      createdAt: serverTimestamp()
    })

    submitSuccess.value = true

    // Reset form
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.service = 'Amazon FBA/FBM'
    form.message = ''
  }
  catch (e) {
    console.error('Error adding document: ', e)
    submitError.value = true
  }
  finally {
    isSubmitting.value = false

    // Hide success message after 5 seconds
    if (submitSuccess.value) {
      setTimeout(() => {
        submitSuccess.value = false
      }, 5000)
    }
  }
}
</script>
