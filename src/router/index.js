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
    },
    {
      path: '/ulkeler',
      component: () => import('@/pages/Countries'),
      name: 'countries'
    },
    {
      path: '/karsilastir',
      component: () => import('@/pages/Compare'),
      name: 'compare'
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ],
  'mode': 'history'
})








