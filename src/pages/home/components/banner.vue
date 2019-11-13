<template>
  <div class="banner">
    <div class="left">
      <h2 class="column">热门推荐</h2>
      <p class="synopsis">每日爆品，限时福利，精选指南</p>
    </div>
    <div class="right">
      <span class="current">1</span>
      /
      <span class="total">{{swiperData.length}}</span>
    </div>
    <div class="wrap">
      <swiper v-if="swiperData.length>1" :options="swiperOption">
        <swiper-slide v-for='item of swiperData' :key="item.id">
          <router-link :to="'/detaile/' + item.id">
            <img class="swiper-img" :src="item.pic"/>
            <p class="title">{{item.name}}</p>
            <p class="disc">{{item.description}}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Banner',
        props: {
            swiperData: Array
        },
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    pagination: '.swiper-pagination',
                    autoplay: 3000,
                    speed: 300,
                    loop: true
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position: absolute
    top: 3.6rem
    left: .6rem
    right: .6rem
    bottom: 0rem
    border-radius: 1rem 1rem 0 0
    height: 18.4rem
    background: #fff

    .left
      float: left
      margin: .5rem

      .column
        font-size: 1.1rem
        font-weight: 500
        color: #000

      .synopsis
        font-size: 0.2rem
        margin-top: 0.5rem
        font-weight: 500
        color: #81807c

    .right
      float: right
      margin: 1.1rem .5rem

      .current
        font-size: 1rem

      .total
        font-size: .5rem

    .wrap
      clear: both
      margin: .2rem
      padding-bottom: .5rem

      .swiper-img
        width: 100%
        height: 12rem

      .title
        padding: .8rem 0 .4rem
        font-size: 0.8rem
        font-weight: 400
        color: #000
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

      .disc
        font-size: .1rem
        color: #81807c
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
</style>
