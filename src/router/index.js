import Vue from 'vue'
import VueRouter from 'vue-router'
import InputPage from '@/components/InputPage'
import ResultsPage from '@/components/ResultsPage'
import SchedulePage from '@/components/SchedulePage'


Vue.use(VueRouter)



export default new VueRouter({
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
            path: './ResultsPage',
            name: 'ResultsPage',
            component: ResultsPage
        }
    ]
})