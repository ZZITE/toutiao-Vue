<template>
  <div>
    <div class="title">
      <div class="titleImg">
        <a></a>
      </div>
      <input class="search" type="text" :value="searchValue" v-on:click="clearValue" >
    </div>
<router-view name="one"></router-view>
<router-view name="two"></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
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
.title {
    height: 50px;
    width: 100%;
    background: #d43d3d;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    font-size: 22px;
    .titleImg {
      position: fixed;
      left: 10px;
      top: 10px;
      line-height: 38px;
      color: #fff;
      font-weight: 700;
      a {
        height: 22px;
        background: url(./../assets/title.png);
        background-size: 90px;
        width: 90px;
        display: inline-block; 
      }
      }
    .search {
      position: fixed;
      height: 28px;
      left: 120px;
      top: 10px;
      width: 240px;
      text-align: center;
      border-radius:6px;
      font-size: 14px;
      color: #ccc
      }
}

</style>
