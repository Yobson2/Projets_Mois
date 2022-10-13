import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import Registre from '../views/Registre.vue'
import Details from '../views/Details.vue'
import ServiceVente from '../views/ServiceVente.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Registre',
    name: 'Registre',
    component: Registre
  },
  {
    path: '/Services/Details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/ServiceVente',
    name: 'ServiceVente',
    component: ServiceVente
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
