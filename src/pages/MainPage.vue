<template>
  <div class="main-container">
    <h1><span class="underlined underline-mask">Explore,</span>
      <span class="underlined underline-clip">Create</span>
      <span class="underlined underline-overflow"> & Delicious Recipes</span>
    </h1><br><br>

    <!-- <h1>Explore, <span class="underlined underline-clip">Create</span>
    & Enjoy <span class="underlined underline-mask">Delicious</span>
    <span class="underlined underline-overflow">Recipes</span></h1> -->
    
    <div class="columns">
      <!-- Left Column: Random Recipes -->
      <div class="left-column">
        <RecipePreviewList class="RandomRecipes recipe-preview-list" :recipes="randomRecipes" title="Random Recipes"/>
        <b-button pill variant="outline-secondary" class="refresh-button" @click="fetchRandomRecipes">
          Show New Random Recipes
        </b-button>
      </div>
      <!-- Right Column: Last Viewed Recipes or Login Prompt -->
      <div class="right-column">
        <div v-if="$root.store.username">
          <!-- <RecipePreviewList class="LastWatchedRecipes" :recipes="lastRecipes" title="Last Watched Recipes"/> -->
          <div v-if="lastRecipes && lastRecipes.length === 0">
            <p>No recipes viewed recently</p>
          </div>
          <RecipePreviewList v-else :recipes="lastRecipes" title="Last Watched Recipes"/>
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
import axios  from "axios";
export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      randomRecipes: [],
      recipes: [],
      lastRecipes: []
    };
  },
  mounted() {
    //this.updateRecipes();
    // this.updateLastRecipes();

    this.fetchRandomRecipes();
    if (this.$root.store.username) {
      this.fetchLastViewedRecipes();
    }
  },
  methods: {
    async fetchRandomRecipes() {
      try {
        const response = await axios.get('http://localhost:3000/recipes/random');
        this.randomRecipes = response.data;
        console.log(this.randomRecipes);
      } catch (error) {
        console.error("Failed to fetch random recipes", error);
      }
    },
    async fetchLastViewedRecipes() {
      try {
        const response = await axios.get('http://localhost:3000/users/lastViewed');
        if (response.data && Array.isArray(response.data)) {
          this.lastRecipes = response.data;
        } else {
          console.error('No valid recipes returned');
        }
        console.log(this.lastRecipes);
      } catch (error) {
        console.error("Failed to fetch last viewed recipes", error);
      }
    },

    // -------------------------- check noam! -------------
  //   async updateRecipes() {
  //     try {
  //       // const response = await this.axios.get(
  //       //   this.$root.store.server_domain + "/recipes/random",
  //       // );

  //       const amountToFetch = 3; // 1 row of recipes
  //       const response = mockGetRecipesPreview(amountToFetch);
  //       this.recipes = response.data.recipes;
  //       const recipes = response.data.recipes;
  //       this.recipes = [];
  //       this.recipes.push(...recipes);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   async updateLastRecipes() {
  //     try {
  //       // const response = await this.axios.get(
  //       //   this.$root.store.server_domain + "/recipes/random",
  //       // );

  //       const amountToFetch = 3; // 1 row of recipes
  //       const response = mockGetRecipesPreview(amountToFetch);
  //       this.lastRecipes = response.data.recipes;
  //       const recipes = response.data.recipes;

  //       this.lastRecipes = [];
  //       this.lastRecipes.push(...recipes);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },

  //   // async fetchRandomRecipes() {
  //   //   try {
  //   //     const amountToFetch = 3; // Number of recipes to display
  //   //     const response = mockGetRecipesPreview(10); // Fetch a larger set of recipes
  //   //     this.recipes = this.getRandomSubset(response.data.recipes, amountToFetch);
  //   //     console.log(recipes)
  //   //   } catch (error) {
  //   //     console.error("Failed to fetch random recipes", error);
  //   //   }
  //   // },
  //   getRandomSubset(arr, n) {
  //     const result = new Array(n);
  //     let len = arr.length;
  //     const taken = new Array(len);

  //     if (n > len) {
  //       throw new RangeError("getRandomSubset: more elements taken than available");
  //     }

  //     while (n--) {
  //       const x = Math.floor(Math.random() * len);
  //       result[n] = arr[x in taken ? taken[x] : x];
  //       taken[x] = --len in taken ? taken[len] : len;
  //     }
  //     return result;
  //   },
  // },
  }
}
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


h2{
  color: white;
  font-size: 2rem;
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

.refresh-button, .login-button {
  font-size: 1.25rem;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  // background-color: #f44336;
  // border: none;
  background-color: darkgray;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

}

.refresh-button:hover {
  transform: scale(1.1); /* Correctly applies scaling */
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

h1 {
  font-size: clamp(3rem, 15vmin, 5rem);
  line-height: 1.2;
  white-space: nowrap; /* Prevent text from breaking into multiple lines */
  text-align: center;
  font-family: sans-serif;
  color: hsl(0 0% 98%);
}

.underlined {
/*   background: red; */
  position: relative;
  vertical-align: middle; /* Align text vertically in the middle */
  margin-right: 20px; /* Add space between the underlined words */
}

.underline-mask:after {
  content: '';
  position: absolute;
  top: 95%;
  width: 150%;
  aspect-ratio: 3 / 1;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: 6px solid hsl(280 80% 50%);
  /* Use a conic gradient mask to hide and show the bits you want */
  --spread: 140deg;
  --start: 290deg;
  mask: conic-gradient(from var(--start), white 0 var(--spread), transparent var(--spread));
}


.underline-overflow {
  display: inline-block;
  /* A little extra padding and overflow hidden   */
  overflow: hidden;
  padding-bottom: clamp(1rem, 2vmin, 2rem);
}
.underline-overflow:after {
  content: '';
  position: absolute;
  top: 90%;
  height: 150%;
  aspect-ratio: 7 / 2;
  left: 50%;
  transform: translate(-50%, -10%);
  border-radius: 50%;
  border: 6px solid hsl(10 80% 50%);
}

.underline-clip:after {
  content: '';
  position: absolute;
  top: 95%;
  width: 150%;
  aspect-ratio: 3 / 1;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: 6px solid hsl(130 80% 50%);
  /* Use a clip-path to hide and show the bits you want */
  clip-path: polygon(0 0, 50% 50%, 100% 0);
}
</style>
