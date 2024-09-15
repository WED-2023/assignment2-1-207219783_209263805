<template>
    <div>
      <h1>My Favorites</h1>
      <div v-if="favoriteRecipes.length === 0">
        <p>No favorite recipes yet.</p>
      </div>
      <div v-else>
        <!-- <RecipePreview v-for="recipe in favoriteRecipes" :key="recipe.id" :card="recipe" /> -->
        <RecipePreviewList class="recipeCarousel" :recipes="favoriteRecipes" />

      </div>
    </div>
  </template>
  
  <script>
  import RecipePreview from '@/components/RecipePreview.vue';
  import RecipeCarousel from '../components/RecipeCarousel.vue';
  import RecipePreviewList from '../components/RecipePreviewList.vue'; 
  import axios from 'axios';


  export default {
    components: {
      RecipePreview,
      RecipeCarousel,
      RecipePreviewList
    },
    data() {
      return {
        favoriteRecipes: []
      };
    },
    created(){
      this.fetchFavoriteRecipes();
    },
    // async created() {
    //   try {
    //     const favoriteRecipes = await this.fetchFavoriteRecipes();
    //     this.favoriteRecipes = favoriteRecipes;
    //   } catch (error) {
    //     console.error('Error fetching favorite recipes:', error);
    //   }
    // },
    methods: {
        async fetchFavoriteRecipes() {
            try {
              const response = await axios.get('http://localhost:3000/users/favorites'); 
              console.log('API Response:', response.data);

              this.favoriteRecipes = response.data;
              console.log(this.favoriteRecipes);
              } catch (error) {
              console.error('Error fetching favorite recipes:', error);
              throw error;
              }
        }
    }
  };
  </script>
  