import Vue from 'vue'
import VueRouter from 'vue-router'
import InputPage from '@/components/InputPage.vue'
import ResultsPage from '@/components/ResultsPage.vue'
import SchedulePage from '@/components/SchedulePage.vue'


Vue.use(VueRouter)



export default new VueRouter({
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
        }
    ]
})