import Vue from 'vue'
//import App from './App.vue'
import Router from './Router.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Router),
}).$mount('#app')
