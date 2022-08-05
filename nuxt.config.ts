import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        supabaseUrl: process.env.SUPERBASE_URL,
        supabaseKey: process.env.SUPERBASE_KEY,
    }
})
