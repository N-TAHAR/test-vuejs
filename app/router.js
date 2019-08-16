import Vue from 'vue';
import Router from 'vue-router';

import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'page1',
      component: Page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2,
    },
    {
      path: '*',
      redirect: { name: 'page1' },
    },
  ],
});

export default router;
