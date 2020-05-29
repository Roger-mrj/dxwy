import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const About = () => import('../views/About.vue')

const routes = [{
  path: '/about',
  component: About
}]

const router = new VueRouter({
  routes
})

export default router