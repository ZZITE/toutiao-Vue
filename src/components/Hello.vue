<template>
  <div>
    <div class="tittle">
      <span>今日头条</span>
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
.tittle {
    height: 8rem;
    width: 100%;
    background: #d43d3d;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    font-size: 54px;
    span {
      position: fixed;
      left: 20px;
      top: 30px;
      }
    .search {
      position: fixed;
      height: 4.4rem;
      left: 290px;
      top: 36px;
      width: 40rem;
      text-align: center;
      border-radius:1rem ;
      font-size: 2rem;
      color: #ccc
      }
}

</style>
