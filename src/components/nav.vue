<template>
<div class="wrap">
    <nav class="classify">
      <div class="more">
        <div class="shadow"></div>
        <router-link class="moreBtn" to="/menuMore">
        <span class="cross"></span>
        </router-link>
      </div>
      <div class="menu">
        <a class="a" v-for="(item, index) in tk" :key="item" to="/" @click="itemsChange((item, index))" v-bind:id="item" :class="{'active': index === selected }" >{{item}}</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      itchange :{
        '推荐': [
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
            src: [
              'https://p3.pstatp.com/list/2a3e000397dc1064ca60',
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
        ],
        
        '热点': [
          {
            title: '国球告别“胖球”时代 刘国梁离任引发三大问号',
            src: [
              'https://p3.pstatp.com/list/2a370000a8a80462e972',
              'https://p3.pstatp.com/list/2a3800003399d4b856c0',
              'https://p3.pstatp.com/list/28980002f3584580bb71'
            ],
            mes: ['体育','评论20','1小时前']
          },
          {
            title: '游记：我和美丽的鼓浪屿有个约会',
            src: [
              'https://p3.pstatp.com/list/2a3c000356cfd09321de',
              'https://p3.pstatp.com/list/2a3a0000995da1c34b89',
              'https://p3.pstatp.com/list/2a3a000097acff56baee'
            ],
            mes: ['旅游','评论112','2小时前']
          },
          {
            title: '运存512MB也能无比流畅？安卓Go来了',
            src: [
              'https://p3.pstatp.com/list/26f0000085cd6800850a',
              'https://p3.pstatp.com/list/26ed00030775f2deee99',
              'https://p3.pstatp.com/list/26e80003c4fb35b22290'
            ],
            mes: ['科技','评论41','1分钟前']
          },
          {
            title: '你们这样对共享单车，你们的良心不会痛吗？',
            src: [
              'https://p3.pstatp.com/list/2a3500048227efcef98d',
              'https://p3.pstatp.com/list/2a3e00040ecb290e5623',
              'https://p3.pstatp.com/list/2a3a0003a17b70163aa6'
            ],
            mes: ['科技','评论18','1分钟前']
          },
          {
            zy: true,
            title: '超脑48小时：程序员随便动动指头就能拯救了整个世界',
            src: 'http://p1.pstatp.com/video1609/2ae500065d8fca7d0730',
            mes: ['影视','评论10','2分钟前']
          },
          {
            title: '四川茂县垮塌现场或有二次滑坡 救援人员紧急撤离',
            src: [
              'https://p3.pstatp.com/list/2a8b000e16b6a791e2a6',
              'https://p3.pstatp.com/list/2a8c00081de15ad22810',
              'https://p3.pstatp.com/list/2a89000e68fbee9a738d'
            ],
            mes: ['热点','评论425','5分钟前']
          },
          {
            bi: true,
            title: '最新版高铁来了！直击“复兴号”内部设施',
            src: 'http://p3.pstatp.com/large/289a002092f1c0edb311',
            mes: ['热点','评论265','7分钟前']
          },
          {
            zy: true,
            title: '中方取消两军边境高层会晤，越南该反思了',
            src: 'https://p3.pstatp.com/list/2a8e0007d0b06667d2bb',
            mes: ['军事','评论20','7分钟前']
          },
          {
            title: '超盖茨！坐拥5878亿：他将是世界最有钱人',
            src: [
              'https://p3.pstatp.com/list/2a8b000d20354b170b8a',
              'https://p3.pstatp.com/list/2a8e00065d5203ac2294',
              'https://p3.pstatp.com/list/2a8e00065d53954fdb06'
            ],
            mes: ['财经','评论21','10分钟前']
          },
          {
            title: '中国055驱逐舰为何引起美俄关注？能携6种128导弹打遍全球',
            src: [
              'https://p3.pstatp.com/list/2a410002f2e03f155bcf',
              'https://p3.pstatp.com/list/2a40000141c26e6f2bcf',
              'https://p3.pstatp.com/list/2a420002852978d1dd6f'
            ],
            mes: ['军事','评论51','12分钟前']
          },
          {
            zy: true,
            title: '把百度挤出BAT，京东只差1%',
            src: 'https://p3.pstatp.com/list/2a8a000c4a5bc619226c',
            mes: ['财经','评论14','15分钟前']
          }
        ],
        '社会': [
          {
            title: '聚焦！事业单位编制改革，那些人会受影响？涉及到哪些事业单位的编制岗位？',
            src: [
              'https://p3.pstatp.com/list/2a440004d372545fb0d2',
              'https://p3.pstatp.com/list/2a440004daa03440c1f1',
              'https://p3.pstatp.com/list/2a440004dd130cc83696'
            ],
            mes: ['社会','评论121','刚刚']
          },
          {
            bi: true,
            title: '开水烫碗筷能消毒？可能大部分人都错了！',
            src: 'http://p3.pstatp.com/large/2c6600016e2598252fb7',
            mes: ['社会','评论18','1分钟前']
          },
          {
            zy: true,
            title: '手机号不用了你以为停机就行？看完吓出一身汗!',
            src: 'https://p3.pstatp.com/list/1af90001f9f8605a3ffe',
            mes: ['社会','评论23','3分钟前']
          },
          {
            title: '印度网友羡慕中国高铁：“感觉自己坐飞机”',
            src: [
              'https://p3.pstatp.com/list/2c2100042abb2c1c1a68',
              'https://p3.pstatp.com/list/2c220003c9efaf703264',
              'https://p3.pstatp.com/list/2c24000369410786cd49'
            ],
            mes: ['社会','评论61','5分钟前']
          },
          {
            zy: true,
            title: '本周六开始车内不要放这6种物品，被警察看见轻则扣分罚款，重则拘留！特别是第一个！!',
            src: 'https://p3.pstatp.com/list/2a480004f469fbefd073',
            mes: ['社会','评论93','10分钟前']
          }
        ],
        '厦门': [
          {
            title: '漫步厦门鼓浪屿',
            src: [
              'http://p1.pstatp.com/list/243b0001769c45ba40a3',
              'http://p3.pstatp.com/list/243900025c7fe894d8c6',
              'http://p3.pstatp.com/list/243a000192a63520a297'
            ],
            mes: ['厦门','评论251','刚刚']
          },
          {
            zy: true,
            title: '炎炎夏日去哪玩，厦门超赞地方！',
            src: 'http://p1.pstatp.com/list/2c2300000d8540f2376b',
            mes: ['厦门','评论45','1分钟前']
          },
          {
            bi: true,
            title: '到厦门旅游一定要去这几个景点！按这个路线走，吃好玩好只需3天时间',
            src: 'http://p9.pstatp.com/large/2c5d00031ad7335c999b',
            mes: ['厦门','评论33','3分钟前']
          },
          {
            title: '记忆中的老厦门——中山路',
            src: [
              'http://p3.pstatp.com/list/2a3d0001ad579aaf39fa',
              'http://p1.pstatp.com/list/2a3b00033878bcfbd4f2',
              'http://p3.pstatp.com/list/2a3700052b9f3bdbfd43'
            ],
            mes: ['厦门','评论61','5分钟前']
          },
          {
            zy: true,
            title: '未来三天厦门气温偏高 局地性阵雨、雷阵雨时至!',
            src: 'http://p9.pstatp.com/list/2a93000b7a5f5ffe4fb9',
            mes: ['厦门','评论13','6分钟前']
          }
        ],
        '娱乐': [
          {
            title: '迪丽热巴学应采儿在节目里掀裙子，站在她一旁的鹿晗眼神亮了',
            src: [
              'https://p3.pstatp.com/list/2c250000761c05ef9547',
              'https://p3.pstatp.com/list/2c240005190e158bf01a',
              'https://p3.pstatp.com/list/2c25000072b3fef60019'
            ],
            mes: ['娱乐','评论84','刚刚']
          },
          {
            zy: true,
            title: '养娃是个技术活，早恋、追星这种事，张学友梁家辉也头疼！',
            src: 'https://p3.pstatp.com/list/2c2c0003f20a780a27de',
            mes: ['娱乐','评论12','刚刚']
          },
          {
            bi: true,
            title: '变形金刚5：垃圾……',
            src: 'https://p3.pstatp.com/list/2c24000390d608427e10',
            mes: ['娱乐','评论83','2分钟前']
          },
          {
            title: '在横店的群演们，工资到底有过高？吓你一跳',
            src: [
              'https://p3.pstatp.com/list/2c21000511fe7e5da0c1',
              'https://p3.pstatp.com/list/2c330000f2e35ea8b094',
              'https://p3.pstatp.com/list/2c2f0002746129c73cd0'
            ],
            mes: ['娱乐','评论25','5分钟前']
          },
          {
            title: '人生赢家！马修麦康纳携娇妻儿女变超级奶爸',
            src: [
              'https://p3.pstatp.com/list/2a9a0001ff2db9a9c8e9',
              'https://p3.pstatp.com/list/2a930008f3f5bd45cc5d',
              'https://p3.pstatp.com/list/2a930008f3f6cdeead8a'
            ],
            mes: ['娱乐','评论5','10分钟前']
          }
        ],
        '体育': [
          {
            zy: true,
            title: '马龙、许昕微博发声明 许昕：不参加澳大利亚公开赛跟总局和中心不牵涉半毛钱关系',
            src: 'https://p3.pstatp.com/list/2c2e00004d2c8b6199e6',
            mes: ['体育','评论252','刚刚']
          },
          {
            title: '回绝勇士众将挽留，引联盟7雄疯抢！一哥：我有自己的打算',
            src: [
              'https://p3.pstatp.com/list/2c3300001a5784d6d154',
              'https://p3.pstatp.com/list/2c2f00019c0afc564bdb',
              'https://p3.pstatp.com/list/2c2c00030f658614f95a'
            ],
            mes: ['体育','评论124','2分钟前']
          },
          {
            bi: true,
            title: '重磅！保罗加盟火箭联手哈登冲击冠军 铁血贝弗利等7人离队',
            src: 'http://p3.pstatp.com/large/2c660002c1a4a2b925c5',
            mes: ['体育','评论423','2分钟前']
          },
          {
            title: '葡萄牙倒在决赛门口！C罗：以后别TM让我最后一个罚点球！因为根本没机会罚！',
            src: [
              'https://p3.pstatp.com/list/2c2c00038cad3ce9e827',
              'https://p3.pstatp.com/list/2c22000456038ca7d7b3',
              'https://p3.pstatp.com/list/2c240003f4cd5c936184'
            ],
            mes: ['体育','评论235','5分钟前']
          },
          {
            title: '7年NBA生涯，砍过73分，拿过MVP，可惜30岁就退役了',
            src: [
              'https://p3.pstatp.com/list/1bf30008a7453cd999c1',
              'https://p3.pstatp.com/list/1a6d000681403b197885',
              'https://p3.pstatp.com/list/1bf40008aa3dcbda4cd7'
            ],
            mes: ['体育','评论58','10分钟前']
          }
        ]
      },
      selected: 0
    }
  },
  methods: {
    itemsChange: function(index) {
      var i = event.currentTarget.id;
      this.selected = index
      this.$store.commit('newItems',this.itchange[i]);
    }
      /*var i = event.currentTarget.id;
      var res = this.dd.findIndex(function (x) {
         if(x.id === i) {
           return x.id === i
         } else {
           return 0
          }
        })
      var k = this.dd;
      console.log(res)
      this.$store.commit('newItems',k[res].it4)
    }*/
  },
  computed: {
      tk() {
        return this.$store.state.tk
      },
      items() {
        return this.$store.state.items
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap {
  position: fixed;
  width: 100%;
  height: 100px;
}
.classify {
  margin-top: 8rem;
  height: 100px;
  border-bottom: 1px solid #ccc;
  background: #f4f5f6;
  box-sizing: border-box;
  .menu {
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling:touch;
    .a {
      //color: #f85959;
    margin: 10px 0 10px 10px;
    height: 84px;
    line-height: 74px;
    font-size: 42px;
    padding: 0 20px;
    display: inline-block;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    }
  }
  .more {
    float: right;
    position: relative;
    .shadow {
      left: -20px;
      height: 90px;
      width: 20px;
      position: absolute;
      background: url(./../assets/more.png);
      background-size: contain;
      background-color: rgba(244,245,246,.3);
    }
    .moreBtn {
      background-size: 40px;
      height: 90px;
      width: 90px;
      display: block;
      position: relative;
      color: #f85959;
      text-align: center;
      .cross {
        height: 50px;
        width: 50px;
        position: absolute;
        opacity: .9;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      .cross:before {
        transform: rotate(90deg);
      }
      .cross:after, .cross:before {
          position: absolute;
          content: " ";
          height: 46px;
          width: 5px;
          background-color: #f85959;
      }
    }
  }
  a {
    font-size: 2.8rem;
    color: #000;
    text-decoration: none;
  }
  .active {
    color: #f85959;
  }
}
</style>