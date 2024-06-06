<template>
  <div id="app" class="backgroundApp">
    <div id="nav">
      <div class="nav-links"> 
        <router-link :to="{ name: 'main' }">All Recipes</router-link>
        <router-link :to="{ name: 'search' }">Search</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>

        <span v-if="!$root.store.username">
          Hello Guest
          <router-link :to="{ name: 'register' }">Register</router-link>
          <router-link :to="{ name: 'login' }" class="login">Login</router-link>
        </span>
        <span v-else style="color: gray; align-items: center;">
          <router-link :to="{ name: 'newRecipe' }" class="create-new-link">Create New Recipe</router-link>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Personal Area</a>

            <div class="dropdown-content">
              <router-link :to="{ name: 'favoriteRecipes' }">My favorite recipes</router-link>
              <router-link :to="{ name: 'myRecipes' }">My recipes</router-link>
              <router-link :to="{ name: 'familyRecipes' }">My family recipes</router-link>
            </div>
          </div>
          Hello {{ $root.store.username }}
          <button @click="Logout" class="logout"> 
            <a class="nav-link active" aria-current="page" href="#"> Logout</a>
          </button>
        </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
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
  // font-weight: bold;
}

#nav a{
  color: white;
  margin: 0 25px
}

.nav-links router-link {
  padding: 5px; /* Adjust the padding around each navigation link */
}

.logout {
  background-color: rgb(126, 128, 123);
  border-radius: 100px;
}

.login {
  background-color: rgb(126, 128, 123);
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
