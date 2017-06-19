<template>
  <div>
    <div class="tittle">
      <span>今日头条</span>
      <input class="search" type="text" value="LOL视频|守望先锋|">
    </div>
    <nav class="fl">
      <ul class="tab-head">
        <li><router-link to="/content">内容1</router-link></li>
        <li><router-link to="/content">内容2</router-link></li>
        <li><router-link to="/content">内容3</router-link></li>
        <li><router-link to="/content">内容4</router-link></li>
      </ul>
    </nav>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
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
  line-height: 4rem;
  border-bottom: 1px solid #ccc;
}


.tab-head li {
  display: inline;
  margin-left: 2rem;
  overflow: hidden;
}
a {
  font-size: 2.8rem;
  color: #000;
}

</style>
