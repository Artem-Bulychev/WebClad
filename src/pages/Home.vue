<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section style="position: relative">
			<div class="container__background"></div>
			<div class="container">
				<div class="container__home">
					<h1 class="container__title">Макеты Figma для верстки сайтов</h1>
					<p class="container__subtitle">Предлагаем вам уникальное решение для упрощения процесса верстки - множество качественных макетов и шаблонов различных тематик и сложности.</p>
					<p class="container__text">
						Добро пожаловать на главную страницу WebClad - вашего источника креативных и функциональных макетов для верстки сайтов! <br /><br />
						Наши макеты - это совершенное сочетание эстетики и практичности. Мы стремимся предоставить вам самые актуальные и профессионально разработанные макеты, которые помогут вам ускорить и упростить процесс верстки, без потери визуальности и удобства.
					</p>
					<div class="container__social">
						Подписывайтесь в соц. сетях
						<div class="social-icons">
							<a v-for="social in socialMedia" :key="social.name" :href="social.link">
								<img :src="social.icon" :alt="social.name" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<div class="container__shop">
					<h1 class="shop__title">Библиотека макетов</h1>
					<div class="shop__filter">
						<button class="shop__item shop__filter_all" @click="filterShop('all')">Показать все</button>
						<button class="shop__item shop__filter_easy" @click="filterShop('easy')">Легкий</button>
						<button class="shop__item shop__filter_medium" @click="filterShop('medium')">Средний</button>
						<button class="shop__item shop__filter_hard" @click="filterShop('hard')">Сложный</button>
					</div>
					<div class="item__wrapper">
						<shopItem v-for="product in filteredAndPaginatedShopList" :key="product.id" :product="product" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<div>
				<div class="button-list">
					<div class="btn btnPrimary" @click="prevPage">&#8592;</div>
					<div class="btn btnPrimary" @click="nextPage">&#8594;</div>
				</div>
			</div>
		</section>
    <Contact/>
		<footer class="footer">
			<ul class="footer__links">
				<li class="footer__logo logo">
					<a class="logo" href="index.html"><img src="../assets/img/minlogo.svg" alt="WebClad" />WebClad</a>
				</li>
				<li class="footer__item footer__politic">
					<a href="https://yandex.ru/maps" class="footer__link">Политика<br />конфиденциальности</a>
				</li>
				<li class="footer__item footer__copy"><a class="footer__link">2023 © Все права защищены </a></li>
				<li class="footer__social">
					<div class="social-icons">
						<a v-for="social in socialMedia" :key="social.name" :href="social.link">
							<img :src="social.icon" :alt="social.name" />
						</a>
					</div>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
import shopItem from '@/components/ShopItem.vue';
import { shopList } from '@/store/shop.js';
import Contact from '@/pages/Contact.vue';
import axios from 'axios';

export default {
	components: { shopItem, Contact  },
	data() {
		return {
			shopList,
			filter: 'all',
			socialMedia: [
				{ name: 'VK', link: 'https://vk.com', icon: 'VK.svg' },
				{ name: 'Twitter', link: 'https://www.twitter.com', icon: 'iconTwitter.svg' },
				{ name: 'youTube', link: 'https://www.YouTube.com', icon: 'YouTube.svg' },
				{ name: 'Telegram', link: 'https://t.me/Figmab', icon: 'Telegram.svg' },
			],
			page: {
				current: 1,
				length: 6,
			},
		};
	},
	computed: {
		filteredShopList() {
			if (this.filter === 'all') {
				return this.shopList;
			} else {
				return this.shopList.filter((product) => product.level === this.filter);
			}
		},

		filteredAndPaginatedShopList() {
			const filteredList = this.filteredShopList;
			console.log(filteredList);
			return filteredList.filter((row, index) => {
				let start = (this.page.current - 1) * this.page.length;
				let end = this.page.current * this.page.length;
				return index >= start && index < end;
			});
		},
	},
	methods: {
		filterShop(filter) {
			this.filter = filter;
			// Apply filtering logic
			// ...

			// Reset current page to 1 or the last available page
			if (this.filteredShopList.length > this.page.length) {
				this.page.current = 1;
			} else {
				this.page.current = Math.ceil(this.filteredShopList.length / this.page.length);
			}
		},

		mounted() {
		  axios
		   .get('https://github.com/Artem-Bulychev/WebClad/blob/dev/src/store/WebCladAPI.php'); 
		    then(response => {
			     let res = response.data
		 })
	}

		// Pagination
		prevPage() {
			if (this.page.current > 1) this.page.current -= 1;
		},
		nextPage() {
			const nextPageStartIndex = this.page.current * this.page.length;
			if (nextPageStartIndex < this.filteredShopList.length) {
				this.page.current += 1;
			}
		},
	},

	created() {
		this.shopList = this.$store.getters.getShopList;
	},
};
</script>

<style lang="scss">
@import '../assets/scss/utils/vars.scss';
.wrapper {
	background-image: url(../assets/img/Фон_страницы.png);
	background-size: cover;
}
.wrapper-content.wrapper-content--fixed {
	padding: 0 10px;
}
.container__home h1,
.container__home p {
	position: relative; /* Нужно для позиционирования элементов над затемнением */
	z-index: 1; /* Чтобы текстовые элементы отображались над затемнением */
}
.container {
	&__home {
		position: relative;
		min-height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: baseline;
		flex-direction: column;
		column-gap: 80px;
		padding-top: 120px;
		z-index: 2;
	}
	&__background {
		position: absolute;
		left: 0;
		right: 0;
		top: -190px;
		max-width: 1920px;
		height: 900px;
		background-image: url(../assets/img/Фоновое_изображение_главной_стр.jpg);
		background-repeat: no-repeat;
		background-position: top center;
		background-size: cover;
		opacity: 0.25;
		margin: 0 auto;
	}
	&__title {
		color: $mainFontColor;
		font-size: $titleFontSize;
		font-weight: 700;
		min-width: 650px;
	}
	&__subtitle {
		color: $mainFontColor;
		max-width: 500px;
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 35px;
		grid-column-start: 1;
	}
	&__text {
		color: $mainFontColor;
		font-size: 22px;
		font-weight: 500;
		line-height: 35px;
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 3;
	}
	&__shop {
		margin-top: 200px;
		position: relative;
	}
	&__shop::before {
		background: linear-gradient(63deg, rgba(0, 0, 0, 0.2) 54.27%, rgba(56, 90, 177, 0.12) 87.54%), #070714;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&__social {
		color: $mainFontColor;
		font-family: $mainFont;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 35px; /* 218.75% */
		position: relative; /* Нужно для позиционирования элементов над затемнением */
		z-index: 1; /* Чтобы текстовые элементы отображались над затемнением */
	}
	&__item {
		width: 19.784px;
		height: 12.134px;
		flex-shrink: 0;
	}
}
.link {
	color: $mainFontColor;
	font-family: $mainFont;
	font-size: 36px;
	font-weight: 700;
	line-height: normal;
	justify-content: left;
	cursor: pointer;
}
.social-icons {
	display: flex;
	& a {
		margin-right: 50px;
	}
	& img {
		width: 20px;
		height: 20px;
	}
}
.item__wrapper {
	display: grid;
	align-items: start;
	justify-content: start;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 60px;
	grid-column-gap: 40px;
}
.shop {
	&__title {
		margin: 0;
		padding: 0;
		padding-bottom: 54px;
		color: $mainFontColor;
		font-family: $mainFont;
		font-size: 54px;
		font-weight: 700;
		line-height: normal;
	}
	&__filter {
		display: inline-flex;
		height: 40.035px;
		padding-bottom: 130px;
		align-items: flex-end;
		gap: 40px;
		flex-shrink: 0;
	}
	&__item {
		text-align: center;
		background-color: rgba(26, 154, 214, 0.3);
		border-radius: $border-radius;
		color: $mainFontColor;
		width: 160px;
		height: 45px;
		font-family: $mainFont;
		font-size: 20px;
		border: none;
		cursor: pointer;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	&__item:hover {
		background-color: rgba(10, 205, 235, 0.3);
	}
}
.button-list {
	width: 100%;
	text-align: center;
}
</style>
