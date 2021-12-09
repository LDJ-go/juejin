import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import List from '../pages/List.vue'
import Deatil from '../pages/Deatil.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/', component: List },
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Deatil,
    },
  ]
})



export default router