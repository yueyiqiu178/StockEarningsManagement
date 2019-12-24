import Vue from 'vue'
import Hello from './Hello.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Hello),
}).$mount('#app')

