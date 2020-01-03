import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Registeration from './components/Registeration.vue'
import login from './components/login.vue'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [{
    path: '/signup',
    component: Registeration
  }, {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: Products
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')