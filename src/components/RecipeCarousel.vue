<template>
  <div :id="carouselId" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(chunk, index) in chunkedRecipes"
        :class="{ active: index === 0 }"
        :key="index"
      >
        <div class="cards-wrapper">
          <RecipePreview v-for="card in chunk" :key="card.id" :card="card" />
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      :href="'#' + carouselId"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      :href="'#' + carouselId"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import RecipePreview from '@/components/RecipePreview.vue';

export default {
  name: 'RecipeCarousel',
  components: {
    RecipePreview
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      carouselId: 'carousel-' + Math.random().toString(36).substr(2, 9)
    };
  },
  computed: {
    chunkedRecipes() {
      const chunkSize = 3; // Adjust the number of items per slide here
      const chunks = [];
      for (let i = 0; i < this.recipes.length; i += chunkSize) {
        chunks.push(this.recipes.slice(i, i + chunkSize));
      }
      return chunks;
    }
  }
};
</script>

<style scoped>
.cards-wrapper {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel {
  z-index: 1; 
}
</style>
