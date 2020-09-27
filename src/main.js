import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false


export const appData = {
    app_icon: 'code',
    body_message: 'Hello world!',
    footer_message: 'Made with ❤️ in Mountain View, California',
    title: 'Vue, Vuetify, Webpack',
    time: new Date(),
};

setInterval(() => {
    appData.time = new Date()
}, 1000);

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');