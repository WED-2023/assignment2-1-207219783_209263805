<template>
  <div class="card">
    <img :src="card.image" class="card-img-top clickable-image" :alt="card.title" @click="navigateToRecipe(card.id)">
    <div class="card-body">
      <h5 class="card-title" style="font-weight: bold;">{{ card.title }}</h5>
      <p class="card-text">{{ card.text }}</p>
      <p class="card-text"><small class="text-muted">⏱️ Prep time: {{ card.prepTime }}</small></p>
      <p class="card-text"><small class="text-muted">Likes: {{ card.likes }}</small></p>
      <p v-if="card.isVegan" class="badge badge-success">🌿 Vegan</p>
      <p v-if="card.isVegetarian" class="badge badge-warning">🥕 Vegetarian</p>
      <p v-if="card.isGlutenFree" class="badge badge-info">🚫 Gluten-Free</p>
      <p v-if="card.viewed" class="badge badge-secondary">👁️ Viewed</p>
      <LikeButton :recipeId="card.id" :initialLikes="card.likes" :initiallyLiked="card.liked"></LikeButton>
      <FavoriteButton :recipeId="card.id" :initiallyFavorited="isFavorite" @updateFavorite="updateFavorite"></FavoriteButton>

      
      <!-- <button @click="addToFavorites(card.id)" class="btn btn-outline-primary" :class="{ 'btn-success': card.isFavorite }">
        ⭐ {{ card.isFavorite ? 'Added to Favorites' : 'Add to Favorites' }}
      </button> -->
    </div>
  </div>
</template>

<script>
import LikeButton from '@/components/LikeButton.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
  name: 'RecipePreview',
  components: {
    LikeButton,
    FavoriteButton
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateToRecipe(recipeId) {
      this.card.viewed = true;
      localStorage.setItem(`viewed_${recipeId}`, true);
      this.$router.push({ name: 'RecipeViewPage', params: { recipeId } });
    },
    updateFavorite(recipeId, isFavorite) {
      localStorage.setItem(`favorite_${recipeId}`, isFavorite);
    }
  }
}
</script>

<style scoped>
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  flex: 1 0 calc(33.33% - 1em);
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 0;
}
.clickable-image {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.clickable-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>