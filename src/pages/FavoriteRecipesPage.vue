<template>
  <div class="main-container">
    <div class="columns">
      <div class="left-column">
        <br>
        <span class="underlined underline-clip">My Favorites Recipes</span>
        <!-- <h2>My Favorites Recipes</h2> -->
        <div v-if="favoriteRecipes.length === 0">
          <p>No favorite recipes yet.</p>
        </div>
        <div v-else>
          <RecipePreviewList class="Recipes recipe-preview-list" :recipes="favoriteRecipes" title="Favorite Recipes"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from '@/components/RecipePreviewList.vue'; 
import axios from 'axios';

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      favoriteRecipes: []
    };
  },
  async mounted() {
    await this.fetchFavoriteRecipes();
  },
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

<style lang="scss" scoped>

  .main-container {
    // background-color: aliceblue;
    min-height: 100vh; /* Ensure it takes at least the full viewport height */
    min-width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px 20px; /* Add top padding to account for navbar height */
    color: #333; /* Default text color for the container */
  }
  
  
  h2{
    color: white;
    font-size: 2rem;
  }
  
  .columns {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
  }
  
  .left-column, .right-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  
  .Recipes {
    width: 100%;
    
  }
  
  .blur {
    -webkit-filter: blur(5px);
    filter: blur(2px);
  }
  
  ::v-deep .blur .recipe-preview {
    pointer-events: none;
    cursor: default;
  }
  
  h1 {
    font-size: clamp(3rem, 15vmin, 5rem);
    font-family: sans-serif;
    color: hsl(0 0% 98%);
  }
  
  .underlined {
    position: relative;
    font-size: 2.5rem;  /* Adjust this value as needed */
    color: white;       /* Ensures the text color is white */
    margin-bottom: 30px;
  }
  
  .underline-clip:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 200%;
    aspect-ratio: 4 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid hsl(130 80% 50%);
    clip-path: polygon(0 0, 50% 50%, 100% 0);
  }
  </style>
  