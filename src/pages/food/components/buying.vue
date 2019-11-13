<template>
  <div class="buying">
    <div class="column">优选好店</div>
    <div class="list">
      <div v-for="item in buyList" :key="item.id">
          <img class="img" :src="item.imgUrl" alt="" >
          <p class="theme">{{item.theme}}</p>
          <p class="disc">商品介绍9.9元9.9元购价值1350元课程西湖区天目山路西湖区天目山购价值1350元课程西湖区天目山路西湖区天目山</p>
          <div class="pro"  @click="handleJump">
             <span class="pripc ">{{item.pripc}}</span>
             <span class="origin ">市场价：{{item.origin}}</span>
             <span class="buy">立即抢购</span>
             <span class="people">{{item.people}}人购买</span>
          </div>
      </div>
    </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
  </div>
</template>

<script>
export default {
  name: 'Buying',
  data () {
    return {
      num: 0,
      buyList: [{
        'id': '0001',
        'imgUrl': 'https://img.meituan.net/msmerchant/ac61293a601efefe2468b1fa0f4022b3151061.jpg',
        'store': '下城区龙游路12号',
        'project': '美食',
        'theme': '【米能儿童体智中心】9.9元购价值1350元课程9.9元购价值1350元课程',
        'pripc': '9.9',
        'origin': '1350',
        'people': '31'
      }, {
        'id': '0002',
        'imgUrl': 'https://p0.meituan.net/660.500/merchantpic/2c21e4ae5a927b388e340d79f6d801c51815374.jpg',
        'store': '余杭区崇贤镇',
        'project': '亲子',
        'theme': '【水果采摘基地】水果采摘基地水果采摘基地水果采摘基地水果采摘基地水果采摘基地水果采摘基地',
        'pripc': '59',
        'origin': '199',
        'people': '188'
      }, {
        'id': '0003',
        'imgUrl': 'https://p0.meituan.net/dpmerchantpic/0df4b15cdcca3335676a7155566841ed231538.jpg',
        'store': '西湖区天目山路',
        'project': '美食',
        'theme': '【三米能儿童体智中心】9.9元购价值1350元课程西湖区天目山路西湖区天目山路',
        'pripc': '120',
        'origin': '39.9',
        'people': '9',
        'title': '杭城首家，刷爆ins小红书的百年名店，它是火遍Instagram的合照利器，超高颜值の网红甜点，轻奢、贵气、高颜值，成为社交软件上吸引眼球的一大杀器ins上的画风都是这样的',
        'disc': '19.9元购原价55元的套餐'
      }]
    }
  },
  methods: {
    handleJump () {
      this.$router.push('/detaile')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .buying
    margin: .5rem
    .column
      margin-bottom: .5rem
      font-size: 1.1rem
      font-weight: bold
      color: #000
    .list
      position: relative
      margin-bottom: 1rem
      .img
        width: 100%
        height: 12rem
      .theme
        margin-top: .8rem
        font-size: 1rem
        font-weight: 500
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      .disc
        font-size: 0.2rem
        margin-top: 0.5rem
        font-weight: 500
        color: #81807c
        margin-bottom: 1rem
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      .pro
        position: relative
        padding-bottom: 4rem
        .pripc
          float: left
          font-size: 1.2rem
          color: #fb6969
        .buy
          float: right
          padding: .35rem
          background: #fb6969
          border-radius: .8rem
          color: #fff
        .origin
          position:absolute
          top: 2rem
          left: 0
          text-decoration:line-through
        .people
          position:absolute
          top: 2rem
          right: 0
          color: #81807c
</style>
