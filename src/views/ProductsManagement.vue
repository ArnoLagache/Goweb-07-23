<template>
  <div class="product-management">
    <h1>Products Management</h1>
    <ProductInfosNav></ProductInfosNav>
    <ProductInfos></ProductInfos>
  </div>
</template>

<script>
import ProductInfosNav from "@/components/ProductInfosNav/";
import ProductInfos from "@/components/ProductInfos/";

export default {
  name: "ProductsManagement",

  components: {
    ProductInfosNav,
    ProductInfos,
  },
};
</script>

<style lang="scss">
.product-management {
  padding: 25px 10px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding: 50px 20px;
    margin-left: 310px;
  }

  @media screen and (min-width: 1280px) {
    padding: 70px 50px;
    margin-left: 350px;
  }

  h1 {
    color: #564aff;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 70px;
    padding: 0 60px;

    @media screen and (min-width: 1024px) {
      font-size: 36px;
    }
  }
}
</style>
