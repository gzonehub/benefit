<template>
  <div class="mypromotion">
    <div class="header">我的推广</div>
    <div class="commission">
      <div class="list">
        <div class="midd">
          <div class="current-commission">当前佣金（元）</div>
          <div class="current-commission-many">1233.99</div>
          <div class="button">提现记录</div>
        </div>
        <div class="record">
          <div class="income">
            <div class="title">昨日收益</div>
            <div class="title num">2.2666</div>
          </div>
          <div class="income">
            <div class="title">累计已提</div>
            <div class="title num">122.26</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="icons">
        <router-link :to="'/mypromotion/poster'">
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="@assets/icon/erweima.png"/>
            </div>
            <p class="icon-name">推广名片</p>
          </div>
        </router-link>

        <router-link :to="'/mypromotion/PromoterList'">
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="@assets/icon/tongji.png"/>
            </div>
            <p class="icon-name">推广人统计</p>
          </div>
        </router-link>

        <router-link :to="'/mypromotion/CommissionDetails'">
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="@/assets/icon/qiandai.png"/>
            </div>
            <p class="icon-name">佣金明细</p>
          </div>
        </router-link>

        <router-link :to="'/mypromotion/PromoterOrder'">
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="@/assets/icon/myorder.png"/>
            </div>
            <p class="icon-name">推广人订单</p>
          </div>
        </router-link>
      </div>
      <div class="submit">立即提现</div>
    </div>
  </div>
</template>

<script>
    import Icons from '@/components/promotion_icons'

    export default {
        name: 'MyPromotion',
        components: {
            Icons
        }
    }
</script>

<style lang="stylus" scoped>
  .mypromotion {
    height: 100%
    background: #eee !important
  }

  .header {
    height: 2.2rem
    background: #1b1b1b
    color: #ffffff
    text-align: center
    font-size: 1.1rem
    line-height: 2.2rem
  }

  .commission {
    margin: .5rem
  }

  .list {
    position: relative
    height: 77.6% vw
    border-radius: .6rem
    background: rgba(251, 72, 19, 1)
  }

  .midd {
    padding: 2rem 0
  }

  .current-commission {
    text-align: center
    font-size: 1rem
    font-weight: 600
    color: #fff
  }

  .current-commission-many {
    position: absolute
    top: 17.5%
    left: 28%
    right: 29.2%
    bottom: 60.8%
    width: 41.5%
    text-align: center
    margin: 2rem 0
    font-size: 1.6rem
    font-weight: 600
    color: #fff
  }

  .button {
    position: absolute
    top: 47.5%
    left: 35.5%
    right: 37.5%
    bottom: 39.7%
    width: 25%
    height: 5% vw
    line-height: 5% vw
    text-align: center
    font-size: .8rem
    color: #fff
    padding: .3rem
    border: .05rem solid #ffffff
    border-radius: 1rem
  }

  .record {
    display: flex
    flex-direction: row
    justify-content: space-around
  }

  .income {
    margin-top: 38% vw
    display: flex
    flex-direction: column
  }

  .title {
    text-align: center
    margin: .5rem
    font-size: .6rem
    color: #ffffff
  }

  .num {
    font-size: 1rem
  }


  .box {
    position: relative;
    height: 126% vw;
    background: #eee;
  }

  .box .icons {
    margin: .5rem;
    height: 32% vw;
    background: #fff;
    border-radius: .8rem;
  }

  .box .icons .icon {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    margin-top: .8rem;
  }

  .box .icons .icon .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .6rem;
    box-sizing: border-box;
    padding: 1.6rem;
  }

  .box .icons .icon .icon-img .icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }

  .box .icons .icon .icon-name {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #000;
  }

  .submit {
    background: #cccccc;
    position: absolute;
    left: .5rem;
    right: .5rem;
    bottom: 38%;
    height: 2rem;
    margin: 0 .5rem;
    background: rgba(251, 72, 19, 1);
    line-height: 2rem;
    text-align: center;
    border-radius: 1rem;
    font-size: 1rem;
    color: #fff;
  }
</style>
