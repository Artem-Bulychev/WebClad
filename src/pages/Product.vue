<template>
	<div class="wrapper-content wrapper-content--fixed wrapper-content--product">
		<section class="product-modal">
			<div class="container">
				<p class="product-modal__title">Оставить заявку</p>
				<div class="product">
					<form class="form">
						<div>
							<label class="form__label">Ваше ФИО<input class="form__input" type="text" /></label>
							<label class="form__label">Ваш номер телефона<input class="form__input" type="tel" /></label>
							<label class="form__label">Исполнитель<input class="form__input" type="text" /></label>
						</div>
						<div>
							<label class="form__label">Ваш E-MAIL адрес<input class="form__input" type="email" /></label>
							<label class="form__label">Ваш комментарий<input class="form__input" type="text" /></label>
							<button class="btn btnPrimary form__btn" type="submit">Отправить заявку</button>
						</div>
					</form>
					<div class="product__box">
						<h1 class="product__title">{{ product.title }}</h1>
						<!-- slider -->
						<div class="product-slider">
							<carousel :perPage="1" :paginationEnable="true" paginationColor="#b3b3b3" paginationActiveColor="#494ce8">
								<slide v-for="(slide, index) in product.gallery" :key="index">
									<img class="product-slider__img" :src="slide.img" :alt="slide.name" />
								</slide>
							</carousel>
						</div>
						<div class="product__wrap">
							<p class="product__descr">{{ product.descr }}</p>
							<a class="product__link link" href="#"><img class="product__icon" src="../assets/img/figma-svg.svg" alt="figma icon" />Ссылка на макет</a>
							<p class="product__info-title">
								Сложность:<span class="product__info">{{ product.level }}</span>
							</p>
							<p class="product__info-title">
								Язык:<span class="product__info">{{ product.language }}</span>
							</p>
							<p class="product__info-title">
								Исполнитель:<span class="product__info">{{ product.autor }}</span>
							</p>
							<p class="product__info-title">
								Стоимость:<span class="product__info">{{ product.price }} ₽</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			product: null,
		};
	},
	created() {
		// console.log({route: this.$route, id: this.$route.params.id})
		let id = this.$route.params.id;
		this.product = this.$store.getters.getProduct(id);
	},
};
</script>
