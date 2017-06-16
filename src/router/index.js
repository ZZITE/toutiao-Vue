import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import video from '@/components/video'
import wei from '@/components/wei'
import login from '@/components/login'
import content1 from '@/components/content1'
import content2 from '@/components/content2'
import content3 from '@/components/content3'
import content4 from '@/components/content4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/content1',
          name: 'content1',
          component: content1
        },
        {
          path: '/content2',
          name: 'content2',
          component: content2
        },
        {
          path: '/content3',
          name: 'content3',
          component: content3
        },
        {
          path: '/content4',
          name: 'content4',
          component: content4
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
