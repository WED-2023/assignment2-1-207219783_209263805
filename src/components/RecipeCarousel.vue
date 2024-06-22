<template>
    <div :id="carouselId" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        

        <div class="carousel-item" v-for="(card, index) in recipes" :class="{ active: index === 0 }" :key="card.id">
          <div class="cards-wrapper">
            <RecipePreview v-for="card in recipes" :key="card.id" :card="card"></RecipePreview>
          </div>
        </div>


      </div>
      <a class="carousel-control-prev" :href="'#' + carouselId" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" :href="'#' + carouselId" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- <div class="carousel-container">
    <div class="recipe-carousel">
      <RecipePreview v-for="recipe in recipes" :key="recipe.id" :card="recipe" />
    </div>
    <button class="scroll-button left" @click="scroll(-250)">‹</button>
    <button class="scroll-button right" @click="scroll(250)">›</button>
  </div> -->
  </template>
  
  <script>
  import RecipePreview from '@/components/RecipePreview.vue';
  import { mockGetRecipesPreview } from "../services/recipes.js";
  
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
        carouselItems: [],
        carouselId: 'carousel-' + Math.random().toString(36).substr(2, 9)

      }
    },
    async mounted() {

      // await this.loadRecipes();
    },
    methods: {
      // async loadRecipes() {
      //   const amountToFetch = 6; 
      //   const response = mockGetRecipesPreview(amountToFetch);
      //   const recipes = response.data.recipes;

      //   const itemsPerSlide = 3;  
      //   this.carouselItems = [];
      //   for (let i = 0; i < recipes.length; i += itemsPerSlide) {
      //     this.carouselItems.push({
      //       cards: recipes.slice(i, i + itemsPerSlide)
      //     });
      //   }
      // }
    }
  }
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

  /* .carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.recipe-carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.recipe-preview {
  scroll-snap-align: start;
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;
  cursor: pointer;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
} */

  </style>
  