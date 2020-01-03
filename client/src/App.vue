<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <br />
    <router-link to="/signup">Registeration</router-link>
    <br />
    <router-link to="/login">login</router-link>
    <br />
    <router-link to="/products">Products</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style></style>
