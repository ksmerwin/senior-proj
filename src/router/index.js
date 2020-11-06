import Vue from 'vue'
import VueRouter from 'vue-router'
import InputPage from '@/components/InputPage.vue'
import ResultsPage from '@/components/ResultsPage.vue'
import SchedulePage from '@/components/SchedulePage.vue'
//import store from '@/store.js'
import UserBoard from '@/components/UserBoard'
import Admin from '@/components/Admin'

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

            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
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

            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                guest: true
            }
        },
        {
            path: '/dashboard',
            name: 'userboard',
            component: UserBoard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true
            }
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
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                } else {
                    next({ name: 'userboard' })
                }
            } else {
                next()
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwt') == null) {
            next()
        } else {
            next({ name: 'userboard' })
        }
    } else {
        next()
    }
})

export default router