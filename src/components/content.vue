<template>
<!--
<scroller 
  :on-refresh="refresh"
  :on-infinite="infinite">

-->

  <div class="wrap" >
    <section v-for="item of items" >
      <!--左侧标题，右侧单图-->
      <a class="articleLink" v-if="item.lr">
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
      <a class="articleLink" v-else-if="item.bi"> 
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
      <a class="articleLink" v-else> 
        <div class="itemDetail">
          <div class="itemTitle ">            
            <p>{{item.title}}</p>
          </div>
        <div>
          <ul class="itemImage">
            <li class="listImage" v-for="img of item.src"><img v-bind:src="img"></li>
          </ul>
        </div>
        <div class="itemMes">
          <span v-for="(it, idx) in item.mes" :key="it" >{{it}}</span>
        </div>
        </div>
      </a>
    </section>
    </div>
   <!-- </scroller>  -->
</template>

<script>
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

export default {
  name: 'content',
  data () {
    return {
      items: [
        {
        title: '小奶喵卡住出不来，看到主人在拍摄，于是，喵：好尴尬哦，卖个萌好了',
        src:['https://p3.pstatp.com/list/289100046793e88f5e5a',
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
        mes: ['国际','评论18','10分钟前']
        },
        {
        lr: true,
        title: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待!',
        src: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        mes: ['社会','评论233','12分钟前']
        },
        {
        title: '一只胖到五官都挤在一起的柴犬，总露出迷之微笑，可能不是正经汪',
        src: ['https://p3.pstatp.com/list/28980002c953c55f7347',
        'https://p3.pstatp.com/list/2a3700007effc87b0af1',
        'https://p3.pstatp.com/list/2a360000e9bc3e3ea585'
        ],
        mes: ['萌宠','评论383','15分钟前']
        },
        {
        title: '运存512MB也能无比流畅？安卓Go来了',
        src: ['https://p3.pstatp.com/list/26f0000085cd6800850a',
        'https://p3.pstatp.com/list/26ed00030775f2deee99',
        'https://p3.pstatp.com/list/26e80003c4fb35b22290'
        ],
        mes: ['科技','评论41','17分钟前']
        },
        {
        title: '你们这样对共享单车，你们的良心不会痛吗？',
        src: ['https://p3.pstatp.com/list/2a3500048227efcef98d',
        'https://p3.pstatp.com/list/2a3e00040ecb290e5623',
        'https://p3.pstatp.com/list/2a3a0003a17b70163aa6'
        ],
        mes: ['科技','评论18','20分钟前']
        },
        {
        lr: true,
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
        }
      ]
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
  overflow-y: auto;
  height: 1400px;


.articleLink {
  min-height: 84px;
  padding: 28px 20px 0 ;
  display: block;
  position: relative;

  .itemDetail {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
      p {
      line-height: 60px;
      font-size: 42px;
      text-align: left;
      max-height: 100%;
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
}
</style>