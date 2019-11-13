<template>
  <div class="search-head">
    <div class="head" @click="headleClick">
      <img class="img-return" src="@/assets/icon/fanhui.png" alt="">
        <span class="text">搜索</span>
    </div>
    <div class="searchbar">
      <img class="img-sousuo" src="@/assets/icon/sousuo.png" alt="">
      <input type="text" class="input" placeholder="商品/店铺/地点/口令">
      <span class="cancel">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHead',
  methods: {
    headleClick () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .search-head
    height: 22%vw
    background: #ffd940
    overflow hidden
    .head
      margin: 1rem .5rem
      font-size: .8rem
      font-weight: bold
      .img-return
        width: .6rem
        height: 1rem
        margin-right: .8rem
      .text
        font-size: .95rem
        padding-top: .3rem
        vertical-align: middle
    .searchbar
      position: relative
      margin: 0 .5rem
      .img-sousuo
        position: absolute
        top: 1.5%vw
        left: 2%vw
        bottom: 2%vw
        width: 4%vw
        height: 4%vw
      .input
        width: 80%
        height: 7%vw
        border-radius: 2rem
        padding-left:  8%vw
        margin-right: .3rem
        background: #eee
      .text
        vertical-align: middle
</style>
