<template>
    <div>
      <button @click="toggleLike" class="btn btn-outline-primary"  :class="{ 'liked': liked }">
        ❤️ {{ liked ? 'Unlike' : 'Like' }} {{ likes }}
      </button>
    </div>
</template>
  
<script>
export default {
  name: 'LikeButton',
  props: {
    recipeId: {
      type: Number,
      required: true
    },
    initialLikes: {
      type: Number,
      required: true
    },
    initiallyLiked: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      likes: this.initialLikes,
      liked: this.initiallyLiked
    };
  },
  methods: {
    toggleLike() {
      if (this.liked) {
        this.likes--;
        this.liked = false;
        localStorage.setItem(`liked_${this.recipeId}`, false);
      } else {
        this.likes++;
        this.liked = true;
        localStorage.setItem(`liked_${this.recipeId}`, true);
      }
    }
  },
  created() {
    const storedLiked = localStorage.getItem(`liked_${this.recipeId}`);
    if (storedLiked !== null) {
      this.liked = JSON.parse(storedLiked);
    }
  }
};
</script>

<style scoped>
.like-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.like-icon {
  font-size: 1.5em;
}

.like-icon.liked {
  color: red; 
}

.like-icon i {
  margin-right: 5px;
}

.liked {
  background-color: #1d612d;
  color: white;
}
</style>