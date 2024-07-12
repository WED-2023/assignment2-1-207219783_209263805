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
      <!-- <router-link :to="{ name: 'newRecipe' }" class="nav-button">Create New Recipe</router-link> -->
      <button class="nav-button" data-toggle="modal" data-target="#exampleModal">
            Create New Recipe
          </button>
      <div class="dropdown">
        <a class="dropdown-toggle" href="#" role="button">Personal Area</a>
        <div class="dropdown-content">
          <router-link :to="{ name: 'favorites' }">My favorite recipes</router-link>
          <router-link :to="{ name: 'myRecipes' }">My recipes</router-link>
          <router-link :to="{ name: 'familyRecipes' }">My family recipes</router-link>
        </div>
      </div>
      <button  class="log-button" @click="logout">Logout</button>
      <!-- <div v-if="logoutMessage" class="logout-message">{{ logoutMessage }}</div> -->

    </span>
  </div>
</template>

<script>
import axios from 'axios';
// import { useToast } from 'vue-toastification';

export default {
  name: "UserControls",
  data() {
    return {
      logoutMessage: "",
    };
  },
  methods: {

    async logout() {

      try {
        const response = await axios.post("http://localhost:3000/auth/Logout");

        if (response.data.success) {
          this.$root.store.logout();
          this.$toast.success(response.data.message, {
            timeout: 4000,
          });

       
          this.$router.push("/login");

        } else {
          console.error("Logout failed: ", response.data.message);
        }
      } catch (err) {
        console.error("An error occurred during logout: ", err);
      }
    },
  }
};
</script>

<style scoped lang="scss">
.user-controls {
  display: flex;
  align-items: center;
  gap: 20px;
  color: black;
}

.log-button{
  color: black;
  border: none;
  font-size: 1.25rem;
  padding: 10px 20px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s, transform 0.3s ease;
}
.nav-button {
  font-size: 1.25rem;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  // background-color: #f44336;
  border: none;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s ease;
}

.nav-button:hover, .active-nav-button {
  transform: scale(1.1); /* Scale the button on hover and when active */
}

.log-button:hover{
  transform: scale(1.1); /* Scale the button on hover and when active */
}

.guest-controls, .user-logged-in {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdown {
  position: relative;
  color: black;
}

.dropdown-toggle{
  font-size: 1.25rem;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  // background-color: #f44336;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s ease;

}

.dropdown-toggle:hover{
  transform: scale(1.1); /* Scale the button on hover and when active */
  
}
.dropdown-content {
  display: none;
  // flex-direction: column;
  gap: 1px;
  position: absolute;
  background-color: #2c3e50;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  min-width:200px;
  font-size: 1rem;
  padding: 20px 20px;
  border-radius: 10px;
}

.dropdown-content a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 8px 0;
  // padding-right: 80px;

}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown .nav-link {
  color: white;
  cursor: pointer;
  transition: color 0.3s;
}


</style>
