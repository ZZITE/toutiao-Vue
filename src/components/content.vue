<template>
  <div class="wrap">
    <ul>
      <li v-for="item of items">
      <!--标题+三图-->
      <a class="articleLink">
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
          <span>萌宠</span><span>评论4396</span><span>刚刚</span>
        </div>
        </div>
      </a>


      <!--左侧标题，右侧单图-->
      <a class="articleLink"> 
        <div class="itemDetail">
          <div class="itemTitle2">            
            <p>{{item.title2}}</p>
            <div class="itemMes">
              <span>社会</span><span>评论233</span><span>5分钟前</span>
            </div>
          </div>
          <div class="itemImage2">
            <img v-bind:src="item.src2">
          </div>
        </div>
      </a>

      <!--标题+大图-->
      <a class="articleLink"> 
        <div class="itemDetail">
          <div class="itemTitle3 ">            
            <p>{{item.title3}}</p>
          </div>
          <div class="itemImage3">
            <img v-bind:src="item.src3">
            <div class="itemMes">
              <span>国际</span><span>评论322</span><span>10分钟前</span>
            </div>            
          </div>
        </div>
      </a>





      </li>
    </ul>




     
    </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      items: [
        {title:'小奶喵卡住出不来，看到主人在拍摄，于是，喵：好尴尬哦，卖个萌好了',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/289100046793e88f5e5a',
        'https://p3.pstatp.com/list/28900004face553ab585',
        'https://p3.pstatp.com/list/28920000dd2b2bc4dc8b'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd',
        mes: ['萌宠','评论4396','刚刚']
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        title2: '彻底决裂？绿议员吁民进党与柯文哲分手：他已不值得期待！',
        title3: '剧情反转？韩国闺蜜门崔顺实之女“坑娘又坑总统” 或被逮捕',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8'],
        src2: 'https://p3.pstatp.com/list/289800001c1608e6eefb',
        src3: 'http://p3.pstatp.com/large/289d000de4b549adecdd'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.line-limit-length {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
}
.wrap {
  height:1400px; 
  overflow-y:auto;

.articleLink {
  min-height: 84px;
  padding: 28px 20px 0 ;
  display: block;
  position: relative;

  .itemDetail {
    border-bottom: 1px solid #999;
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
    margin-right:24px;
    
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
    width: 100%;
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
    padding: 18px 0 24px 0;
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