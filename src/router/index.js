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
    meta: {
      title: 'Membership | Executive Network For Africa',
      metaTags:[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        
      ]},
    name: 'Member',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Member.vue')
  },
  {
    path: '/Contact',
    meta: {
      title: 'Contact Us | Executive Network For Africa',
      metaTags:[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        
      ]},
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
