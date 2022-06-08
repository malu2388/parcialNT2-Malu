import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import { router } from './router'
import './form'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')