<template>
  <div class="wrap">
    <swiper v-if="swiperList.length>1" :options="swiperOption">
      <swiper-slide v-for='item of swiperList' :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: 'Img',
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    pagination: '.swiper-pagination',
                    autoplay: 3000,
                    speed: 300,
                    loop: true
                },
                swiperList: [{
                    id: '0001',
                    imgUrl: require('../../../assets/icon/demo2.jpg')
                }, {
                    id: '0002',
                    imgUrl: require('../../../assets/icon/demo2.jpg')
                }, {
                    id: '0003',
                    imgUrl: require('../../../assets/icon/demo2.jpg')
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .wrap
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    background: #eee

    .swiper-img
      width: 100%
</style>
