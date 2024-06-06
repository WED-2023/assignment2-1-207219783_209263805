<template>
    <section>

  <div class="form-box">
    <div class="form-value">
    <form @submit.prevent="onLogin">
      <h2 class="title">Login</h2>

      <div class="inputbox">
     
      <ion-icon name="mail-outline"></ion-icon>

        <input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"        
             required >
        
             <label>Email</label>

      </div>
      <div class="inputbox">
        <ion-icon name="lock-closed-outline"></ion-icon>

        <input
          type="password"
          :state="validateState('password')" required>
          <label>Password</label>
      </div>
      


      <button type="submit">Login</button>

      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </form>
    <!-- <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert> -->
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
  </div>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import {mockLogin} from "../services/auth.js"
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        
        // const response = await this.axios.post(
        //   this.$root.store.server_domain +"/Login",


        //   {
        //     username: this.form.username,
        //     password: this.form.password
        //   }
        // );

        const success = true; // modify this to test the error handling
        const response = mockLogin(this.form.username, this.form.password, success);

        // console.log(response);
        // this.$root.loggedIn = true;
        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>

* {
  color: black;
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.title {
  color: black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: url("../assets/backVue.jpg");
  background-size: cover ;
  background-position: center;
  background-position: center;
  background-size: cover;

}

.form-box {
    position: relative;
    width: 400px;
    height: 450px;
    background: transparent;
    border: none;
    border-radius: 20px;
    backdrop-filter: blur(15px) brightness(80%);
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 2em;
    color: #fff;
    text-align: center;
}

.inputbox {
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;
}

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

/* animations: start */
input:focus~label,
input:valid~label {
    top: -5px;
}

/* animation:end */
.inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #fff ;
}

.inputbox ion-icon {
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2em;
    top: 20px;
}

.forget {
    margin: -10px 0 17px;
    font-size: 0.9em;
    color: #fff;
    display: flex;
    justify-content: space-between;
}

.forget label input {
    margin-right: 3px;
}

.forget a {
    color: #fff;
    text-decoration: none;
}

.forget a:hover {
    text-decoration: underline;
}
button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
}
.register {
    font-size: 0.9em;
    color: #fff;
    text-align: center;
    margin: 25px 0 10px;
}

.register p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
}

.register p a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 480px) {
    .form-box {
        width: 100%;
        border-radius: 0px;
    }
}


</style>
