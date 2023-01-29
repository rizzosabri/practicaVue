import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginVue from '../views/Login.vue'
import haveRoleGuard from './role-guards'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/',
    name: 'products',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: "/details/:id",
    name: 'details',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "details" */ '../views/DetailsProductsView.vue'),
  
    
  },
  {
    path: '/perfil',
    name: 'perfil',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "perfil" */ '../views/UsersPerfilView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
