<template>
  <div class="box">
    <div class="icons" >
      <div class="list">
          <router-link :to="item.url" v-for="item in iconList" :key="item.id">
             <div class="icon">
                 <div class="icon-img">
                   <img class="icon-img-content" :src="item.imgUrl" />
                 </div>
                 <p class="icon-name">{{item.iconName}}</p>
             </div>
          </router-link>
      </div>
    </div>
    <div class="submit">立即提现</div>
  </div>
</template>

<script>
// </router-link>
export default {
  name: 'Icons',
  data () {
    return {
      iconList: [{
        id: '001',
        url: '/collection',
        imgUrl: require('@/assets/icon/erweima.png'),
        iconName: '我的收藏'
      }, {
        id: '002',
        url: '/brand',
        imgUrl: require('@/assets/icon/tongji.png'),
        iconName: '品牌简介'
      }, {
        id: '003',
        url: '/unused',
        imgUrl: require('@/assets/icon/qiandai.png'),
        iconName: '待使用'
      }, {
        id: '004',
        url: '/mypromotion',
        imgUrl: require('@/assets/icon/myorder.png'),
        iconName: '我的推广'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
 .box
   position: relative
   height: 126%vw
   background: #eee
   .icons
     margin: .5rem
     height: 32%vw
     background: #fff
     border-radius: .8rem
     .icon
       position: relative
       float: left
       width: 25%
       height: 0
       padding-bottom: 25%
       margin-top: .8rem
       .icon-img
         position: absolute
         top: 0
         left: 0
         right: 0
         bottom: .6rem
         box-sizing: border-box
         padding: 1.6rem
         .icon-img-content
           display: block
           margin: 0 auto
           height: 100%
       .icon-name
         position: absolute
         left: 0
         right: 0
         bottom: 0
         height: 1rem
         line-height: 1rem
         text-align: center
         color: #000
   .submit
    background: #cccccc
    position: absolute
    left: .5rem
    right: .5rem
    bottom: 38%
    height: 8%vw
    margin: 0 .5rem
    background: rgba(251, 72, 19, 1)
    line-height: 8%vw
    text-align: center
    border-radius: 1rem
    font-size: 1rem
    color: #fff
</style>
