<template>
  <div>
    <!-- <div>
      <button @click="toggleLike" class="btn "  :class="{ 'liked': liked }">
        ❤️ {{ liked ? 'Unlike' : 'Like' }} {{ likes }}
      </button>
    </div> -->
    <div class="wrapper">
      <button @click="toggleLike" class="like-button" :class="{ 'is-active': liked }">
        <span class="material-icons not-liked" v-show="!liked">favorite_border</span>
        <span class="material-icons is-liked" v-show="liked">favorite</span>
        <span class="like-overlay"></span>
      </button>
    </div>
    <span class="likes-text">{{ likes }} likes</span>
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
      type: Number,
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

.wrapper {
  padding-top: 50px;

}
.likes-text{
  margin-left: 55px;
}

.like-button {
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

.material-icons {
  color: white;
  position: relative;
  z-index: 1;
}

.is-active .like-overlay {
  transform: scale(1);
}

.bouncy {
  animation: bouncy 0.6s both;
}

@keyframes bouncy {
  from, to { transform: scale(1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05);}
}
</style>