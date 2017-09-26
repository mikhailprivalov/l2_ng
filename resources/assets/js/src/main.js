import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import SiteMenu from './components/SiteMenu.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('SiteMenu', SiteMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { SiteMenu, App }
})
