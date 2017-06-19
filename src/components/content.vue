<template>
  <div class="wrap">
    <ul>
      <li v-for="item of items"><a class="articleLink">
        <div class="itemDetail">
          <p class="itemTitle">{{item.title}}</p>
        <div>
          <ul class="itemImage">
            <li class="listImage"><img v-bind:src="item.src[0]"></li>
            <li class="listImage"><img v-bind:src="item.src[1]"></li>
            <li class="listImage"><img v-bind:src="item.src[2]"></li>
          </ul>
        </div>
        <div class="itemMes">
          <span>电影圈</span><span>评论4396</span><span>刚刚</span>
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
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8']
        },
        {title:'猫用这种姿势在面包垫上睡觉，很好，你的下巴成功引起了我的注意',
        src:['https://p3.pstatp.com/list/249800182374e86d50b0',
        'https://p3.pstatp.com/list/249900182d20afa05030',
        'https://p3.pstatp.com/list/216f0010f015d94f32a0']
        },
        {title:'渝长厦高铁将修建，全长近两千公里重庆约美女厦门吹海风一天完成',
        src:['https://p3.pstatp.com/list/26eb00025f83fc010fe8',
        'https://p3.pstatp.com/list/26ed0002552cadae2bf3',
        'https://p3.pstatp.com/list/26e90005aef0482f0822']
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8']
        },
        {title:'猫用这种姿势在面包垫上睡觉，很好，你的下巴成功引起了我的注意',
        src:['https://p3.pstatp.com/list/249800182374e86d50b0',
        'https://p3.pstatp.com/list/249900182d20afa05030',
        'https://p3.pstatp.com/list/216f0010f015d94f32a0']
        },
        {title:'渝长厦高铁将修建，全长近两千公里重庆约美女厦门吹海风一天完成',
        src:['https://p3.pstatp.com/list/26eb00025f83fc010fe8',
        'https://p3.pstatp.com/list/26ed0002552cadae2bf3',
        'https://p3.pstatp.com/list/26e90005aef0482f0822']
        },
        {title:'法国男子一直在模仿金刚狼，最后经过不懈努力，他成功了！',
        src:['https://p3.pstatp.com/list/28860003ceb9894a2aa7',
        'https://p3.pstatp.com/list/288f00001468ab2b829e',
        'https://p3.pstatp.com/list/288a0003c9e8b575c6b8']
        },
        {title:'猫用这种姿势在面包垫上睡觉，很好，你的下巴成功引起了我的注意',
        src:['https://p3.pstatp.com/list/249800182374e86d50b0',
        'https://p3.pstatp.com/list/249900182d20afa05030',
        'https://p3.pstatp.com/list/216f0010f015d94f32a0']
        },
        {title:'渝长厦高铁将修建，全长近两千公里重庆约美女厦门吹海风一天完成',
        src:['https://p3.pstatp.com/list/26eb00025f83fc010fe8',
        'https://p3.pstatp.com/list/26ed0002552cadae2bf3',
        'https://p3.pstatp.com/list/26e90005aef0482f0822']
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap {
  height:1400px; 
  overflow-y:auto;

.articleLink {
  min-height: 84px;
  padding: 30px 20px;
  display: block;
  position: relative;
    border-bottom: 1px solid #ccc;
  p {
    line-height: 60px;
    font-size: 42px;
    text-align: left;
    max-height: 100%;
  }

  .itemImage {
    margin-top: 12px;
    display: block;
    margin: 0;
    padding: 0;
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
    padding: 20px;
    span {
      padding-right: 20px;
      line-height: 18px;
      float: left;
      color: #ccc;
      font-size: 26px;
      }
    }
  }
}
</style>