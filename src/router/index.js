import Vue from 'vue'
import VueRouter from 'vue-router'
import InputPage from '@/components/InputPage.vue'
import ResultsPage from '@/components/ResultsPage.vue'
import SchedulePage from '@/components/SchedulePage.vue'
import store from '@/store.js'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Secure from '@/components/Secure.vue'

Vue.use(VueRouter)



let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'InputPage',
            component: InputPage
        },

        {
            path: '/SchedulePage',
            name: 'SchedulePage',
            component: SchedulePage
        },
        {
            path: '/ResultsPage',
            name: 'ResultsPage',
            component: ResultsPage
        },
        {

            path: '/login',
            name: 'login',
            component: Login
        },
        {

            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/secure',
            name: 'secure',
            component: Secure,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router