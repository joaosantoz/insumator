import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import HowWorks from "../views/HowWorks";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/help',
    name: 'How Works',
    component: HowWorks,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
