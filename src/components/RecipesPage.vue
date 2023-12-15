<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useApi from '@/composables/useApi';

const { getRecipes, getRecipe } = useApi()

const route = useRoute()

const recipe = ref('')

onMounted(async () => {
  await getRecipes(route.params.id)
  console.log(route.params.id)
})

</script>

<template>
  <main class="min-h-screen bg-neutral-300 font-poppins flex items-center justify-center">
    <div v-if="getRecipe" class="bg-white p-8 rounded-md shadow-lg text-center">
      <h1 class="text-cyan-900 text-4xl font-bold mb-4">Recipe: {{ getRecipe.name }}</h1>
    </div>
  </main>
</template>