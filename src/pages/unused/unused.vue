<template>
  <div class="used">
    <div class="head">
      <div class="headlist">
        <img class="head-img" src="@/assets/icon/fanhui.png" alt="" @click="handleReturn">
        <div class="head-text" >待使用</div>
      </div>
    </div>
    <div class="used-list" @click="handleClick">
    <div class="order-details border-bottom">
      <h2 class="column">订单编号：134432525245345</h2>
      <p class="more">下单时间：2019-10-08</p>
      <div class="activity" >
          <img class="img" src="https://p0.meituan.net/msmerchant/2c9878529ccbdb47849957a026cf0da51338116.jpg" alt="">
          <div class="theme">肉蟹煲套餐+手气红包</div>
          <p class="pripc">总额：{{pripc}}</p>
          <p class="quantity">数量：{{quantitynum}}</p>
      </div>
      <div class="button">未使用</div>
    </div>
    <div class="order-details border-bottom">
      <h2 class="column">订单编号：134432525245345</h2>
      <p class="more">下单时间：2019-10-08</p>
      <div class="activity" >
          <img class="img" src="https://p0.meituan.net/msmerchant/2c9878529ccbdb47849957a026cf0da51338116.jpg" alt="">
          <div class="theme">肉蟹煲套餐+手气红包</div>
          <p class="pripc">总额：{{pripc}}</p>
          <p class="quantity">数量：{{quantitynum}}</p>
      </div>
      <div class="button">未使用</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Unused',
  data () {
    return {
      pripc: 182.00,
      quantitynum: 5
    }
  },
  methods: {
    handleReturn () {
      this.$router.push('/mine')
    },
    handleClick () {
      this.$router.push('/detaile')
    }
  }
}
</script>

<style scoped>
  .head{
    margin-top: .8rem；
  }
   
  .headlist{
    margin: 1rem .5rem 1.4rem;
    font-size: .9rem;
  }

  .head-img{
    width: .6rem;
    height: 1rem;
    float: left;
    margin-right: .3rem;
    margin-right: .8rem;
  }
    
  .head-text{
    font-size: 1rem;
    vertical-align: middle;
  }

  .used-list{
    position: relative;
    margin-top: 1rem;
  }
      
  .order-details{
    margin: .5rem;
    padding-bottom: 3.6rem;
  }
    
  .column{
    float: left;
    font-size: .5rem;
    font-weight: 500;
    color: #000;
    margin-bottom: 1rem;
  }
    
  .more{
    float: right;
    font-size: .6rem;
    color: #000;
  }
    
  .activity{
    clear: both;
  }
          
  .img{
    width: 5rem;
    height: 5rem;
    float: left;
    margin-right: .6rem;
  }
            
  .theme{
    margin-bottom: 2.8rem;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
  }
    
  .pripc{
    float: left;
  }
    
  .quantity{
    float: right;
  }
    
  .button{
    position: absolute;
    top: 6.8rem;
    right: .5rem;
    background: green;
    padding: .4rem .8rem;
    border-radius: .8rem;
    color: #fff;
  }    
</style>
