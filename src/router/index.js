import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import video from '@/components/video'
import wei from '@/components/wei'
import login from '@/components/login'
import content from '@/components/content'
import loadmore from '@/components/common/loadmore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello, 
      redirect:'/content',
      children: [
        {
          path: '/content',
          name: 'content',
          component: content
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
      path: '/common/loadmore',
      name: 'loadmore',
      component: loadmore
    }
  ]
})
