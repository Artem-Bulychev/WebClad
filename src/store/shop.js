export default {
	state: {
		shopList: [
		],
	},
	mutations: {},
	actions: {},
	getters: {
		getShopList(state) {
			return state.shopList;
		},
		getProduct: (state) => (id) => {
			return state.shopList.find((product) => product.id == id);
		},
	},

};
