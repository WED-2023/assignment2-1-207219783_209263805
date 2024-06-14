<template>

  <div class="container">
    <h1 class="title">Search Page</h1>
    <form @submit.prevent="fetchRecipes" class="search-form">
      <input v-model="searchQuery" type="text" placeholder="Search recipes..." class="search-input">
      <select v-model="selectedCount" class="result-count">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <button type="submit" class="search-button">Search</button>
    </form>

    <!-- Sorting Options -->
    <div class="sorting-options">
      Sort by:
      <button @click="sortKey = 'readyInMinutes'">Preparation Time</button>
      <button @click="sortKey = 'popularity'">Popularity</button>
    </div>

    <div v-if="recipes.length" class="recipes-grid">
      <div v-for="recipe in sortedRecipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="recipe image" @click="goToRecipePage(recipe.id)" class="recipe-image">
        <div class="recipe-info">
          <h3>{{ recipe.title }}</h3>
          <p>{{ recipe.readyInMinutes }} mins | ★ {{ recipe.aggregateLikes }}</p>
          <p v-if="recipe.instructions">{{ recipe.instructions.substring(0, 100) }}...</p>
          <p v-else>No instructions available.</p>
        </div>
      </div>
    </div>
    <p v-else>No recipes found.</p>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'SearchPage',
  data() {
    return {
      searchQuery: '',
      recipes: [],
      selectedCount: '5',
      sortKey: 'popularity', // Default sorting key
    };
  },
  computed: {
    sortedRecipes() {
      return this.recipes.slice().sort((a, b) => {
        if (this.sortKey === 'popularity') {
          return b.aggregateLikes - a.aggregateLikes;
        }
        return a.readyInMinutes - b.readyInMinutes;
      });
    }
  },
  methods: {
    fetchRecipes() {
  const apiKey = '286e5a606e124fbe8cf4e627c135ab92'; // Use your actual API key
  // Enabling addRecipeInformation and possibly addRecipeInstructions if necessary
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${this.searchQuery}&number=${this.selectedCount}&addRecipeInformation=true&addRecipeInstructions=true`;
  axios.get(url)
    .then(response => {
      this.recipes = response.data.results.map(recipe => ({
        ...recipe,
        readyInMinutes: recipe.readyInMinutes || 'N/A',
        aggregateLikes: recipe.aggregateLikes || 'N/A',
        instructions: recipe.instructions || 'No instructions provided.'
      }));
      console.log(this.recipes); // Logging to check the structure
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
}


  },
  mounted() {
    if (localStorage.getItem('lastSearch')) {
      this.searchQuery = localStorage.getItem('lastSearch');
      this.fetchRecipes();
    }
  }
}
</script>
<style scoped>
/* Container and other styles... */

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  position: relative; /* Ensure container is positioned contextually */
  z-index: 1; /* Bring container to front */
}

.search-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 1000; /* Ensure form stays on top */
}
.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  perspective: 1000px; /* Needed for 3D transformations */
}

.recipe-card {
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  transform: translateZ(0); /* GPU acceleration for smoother animations */
  transition: transform 0.3s ease-out;
}

.recipe-card:hover {
  transform: scale(1.05) rotateZ(-3deg); /* Slight zoom and 3D rotation effect */
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.recipe-image:hover {
  transform: scale(1.1); /* Slightly enlarge the image on hover */
}

.recipe-info {
  padding: 10px;
  text-align: left;
  transition: background-color 0.3s linear;
}

.recipe-info:hover {
  background-color: #eaeaea; /* Light background transition on hover */
}
</style>
