import Vue from 'vue'
import App from './App'
import mock from "./mock"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import router from './router.config'
import Vuex from 'vuex'
import store from './store/store'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$axios = axios
/* eslint-disable no-new */
mock.boot();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
Vue.filter('statusFilter',function ( value ) {
  if(value === true) {
      return '启用'
  } else if ( value === false){
      return '停用'
  } else {
      return ''
  }
})
Vue.filter('aaa',(value,type) => {
    if ( type == 'date') {
        return '日期' + value  
    } else {
        return value
    }
})