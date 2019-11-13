<template>
  <div class="header">
      <div class="input" @click="handleSearch">
          <img class="img" src="@/assets/icon/sousuo.png" alt="">
          云便利优惠券
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    height: 8rem
    background: #41454e
    padding-top 1.1rem
    color: #81807c
    .input
      width: 90%
      margin: 0 auto
      padding-left: .5rem
      height: 1.5rem
      line-height: 1.5rem
      margin: 0 auto
      background: #fff
      border-radius: 1rem
      .img
        width: 1rem
        height: 1rem
</style>
