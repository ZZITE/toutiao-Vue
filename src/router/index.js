import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import video from '@/components/video'
import wei from '@/components/wei'
import login from '@/components/login'
import content from '@/components/content'
import nav from '@/components/nav'
import menuMore from '@/components/menuMore'

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
    }, {
      path: '/video',
      name: 'video',
      component: video
    }, {
      path: '/wei',
      name: 'wei',
      component: wei
    }, {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/menuMore',
      name: 'more',
      component: menuMore
    }
  ]
})
