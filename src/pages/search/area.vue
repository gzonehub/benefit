<template>
  <div class="area">
    <p class="area-name">进入专区</p>
    <div class="list">
      <div class="title" @click="headleClick">湖滨银泰</div>
      <div class="title">下沙</div>
      <div class="title">丁桥</div>
      <div class="title">中大银泰 新天地</div>
      <div class="title">运河</div>
      <div class="title">湖滨</div>
      <div class="title">下沙</div>
      <div class="title">丁桥</div>
      <div class="title">中大银泰 </div>
      <div class="title">运河钱江世纪城</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Area',
  methods: {
    headleClick () {}
  }
}
</script>
<style lang="stylus" scoped>
  .area
    height: 28%vw
    border-bottom: .2rem solid #eee
    .area-name
      margin-left: .5rem
      padding: 1rem 0
    .list
      margin: 0 .5rem 1rem
      background: #666
      .title
        float: left
        padding: .3rem
        background: #eee
        margin: 0 .3rem .5rem
        border-radius: .5rem
</style>
