<template>
  <section>
    <div class="form-box">
      <form @submit.prevent="onRegister">
        <h2 class="title">Register</h2>

        <!-- Username Input -->
        <div class="inputbox">
          <ion-icon name="person-outline"></ion-icon>
          <input id="username" v-model="$v.form.username.$model" type="text" :state="validateState('username')" required>
          <label>Username</label>
          <b-form-invalid-feedback :state="validateState('username')">
            <span v-if="!$v.form.username.required">Username is required.</span>
            <span v-if="!$v.form.username.minLength">Username must be at least 3 characters long.</span>
            <span v-if="!$v.form.username.maxLength">Username must be less than 8 characters.</span>
            <span v-if="!$v.form.username.alpha">Username must contain only letters.</span>
          </b-form-invalid-feedback>
        </div>

        <div  class="inputbox">
  <label style="color: white;" v-if="!form.country" for="country">Country</label> <!-- Only shows if no country is selected -->
  <div >
    <select id="country" v-model="form.country">
      <option disabled value="">Select a country</option>  <!-- Disabled option as placeholder -->
      <option class="opt" v-for="country in countries" :value="country.value">{{ country.text }}</option>
    </select>
  </div>
</div>

        <!-- Password Input -->
        <div class="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input id="password" type="password" v-model="$v.form.password.$model" :state="validateState('password')" required>
          <label>Password</label>
          <b-form-invalid-feedback :state="validateState('password')">
            <span v-if="!$v.form.password.required">Password is required.</span>
            <span v-if="!$v.form.password.minLength">Password must be at least 5 characters long.</span>
            <span v-if="!$v.form.password.maxLength">Password must be less than 10 characters.</span>
          </b-form-invalid-feedback>
        </div>

        <!-- Confirm Password Input -->
        <div class="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input id="confirmedPassword" type="password" v-model="$v.form.confirmedPassword.$model" :state="validateState('confirmedPassword')" required>
          <label>Confirm Password</label>
          <b-form-invalid-feedback :state="validateState('confirmedPassword')">
            <span v-if="!$v.form.confirmedPassword.required">Confirming the password is required.</span>
            <span v-if="!$v.form.confirmedPassword.sameAsPassword">Passwords must match.</span>
          </b-form-invalid-feedback>
        </div>
        
        <button @mouseover="handleMouseOver" 
        ref="registerButton"  class="button-reg" type="submit">Register</button>
        <div class="mt-2">
          Already have an account?
          <router-link class="login-link" to="login"> Log in here</router-link>
        </div>
      </form>
    </div>
  </section>
</template>


``<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";
import { mockRegister } from "../services/auth.js";
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p)
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    handleMouseOver() {
        // Event handling code here
    },
    
    async Register() {
      try {


        const userDetails = {
          username: this.form.username,
          password: this.form.password
        };

        const response = mockRegister(userDetails);

        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/* General Styles for the Section */
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  
}
/* Container and Form Styling */
.form-box {
  position: relative;
  width: 400px;
  height: auto; /* Adjust height based on content */
  background: rgba(255, 255, 255, 0.1); /* Slight transparency */
  border: none;
  border-radius: 20px;
  backdrop-filter: blur(15px) brightness(80%);
  padding: 20px;
  box-sizing: border-box; /* Include padding in width */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-select-wrapper select option {
  color: black !important; /* Force the color to black */
}
/* Heading Style */
h2 {
  font-size: 2em;
  color: #fff;
  text-align: center;
  margin-bottom: 20px; /* Space below the title */
}

/* Input Box Styling */
.inputbox {
  position: relative;
  margin: 10px 0;
  width: 100%;
  border-bottom: 2px solid #fff;
}

/* Input Label Animation and Style */
.inputbox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
}

input:focus ~ label,
input, .input:valid ~ label {
  top: -20px; /* Move up when focused or filled */
  font-size: 0.8em;
}

/* Input Field Styling */
.inputbox input, .inputbox select {
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color: #fff ;
}

/* Icon Styling */
.inputbox ion-icon {
  position: absolute;
  right: 8px;
  color: #fff;
  font-size: 1.2em;
  top: 15px;
}

/* Button Styling */
button {
  width: 250px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  margin-top: 20px;
}

/* Invalid Feedback Styling */
.b-form-invalid-feedback {
  color: red; /* Make error messages stand out */
  font-size: 0.8em;
  visibility: visible;
  display: block; /* Ensure it's always visible when errors are present */
}

/* Media Query for Responsive Adjustment */
@media screen and (max-width: 480px) {
  .form-box {
    width: 90%;
    border-radius: 0px;
  }
}


.custom-select-wrapper select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  background-color: white;
  appearance: none; /* Removes default system styling */
  -moz-appearance: none;
  -webkit-appearance: none;
  font-size: 16px; /* Text size */
  color: #444; /* Text color for the select element itself */
}

.custom-select-wrapper option {
  color: black; /* Ensures dropdown options are black */
}

.button-reg {
  overflow: hidden; /* Prevents overflow of child elements */
  position: relative; /* Needed for absolute positioning of the ripple */
}

.button-reg::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 0.6s, transform 0.6s;
}
.button-reg {
  background: linear-gradient(45deg, #6a11cb 0%, #030d1f 100%);
  background-size: 200% 200%; /* Larger background size for animation */
  color: white; /* White text color */
  transition: background-position 0.5s, color 0.5s, transform 0.2s; /* Smooth transitions */
}

.button-reg:hover {
  background-position: right center; /* Move background on hover */
  color: #fff; /* Change text color if needed */
}
.button-reg:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 0 3px rgba(255,255,255,0.5); /* Custom focus style with outer glow */
}
/* Style for the link that acts like a button */
.login-link {
  display: inline-block;
  color: #fff; /* White text color */
  background-color: #007BFF; /* Bootstrap primary color for example */
  padding: 8px 16px; /* Padding for better touch area */
  text-decoration: none; /* Remove underline from link */
  border-radius: 5px; /* Rounded corners for aesthetics */
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s; /* Smooth transition for hover effects */
}

.login-link:hover {
  background-color: #0056b3; /* Darker shade on hover */
  text-decoration: underline; /* Underline on hover */
  transform: translateY(-2px); /* Slight lift effect */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow for 3D effect */
}
.login-link:focus {
  outline: none; /* Removes default focus outline */
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5); /* Custom focus glow */
}

.login-link:active {
  background-color: #004085; /* Even darker shade when clicked */
  transform: translateY(1px); /* Resets position giving a pressed effect */
  box-shadow: 0 2px 3px rgba(0,0,0,0.15); /* Smaller shadow to simulate pressing down */
}

</style>