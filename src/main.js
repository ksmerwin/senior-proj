import Vue from 'vue'
import App from './App.vue'
import './assets/inputstyle.css';
import router from './router'
import Axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = Axios;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app');