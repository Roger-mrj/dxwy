import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const Home = () => import('../views/Home')

const routes = [{
    path: '/home1',
    component: Home
  },
  {
    path: '/about',
    beforeEnter(to, from, next) {
      window.location = "/about.html"
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router