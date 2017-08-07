// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/router.js'

import VueRouter from 'vue-router'
import VueSource from 'vue-resource'

/*bootstrap-vue文件*/
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueSource)

const  router = new VueRouter({
  mode:"history",
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
