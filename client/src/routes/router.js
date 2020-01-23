import Vue from 'vue'
import VueRouter from 'vue-router'
import Registeration from '../views/Registeration/Registeration.vue'
import login from '../views/login/login.vue'
import Home from '../views/Home/Home.vue'
import Products from '../views/Products/Products.vue'


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
export default router;