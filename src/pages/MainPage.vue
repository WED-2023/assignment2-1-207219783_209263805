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
        <RecipePreviewList class="RandomRecipes recipe-preview-list" />
        <b-button pill variant="outline-secondary" class="refresh-button" @click="fetchRandomRecipes">
          Show New Random Recipes
        </b-button>
      </div>
      <!-- Right Column: Last Viewed Recipes or Login Prompt -->
      <div class="right-column">
        <h2>Last Watched Recipes</h2>
        <div v-if="$root.store.username">
          <RecipePreviewList class="LastWatchedRecipes" />
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
export default {
  components: {
    RecipePreviewList
  }
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