import Vue from 'vue'
import Router from 'vue-router'
import inviteBidList from '@/pages/inviteBidList'
import another from '@/pages/another'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inviteBidList',
      component: inviteBidList
    },
    {
      path: '/another',
      name: 'another',
      component: another
    }
  ]
})
