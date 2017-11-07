// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueProgressBar from 'vue-progressbar'

var contentful = require('contentful')

Vue.use(contentful)
Vue.use(VueProgressBar, {
  color: '#FBDA34',
  failedColor: 'red',
  height: '2px'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
