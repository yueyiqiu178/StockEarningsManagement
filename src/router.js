import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import Add from './components/add.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/add', component: Add },
  ]
});


export default router;