import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')