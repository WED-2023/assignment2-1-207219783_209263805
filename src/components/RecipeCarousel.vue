<template>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in carouselItems" :class="{ active: index === 0 }" :key="index">
          <div class="cards-wrapper">
            <RecipePreview v-for="(card, cardIndex) in item.cards" :key="cardIndex" :card="card"></RecipePreview>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </template>
  
  <script>
  import pastaImage from '@/assets/pasta.jpg';
  import ravioliImage from '@/assets/ravioli.jpg';
  import pizzaImage from '@/assets/pizza.jpg';
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
        // carouselItems: [
        //   {
        //     cards: [
        //       {
        //         id: 1,
        //         image: pastaImage,
        //         title: 'pasta',
        //         text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        //         prepTime: '30 mins',
        //         likes: 100,
        //         isVegan: true,
        //         isVegetarian: true,
        //         isGlutenFree: false,
        //         viewed: false,
        //         isFavorite: false,
        //         liked: false
        //       },
        //       {
        //         id: 1001,
        //         image: ravioliImage,
        //         title: 'ravioli',
        //         text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        //         prepTime: '45 mins',
        //         likes: 200,
        //         isVegan: false,
        //         isVegetarian: true,
        //         isGlutenFree: true,
        //         viewed: false,
        //         isFavorite: false,
        //         liked: false
        //       },
        //       {
        //         id: 3,
        //         image: pizzaImage,
        //         title: 'pizza',
        //         text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        //         prepTime: '20 mins',
        //         likes: 150,
        //         isVegan: false,
        //         isVegetarian: false,
        //         isGlutenFree: false,
        //         viewed: false,
        //         isFavorite: false,
        //         liked: false
        //       },
        //     ]
        //   },
        //   {
        //     cards: [
        //       {
        //         id: 4,
        //         image: pastaImage,
        //         title: 'Salad',
        //         text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        //         prepTime: '15 mins',
        //         likes: 120,
        //         isVegan: true,
        //         isVegetarian: true,
        //         isGlutenFree: true,
        //         viewed: false,
        //         isFavorite: false,
        //         liked: false
        //       },
        //       {
        //         id: 5,
        //         image: pizzaImage,
        //         title: 'Soup',
        //         text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        //         prepTime: '40 mins',
        //         likes: 180,
        //         isVegan: true,
        //         isVegetarian: true,
        //         isGlutenFree: true,
        //         viewed: false,
        //         isFavorite: false,
        //         liked: false
        //       },
        //       {
        //         id: 6,
        //         image: pizzaImage,
        //         title: 'Soup',
        //         text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        //         prepTime: '40 mins',
        //         likes: 180,
        //         isVegan: true,
        //         isVegetarian: true,
        //         isGlutenFree: true,
        //         viewed: false,
        //         isFavorite: false,
        //         liked: false
        //       }
        //     ]
        //   }
        // ]
        carouselItems: []
      }
    },
    async mounted() {
      await this.loadRecipes();
    },
    methods: {
      async loadRecipes() {
        const amountToFetch = 6; 
        const response = mockGetRecipesPreview(amountToFetch);
        const recipes = response.data.recipes;

        const itemsPerSlide = 3;  
        this.carouselItems = [];
        for (let i = 0; i < recipes.length; i += itemsPerSlide) {
          this.carouselItems.push({
            cards: recipes.slice(i, i + itemsPerSlide)
          });
        }
      }
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
  </style>
  