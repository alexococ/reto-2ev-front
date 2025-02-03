import { createRouter, createWebHistory } from "vue-router";

import HomePage from './views/HomePage.vue'; 
import ContactPage from './views/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;