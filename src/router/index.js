import Vue from 'vue'
import Router from 'vue-router'
import casual from '@/components/casual'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'casual',
      component: casual
    }
  ]
})
