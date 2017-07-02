import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import content from '@/components/content'
import nav from '@/components/nav'
import menuMore from '@/components/menuMore'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello, 
      //redirect:'/content',
      children: [
        {
          path: '/',
          name: 'Hello',
          components: {
            default:Hello,
            one:nav,
            two:content
          }
        }
      ]
    },
    {
      path: '/menuMore',
      name: 'more',
      component: menuMore
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
