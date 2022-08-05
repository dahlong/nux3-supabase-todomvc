<template>
  <div>
    <h1>Nuxt 3 Superbase ToDoMVC</h1>
    <h2>{{supabaseUrl}}</h2>
    <h2>{{supabaseKey}}</h2>
    
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>

import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://rndcngutekzsxiyrralu.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

const config = useRuntimeConfig()
console.log(config)

const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseKey

</script>