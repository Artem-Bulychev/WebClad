<template>
	<router-link class="item" :to="/shop/ + product.id">
		<img :src="product.img" :alt="product.title" />
		<a class="link item__title text-truncate"> {{ product.title }} </a>
		<br />
		<a class="item__subtitle text-truncate"> {{ product.descr }} </a>
	</router-link>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
};
</script>
