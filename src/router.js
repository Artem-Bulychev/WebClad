import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from "@/pages/MainPage";
import ModelPage from "@/pages/ModelPage"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/ModelPage',
    component: ModelPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;