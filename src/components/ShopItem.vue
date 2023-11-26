<template>
	<router-link class="item" :to="/shop/ + product.id">
		<img :src="product.img" :alt="product.title" />
		<a class="link title__shop text-truncate"> {{ product.title }} </a>
		<br />
		<a class="subtitle__shop text-truncate"> {{ product.descr }} </a>
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

<style lang="scss">
.item__wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}
.item {
	width: 420px;
	border: 5px solid transparent; /* Устанавливаем толщину границы */
	border-radius: 11px; /* Устанавливаем радиус закругления углов */
	transition: border-color 0.3s ease; /* Плавный переход */
	p {
		font-size: 20px;
	}
}
.text-truncate {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	-webkit-line-clamp: 2;
}

.item:hover,
.item:focus {
	border-color: #ccfaf3b2;
}
.title__shop {
	margin-top: 5px;
}

.subtitle__shop {
	color: #fff;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
}
</style>
