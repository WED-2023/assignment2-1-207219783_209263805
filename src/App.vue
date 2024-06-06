<template>
  <div id="app" class="backgroundApp">
    <div id="nav">
      <div class="nav-links"> 
        <router-link :to="{ name: 'main' }">All Recipes</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>        
        
      </div>
      <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" >Search</b-button>
      </b-nav-form>
      
        <span v-if="!$root.store.username" style="color: white;">
          Hello Guest !
          <router-link :to="{ name: 'register' }" class="register">
            <b-button pill variant="outline-secondary" style="font-size: 1.25rem; padding: 10px 20px;">Register</b-button>
          </router-link>
          <router-link :to="{ name: 'login' }" class="login">
            <b-button pill variant="outline-secondary" style="font-size: 1.25rem; padding: 10px 20px;">Login</b-button>
          </router-link>
        </span>
        <span v-else style="color: gray; align-items: center;">
          <router-link :to="{ name: 'newRecipe' }" class="create-new-link" style="font-size: 1.25rem; padding: 10px 0px;">Create New Recipe</router-link>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style="font-size: 1.25rem; padding: 10px 0px;">Personal Area</a>

            <div class="dropdown-content">
              <router-link :to="{ name: 'favoriteRecipes' }">My favorite recipes</router-link>
              <router-link :to="{ name: 'myRecipes' }">My recipes</router-link>
              <router-link :to="{ name: 'familyRecipes' }">My family recipes</router-link>
            </div>
          </div>
          Hello {{ $root.store.username }}  !   
          <b-button variant="outline-secondary" style="font-size: 1.20rem; padding: 10px 20px;" @click="Logout">Logout</b-button>
        </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue'
export default {
  name: "App",
  components: {
    MainPage
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    navigateToSearch() {
      this.$router.push({ name: 'search', query: { q: this.searchQuery } });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

.backgroundApp {
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
#nav {
  position: absolute;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(50px) brightness(90%);
}

#nav a{
  color: white;
  margin: 0 30px;
  font-size: 1.80rem; 

}

.nav-links router-link {
  padding: 5px; 
  align-items: center;
}


.custom-button .btn {
  font-size: 1.80rem; /* Increase font size */
}


.dropdown {
  display: inline-block;
  position: relative;
}

.dropbtn {
  background-color: #2c3e50;
  color: white;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2c3e50;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #2c3e50;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  font-size: 1.25rem;
  padding: 10px 20px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown:hover .dropdown-content {
  display: block;
}



</style>