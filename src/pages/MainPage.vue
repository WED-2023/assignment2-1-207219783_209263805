<!-- <template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
    <router-link v-if="!$root.store.username" to="/login">
      <b-button pill variant="outline-secondary" class="login-button">You need to Login to view the last viewed recipes</b-button>
    </router-link>
    <RecipePreviewList
      title="Last Viewed Recipes"
      style="color: white"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true,
      }"
      disabled
    ></RecipePreviewList>
    <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
    </div>
  </div> 
</template> -->

<template>
  <div class="main-container">
    <h1 class="title">Main Page</h1>
    <div class="columns">
      <!-- Left Column: Random Recipes -->
      <div class="left-column">
        <h2>Explore This Recipe</h2>
        <RecipePreviewList class="RandomRecipes recipe-preview-list" :recipes="recipes" />
        <!-- <b-button pill variant="outline-secondary" class="refresh-button" @click="fetchRandomRecipes">
          Show New Random Recipes
        </b-button> -->
        <b-button pill variant="outline-secondary" class="refresh-button" @click="fetchRandomRecipes">
          Show New Random Recipes
        </b-button>
      </div>
      <!-- Right Column: Last Viewed Recipes or Login Prompt -->
      <div class="right-column">
        <h2>Last Watched Recipes</h2>
        <div v-if="$root.store.username">
          <RecipePreviewList class="LastWatchedRecipes" :recipes="lastRecipes"/>
        </div>
        <div v-else>
          <router-link to="/login">
            <b-button pill variant="outline-secondary" class="login-button">
              You need to Login to view the last viewed recipes
            </b-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      recipes: [],
      lastRecipes: []
    };
  },
  mounted() {
    this.updateRecipes();
    this.updateLastRecipes();
    // this.fetchRandomRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // 1 row of recipes
        const response = mockGetRecipesPreview(amountToFetch);
        this.recipes = response.data.recipes;
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async updateLastRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // 1 row of recipes
        const response = mockGetRecipesPreview(amountToFetch);
        this.lastRecipes = response.data.recipes;
        const recipes = response.data.recipes;

        this.lastRecipes = [];
        this.lastRecipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchRandomRecipes() {
      try {
        const amountToFetch = 3; // Number of recipes to display
        const response = mockGetRecipesPreview(3); // Fetch a larger set of recipes
        this.recipes = this.getRandomSubset(response.data.recipes, amountToFetch);
        console.log(recipes)
      } catch (error) {
        console.error("Failed to fetch random recipes", error);
      }
    },
    getRandomSubset(arr, n) {
      const result = new Array(n);
      let len = arr.length;
      const taken = new Array(len);

      if (n > len) {
        throw new RangeError("getRandomSubset: more elements taken than available");
      }

      while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }

      return result;
    },
  },

};
</script>

<style lang="scss" scoped>

.main-container {
  // background-color: aliceblue;
  min-height: 100vh; /* Ensure it takes at least the full viewport height */
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px; /* Add top padding to account for navbar height */
  color: #333; /* Default text color for the container */
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #222; /* Darker text color for the title */
  font-weight: bold; /* Bold the title */
  text-align: center;
}

.columns {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.left-column, .right-column {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}

.RandomRecipes, .LastWatchedRecipes {
  width: 100%;
  
}

.refresh-button, .login-button {
  font-size: 1.25rem;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  // background-color: #f44336;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.refresh-button:hover {
  transform: scale(1.2); /* Correctly applies scaling */
  transition: transform 0.3s ease; /* Smoothly transitions the transform property */
}
.login-button:hover {
  background-color: #8d0815;

}

.blur {
  -webkit-filter: blur(5px);
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>


<!-- <style lang="scss" scoped>



.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 20px; /* Add top padding to account for navbar height */
  position: relative;
  text-align: center;
  color: #333; /* Default text color for the container */
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #222; /* Darker text color for the title */
  font-weight: bold; /* Bold the title */
}

.RandomRecipes {
  margin: 20px 0;
}

.blur {
  -webkit-filter: blur(5px);
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.login-button {
  font-size: 1.25rem;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: #f44336;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.login-button:hover {
  background-color: #c3372d;
}
</style> -->