import Vue from 'vue'
import Router from 'vue-router'
import table from '@/components/table'
import Hello from '@/components/Hello'
import commodities from '@/components/commodities'
import form from '@/components/form'
import test from '@/components/test'
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
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
