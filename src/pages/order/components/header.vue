<template>
  <div class="head">
    <div class="headlist">
      <img class="img" src="@/assets/icon/fanhui.png" alt="" @click="handleClick">
      <div class="searchtext" >全部订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleClick () {
      this.$router.push('/mine')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .head
   margin-top: .8rem
   .headlist
     margin: 1rem .5rem 1.4rem
     font-size: .9rem
     .img
       width: .6rem
       height: 1rem
       float: left
       margin-right: .3rem
       margin-right: .8rem
     .searchtext
       font-size: 1rem
       vertical-align: middle
</style>
