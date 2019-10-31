import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import perfect from '@/components/perfect'
import manyou from '@/components/manyou'
import darenlueying from '@/components/darenlueying'
import shop from '@/components/shop'
import detail from '@/components/detail'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/perfect/:city',
      name: 'perfect',
      component: perfect
    },
    {
      path: '/manyou/:city',
      name: 'manyou',
      component: manyou
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/darenlueying',
      name: 'darenlueying',
      component: darenlueying
    },
    {
      path:'/detail/:index',
      name:'detail',
      component:detail
    }
  ]
})
