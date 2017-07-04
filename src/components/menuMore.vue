<template>
  <div class="wrap">
    <div class="head">
      <span class="title">
        <router-link class="titleA" to="/menuMore">频道管理</router-link>     
      </span>
      <span class="back">
        <router-link class="backBtn" to="/" @click="changeMenu"></router-link>
      </span>
    </div>
    <div class="menuControl">
      <span>点击删除以下频道</span>
      <ul class="controlDetail">
        <li class="menu" v-for="(i, index) in tk" :key="i"><a v-on:click="(index !== 0) ? (tk.splice(index, 1),dk.push(i)):''" >{{i}}</a></li>
      </ul>
    </div>
    <div class="menuControl">
      <span>点击添加以下频道</span>
      <ul class="controlDetail">
        <li class="menu2" v-for="(i, index) in dk" :key="i"><a v-on:click="dk.splice(index, 1),tk.push(i)">{{i}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more',
  data () {
    return {      

    }
  },
  methods: {
    changeMenu: function() {
      this.$store.commit('newTk',this.tk);
      this.$store.commit('newDk',this.dk)
    }
  },
   computed: {
      tk() {
        return this.$store.state.tk
      },
      dk() {
        return this.$store.state.dk
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap {
  .head {
    width: 100%;
    height: 50px;
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
      line-height: 50px;
      font-weight: 700;
      .titleA {
        font-size: 18px;
      }
    }
    .back {
      width: 40px;
      height: 40px;
      position: absolute;
      left: 0;
      top: 4px;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-align: center;
      line-height: 40px;
      font-weight: 700;
        .backBtn {
          width: 50%;
          height: 50%;
          background: url(./../assets/headerBack.png) no-repeat 50%;
          background-size: 100%;
          margin-left: 12px;
        }
    }
  }
  .menuControl {
    width: 100%;
    font-weight: 500;
    span {
      display: block;
      padding: 4px 10px;
      line-height: 20px;
      background-color: #f5f5f5;
      font-size: 16px;
      color: #666;
      text-align: left;
    }
    .controlDetail {
      margin: 18px 0;
      list-style-type: none;
      li {
         display: inline-block;
         width: 25%;
         margin-bottom: 14px;
         animation: zoomIn .3s ease;

         a {
           font-size: 16px;
           display: block;
           margin: 0 8px;
           border: 1px solid #ccc;
           line-height: 2em;
           color: #131313;
           text-align: center;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
         }
      }
    }
  }
  @keyframes zoomIn {
    0% {
    opacity: 0;
    -webkit-transform: scale3d(.3,.3,.3);
    transform: scale3d(.3,.3,.3);
    }
    50% {
      opacity: 1;
    }
  }
  .menu:first-child a{
    background: #f0f0f0;
  }
}
</style>