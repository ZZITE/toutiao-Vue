<template>
  <div id="app">
    <router-view></router-view>
  <!--
    <nav class="link">
      <ul class="mainLink">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/video">视频</router-link></li>
        <li><router-link to="/wei">微头条</router-link></li>
        <li><router-link to="/login">未登录</router-link></li>
      </ul>
    </nav>
  -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.link {
  width: 100%;
  height: 8rem;
  position: fixed;
  bottom: 0;
  font-size: 36px;
  background: #ccc;
  .mainLink{
    height: 8rem;
    }
    .mainLink li {
      display: inline-block;
      vertical-align: middle;
      width:20% ;
      height: 6rem;
      line-height: 6rem;
      }
}
a {
    text-decoration:none;
}

</style>
