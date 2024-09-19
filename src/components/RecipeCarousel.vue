<template>
    <div :id="carouselId" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        

        <div class="carousel-item" v-for="(recipe, index) in recipes" :class="{ active: index === 0 }" :key="recipe.recipe_id">
          <div class="cards-wrapper">
            <RecipePreview :card="recipe" :isMyRecipe="isMyRecipe" v-for="recipe in recipes" :key="recipe.recipe_id" />
            <!-- <RecipePreview :card="recipe" :isMyRecipe="true"/> -->
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
      },
      isMyRecipe: {
        type: Boolean,
        required: false,
        default: false
    }
    },
    data() {
      return {
        carouselItems: [],
        carouselId: 'carousel-' + Math.random().toString(36).substr(2, 9)
      };
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
  