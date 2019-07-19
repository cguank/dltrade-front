import Vue from 'vue'
import Router from 'vue-router'
import inviteBidList from '@/pages/inviteBidList'


Vue.use(Router);

const another = resolve => require(['@/pages/another'],resolve);
const project_trade = resolve => require(['@/pages/project_trade'],resolve);
const ChargeAndPay = resolve => require(['@/pages/ChargeAndPay'],resolve);
const ChangePayPwd = resolve => require(['@/pages/ChangePayPwd'],resolve);

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'inviteBidList',
      component: project_trade
    },
    {
      path: '/another',
      name: 'another',
      meta: {
        requireAuth:false
        //requireAuth:true
      },
      component: another
    },
    {
      path: '/ChargeAndPay',
      name: 'ChargeAndPay',
      component: ChargeAndPay
    },
    {
      path: '/project_trade',
      name: 'project_trade',
      component: project_trade
    },
    {
      path: '/changepaypwd',
      name: 'ChangePayPwd',
      component: ChangePayPwd
    }
  ]

})
export default router
router.beforeEach((to,from,next) => {

  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem('login')) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }

  console.log(localStorage.getItem('login'));

})
