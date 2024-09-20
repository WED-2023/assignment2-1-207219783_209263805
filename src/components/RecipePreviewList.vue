<template>
  <div class="">
    <h3 class="title">
      {{ title }}
      <slot></slot>
    </h3>
        <RecipeCarousel class="recipe-preview-list" :recipes="recipes"/>

  </div>
</template>
<script>

import RecipeCarousel from "./RecipeCarousel.vue"
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