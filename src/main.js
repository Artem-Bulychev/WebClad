import Vue from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import router from './routes';
import store from './store';

// Plugins
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueScrollTo);

import './assets/scss/index.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
