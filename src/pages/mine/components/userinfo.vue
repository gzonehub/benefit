<template>
  <div class="user">
    <img class="card" src="../../../assets/icon/card.png" >
    <div class="userinfo">
        <img class="img" :src="userImg" alt="">
        <span class="username">NO.000001</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      card: require('../../../assets/icon/card.png'),
      userImg: require('../../../assets/icon/demo1.png')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user
    position: relative
    margin: .5rem
    .card
      width: 100%
      height: 42.2%vw
    .userinfo
      position: absolute
      top : 50%
      left: 9%
      .img
        width: 16.4%
        height: 16.4%
        border-radius: 50%
        border: .04rem solid #fff
        padding: .1rem
      .username
        position: absolute
        top : 40%
        left: 24%
        color: #ffffff
        font-size: 1rem
</style>
