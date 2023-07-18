<template>
  <div class="product-card">
    <router-link to="/products" class="back-link">
      <img src="~@/assets/images/back-arrow.svg" />
    </router-link>

    <p class="product-title">{{ product.title }}</p>

    <div class="grid">
      <div class="product-img">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="product-more">
        <div class="product-more__desc">
          <p>Description</p>
          <p>{{ product.description }}</p>
        </div>

        <div class="product-more__cat">
          <p>Category</p>
          <span :class="product.category">{{ product.category }}</span>
        </div>

        <div class="product-more__price">
          <p class="">Price</p>
          <form>
            <div v-if="!price">
              <input
                type="number"
                v-model="price"
                :placeholder="product.price"
                required
              /><span class="currency">€</span>
            </div>
            <div v-else>
              <input
                type="number"
                v-model="price"
                :placeholder="price"
                required
              /><span class="currency">€</span>
            </div>

            <div class="product-more__price-vat">
              <span>Price&nbsp;</span>
              <span v-if="!vat_price"
                >(including VAT): {{ product.vat_price }}&nbsp;€</span
              >
              <span v-else>(including VAT): {{ vat_price }}&nbsp;€</span>
            </div>

            <button @click="persist" :disabled="!price">Update product</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/models/product";

export default {
  name: "ProductCard",

  data() {
    return {
      product: new Product(),
      price: "",
      vat_price: "",
      productId: "",
    };
  },

  //Appel des données et récupération des données basé sur l'ID du produit
  mounted() {
    this.productId = this.$route.params.productId;

    axios
      .get(`https://fakestoreapi.com/products/${this.productId}`)
      .then((response) => {
        this.product = new Product(
          response.data.id,
          response.data.title,
          response.data.category,
          response.data.price,
          response.data.image,
          response.data.description
        );
      });

    //Verif si le produit possède déjà des data modifiées localement
    if (localStorage.getItem(this.productId)) {
      const productData = JSON.parse(localStorage.getItem(this.productId));
      this.price = productData.price;
      this.vat_price = productData.vat_price;
    }
  },

  //Enregistrement de la nouvelle data avec localStorage au clic du bouton 'Update product'
  methods: {
    persist() {
      const productData = {
        price: this.price,
        vat_price: (this.price * 1.2).toFixed(2),
      };
      localStorage.setItem(this.productId, JSON.stringify(productData));
    },
  },
};
</script>

<style lang="scss">
@import "product-card";
</style>
