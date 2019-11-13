<template>
  <div class="hot">
    <p class="hot-name border-bottom">热门搜索</p>
    <div class="list">
      <div class="title border-bottom">
          <span class="left">9块9</span>
          <span class="midd"></span>
          <span class="right">即将售罄</span>
        </div>
    </div>
    <div class="list">
      <div class="title border-bottom">
          <span class="left">9块9</span>
          <span class="midd"></span>
          <span class="right">即将售罄</span>
        </div>
    </div>
    <div class="list">
      <div class="title border-bottom">
          <span class="left">9块9</span>
          <span class="midd"></span>
          <span class="right">即将售罄</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hot',
  methods: {
    headleClick () {}
  }
}
</script>
<style lang="stylus" scoped>
  .hot
    height: 70%vw
    margin: .5rem
    .hot-name
      padding: 1rem 0
    .list
      height: 2rem
      .title
        line-height: 2rem
        .left
          margin-right: 40%vw
        .midd
          color: #999
          margin-right: 2%vw
          border-left: .1rem solid #ccc
</style>
