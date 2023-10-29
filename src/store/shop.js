export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Джонни тунец',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: require('../assets/img/1.png'),
        gallery: [
          { name: 'Джонни тунец', img: require('../assets/img/1.png') },
          { name: 'Джонни тунец', img: require('../assets/img/2.png') },
        ]
      },
      {
        id: 2,
        title: 'Cocteil',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: require('../assets/img/4.png'),
        gallery: [
          { name: 'Cocteil', img: require('../assets/img/4.png') },
        ]
      },
      {
        id: 3,
        title: 'Gild',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: require('../assets/img/7.png'),
        gallery: [
          { name: 'Gild', img: require('../assets/img/7.png') },
        ]
      },
      {
        id: 4,
        title: 'Webovio',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: require('../assets/img/10.png'),
        gallery: [
          { name: 'Webovio', img: require('../assets/img/10.png') },
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList (state) {
      return state.shopList
    },
    getProduct: (state) => (id) => {
      return state.shopList.find(product => product.id == id)
    }
  },
}