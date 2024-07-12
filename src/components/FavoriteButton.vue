<template>
    <!-- <button @click="toggleFavorite" class="btn btn-outline-primary" :class="{ 'btn-success': isFavorite }">
      ⭐ {{ isFavorite ? 'Added to Favorites' : 'Add to Favorites' }}
    </button> -->
    <div>
    <button @click="toggleFavorite" class="btn" :class="{'btn-success': isFavorite}">
    <i class="material-icons">{{ isFavorite ? 'star' : 'star_border' }}</i>
    <span class="like-overlay"></span>
    </button>

    <span class="fav-text">{{ isFavorite ? 'Added to Favorites' : 'Add to Favorites' }}</span>
    
  </div>
  </template>
  
  <script>
  import { mockAddFavorite } from "../services/user.js";
  import axios from 'axios';

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
      if (!this.isFavorite) {
        try {
          const response = await axios.post('http://localhost:3000/users/favorites', { recipeId: this.recipeId }, { withCredentials: true });
          this.isFavorite = true; // Update favorite status
          localStorage.setItem(`favorite_${this.recipeId}`, JSON.stringify(this.isFavorite)); // Update local storage
          this.$toast.success(response.data.message || "The Recipe successfully saved as favorite", {
            timeout: 5000,
          });
        } catch (error) {
          console.error("Error marking recipe as favorite:", error);
          this.$toast.error("An error occurred while saving the recipe as favorite.", {
            timeout: 5000,
          });
        }
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
  /* .btn-success {
    background-color: #1d612d;
    color: white;
  } */

  .btn {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  
}

.btn-success {
  background-color: #f3f30a; /* A more neutral success color */
  color: white;
}


.fav-text{
  text-align: center; /* Center the text below the button */
  color: #666; /* Optional: set text color */
  padding-left: 20px;
}


.like-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ff4f8f;
  transform: scale(0);
  transition: transform .4s;
  z-index: 0;
}
  </style>
  