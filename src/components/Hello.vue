<template>
  <div>
    <div class="tittle">
      <span>今日头条</span>
      <input class="search" type="text" :value="searchValue" v-on:click="clearValue" >
    </div>
    <nav class="fl">
      <div class="more">
        <div class="shadow"></div>
        <router-link class="moreBtn" to="/menuMore">
        <span class="cross"></span>
        </router-link>
      </div>
      <div class="menu">
        <router-link class="a" v-for="(item, idx) in title" :key="item" to="/content">{{item}}</router-link>
      </div>
    </nav>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: ['推荐','热点','厦门','视频','社会','图片','娱乐','问答','科技','汽车','财经','军事','体育','段子','小说','特卖','健康','趣图','美女','房产','国际','问答'],
      searchValue: '迪丽热巴'
    }
  },
  methods: {
    clearValue:function() {
      this.searchValue = '';  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.tittle {
    height: 8rem;
    width: 100%;
    background: #d43d3d;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    font-size: 4rem;
    span {
      float:left;
      margin-left: 2rem;
      margin-top: 2rem;
      }
    .search {
      float: left;
      height: 4.4rem;
      margin-top: 2rem;
      margin-left: 1.5rem;
      width: 40rem;
      text-align: center;
      border-radius:1rem ;
      font-size: 2rem;
      color: #ccc
      }
}
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

</style>
