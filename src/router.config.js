import Vue from 'vue'
import Router from 'vue-router'
import table from '@/components/table'
import Hello from '@/components/Hello'
import commodities from '@/components/commodities'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'commodities',
      component: commodities
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
