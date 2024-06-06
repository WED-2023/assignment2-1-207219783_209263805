<template>
    <button @click="toggleFavorite" class="btn btn-outline-primary" :class="{ 'btn-success': isFavorite }">
      ⭐ {{ isFavorite ? 'Added to Favorites' : 'Add to Favorites' }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'FavoriteButton',
    props: {
      recipeId: {
        type: Number,
        required: true
      },
      initiallyFavorited: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isFavorite: this.initiallyFavorited
      };
    },
    methods: {
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
        this.$emit('updateFavorite', this.recipeId, this.isFavorite);
      }
    }
  };
  </script>
  
  <style scoped>
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  </style>
  