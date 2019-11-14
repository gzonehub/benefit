<template>
  <div class="brand">
    <div class="head">
      <div class="headlist">
        <img class="head-img" src="@/assets/icon/fanhui.png" alt="" @click="handleClick">
        <div class="head-text" >品牌简介</div>
      </div>
    </div>
    <div class="about-brand">
      <h2 class="title">云便利介绍</h2>
      <div class="border"></div>
      <div class="Introduction">
        <p>"实惠消费在精选"七项承诺</p>
        <p>商店一般是指商品开架陈列，顾客自我服务，货款一次结算，以经营生鲜食品、日杂用品为主的经营商。是一种消费者自我服务、敞开式的自选售货的零售企业。</p>
      </div>
      <div class="list">
          <p class="list-title">1.初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，日本的超级日本的市场销售额已超过百货公司</p>
          <p class="list-desc">初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，多达七八千种，目前向综合服务发展，增设停车场，咖啡馆，俱乐部、电影院以及银行、保险、邮政等各种服务设施，发展很快，日本的超级市场销售额已超过百货公司。</p>
      </div>
      <div class="list">
          <p class="list-title">1.初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，日本的超级日本的市场销售额已超过百货公司</p>
          <p class="list-desc">初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，多达七八千种，目前向综合服务发展，增设停车场，咖啡馆，俱乐部、电影院以及银行、保险、邮政等各种服务设施，发展很快，日本的超级市场销售额已超过百货公司。</p>
      </div>
      <div class="list">
          <p class="list-title">1.初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，日本的超级日本的市场销售额已超过百货公司</p>
          <p class="list-desc">初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，多达七八千种，目前向综合服务发展，增设停车场，咖啡馆，俱乐部、电影院以及银行、保险、邮政等各种服务设施，发展很快，日本的超级市场销售额已超过百货公司。</p>
      </div>
      <div class="list">
          <p class="list-title">1.初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，日本的超级日本的市场销售额已超过百货公司</p>
          <p class="list-desc">初期的商店以食品为主，兼售少量杂货; 目前除上述外还兼管化妆品、文具、五金、服装等，多达七八千种，目前向综合服务发展，增设停车场，咖啡馆，俱乐部、电影院以及银行、保险、邮政等各种服务设施，发展很快，日本的超级市场销售额已超过百货公司。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  methods: {
    handleClick () {
      this.$router.push('/mine')
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

  .about-brand{
    margin: 1rem .5rem
  }
    
  .title{
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
  }
    
  .border{
    width: 2rem;
    height: .3rem;
    background: red;
    margin: .5rem auto;
  }
    
  .Introduction{
    font-size: .9rem;
    font-weight: 600;
    line-height: 1.2rem;
    margin-bottom: .5rem;
  }
    
  .list{
    margin-bottom: .5rem;
  }
    
  .list-title{
    font-size: .9rem;
    font-weight: 600;
    line-height: 1.2rem;
  }
   
  .list-desc{
    font-size: .5rem;
    line-height: 1rem;
  }
</style>
