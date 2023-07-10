<template>
    <div>
        <router-link v-for="(product, index) in products" :key="index" :to="`products/${product.id}`">            
            <div class="product-infos">
                
                <div class="product-infos__title">
                    <p class="font-bold">{{product.title}}</p>
                </div>

                <div class="product-infos__cat" :class="product.category" >
                    <p>{{product.category}}</p>
                </div>

                <div class="product-infos__price">
                    <p v-if="!getPriceFromLocalStorage(product.id)">{{product.price}}€</p>
                    <p v-else>{{ getPriceFromLocalStorage(product.id) }}€</p>
                </div>

                <div class="product-infos__price-vat">
                    <p v-if="!getVatPriceFromLocalStorage(product.id)">{{product.vat_price}}€</p>
                    <p v-else>{{ getVatPriceFromLocalStorage(product.id) }}€</p>
                </div>

            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import Product from '@/models/product'

export default {
    name: "ProductInfos",

	data () {
        return {
            products: []
        }
    },

    //Appel API et récupération des données
    mounted () {
        axios
        .get('https://fakestoreapi.com/products/')
        .then(response => {
            this.products = response.data.map(raw_product => {
                return new Product(
                    raw_product.id, 
                    raw_product.title, 
                    raw_product.category, 
                    raw_product.price, 
                    raw_product.image, 
                    raw_product.description
                )
            });
        })
    },

    //Vérif si le produit possède déjà de la data modifiée localement
    methods: {
        getPriceFromLocalStorage(productId) {
            const productData = JSON.parse(localStorage.getItem(productId));
            if (productData) {
                return productData.price;
            }
            return null;
        },
        getVatPriceFromLocalStorage(productId) {
            const productData = JSON.parse(localStorage.getItem(productId));
            if (productData) {
                return productData.vat_price;
            }
            return null;
        }
    }

};
</script>

<style lang="scss">
    @import "product-infos";
</style>