import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Characters',
    component: () => import('../views/Characters.vue'),
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/Characters.vue'),
  },
  {
    path: '/characters/:id',
    name: 'Character Sheet',
    component: () => import('../views/CharacterSheet.vue'),
  },
  {
    path: '/new-character',
    name: 'Create a new character',
    component: () => import('../views/CreateCharacter.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
