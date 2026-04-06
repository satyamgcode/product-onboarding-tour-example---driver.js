import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import DeployPage from './views/DeployPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/deploy', name: 'Deploy', component: DeployPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
