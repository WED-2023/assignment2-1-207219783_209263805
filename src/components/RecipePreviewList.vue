<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <!-- <b-row> -->
      <b-col v-for="r in recipes" :key="r.id">
        <RecipeCarousel class="recipeCarousel" :recipe="r" />
        <!-- <RecipePreview class="recipePreview" :recipe="r" /> -->
      </b-col>
    <!-- </b-row> -->
  </b-container>
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
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 1; // 1 row of recipes
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
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>