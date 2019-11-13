<template>
  <div class="merchant">
    <div class="header">
       <p class="title">商家信息</p>
       <div class="border"></div>
    </div>
    <div class="list">
        <img class="img" src="../../../assets/icon/shangjia.png" alt="">
        <p class="text">商家名称: 为你烤律撸串公司</p>
    </div>
    <div class="list">
        <img class="img" src="../../../assets/icon/shijian.png" alt="">
        <p class="text">营业时间: 16:30-次日02:00</p>
    </div>
    <div class="list">
        <img class="img" src="../../../assets/icon/tel.png" alt="">
        <p class="text">联系电话: 为你烤律撸串公司</p>
        <span class="button">拨打</span>
    </div>
    <div class="list">
        <img class="img" src="../../../assets/icon/ditu.png" alt="">
        <p class="text">商家地址为你烤律撸串公司商家地址为你烤律撸串公司商家地址为你烤律撸串公司</p>
        <span class="button">地图</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Merchant'
}
</script>

<style lang="stylus" scoped>
  .merchant
    margin: .5rem
    display: flex
    flex-direction: column
    justify-content : flex-start
    .title
      font-size: 1rem
      font-weight: bold
      text-align: center
    .border
      width: 4.4rem
      margin: .2rem auto 1.5rem
      border-bottom: .14rem solid red
    .list
      position: relative
      font-size: .9rem
      line-height: 1.3rem
      margin-bottom: 1rem
      .img
        width: .9rem
        height: .9rem
        float: left
        margin-right: .5rem
      .text
        line-height: 1.3rem
        margin-right: 2.2rem
      .button
        position: absolute
        top: 0
        right: 0
        font-size: .2rem
        padding: .05rem .4rem
        background: #ff4400
        color: #fff
        border-radius: .3rem
</style>
