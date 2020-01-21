import Vue from 'vue'

import VueRouter from 'vue-router'
import Registeration from '../views/Registeration/Registeration.vue'
import login from '../views/login/login.vue'
import Home from '../views/Home/Home.vue'
import Products from '../views/Products/Products.vue'
import {
    Router
} from 'express'

Vue.use(VueRouter);
export default new Router({
    routes: [{
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
    ]
})