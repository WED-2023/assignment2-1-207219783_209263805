<template>
    <section class="register-section">
      <div class="form-box">
        <form @submit.prevent="onRegister">
          <!-- Username Input -->
          <div class="inputbox">
            <input id="username" v-model="form.username" type="text" placeholder="Username" required>
          </div>
  
          <!-- Password Input -->
          <div class="inputbox">
            <input id="password" type="password" v-model="form.password" placeholder="Password" required>
          </div>
  
          <!-- Confirm Password Input -->
          <div class="inputbox">
            <input id="confirmedPassword" type="password" v-model="form.confirmedPassword" placeholder="Confirm Password" required>
          </div>
  
          <!-- Register Button -->
          <button 
            type="button" 
            @click="moveButton" 
            :style="{ position: 'relative', top: buttonPosition.top + 'px', left: buttonPosition.left + 'px' }"
            class="register-button">
            Register
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "RegisterForm",
    data() {
      return {
        form: {
          username: "",
          password: "",
          confirmedPassword: ""
        },
        buttonPosition: { top: 0, left: 0 }
      };
    },
    methods: {
      moveButton(event) {
        if (this.isFormIncomplete) {
          const formBox = this.$el.querySelector('.form-box');
          const maxX = formBox.clientWidth - event.target.clientWidth;
          const maxY = formBox.clientHeight - event.target.clientHeight;
          this.buttonPosition = {
            top: Math.random() * maxY,
            left: Math.random() * maxX
          };
        } else {
          this.onRegister();
        }
      },
      onRegister() {
        alert("Registration successful!");
        // Registration logic here
      }
    },
    computed: {
      isFormIncomplete() {
        return !this.form.username || !this.form.password || !this.form.confirmedPassword;
      }
    }
  }
  </script>
  
  <style scoped>
  .register-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  .form-box {
    width: 300px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .inputbox {
    margin-bottom: 20px;
  }
  
  .register-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .register-button:hover {
    background-color: #0056b3;
  }
  </style>
  