<template>
  <div class="user-controls">
    <span v-if="!$root.store.username" class="guest-controls">
      <router-link :to="{ name: 'register' }">
        <b-button pill variant="outline-secondary" class="nav-button">Register</b-button>
      </router-link>
      <router-link :to="{ name: 'login' }">
        <b-button pill variant="outline-secondary" class="nav-button">Login</b-button>
      </router-link>
    </span>
    <span v-else class="user-logged-in">
      <router-link :to="{ name: 'newRecipe' }" class="nav-button">Create New Recipe</router-link>
      <div class="dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button">Personal Area</a>
        <div class="dropdown-content">
          <router-link :to="{ name: 'favoriteRecipes' }">My favorite recipes</router-link>
          <router-link :to="{ name: 'myRecipes' }">My recipes</router-link>
          <router-link :to="{ name: 'familyRecipes' }">My family recipes</router-link>
        </div>
      </div>
      <b-button pill variant="outline-secondary" class="nav-button" @click="logout">Logout</b-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "UserControls",
  methods: {
    logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(err => {
        console.error(err);
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.user-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-button {
  font-size: 1.25rem;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: #f44336;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #c3372d;
}

.guest-controls, .user-logged-in {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdown {
  position: relative;
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
  border-radius: 10px;
}

.dropdown-content a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 8px 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown .nav-link {
  color: white;
  cursor: pointer;
  transition: color 0.3s;
}

.dropdown .nav-link:hover {
  color: #f44336;
}
</style>
