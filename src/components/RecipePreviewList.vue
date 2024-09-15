<template>
  <div class="">
    <h3 class="title">
      {{ title }}
      <slot></slot>
    </h3>
        <RecipeCarousel class="recipe-preview-list" :recipes="recipes" />

  </div>
</template>
<script>

import RecipeCarousel from "./RecipeCarousel.vue"
import { mockGetRecipesPreview } from "../services/recipes.js";
export default {
  name: "RecipePreviewList",
  components: {
    RecipeCarousel
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipes:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // recipes: []
    };
  },
  mounted() {
    // this.updateRecipes();
    // this.fetchRandomRecipes();
  },
  
  methods: {
    async updateRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // 1 row of recipes
        const response = mockGetRecipesPreview(amountToFetch);
        this.recipes = response.data.recipes;


        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
  

    async fetchRandomRecipes() {
      try {
        const amountToFetch = 1; // Number of recipes to display
        const response = mockGetRecipesPreview(3); // Fetch a larger set of recipes

        this.recipes = this.getRandomSubset(response.data.recipes, amountToFetch);
        console.log(recipes)
      } catch (error) {
        console.error("Failed to fetch random recipes", error);
      }
    },
    getRandomSubset(arr, n) {
      const result = new Array(n);
      let len = arr.length;
      const taken = new Array(len);

      if (n > len) {
        throw new RangeError("getRandomSubset: more elements taken than available");
      }

      while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      console.log(result);
      return result;
    },
  },

};

</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

// .card{
//       backdrop-filter: blur(14px) saturate(179%); 
//       -webkit-backdrop-filter: blur(14px) saturate(179%); 
//       background-color: rgba(239,247,246, 0.75); 
//       border-radius:  12px; 
//       border: 1px solid rgba(209, 213, 219, 0.18); 
//       padding: 20px;
//       }

.title{
  color: azure;
}
</style>