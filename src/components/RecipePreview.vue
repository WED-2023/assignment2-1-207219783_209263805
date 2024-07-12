<template>
  <div class="card">
    <!-- <img :src="`${require('@/assets/pizza.jpg')}`"> -->
    <img :src="card.image" class="card-img-top clickable-image" @click="navigateToRecipe(card.id)">
    <div class="card-body">
      <h5 class="card-title" style="font-weight: bold;">{{ card.title }}</h5>
      <!-- <p class="card-text">{{ card.text }}</p> -->
      <p class="card-text"><small class="text-muted">⏱️ Prep time: {{ card.readyInMinutes }}</small></p>
      <p v-if="card.vegan" class="badge badge-success">🌿 Vegan</p>
      <p v-if="card.vegetarian" class="badge badge-warning">🥕 Vegetarian</p>
      <p v-if="card.glutenFree" class="badge badge-info">🚫 Gluten-Free</p>
      <p v-if="card.viewed" class="badge badge-secondary">👁️ Viewed</p>
    </div>
    <div class="card-footer bg-white">
      <LikeButton :recipeId="card.id" :initialLikes="card.aggregateLikes" :initiallyLiked="card.aggregateLikes"></LikeButton> <br>
      <FavoriteButton :recipeId="card.id" :initiallyFavorited="isFavorite(card.recipeId)"></FavoriteButton>
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
    isFavorite(recipeId) {
      return JSON.parse(localStorage.getItem(`favorite_${recipeId}`)) || false;
    },
    // updateFavorite(recipeId, isFavorite) {
    //   localStorage.setItem(`favorite_${recipeId}`, isFavorite);
    // },
    
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
  border-radius: 70px;
}
.clickable-image {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.clickable-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
/* .card-footer{ */
  /* display: flex;
  flex-direction: row;
  padding: 20px; */
/* } */
</style>