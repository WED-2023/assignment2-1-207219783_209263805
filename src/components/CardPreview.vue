<template>
    <div class="card">
        <img :src="card.image" class="card-img-top clickable-image" @click="navigateToRecipe(card.id)">
        <div class="card-content">
        <h2 class="card-title">{{ card.title }}</h2>

        <div class="card-text">
            <p class="card-text"><small class="text-muted">⏱️ Prep time: {{ card.readyInMinutes }}</small></p>
            <p v-if="card.vegan" class="badge badge-success">🌿 Vegan</p>
            <p v-if="card.vegetarian" class="badge badge-warning">🥕 Vegetarian</p>
            <p v-if="card.glutenFree" class="badge badge-info">🚫 Gluten-Free</p>
            <p v-if="card.viewed" class="badge badge-secondary">👁️ Viewed</p>
        </div>
        
        <div class="card-actions">
          <button @click="toggleLike" :class="{'liked': isLiked}" class="like-button">
            {{ isLiked ? 'Unlike' : 'Like' }}
          </button>
          <button @click="addItem" class="add-button">Add</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    data() {
      return {
        isLiked: false,
        itemsAdded: 0
      };
    },
    methods: {
      toggleLike() {
        this.isLiked = !this.isLiked;
      },
      addItem() {
        this.itemsAdded += 1;
        alert('Item added. Total items: ' + this.itemsAdded);
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .card-text {
    margin-top: 0;
    margin-bottom: 15px;
    color: #666;
  }
  
  .card-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .like-button, .add-button {
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
  
  .like-button {
    background-color: #ff4081;
    color: #fff;
  }
  
  .liked {
    background-color: #bbb;
  }
  
  .add-button {
    background-color: #4caf50;
    color: #fff;
  }
  </style>
  