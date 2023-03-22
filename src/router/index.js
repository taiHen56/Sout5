import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HelloWorld.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router