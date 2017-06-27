<template>
<div>
    <nav class="fl">
      <div class="more">
        <div class="shadow"></div>
        <router-link class="moreBtn" to="/menuMore">
        <span class="cross"></span>
        </router-link>
      </div>
      <div class="menu">
        <a class="a" v-for="(item, index) in tk" :key="item" to="/" @click="itemsChange" v-bind:id="item">{{item}}</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      dd: [
        {id:'热点',it4:[{
        title: '一只胖到五官都挤在一起的柴犬，总露出迷之微笑，可能不是正经汪',
        src: ['https://p3.pstatp.com/list/28980002c953c55f7347',
        'https://p3.pstatp.com/list/2a3700007effc87b0af1',
        'https://p3.pstatp.com/list/2a360000e9bc3e3ea585'
        ],
        mes: ['萌宠','评论383','刚刚']
        }]},
        {id:'社会',it4:[{
        title: '一只胖到五官都挤在一起的柴犬，总露出迷之微笑，可能不是正经汪',
        src: ['https://p3.pstatp.com/list/28980002c953c55f7347',
        'https://p3.pstatp.com/list/2a3700007effc87b0af1',
        'https://p3.pstatp.com/list/2a360000e9bc3e3ea585'
        ],
        mes: ['萌宠','评论383','刚刚']
        }]},
        {id:'厦门',it4:[{
        title: '一只胖到五官都挤在一起的柴犬，总露出迷之微笑，可能不是正经汪',
        src: ['https://p3.pstatp.com/list/28980002c953c55f7347',
        'https://p3.pstatp.com/list/2a3700007effc87b0af1',
        'https://p3.pstatp.com/list/2a360000e9bc3e3ea585'
        ],
        mes: ['萌宠','评论383','刚刚']
        }]}
      ]
    }
  },
  methods: {
   /* itemsChange: function(event) {
      var i = event.currentTarget.id;
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
.fl {
  margin-top: 8rem;
  height: 90px;
  border-bottom: 1px solid #ccc;
  background: #f4f5f6;
  box-sizing: border-box;
}
.menu {
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.a {
  //color: #f85959;
  margin: 10px 0 10px 10px;
  height: 70px;
  line-height: 70px;
  font-size: 40px;
  padding: 0 20px;
  display: inline-block;
}
.more {
  float: right;
  position: relative;
}
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
  width: 80px;
  display: block;
  position: relative;
  color: #f85959;
  text-align: center;
}
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


.tab-head li {
  display: inline;
  margin-right: 2rem;
  overflow: hidden;
}
a {
  font-size: 2.8rem;
  color: #000;
  text-decoration: none;
}
.a:first-child {
  color: #f85959;
}
</style>