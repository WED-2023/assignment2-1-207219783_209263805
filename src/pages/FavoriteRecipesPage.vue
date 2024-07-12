<template>
    <div>
      <h1>My Favorites</h1>
      <div v-if="favoriteRecipes.length === 0">
        <p>No favorite recipes yet.</p>
      </div>
      <div v-else>
        <RecipePreview v-for="recipe in favoriteRecipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </template>
  
  <script>
  import RecipePreview from '@/components/RecipePreview.vue'; 
  import axios from 'axios';


  export default {
    components: {
      RecipePreview
    },
    data() {
      return {
        favoriteRecipes: []
      };
    },
    mounted(){
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
  