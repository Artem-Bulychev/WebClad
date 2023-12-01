<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section style="position: relative">
			<div class="container__background" style="background-image: url(../../public/backgroundhero.webp)"></div>
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
				<div class="button__list">
					<div class="btn btnPrimary" @click="prevPage">&#8592;</div>
					<div class="btn btnPrimary" @click="nextPage">&#8594;</div>
				</div>
			</div>
		</section>
		<Contact />
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

export default {
	components: { shopItem, Contact },
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
