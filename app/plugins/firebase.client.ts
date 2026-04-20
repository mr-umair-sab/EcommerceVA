import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyC06BGHl8nQ-hg5nSL7l2B0x2pf3U4JIzs',
    authDomain: 'va-ecommerce-ebay.firebaseapp.com',
    projectId: 'va-ecommerce-ebay',
    storageBucket: 'va-ecommerce-ebay.firebasestorage.app',
    messagingSenderId: '347339067964',
    appId: '1:347339067964:web:b94cea6bec4717d32ee939',
    measurementId: 'G-WBY9SCSS57'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      firestore: db
    }
  }
})
