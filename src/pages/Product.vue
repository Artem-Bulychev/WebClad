<template>
	<div class="wrapper-content wrapper-content--fixed wrapper-content--product">
		<section class="product-modal">
			<div class="container">
				<p class="product-modal__title">Оставить заявку</p>
				<div class="product">
					<form class="form">
						<div>
							<label class="form__lable">Ваше ФИО<input class="form__input" type="text" /></label>
							<label class="form__lable">Ваш номер телефона<input class="form__input" type="tel" /></label>
							<label class="form__lable">Исполнитель<input class="form__input" type="text" /></label>
						</div>
						<div>
							<label class="form__lable">Ваш E-MAIL адрес<input class="form__input" type="email" /></label>
							<label class="form__lable">Ваш комментарий<input class="form__input" type="text" /></label>
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
							<a class="product-content__link link" href="#"><img class="product__icon" src="../assets/img/figma-svg.svg" alt="figma icon" />Ссылка на макет</a>
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

<style lang="scss">
@import '../assets/scss/utils/vars.scss';

.product-modal {
	background-color: $background-color-product;
}
.wrapper-content.wrapper-content--fixed.wrapper-content--product {
	margin-top: 0;
}
.product-modal__title {
	font-size: $titleFontSize;
	font-weight: 700;
	line-height: $titleFontSize;
	color: $mainFontColor;
	padding-top: 50px;
	margin-bottom: 50px;
}
.product {
	display: flex;
	justify-content: space-between;
	gap: 20px;
	&__wrap {
		color: $mainFontColor;
		font-weight: 500;
		line-height: normal;
	}
	&__title {
		font-family: $mainFont;
		font-size: $titleSmallFontSize;
		font-weight: 700;
		line-height: $titleSmallFontSize;
		color: $mainFontColor;
		margin-top: -100px;
		margin-bottom: 25px;
	}
	&__descr {
		font-size: 20px;
		font-weight: 500;
		line-height: $mainLineHeight;
		padding-top: 20px;
		margin-bottom: 50px;
	}
	&__link {
		font-size: 20px;
		font-weight: 500;
		text-decoration-line: underline;
		&:hover {
			color: rgba(255, 255, 255, 0.8);
		}
	}
	&__icon {
		display: inline-block;
		width: 40px;
		background-color: $background-color-default;
		border-radius: 50%;
		padding: 5px;
		margin-right: 10px;
	}
	&__info {
		font-size: 20px;
		margin-left: 10px;
	}
	&__info-title {
		color: rgba(255, 255, 255, 0.7);
		font-size: $mainFontSize;
		font-weight: 500;
		margin: 20px 0;
		span {
			color: $mainFontColor;
		}
	}
}
.product-slider {
	&__img {
		width: 100%;
		max-width: 600px;
		border-radius: $border-radius;
	}
}
@media (max-width: 1100px) {
	.product-slider__img {
		display: flex;
		margin: 0 auto;
		align-items: center;
	}
	.product {
		align-items: center;
		flex-direction: column-reverse;
		&__title {
			margin-top: 0;
			text-align: center;
		}
		&__box {
			margin-bottom: 50px;
		}
	}
}
@media (max-width: 700px) {
	.product-modal__title {
		font-size: 44px;
		line-height: 44px;
		text-align: center;
		padding-top: 25px;
		margin-bottom: 25px;
	}
	.product {
		&__title {
			font-size: 36px;
			line-height: 36px;
		}
		&__descr {
			font-size: 16px;
		}
		&__link {
			font-size: 18px;
		}
		&__info-title {
			font-size: 14px;
			span {
				font-size: 18px;
			}
		}
	}
}
</style>
