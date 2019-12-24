import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Hello from './Hello.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

Vue.use(BootstrapVue);


new Vue({
  router,
  render: h => h(Hello),
}).$mount('#app')

