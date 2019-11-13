<template>
  <div class="footer acea-row row-middle">
    <router-link :to="item.url" v-for="(item, index) in footerList" class="item" :class="{on: item.url === $route.path}" :key="index">
      <div class="iconfont" :class="item.icon1 + ' ' + (item.url === $route.path ? item.icon2 : '')"></div>
      <div>{{ item.name }}</div>
    </router-link>
    <br>
    <br>
    <br>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {},
  data () {
    return {
      footerList: [{
          name: "首页",
          icon1: require('../../assets/icon/home.png'),
          icon2: require('../../assets/icon/home-selected.png'),
          url: "/"
        }, {
          name: "美食",
          icon1: require('../../assets/icon/food.png'),
          icon2: require('../../assets/icon/food-selected.png'),
          url: "/food"
        },
        {
          name: "我的",
          icon1: require('../../assets/icon/mine.png'),
          icon2: require('../../assets/icon/mine-selected.png'),
          url: "/mine"
        }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .footer
    position: fixed
    width: 100%
    height: 1rem
    bottom: 0
    left: 0
    background-color: #fff
    border-top: 1px solid #eee
    z-index: 2
    .item
      flex: 1
      -webkit-flex: 1
      -o-flex: 1
      -ms-flex: 1
      text-align: center
      font-size: 0.2rem
      color: #282828
    .on
      color: #fc4141
      .iconfont
        font-size: 0.45rem
        height: 0.55rem
        line-height: 0.55rem
</style>

