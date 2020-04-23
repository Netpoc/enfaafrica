import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Executive Network For Africa | Offical Home Page',
      metaTags:[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        
      ]},
  },
  {
    path: '/Membership',
    name: 'Member',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Member.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
