import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
//vue animation
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't els
//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faGithub, faLinkedin)


Vue.component('font-awesome-icon', FontAwesomeIcon)


//Vue Use
Vue.use(VueRouter)
Vue.use(VueAnimXYZ)

//Vue Config
Vue.config.productionTip = false

// Vue Router
const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')