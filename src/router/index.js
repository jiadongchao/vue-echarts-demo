import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echarts from '@/pages/echarts/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Echarts',
      component: Echarts
    }
  ]
})
