<template>
    <div class="nav-links">
      <router-link :to="{ name: 'main' }">All Recipes</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'search' }">Search</router-link>

    </div>
  </template>
  
  <script>
  export default {
    name: "NavLinks"
  };
  </script>
  
  <style scoped lang="scss">
.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links router-link {
  color: white;
  font-size: 1.25rem;
  padding: 5px 10px;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links router-link:hover {
  color: #f44336; /* Change color on hover */
}
  </style>
  