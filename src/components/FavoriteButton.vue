<template>
    <button @click="toggleFavorite" class="btn btn-outline-primary" :class="{ 'btn-success': isFavorite }">
      ⭐ {{ isFavorite ? 'Added to Favorites' : 'Add to Favorites' }}
    </button>
  </template>
  
  <script>
  import { mockAddFavorite } from "../services/user.js";

  export default {
    name: 'FavoriteButton',
    props: {
      recipeId: {
        type: Number,
        required: true
      },
      initiallyFavorited: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isFavorite: this.initiallyFavorited
      };
    },
    methods: {
      async toggleFavorite() {
        this.isFavorite = !this.isFavorite;
        try {
          const response = await mockAddFavorite(this.recipeId);
          if (response.status === 200 && response.response.data.success) {
            localStorage.setItem(`favorite_${this.recipeId}`, JSON.stringify(this.isFavorite));
            this.$emit('updateFavorite', this.recipeId, this.isFavorite);
          } else {
            console.error('Failed to update favorite status');
          }
        } catch (error) {
          // Handle the exception case
          console.error('An error occurred while updating favorite status:', error);
          this.isFavorite = !this.isFavorite; // Revert the favorite status on error
        }
      }
    },
    created() {
      const storedFavorite = localStorage.getItem(`favorite_${this.recipeId}`);
      if (storedFavorite !== null) {
        this.isFavorite = JSON.parse(storedFavorite);
      }
    }
  };
  </script>
  
  <style scoped>
  .btn-success {
    background-color: #1d612d;
    color: white;
  }
  </style>
  