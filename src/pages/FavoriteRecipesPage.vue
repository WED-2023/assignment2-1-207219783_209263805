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
  import RecipePreview from './components/RecipePreview.vue'; 
  
  export default {
    components: {
      RecipePreview
    },
    data() {
      return {
        favoriteRecipes: []
      };
    },
    // async created() {
    //   // Fetch user's favorite recipes from the backend
    //   try {
    //     // Assuming you have a method to fetch favorite recipes from the server
    //     const favoriteRecipes = await this.fetchFavoriteRecipes();
    //     this.favoriteRecipes = favoriteRecipes;
    //   } catch (error) {
    //     console.error('Error fetching favorite recipes:', error);
    //   }
    // },
    // methods: {
    //     async fetchFavoriteRecipes() {
    //         try {
    //         // Make a request to your backend API to fetch favorite recipes
    //         const response = await this.axios.get('/api/favoriteRecipes'); // Adjust the endpoint as needed
    //         // Assuming the response contains an array of favorite recipes
    //         return response.data.favoriteRecipes; // Update this according to your API response structure
    //         } catch (error) {
    //         console.error('Error fetching favorite recipes:', error);
    //         throw error;
    //         }
    //     }
    // }
  };
  </script>
  