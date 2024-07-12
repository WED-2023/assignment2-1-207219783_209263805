<template>
    <div class="main-container">
      <div class="columns">
        <div class="left-column">
          <br>
          <h2>My Recipes</h2>
          <RecipePreviewList class="Recipes recipe-preview-list" :recipes="recipes" />
        </div>
      </div>
    </div>
</template>
  
  
  
  
<script>
import axios from "axios";
import RecipePreviewList from "../components/RecipePreviewList.vue";

export default {
    components: {
        RecipePreviewList
    },
    data() {
        return {
        recipes: [], 
        };
    },
    mounted() {
        this.fetchRecipes();
    },
    methods: {
        async fetchRecipes() {
        try {
            const response = await axios.get('http://localhost:3000/users/myRecipes');
            this.recipes = response.data; // Store response data in recipes
            console.log("Recipes fetched:", this.recipes);
        } catch (error) {
            console.error("Failed to fetch recipes:", error);
        }
        },
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
  
  .refresh-button, .login-button {
    font-size: 1.25rem;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    // background-color: #f44336;
    // border: none;
    background-color: darkgray;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  
  }
  
  .refresh-button:hover {
    transform: scale(1.1); /* Correctly applies scaling */
    transition: transform 0.3s ease; /* Smoothly transitions the transform property */
  }
  .login-button:hover {
    background-color: #8d0815;
  
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
  /*   background: red; */
    position: relative;
  }
  
  .underline-mask:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid hsl(280 80% 50%);
    /* Use a conic gradient mask to hide and show the bits you want */
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(from var(--start), white 0 var(--spread), transparent var(--spread));
  }
  
  
  .underline-overflow {
    display: inline-block;
    /* A little extra padding and overflow hidden   */
    overflow: hidden;
    padding-bottom: clamp(1rem, 2vmin, 2rem);
  }
  .underline-overflow:after {
    content: '';
    position: absolute;
    top: 100%;
    height: 150%;
    aspect-ratio: 2.5 / 1;
    left: 50%;
    transform: translate(-50%, -10%);
    border-radius: 50%;
    border: 6px solid hsl(10 80% 50%);
  }
  
  .underline-clip:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid hsl(130 80% 50%);
    /* Use a clip-path to hide and show the bits you want */
    clip-path: polygon(0 0, 50% 50%, 100% 0);
  }
  </style>