import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import video from '@/components/video'
import wei from '@/components/wei'
import login from '@/components/login'
import content from '@/components/content'
import message from '@/components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [
        {
          path: '/content',
          name: 'content',
          component: content
        },
        {
          path: '/message',
          name: 'message',
          component: message
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
    }
  ]
})
