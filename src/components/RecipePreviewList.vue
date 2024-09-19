<template>
  <div class="">
    <h3 class="title">
      {{ title }}
      <slot></slot>
    </h3>
        <RecipeCarousel class="recipe-preview-list" :recipes="recipes" :isMyRecipe="isMyRecipe" />

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
      required: false
    },
    recipes:{
      type: Array,
      required: true
    },
    isMyRecipe: {
      type: Boolean,
      required: false,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}


.title{
  color: azure;
}
</style>