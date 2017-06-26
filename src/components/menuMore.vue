<template>
  <div class="wrap">
    <div class="head">
      <span class="title">
        <router-link class="titleA" to="/menuMore">频道管理</router-link>     
      </span>
      <span class="back">
        <router-link class="backBtn" to="/content"></router-link>
      </span>
    </div>
    <div class="menuControl">
      <span>点击删除以下频道</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap {
  .head {
    width: 100%;
    height: 130px;
    position: relative;
    background-color: #d43d3d;
    a {
      color: #fff;
      font-weight: 900;
      text-decoration: none;
    }
    .title {
      display: block;
      text-align: center;
      line-height: 121px;
      font-weight: 700;
      .titleA {
        font-size: 42px;
      }
    }
    .back {
      width: 110px;
      height: 130px;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-align: center;
      line-height: 50px;
      font-weight: 700;
        .backBtn {
          width: 50%;
          height: 50%;
          background: url(./../assets/headerBack.png) no-repeat 50%;
          background-size: 100%;
          margin-left: 26px;
        }
    }
  }
  .menuControl {
    width: 100%;
    font-weight: 500;
    span {
      display: block;
      padding: 0 10px;
      line-height: 2em;
      background-color: #f5f5f5;
      font-size: 32px;
      color: #666;
      text-align: left;
    }
  }
}
</style>