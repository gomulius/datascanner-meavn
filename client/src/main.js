// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import './js/plugins/sweetalert.min.js'
import './css/main.css'

// All the below causing the page to not render - it's not recomended to use jQuery
// Also the other bootstrap files preventing page to render
//import './js/popper.min.js'
//import './js/bootstrap.min.js'
//import './js/main.js'
//import './js/plugins/pace.min.js'
//import './js/plugins/bootstrap-datepicker.min.js'
//import './js/plugins/bootstrap-notify.min.js'
//import './js/plugins/chart.js'
//import './js/plugins/dataTables.bootstrap.min.js'
//import './js/plugins/jquery-ui.custom.min.js'
//import './js/plugins/jquery.dataTables.min.js'
//import './js/plugins/fullcalendar.min.js'
//import './js/plugins/jquery.vmap.sampledata.js'
//import './js/plugins/jquery.vmap.world.js'
//import './js/plugins/jquery.vmap.min.js'
//import './js/plugins/moment.min.js'
//import './js/plugins/select2.min.js'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.prototype.$serverUrl = 'http://localhost:8081';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
