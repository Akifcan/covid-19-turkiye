import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		component: () => import('@/pages/Home'),
  		name: 'home'
  	},
  	{
  		path: '/tum-dunya',
  		component: () => import('@/pages/WorldStat'),
  		name: 'worldStat'
  	},
    {
      path: '/haberler',
      component: () => import('@/pages/News'),
      name: 'news'
    }
  ],
  'mode': 'history'
})
