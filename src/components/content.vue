<template>



  <div class="wrap" >

 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :max-distance="150"
                 @top-status-change="handleTopChange" ref="loadmore">

        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
            <span v-show="topStatus === 'drop'">释放刷新</span>
        </div>

    <section v-for="item of items" :key="item">
      <!--左侧标题，右侧单图-->
      <a class="articleLink" v-if="item.zy" @click="toDetail">
        <div class="itemDetail">
          <div class="itemTitle2">            
            <p>{{item.title}}</p>
            <div class="itemMes">
              <span v-for="(it, idx) in item.mes" :key="it" >{{it}}</span>
            </div>
          </div>
          <div class="itemImage2">
            <img v-bind:src="item.src">
          </div>
        </div>
      </a>

      <!--标题+大图-->
      <a class="articleLink" v-else-if="item.bi" @click="toDetail"> 
        <div class="itemDetail">
          <div class="itemTitle3 ">            
            <p>{{item.title}}</p>
          </div>
          <div class="itemImage3">
            <img v-bind:src="item.src">
          </div>
          <div class="itemMes">
            <span v-for="(it, idx) in item.mes" :key="it" >{{it}}</span>
          </div>           
        </div>
      </a>

      <!--标题+三图-->
      <a class="articleLink" v-else @click="toDetail"> 
        <div class="itemDetail">
          <div class="itemTitle ">            
            <p>{{item.title}}</p>
          </div>
        <div>
          <ul class="itemImage">
            <li class="listImage" v-for="img of item.src" :key="img"><img v-bind:src="img"></li>
          </ul>
        </div>
        <div class="itemMes">
          <span v-for="(it, idx) in item.mes" :key="it" >{{it}}</span>
        </div>
        </div>
      </a>
    </section>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">加载更多</span>
    </div>
    </mt-loadmore>
    </div>

</template>

<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Indicator } from 'mint-ui';

export default {
  name: 'content',
  data () {
    return {
      it2: [
        {
        title: '一只胖到五官都挤在一起的柴犬，总露出迷之微笑，可能不是正经汪',
        src: ['https://p3.pstatp.com/list/28980002c953c55f7347',
        'https://p3.pstatp.com/list/2a3700007effc87b0af1',
        'https://p3.pstatp.com/list/2a360000e9bc3e3ea585'
        ],
        mes: ['萌宠','评论383','刚刚']
        },
        {
        title: '运存512MB也能无比流畅？安卓Go来了',
        src: ['https://p3.pstatp.com/list/26f0000085cd6800850a',
        'https://p3.pstatp.com/list/26ed00030775f2deee99',
        'https://p3.pstatp.com/list/26e80003c4fb35b22290'
        ],
        mes: ['科技','评论41','1分钟前']
        },
        {
        title: '你们这样对共享单车，你们的良心不会痛吗？',
        src: ['https://p3.pstatp.com/list/2a3500048227efcef98d',
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
        src: ['https://p3.pstatp.com/list/2a8b000e16b6a791e2a6',
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
        src: ['https://p3.pstatp.com/list/2a8b000d20354b170b8a',
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
      it3: [
        {
        zy: true,
        title: '超级中国：能靠吃征服世界的民族，欧美人眼中的亚洲吃货',
        src: 'https://p3.pstatp.com/list/2a3e000211415ed44798',
        mes: ['美食','评论40','1小时前']
        },
        {
        title: '国球告别“胖球”时代 刘国梁离任引发三大问号',
        src: ['https://p3.pstatp.com/list/2a370000a8a80462e972',
        'https://p3.pstatp.com/list/2a3800003399d4b856c0',
        'https://p3.pstatp.com/list/28980002f3584580bb71'
        ],
        mes: ['体育','评论20','1小时前']
        },
        {
        title: '游记：我和美丽的鼓浪屿有个约会',
        src: ['https://p3.pstatp.com/list/2a3c000356cfd09321de',
        'https://p3.pstatp.com/list/2a3a0000995da1c34b89',
        'https://p3.pstatp.com/list/2a3a000097acff56baee'
        ],
        mes: ['旅游','评论112','2小时前']
        },
        {
        bi: true,
        title: '刘亦菲晒一字马美照，多年舞蹈功底和好身材暴露无遗，演小龙女曾获李若彤连称赞',
        src: 'http://p1.pstatp.com/large/289a001d54e2bf297361',
        mes: ['娱乐','评论63','3小时前']
        },
        {
        title: '挑起难民争议，有意义吗？',
        src: [
        'https://p3.pstatp.com/list/2a42000441d2d2e5cb8f',
        'https://p3.pstatp.com/list/2a4700025784dde12a8b',
        'https://p3.pstatp.com/list/2a480000d2ad6d6eeaf9'
        ],
        mes: ['国际','评论21','3小时前']
        },
        {
        zy: true,
        title: '冰桶挑战3周年：筹得上亿美元 挑战发起人无钱治病',
        src: 'https://p3.pstatp.com/list/2a8d00063e6ea8ea299c',
        mes: ['热点','评论230','4小时前']
        },
        {
        title: '可可西里连续8年无藏羚羊盗猎案 目前已达到6万多只',
        src: [
        'https://p3.pstatp.com/list/2a8e00083480ea46758b',
        'https://p3.pstatp.com/list/2a8c0008fcfc643d1fb7',
        'https://p3.pstatp.com/list/2a8c0008fcfde782209f'
        ],
        mes: ['社会','评论11','5小时前']
        },
        {
        bi: true,
        title: '喜马拉雅山观景缆车坠落致7死',
        src: 'http://p1.pstatp.com/large/289a00202cd7459f542c',
        mes: ['社会','评论25','6小时前']
        },
        {
        zy: true,
        title: '世界和平论坛丨伊朗最高领袖顾问：面对恐怖主义我们绝不沉默',
        src: 'https://p3.pstatp.com/list/2a88000ddc838191f822',
        mes: ['国际','评论130','7小时前']
        }
      ],
      allLoaded: false,
      topStatus: '',
    }
  },

  methods: {
    loadTop: function () {  // 刷新数据的操作
      var self = this;
      setTimeout(function () {
        var i = 0, len = self.it2.length;
        self.items.splice(0,self.items.length);
        for (; i < len; i ++) {
          self.items.push(self.it2[i]);
        }
        self.$refs.loadmore.onTopLoaded();
      }, 500);
    },
    loadBottom: function () { // 加载更多数据的操作
                //load data
                //this.allLoaded = true;// 若数据已全部获取完毕
      var self = this;
      setTimeout(function () {
        var i =0, len = self.it3.length;
        for (; i < len; i ++){
          self.items.push(self.it3[i]);
        }
        self.$refs.loadmore.onBottomLoaded();
      }, 500);
    },
    handleTopChange: function (status) {
      this.topStatus = status;
    },
    toDetail: function() {
      var self = this;
      Indicator.open({
      text: '加载中...',
      spinnerType: 'snake'
    })
    setTimeout(function() {
      Indicator.close()
      self.$router.push({path:'/detail'})
    },1000)
  }
},
  computed: {
      items () {
        return this.$store.state.items
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/*
.line-limit-length {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
}*/
.wrap {
  -webkit-overflow-scrolling:touch;
  overflow-y: auto;
  height: 1460px;
  .mint-loadmore-top,.mint-loadmore-bottom span {
    font-size: 36px;
  }

.articleLink {
  min-height: 84px;
  padding: 28px 20px 0 ;
  display: block;
  position: relative;

  .itemDetail {
    border-bottom: 1px solid #ccc;
    margin: 0 20px;
      p {
      line-height: 60px;
      font-size: 42px;
      text-align: left;
      max-height: 100%; 
      color: #222;
    /*overflow:hidden; 
      white-space:nowrap; 
      text-overflow:ellipsis; 
    */
      }
  }
  .itemTitle2{  
    width: 64%;
    display: inline-block;
    vertical-align: middle;
    margin-right:14px;
  }
  .itemImage2 {
    overflow: hidden;
    width: 33%;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 24px;
    img {
    border: none;
    display: block;
    width: 100%;
    }
  }
  .itemImage3 {
    display: inline-block;
    vertical-align: middle;
    width: 84%;
    img {
    border: none;
    display: block;
    width: 100%;
    margin-bottom: 6px;
    }
  }
  .itemImage {
    margin-top: 6px;
    display: block;
    font-size: 0;
    text-align: center;
    .listImage {
    padding-right: 4px;
    display: inline-block;
    overflow: hidden;
    width: 33.3%;
    box-sizing: border-box;
    height: 220px;
    position: relative;
      img {
        border: none;
        display: block;
        width: 100%;
      }
    }
  }
  .itemMes {
    padding: 24px 0 ;
    height: 28px;
    span {
      padding-right: 20px;
      line-height: 20px;
      float: left;
      color: #999;
      font-size: 26px;
      }
    }
  }
  a {
    text-decoration: none;
    a:visited p {
      color: #aaa;
    }
  }
}
</style>