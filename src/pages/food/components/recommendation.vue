<template>
    <div class="banner">
        <div class="left">
            <h2 class="column">精品推荐</h2>
            <p class="synopsis">下沙美食活动精品推荐</p>
        </div>
        <div class="right">
            <span class="current">1</span>
            /
            <span class="total">{{swiperData.length}}</span>
        </div>
        <div class="wrap">
          <swiper v-if="swiperData.length>1" :options="swiperOption">
              <swiper-slide v-for='item of swiperData' :key="item.id">
                <router-link to="/detaile">
                  <img class="swiper-img" :src="item.pic" />
                  <p class="title">{{item.name}}下沙美食活</p>
                  <p class="disc">{{item.disc}}下沙美食活动精品推荐下沙美食活动精品推荐下沙美食活动精品推荐下沙美食活动精品推荐</p>
                </router-link>
              </swiper-slide>
          </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'recommendation',
  props: {
    swiperData: Array
  },
  data () {
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
      .left
        float: left
        margin: .5rem
        .column
          font-size: 1.1rem
          font-weight: bold
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
        width: 100%
        padding-bottom: .1rem
        .swiper-img
          width: 100%
          height: 12rem
        .title
          padding: .5rem
          font-size: 1rem
          font-weight: 500
          color: #000
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
        .disc
          padding: 0 .5rem
          font-size: .1rem
          line-height: 1rem
          color: #81807c
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
</style>
