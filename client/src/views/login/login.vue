<template>
  <div id="login">
    <h1>Login</h1>
    <input type="email" name="email" v-model="input.email" placeholder="Email" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="autherisedlogin">Login</button>
    <li>{{input.sucess}}</li>
  </div>
</template>

<script>
import login from "./login";
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
        sucess: ""
      }
    };
  },
  methods: {
    async autherisedlogin() {
      try {
        await login.login(this.input.email, this.input.password);
        this.input.sucess = "Log in Sucess";
      } catch (err) {
        this.input.sucess = err;
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid blue;
  background-color: pink;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
