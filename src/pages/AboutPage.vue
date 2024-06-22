<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
      <b-jumbotron class="custom-jumbotron">
    
        <h1 class="display-4">Welcome to Grandma's recipes Page</h1>
        <p>A platform for researching recipes, creating personalized dishes and preserving precious family recipes.<br>
            Intuitive navigation and powerful features, users can easily discover new culinary delights, personalize their cooking experiences.<br>
            Add recipes to favorites, mark their love for a recipe and share cherished recipes with loved ones.
        </p>
        <!-- <hr class="my-6"> -->
        <h1 class="display-6">Authors: Tomer Katzav & Noam Cohen</h1>
            <p>
                Software & Information System Engineers 3rd in BGU
            </p>
            <p>
                <p><b>Git's link 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>: </b>
                <b-list-group-item><a class="links" href="https://github.com/kattomer" target=”_blank”>  Tomer git |</a> <a class="links" href="https://github.com/noama11" target=”_blank”>  Noam git</a></b-list-group-item>
                </p>
            </p>
            <p><b>Our Projects 📂: </b>
                <b-list-group-item><a class="links" href="https://github.com/kattomer/Client-Server-App" target=”_blank”>Trivia Game  |</a> <a class="links" href="https://github.com/kattomer/IR-Project" target=”_blank”>  Search engine for Wikipedia documents</a></b-list-group-item>
            </p>

        <h1 class="display-8">Responsibility Areas:</h1>
            <p><b>Tomer -</b> Full Stack  <b>| Noam -</b> Full Stack</p>
            <!-- <p><b>Noam -</b> Full Stack</p> -->
  
        <b-button variant="primary" :to="{ name: 'main' }">Back to Home Page</b-button>

      </b-jumbotron>
      
    </div>

  </template>
  
  <script>

  export default {
    name: 'AboutPage',
  }
  </script>
  <style scoped>
  .custom-jumbotron {
      background-color: #f8f9fa; /* Set your desired background color */
      padding: 40px; /* Adjust padding to provide internal spacing */
      border-radius: 10px; /* Add border radius for rounded corners */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
      margin-top: 100px; /* Adjusted margin to avoid overlap with the navbar */
      margin-bottom: 40px; /* Add margin at the bottom */
      overflow-y: auto; /* Enable vertical scrolling if content is too tall */
      position: relative; 
      max-height: calc(100vh - 140px); 
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* Start aligning items from the top */
      align-items: center; /* Center items horizontally */
  }
  
  /* Custom scrollbar styles */
  .custom-jumbotron::-webkit-scrollbar {
      width: 10px; /* Adjust width for better usability */
  }
  
  .custom-jumbotron::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
  }
  
  .custom-jumbotron::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
  }
  
  .custom-jumbotron::-webkit-scrollbar-thumb:hover {
      background: #555;
  }
  
  .custom-jumbotron h1, .custom-jumbotron p, .custom-jumbotron .lead {
      text-align: center; /* Center align text for better readability */
  }
  
  .custom-jumbotron hr {
      margin-top: 20px;
      margin-bottom: 20px;
  }
  
  .custom-jumbotron .btn {
      margin-top: 20px;
      padding: 10px 20px; /* Adequate padding for clickable area */
  }
  </style>
  