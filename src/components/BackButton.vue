<!-- src/components/BackButton.vue -->
<template>
    <div class="back-wrapper">
      <div class="back-link-wrapper">
        <button @click="goBack" class="back-nav-button">
          Back!
        </button>
        <div class="back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackButton',
    methods: {
      goBack() {
        this.$router.go(-1); // Navigate back to the previous page
      }
    }
  }
  </script>
  
  <style scoped>
  .back-wrapper {
  right:  30%;
  bottom: 20px; /* Fix the button at the bottom */
    transform: translateX(-50%); /* Ensure perfect centering */
  }
  
  .back-link-wrapper {
    position: relative;
  }
  
  .back-nav-button {
    display: block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background: #333;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 3px solid #333;
    transition: all 0.35s;
  }
  
  .back-icon {
    width: 50px;
    height: 50px;
    border: 3px solid transparent;
    position: absolute;
    transform: rotate(45deg);
    right: 0;
    top: 0;
    z-index: -1;
    transition: all 0.35s;
  }
  
  .back-icon svg {
    width: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform: rotate(-45deg);
    fill: #2ea4cc;
    transition: all 0.35s;
  }
  
  .back-nav-button:hover {
    width: 200px;
    border: 3px solid #2ea4cc;
    background: transparent;
    color: #2ea4cc;
  }
  
  .back-nav-button:hover + .back-icon {
    border: 3px solid #2ea4cc;
    right: -25%;
  }
  </style>
  