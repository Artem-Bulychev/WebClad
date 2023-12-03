<template>
	<div class="wrapper">
		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar__content">
						<div class="logo__box">
							<a class="logo" href="index.html"><img src="../src/assets/img/minlogo.svg" alt="WebClad" />WebClad</a>
						</div>
						<ul class="navbar__list">
							<li class="navbar__item" v-for="link in links" :key="link.title">
                <a class="navbar__link" :href="link.url" v-scroll-to="{ element: link.url, duration: 500, offset: -50 }">{{ link.title }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>

		<router-view></router-view>

		<!-- <footer></footer> -->
	</div>
</template>

<script>

export default {

	methods: {
    scrollToSection(sectionId) {
      this.$scrollTo(sectionId, 500, { offset: -20 }); // Adjust offset as needed
    },
  },
	data() {
		return {
			links: [
				{ title: 'Главная', url: '#home' },
				{ title: 'Макеты', url: '#shop' },
				{ title: 'Контакты', url: '#contact' },
			],
		};
	},
};
</script>
