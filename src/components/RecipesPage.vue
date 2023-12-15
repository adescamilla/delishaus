<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useApi from '@/composables/useApi';

const { fetchRecipe, currentRecipe } = useApi()

const recipe = ref('')

const route = useRoute()

onMounted(async () => {
  await fetchRecipe(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentRecipe.value = null
})

</script>

<template>
  <main class="min-h-screen bg-neutral-300 font-poppins flex items-center justify-center">
    <div v-if="currentRecipe" class="bg-white p-8 rounded-md shadow-lg text-center">
      <h1 class="text-cyan-900 text-5xl font-bold mb-4">{{ currentRecipe.name }}</h1>
      <p class="text-orange-600 text-2xl font-mono mb-4"><i>{{ currentRecipe.cookTime }}</i></p>
      <h2 class="text-neutral-500 text-5xl font-bold mb-4">Ingredients:</h2>
      <p class="text-cyan-900 text-3xl font-medium mb-4">{{ currentRecipe.ingredients }}</p>
      <h2 class="text-neutral-500 text-5xl font-bold mb-4">Instructions:</h2>
      <p class="text-cyan-900 text-4xl font-medium mb-4">{{ currentRecipe.instructions }}</p>
    </div>
  </main>
</template>