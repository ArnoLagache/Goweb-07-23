<template>
	<div class="product-details">
		<ProductCard></ProductCard>
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard/'

export default {
	name: 'ProductDetails',
	
	components: {
		ProductCard,
	}

}
</script>

<style lang="scss">

	.product-details{
		position: relative;
		padding: 25px 25px 80px 25px;
		text-align: center;

		@media screen and (min-width: 1024px) {
			padding: 72px 20px;
			margin-left: 310px;
		}

		@media screen and (min-width: 1280px) {
			padding: 70px 50px;
			margin-left: 350px;
		} 
	}

</style>