export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Джонни тунец',
        descr: 'Сайт доставки еды',
        img: require('../assets/img/1.png'),
        level: 'easy',
        gallery: [
          { name: 'Джонни тунец', img: require('../assets/img/1.png') },
          { name: 'Джонни тунец', img: require('../assets/img/2.png') },
        ]
      },
      {
        id: 2,
        title: 'Cocteil',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores illum assumenda nam repellat aspernatur reprehenderit sapiente sequi deleniti, voluptate placeat non labore libero delectus quod nesciunt inventore voluptates odio?',
        img: require('../assets/img/4.png'),
        level: 'easy',
        gallery: [
          { name: 'Cocteil', img: require('../assets/img/4.png') },
        ]
      },
      {
        id: 3,
        title: 'Gild',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores illum assumenda nam repellat aspernatur reprehenderit sapiente sequi deleniti, voluptate placeat non labore libero delectus quod nesciunt inventore voluptates odio?',
        img: require('../assets/img/7.png'),
        level: 'medium',
        gallery: [
          { name: 'Gild', img: require('../assets/img/7.png') },
        ]
      },
      {
        id: 4,
        title: 'Очень длинное название макета очень длинное название макета',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores illum assumenda nam repellat aspernatur reprehenderit sapiente sequi deleniti, voluptate placeat non labore libero delectus quod nesciunt inventore voluptates odio?',
        img: require('../assets/img/10.png'),
        level: 'medium',
        gallery: [
          { name: 'Webovio', img: require('../assets/img/10.png') },
        ]
      },
      {
        id: 5,
        title: 'Step',
        descr: 'Макет лендинга для сайта по продаже обуви',
        img: require('../assets/img/11.png'),
        level: 'medium',
        gallery: [
          { name: 'Step', img: require('../assets/img/11.png') },
        ]
      },
      {
        id: 6,
        title: 'Food wagon',
        descr: 'Макет лендинга на тему доставки еды',
        img: require('../assets/img/12.png'),
        level: 'hard',
        gallery: [
          { name: 'Food wagon', img: require('../assets/img/12.png') },
        ]
      },
      {
        id: 7,
        title: 'Auraglow',
        descr: 'Макет лендинга для компании, занимающей...',
        img: require('../assets/img/13.png'),
        level: 'hard',
        gallery: [
          { name: 'Auraglow', img: require('../assets/img/13.png') },
        ]
      },
      {
        id: 8,
        title: 'Panto',
        descr: 'Макет лендинга для сайта по продаже пре...',
        img: require('../assets/img/14.png'),
        level: 'hard',
        gallery: [
          { name: 'Panto', img: require('../assets/img/14.png') },
        ]
      },
      {
        id: 9,
        title: 'GoTrieop',
        descr: 'Макет лендинга на тему путешествий и отды...',
        img: require('../assets/img/15.png'),
        level: 'hard',
        gallery: [
          { name: 'GoTrieop', img: require('../assets/img/15.png') },
        ]
      },
      {
        id: 10,
        title: 'Diamaint',
        descr: 'Макет лендинга для сайта по продаже нату...',
        img: require('../assets/img/16.png'),
        level: 'hard',
        gallery: [
          { name: 'Diamaint', img: require('../assets/img/16.png') },
        ]
      },
      {
        id: 11,
        title: 'Schoolio',
        descr: 'Макет лендинга для школы',
        img: require('../assets/img/17.png'),
        level: 'medium',
        gallery: [
          { name: 'Schoolio', img: require('../assets/img/17.png') },
        ]
      },
      {
        id: 12,
        title: 'FT Yoga',
        descr: 'Макет лендинга на тему йоги',
        img: require('../assets/img/18.png'),
        level: 'medium',
        gallery: [
          { name: 'FT Yoga', img: require('../assets/img/18.png') },
        ]
      },
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