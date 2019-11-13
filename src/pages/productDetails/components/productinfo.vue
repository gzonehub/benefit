<template>
  <div class="buying">
    <div v-for="(item) in storeInfo" :key="item.id">
      <p class="theme">{{item.theme}}</p>
      <div class="desc" @click="handleJump">
        <span class="pripc ">{{item.price}}元</span>
        <span class="origin ">市场价：{{item.ot_price}}</span>
        <span class="time">购买截至:2019-10-31</span>
        <span class="remaining">剩余{{item.people}}份</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Productinfo',
        props: {
            storeInfo: Object
        },
        data() {
            return {
                num: 0
            }
        },
        methods: {
            handleJump() {
                this.$router.push('/detaile')
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .buying
    margin: .5rem

    .theme
      margin: 1rem 0
      font-size: 1rem
      font-weight: 500
      line-height: 1.5rem

    .desc
      position: relative
      padding-bottom: 4rem

      .pripc
        float: left
        font-size: 1.2rem
        color: #fb6969

      .time
        float: right
        padding: .35rem
        color: #000

      .origin
        position: absolute
        top: 2rem
        left: 0
        text-decoration: line-through

      .remaining
        position: absolute
        top: 2rem
        right: 0
        color: #81807c
</style>
