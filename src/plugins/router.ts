import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Auth0 } from '../auth/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/shutters',
    name: 'Shutters',
    component: () =>
      import(/* webpackChunkName: "shutters" */ '../views/Shutters.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(Auth0.routeGuard);

export default router;
