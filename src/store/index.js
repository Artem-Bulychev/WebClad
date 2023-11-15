import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import shop from './shop'


export default new Vuex.Store({
  modules: {
    shop
  }
})