<template>
  <div class="tabbar" >
    <router-link :to="item.url" v-for="(item, index) in footerList" :key="index">
      <div class="icon">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.icon1" />
          </div>
          <p class="icon-desc" :class="{on: item.url === $route.path}">{{item.name}}</p>
      </div>
    </router-link>
      <div class="buy" @click="handleClick">
         <p class="text">立即购买</p>
         <p class="price">19.90</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
      footerList: [{
        name: '首页',
        icon1: require('@/assets/icon/home.png'),
        url: '/'
      }, {
        name: '分享',
        icon1: require('@/assets/icon/fenxiang.png'),
        url: '/food'
      }, {
        name: '收藏',
        icon1: require('@/assets/icon/shoucang.png'),
        icon2: require('../../../assets/icon/collectionred.png'),
        url: '/mine'
      }]
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/pay')
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
      width: 20%
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
        color: #999
    .buy
      position: absolute
      left: 60%
      top: 0
      bottom:0
      right: 0
      background: red
      width: 40%
      font-size: 1.1rem
      color: #fff
      text-align: center
      padding: .5rem 0
      font-weight: bold
      .text
        margin-bottom: .4rem
</style>
