<template>
    <div class="icons" >
        <div class="order border-bottom">
            <span class="myorder">我的订单</span>
            <span class="more" @click="handleClick">查看全部订单</span>
        </div>
        <router-link :to="item.url" v-for="item in iconList" :key="item.id">
           <div class="icon">
               <div class="icon-img">
                 <img class="icon-img-content" :src="item.imgUrl" />
               </div>
               <p class="icon-name">{{item.iconName}}</p>
           </div>
        </router-link>
  </div>
</template>

<script>
// </router-link>
export default {
  name: 'List',
  data () {
    return {
      iconList: [{
        id: '001',
        url: '/collection',
        imgUrl: require('@/assets/icon/collection.png'),
        iconName: '我的收藏'
      }, {
        id: '002',
        url: '/brand',
        imgUrl: require('@/assets/icon/brand.png'),
        iconName: '品牌简介'
      }, {
        id: '003',
        url: '/unused',
        imgUrl: require('@/assets/icon/unused.png'),
        iconName: '待使用'
      }, {
        id: '004',
        url: '/mypromotion',
        imgUrl: require('@/assets/icon/promotion.png'),
        iconName: '我的推广'
      }, {
        id: '005',
        url: '/used',
        imgUrl: require('@/assets/icon/used.png'),
        iconName: '已使用'
      }]
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    margin: .5rem
    height: 42.2%vw
    background: #fff
    border-radius: .8rem
    .order
      height: 12%vw
      padding: 0 .5rem
      .myorder
        line-height: 12%vw
        font-size: 1rem
      .more
        float: right
        line-height: 12%vw
    .icon
      position: relative
      float: left
      width: 20%
      height: 0
      padding-bottom: 20%
      margin-top: .8rem
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .6rem
        box-sizing: border-box
        padding: .6rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-name
        position: absolute
        left: 0
        right: 0
        bottom: -.5rem
        height: 1rem
        line-height: 1rem
        text-align: center
        color: #000
</style>
