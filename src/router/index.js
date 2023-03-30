import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import InscriptionPersonne from '../components/InscriptionPersonne.vue'
import AjoutVoiture from '../components/AjoutVoiture.vue'
import RechercheTrajet from '../components/RechercheTrajet.vue'
import TrajetVue from '../components/TrajetVue.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/trajetVue/:trajet',
    component: TrajetVue
  },
  {
    path: '/profile',
    component: Profile
  },

  {
    path: '/rechercheTrajet',
    component: RechercheTrajet
  },

  {
    path: '/ajoutVoiture',
    component: AjoutVoiture
  },
  
  {
    path: '/inscriptPersonne',
    component: InscriptionPersonne
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
