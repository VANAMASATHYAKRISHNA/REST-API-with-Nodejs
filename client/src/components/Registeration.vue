<template>
  <div id="registration">
    <h1>Registeration</h1>
    <input
      type="email"
      name="email"
      v-model="input.email"
      placeholder="Email"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button type="button" v-on:click="RegisterationSignin">Register</button>
    <router-link to="/">{{ input.sucess }}</router-link>
  </div>
</template>
<script>
import Registeration from "../Registeration";
export default {
  name: "registration",
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
    async RegisterationSignin() {
      try {
        await Registeration.InsertRegisteration(
          this.input.email,
          this.input.password,
          (this.input.sucess = "back to home")
        );
      } catch (err) {
        this.input.sucess = err;
      }
    }
  }
};
</script>

<style scoped>
#registration {
  width: 500px;
  border: 1px solid #cccccc;
  background-color:yellow;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
