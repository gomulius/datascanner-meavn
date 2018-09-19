// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import swal from 'sweetalert'
import Vuelidate from 'vuelidate'

import './js/plugins/sweetalert.min.js'
import './css/main.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.prototype.$serverUrl = 'http://localhost:8081';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
