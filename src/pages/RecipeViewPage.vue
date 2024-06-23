<template>
  <div class="container d-flex justify-content-center">
    <div v-if="recipe" class="card">
      <div class="card-header recipe-header text-center">
        <h1 class="card-title">{{ recipe.title }}</h1>
         <b>Recipe ID : {{ recipe.id }}</b>
      </div>
      
      <div class="card-body recipe-body">
        <img :src="recipe.image" class="center" />
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div><b>Ready in {{ recipe.readyInMinutes }} minutes ⏱️</b></div>
              <div><b>Likes: {{ recipe.aggregateLikes }} likes ❤️</b></div>
              <p v-if="recipe.vegan" class="badge badge-success">Vegan 🌿</p>
              <p v-if="recipe.vegetarian" class="badge badge-warning">Vegetarian 🥕</p>
              <p v-if="recipe.glutenFree" class="badge badge-info">Gluten-Free 🚫</p>
            </div>
            <b>Ingredients:  ({{ recipe.servings }} servings)</b>
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <b>Instructions:</b>
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
        <div class="button-container">
          <b-button variant="primary" :to="{ name: 'main' }">Back to Home Page</b-button>
          <FavoriteButton></FavoriteButton>
        </div>
        
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>

  </div>
</template>


<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import FavoriteButton from '@/components/FavoriteButton.vue';
export default {
  name: 'RecipeViewPage',
  components: {
    FavoriteButton
  },
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      // let response;
      // response = this.$route.params.response;
      let  response = mockGetRecipeFullDetails(this.$route.params.recipeId);
      if (!response.data.recipe) {
        this.$router.replace("/NotFound");
        return;
      }
      // try {
      //   response = await this.axios.get(
      //     this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
      //     {
      //       withCredentials: true
      //     }
      //   );

      //   response = mockGetRecipeFullDetails(this.$route.params.recipeId);

      //   // console.log("response.status", response.status);
      //   if (response.status !== 200) this.$router.replace("/NotFound");
      // } catch (error) {
      //   console.log("error.response.status", error.response.status);
      //   this.$router.replace("/NotFound");
      //   return;
      // }

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        vegetarian,
        vegan,
        glutenFree,
        servings,
        image,
        title,
        id
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        vegetarian,
        vegan,
        glutenFree,
        servings,
        image,
        title,
        id
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
      this.$router.replace("/NotFound");
    }
  }
};
</script>

<style scoped>
.card {
  margin-top: 130px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  width: 70%;
}
/* .card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 15px;
} */
.card-title {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  padding: 15px;
}
.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: auto;
}
/* .card-body {
  padding: 15px;
} */
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
/* Button Container Styling */
.button-container {
  display: flex;
  align-items: center; /* Vertically centers the buttons */
  width: 100%;
  margin-top: 10px; /* Add some spacing above the buttons */
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 13px 18px; 
  font-size: 1.25rem; 
}
</style>
