<template>
  <div class="tabbar" >
    <p class="price">实付款：
        <span class="num">{{price}}</span>
    </p>
    <p class="pay" @click="handleClick">微信支付</p>
  </div>
</template>

<script>
export default {
  name: 'PayBar',
  data () {
    return {
      price: '￥9.9'
    }
  },
  methods: {
    handleClick () {
      console.log('微信支付跳转成功')
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
    width: 100%
    height: 0
    padding-bottom: 12%
    .price
      top:0
      left : 0
      bottom: 0
      width: 70%
      height: 100%
      padding: 1.1rem .5rem
      .num
        color: red
    .pay
      position: absolute
      top:0
      right: 0
      bottom:0
      width: 30%
      background: green
      text-align: center
      padding-top : 1.1rem
      color: #fff
</style>
