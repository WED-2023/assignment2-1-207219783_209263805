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
        default: true
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
        localStorage.setItem(`favorite_${this.recipeId}`, JSON.stringify(this.isFavorite));
        this.$emit('updateFavorite', this.recipeId, this.isFavorite);
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
  