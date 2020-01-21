<template>
  <div id="product">
    <ul>
      <li v-for="product in Products" v-bind:key="product._id">
        Productid:{{product._id}}
        <br />
        ProductName:{{product.name}}
        <br />
        ProductPrice:{{product.price}}
        <br />
        <img :src="product.productImage" />
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>
<script>
import Products from "./Products";

export default {
  name: "product",
  data() {
    return {
      Products: []
    };
  },
  async created() {
    try {
      const res = await Products.getProducts();
      this.Products = res.products;
    } catch (err) {
      this.input.sucess = err;
    }
  }
};
</script>

<style scoped>
</style>
