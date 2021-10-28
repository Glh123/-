import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo2 from '@/view/demo2/index'
import Demo3 from '@/view/demo3/index'
import Demo4 from '@/view/demo4/index'
import Demo5 from '@/view/demo5/index'
import Demo6 from '@/view/demo6/index'
import Demo7 from '@/view/demo7/index'
import Demo8 from '@/view/demo8/index'
import Demo10 from '@/view/demo10/index'
import Demo11 from '@/view/demo11/index'
import Detail from '@/view/demo11/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: Demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: Demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: Demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: Demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: Demo8
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: Demo10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: Demo11,
    },
    {
      path: '/demo11/:id',
      name: 'detail',
      component: Detail,
    },
  ]
})
