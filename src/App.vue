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
								<router-link class="navbar__link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
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
	data() {
		return {
			links: [
				{ title: 'Главная', url: '/' },
				{ title: 'Макеты', url: '/shop' },
				{ title: 'Контакты', url: '/contact' },
			],
		};
	},
};
</script>
