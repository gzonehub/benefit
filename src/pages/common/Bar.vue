<template>
  <div class="tabbar" >
    <router-link :to="item.url" v-for="(item, index) in footerList" :key="index">
      <div class="icon">
          <div class="icon-img">
            <img class="icon-img-content" :src="(item.url === $route.path ? item.icon2 : item.icon1)" />
          </div>
          <p class="icon-desc" :class="{on: item.url === $route.path}">{{item.name}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
// <router-link to="/food">
//     <div class="icon">
//         <div class="icon-img">
//           <img class="icon-img-content" src="../../assets/icon/food.png"/>
//         </div>
//         <p class="icon-desc">美食</p>
//     </div>
//     </router-link>
//     <router-link to="/mine">
//     <div class="icon">
//         <div class="icon-img">
//           <img class="icon-img-content" src="../../assets/icon/mine.png"/>
//         </div>
//         <p class="icon-desc">我的</p>
//     </div>
//     </router-link>
export default {
  name: 'Bar',
  data () {
    return {
      footerList: [{
        name: '首页',
        icon1: require('../../assets/icon/home.png'),
        icon2: require('../../assets/icon/homered.png'),
        url: '/'
      }, {
        name: '美食',
        icon1: require('../../assets/icon/food.png'),
        icon2: require('../../assets/icon/foodred.png'),
        url: '/food'
      }, {
        name: '我的',
        icon1: require('../../assets/icon/mine.png'),
        icon2: require('../../assets/icon/minered.png'),
        url: '/mine'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tabbar
    position: fixed
    right: 0
    left: 0
    bottom: 0
    border-top: .01rem solid #eee
    z-index: 9
    background: #fff
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 14%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 33.3%
      height: 0
      padding-bottom: 12%
      margin-top: .2rem
      color: #000
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 1rem
        box-sizing: border-box
        padding: .2rem
        .icon-img-content
          display: block
          margin 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 1rem
        line-height: 1rem
        text-align: center
        color: #ccc
      .on
        color: red
</style>
