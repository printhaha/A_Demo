import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhengWenHao from '@/components/zhengwenhao'
import Zoom from '@/components/Zoom'
import Layout from '@/components/layout'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'zhengWenHao',
      component: zhengWenHao
    }
    ,
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom
    }
    ,
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
