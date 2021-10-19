import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo2 from '@/view/demo2/index'
import Demo4 from '@/view/demo4/index'
import Demo5 from '@/view/demo5/index'
import Demo6 from '@/view/demo6/index'

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
  ]
})
