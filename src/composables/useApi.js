import { ref } from 'vue'
import axios from 'axios'

const recipes = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(12)
const currentRecipe = ref('null')

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getRecipes = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/recipes', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  recipes.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const fetchRecipe= async (id) => {
    const { data } = await api.get(`/api/recipes/${id}`)
    currentRecipe.value = data
    console.log(data)
}
  
const getRecipe = async (recipeID) => {
  const { data } = await api.get(`/api/recipes/${recipeID}`)
  return data
}

const useApi = () => {
  return { recipes, pages, activePage, loading, pageSize, getRecipes, getRecipe, fetchRecipe, currentRecipe }
}

export default useApi