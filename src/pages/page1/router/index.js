import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Page1 = () => import('../views/2048.vue')
const routes = [{
  path: '/page1',
  component: Page1
}]
const router = new VueRouter({
  routes,
})

export default router