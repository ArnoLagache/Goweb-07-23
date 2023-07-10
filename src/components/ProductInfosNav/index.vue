<template>
    <div class="product-filters">

        <div class="product-filters__name">
            <p>Product name</p>
        </div>

        <div class="product-filters__cat">
            <p>Category</p>
        </div>

        <div class="product-filters__price">
            <p>Price</p>
        </div>

        <div class="product-filters__price-vat">
            <p>Price <span>(including VAT)</span></p>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductInfosNav",
};
</script>

<style lang="scss">
    @import "product-infos-nav";
</style>