<template>
  <div class="mine">
    <div class="header">我的</div>
    <div class="user">
      <img class="card" src="../../assets/icon/card.png" >
      <div class="userinfo">
          <img class="img" :src="userImg" alt="">
          <span class="username">NO.000001</span>
      </div>
    </div>
    <Icons />
    <div class="promotion"  >
      <div class="list" v-for="item in buyList" :key="item.id" @click="handleClick">
        <img class="promotion-img" :src="item.imgUrl" alt="">
        <p class="store">{{item.store}}</p>
        <div class="product">
          <p class="product-theme"><span class="product-project">{{item.project}}</span>{{item.theme}}</p>
          <div class="product-buy"  >
             <span class="pripc">{{item.pripc}}</span>
             <p class="origin">{{item.origin}}</p>
             <p class="buy">立即抢购</p>
             <p class="people">{{item.people}}人购买</p>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <Bar />
   </div>
</template>

<script>
import Icons from '@/components/mine_icons'
import Bar from '@/components/Bar'
import axios from 'axios'
export default {
  name: 'Mine',
  components: {
    Icons,
    Bar
  },
  data () {
    return {
      userData: {},
      userImg: require('../../assets/icon/demo1.png'),
      buyList: [{
        'id': '0001',
        'imgUrl': 'https://img.meituan.net/msmerchant/ac61293a601efefe2468b1fa0f4022b3151061.jpg',
        'store': '下城区龙游路12号',
        'project': '美食券',
        'theme': '【米能儿童体智中心】9.9元购价值1350元课程9.9元购价值1350元课程',
        'pripc': '9.9',
        'origin': '1350',
        'people': '31'
      }, {
        'id': '0002',
        'imgUrl': 'https://p0.meituan.net/660.500/merchantpic/2c21e4ae5a927b388e340d79f6d801c51815374.jpg',
        'store': '余杭区崇贤镇',
        'project': '亲子券',
        'theme': '【水果采摘基地】水果采摘基地水果采摘基地水果采摘基地水果采摘基地水果采摘基地水果采摘基地',
        'pripc': '59',
        'origin': '199',
        'people': '188'
      }, {
        'id': '0003',
        'imgUrl': 'https://p0.meituan.net/dpmerchantpic/0df4b15cdcca3335676a7155566841ed231538.jpg',
        'store': '西湖区天目山路',
        'project': '观影券',
        'theme': '【三米能儿童体智中心】9.9元购价值1350元课程西湖区天目山路西湖区天目山路',
        'pripc': '120',
        'origin': '39.9',
        'people': '9',
        'title': '杭城首家，刷爆ins小红书的百年名店，它是火遍Instagram的合照利器，超高颜值の网红甜点，轻奢、贵气、高颜值，成为社交软件上吸引眼球的一大杀器ins上的画风都是这样的',
        'disc': '19.9元购原价55元的套餐'
      }]
    }
  },
  mounted () {
    this.ajaxgetInfo()
  },
  methods: {
    handleClick () {
      this.$router.push('/detaile')
    },
    ajaxgetInfo () {
      axios.get(' https://dtc.shibida2018.com/ebapi/user_api/my.html').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      console.log('成功获取用户信息数据')
      console.log(res)
    }
  }
}
</script>

<style scoped>
  .mine{
    background: #eee !important
  }
  .header{
    height: 2.2rem;
    background: #1b1b1b;
    color: #ffffff;
    text-align:center;
    font-size: 1.1rem;
    line-height: 2.2rem;
  }

  .user{
    position: relative;
    margin: .5rem;
  }
    
  .card{
    width: 100%;
    height: 42.2%vw;
  }
    
  .userinfo{
    position: absolute;
    top : 50%;
    left: 9%;
  }
    
  .img{
    width: 16.4%;
    height: 16.4%;
    border-radius: 50%;
    border: .04rem solid #fff;
    padding: .1rem;
  }
    
  .username{
    position: absolute;
    top : 40%;
    left: 24%;
    color: #ffffff;
    font-size: 1rem;
  }
  
  .promotion{
    margin: .5rem;
  }
    
  .list{
    margin-top: .5rem;
    height: 19.5rem;
    background: #fff;
    border-radius: .6rem;
  }
      
  .promotion-img{
    width: 100%;
    height: 11rem;
    border-radius: .6rem .6rem 0 0;
  }
    
  .store{
    font-size: .5rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
  }
    
  .product{
    margin: 0 .5rem 5rem;
  }
        
  .product-project{
    background: #ffd940;
    padding: 0.2rem;
    font-size: .5rem;
  }
    
  .product-theme{
    font-size: 1rem;
    font-weight: 500;
    height: 3rem;
    line-height: 1.5rem;
    overflow: hidden;
  }
    
  .product-buy{
    position: relative;
    height: 3.8rem;
  }
          
  .pripc{
    position: absolute;
    bottom: 1.6rem;
    left: .5rem;
    font-size: 1.2rem;
    color: #fb6969;
  }
            
  .buy{
    position: absolute;
    bottom: 1.6rem;
    right: .5rem;
    padding: .35rem;
    background: #fb6969;
    border-radius: .6rem;
    color: #fff;
  }
    
  .origin{
    position: absolute;
    bottom: .5rem;
    left: .5rem;
    text-decoration:line-through;
  }
            
  .people{
    position:absolute;
    bottom: .5rem;
    right: .5rem;
    color: #81807c;
  }
    
  
    
</style>
