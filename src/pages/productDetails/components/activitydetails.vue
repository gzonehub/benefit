<template>
  <div class="activity">
    <p class="title">活动详情</p>
    <div class="border"></div>
    <div class="list">
       <img class="img" src="../../../assets/icon/demo2.jpg">
       <p class="text">为你烤律撸串公司为你烤律撸串公司为你烤律撸串公司为你烤律撸串公司</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Activity'
}
</script>

<style lang="stylus" scoped>
  .activity
    margin: .5rem .5rem 4rem
    .title
      font-size: 1rem
      font-weight: bold
      text-align: center
    .border
      width: 4.4rem
      margin: .2rem auto 1.5rem
      border-bottom: .14rem solid red
    .list
      border: .05rem solid #ccc
      border-radius: .8rem
      box-shadow: 2px 2px 6px rgba(0,0,0,.1)
      -moz-box-shadow: 2px 2px 6px rgba(0,0,0,.1)
      -webkit-box-shadow: 2px 2px 6px rgba(0,0,0,.1)
      .img
        width: 100%
        height: 40%vw
        border-radius: .8rem .8rem 0 0
        margin-bottom: .1rem
      .text
        font-size: 1rem
        font-weight: 500
        margin: 1rem .5rem
</style>
