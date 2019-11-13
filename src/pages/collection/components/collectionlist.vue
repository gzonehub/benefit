<template>
  <div class="order-list border-bottom" @click="handleClick">
      <div class="activity border-bottom" >
          <img class="img" src="https://p0.meituan.net/msmerchant/2c9878529ccbdb47849957a026cf0da51338116.jpg" alt="">
          <div class="theme">肉蟹煲套餐+手气红包</div>
          <p class="pripc">总额：
            <span class="num">{{pripc}}</span>
          </p>
      </div>
      <div class="activity border-bottom" >
          <img class="img" src="https://p0.meituan.net/msmerchant/2c9878529ccbdb47849957a026cf0da51338116.jpg" alt="">
          <div class="theme">肉蟹煲套餐+手气红包</div>
          <p class="pripc">总额：
              <span class="num">{{pripc}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionList',
  data () {
    return {
      pripc: 182.00,
      quantitynum: 5
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/detaile')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .order-list
    margin: 1rem .5rem
    .activity
      position: relative
      width: 100%
      height: 0
      padding-bottom: 22%
      margin-bottom: 1rem
      .img
        position: absolute
        top: 0
        left: 0
        bottom: 0
        width: 5rem
        height: 5rem
      .theme
        margin-left: 5.5rem
        font-size: 1rem
        font-weight: 500
        color: #000
      .pripc
        margin: 3rem 5.5rem
        .num
          color: #f40
</style>
