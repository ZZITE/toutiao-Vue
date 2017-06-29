import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    tk: [
        '推荐','热点','厦门','社会','娱乐','体育','科技','问答','汽车','财经','军事','美文'
        ],
    dk: [
        '故事','搜索','育儿','养生','投资','段子','小说','特卖','健康','趣图'
        ],
    items: [
        {
        title: '小奶喵卡住出不来，看到主人在拍摄，于是，喵：好尴尬哦，卖个萌好了',
        src:[
          'https://p3.pstatp.com/list/289100046793e88f5e5a',
          'https://p3.pstatp.com/list/28900004face553ab585',
          'https://p3.pstatp.com/list/28920000dd2b2bc4dc8b'
        ],
        mes: ['萌宠','评论4396','刚刚']
        },
        {
        title: '第28届金曲得奖名单：草东没有派对击败周杰伦《告白气球》获年度歌曲等3个奖项，阿信获得“最佳作词人”',
        src: ['https://p3.pstatp.com/list/2a3e000397dc1064ca60',
        'https://p3.pstatp.com/list/2a350003fbff3de20949',
        'https://p3.pstatp.com/list/2a3900044e70b697f03b'
        ],
        mes: ['电影娱乐','评论121','4分钟前']
        },
        {
        bi: true,
        title: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src: 'http://p3.pstatp.com/large/289d000de4b549adecdd',
        mes: ['国际','评论18','5分钟前']
        },
        {
        zy: true,
        title: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待!',
        src: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        mes: ['社会','评论233','5分钟前']
        },
        {
        title: '喵星人就是你生活不可或缺的小伙伴，你被小萌喵撩到了吗？',
        src:[
          'https://p3.pstatp.com/list/2a40000181373e8c9c6c',
          'https://p3.pstatp.com/list/2a410003336e76cc95b2',
          'https://p3.pstatp.com/list/2a470000dd2ec23cac1c'
        ],
        mes: ['萌宠','评论86','10分钟前']
        },
        {
        zy: true,
        title: '讲述者一名工程师的梦想和励志，程序员你觉得是不是该这样!',
        src: 'http://p1.pstatp.com/video1609/2a4100026681f82b8170',
        mes: ['社会','评论23','10分钟前']
        },
        {
        title: '金爵影帝黄渤：“小鲜肉”也能演好戏，当年老演员对我们也“着急”｜专访',
        src:[
          'https://p3.pstatp.com/list/289a002088dd9941d6ba',
          'https://p3.pstatp.com/list/2a3f0004c85c03f257d7',
          'https://p3.pstatp.com/list/2a47000186450440f3dd'
        ],
        mes: ['娱乐','评论121','15分钟前']
        },
        {
        title: '在云南有座蜂巢一般的村寨，上百间房屋顺山势连在一起，在全国也是少见',
        src:[
          'https://p3.pstatp.com/list/28960000944a06a6e340',
          'https://p3.pstatp.com/list/2899000244d44233b94a',
          'https://p3.pstatp.com/list/2a3800001e117954b72e'
        ],
        mes: ['旅游','评论31','20分钟前']
        },
        {
        bi: true,
        title: '最新版高铁来了！直击“复兴号”内部设施',
        src: 'http://p3.pstatp.com/large/289a002092f1c0edb311',
        mes: ['热点','评论265','23分钟前']
        },
        {
        zy: true,
        title: '中方取消两军边境高层会晤，越南该反思了',
        src: 'https://p3.pstatp.com/list/2a8e0007d0b06667d2bb',
        mes: ['军事','评论20','30分钟前']
        }
      ]
    },
  mutations: {
    newTk(state,change) {
      state.tk = change
    },
    newDk(state,change) {
      state.dk = change
    },
    newItems(state,change) {
      state.items = change
    }
  }
})

export default store