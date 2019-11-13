<template>
  <div class="pay">
    <div class="head" @click="handleClick">
      <img class="img" src="../.././assets/icon/fanhui.png" alt="" handleClick>
      <div class="searchtext" >提交订单</div>
    </div>
    <div class="details">
      <span class="order">订单详情</span>
      <span class="button one">支持订单转增</span>
      <span class="button two">不支持退款</span>
    </div>
    <div class="box"></div>
    <div class="orderinfo">
       <div class="order-list border-bottom">
        <img class="img" src="../.././assets/icon/dingdan.png" alt="">
        <div class="name" >订单信息</div>
       </div>
       <div class="product">
        <img class="product-img" src="../.././assets/icon/demo2.jpg" alt="">
        <p class="product-name" >商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
        <p class="product-origin">原价：909.00元/件</p>
       </div>
       <div class="product-info">
          <p class="info border-bottom">
            <span class="key">商品数量</span>
            <span class="value">1</span>
          </p>
          <p class="info border-bottom">
            <span class="key">商品总价</span>
            <span class="value">￥19.90</span>
          </p>
          <p class="info">
            <span class="key">应付总计</span>
            <span class="value payment">￥19.90</span>
          </p>
       </div>
    </div>
    <div class="box"></div>
    <div class="user">
       <div class="user-list border-bottom">
        <img class="img" src="../.././assets/icon/wode.png" alt="">
        <div class="name">收货人</div>
       </div>
       <div class="user-info">
          <p class="info border-bottom">
            <span class="key">姓名：</span>
            <input type="text" class="username" maxlength="10" placeholder="请输入联系姓名"  v-model="username">
          </p>
          <p class="info border-bottom">
            <span class="key">电话：</span>
            <input type="text" class="usertel" maxlength="11" placeholder="请输入联系电话"  v-model="usertel">
          </p>
          <el-button :plain="true" @click="openVn">消息提示</el-button>
       </div>
    </div>
    <div class="tabbar" >
      <div class="price">实付款：
          <span class="num">{{price}}</span>
      </div>
      <div class="pay" @click="handlePay">
        <p class="button">微信支付</p>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Pay',
  data () {
    return {
      price: '￥9.9',
      username: '',
      usertel: ''
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/detaile')
    },
    handlePay () {},
    open () {
      this.$message('这是一条消息提示')
    },
    openVn () {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, '用户名不能为空 '),
          h('', { style: 'color: teal' }, 'VNode')
        ])
      })
    }
    // handleClick () {
    //   console.log(this.username)
    //   console.log(this.usertel)
    //   this.HMmessages.show('默认效果')
    //   if (this.username === '') {
    //     console.log('用户名不能为空')
    //   } else if (this.usertel === '') {
    //     console.log('用户联系电话不能为空')
    //   }
    // }
  }
}
</script>
<style lang="stylus" scoped>
  .pay
    margin-top: .8rem
    .head
      margin: 1rem .5rem 1.4rem
      font-size: .9rem
      .img
        width: .8rem
        height: 1rem
        float: left
        margin-right: .3rem
        margin-right: .8rem
      .searchtext
        font-size: 1rem
        vertical-align: middle
    .details
      position: relative
      margin: 1rem .5rem 0
      padding-bottom: .8rem
      .button
        border-radius: .2rem
        padding: .3rem
      .one
        position: absolute
        bottom: .44rem
        right: 5rem
        background: green
        color: #fff
      .two
        position: absolute
        bottom: .44rem
        right: 0
        background: yellow
    .box
      width: 100%
      height: 1%vw
      background: #eee
    .orderinfo
      margin: 0 .5rem
      .order-list
        font-size: .75rem
        padding: .8rem 0
        .img
          width: .75rem
          height: .75rem
          float: left
          margin-right: .3rem
    .product
      margin: .5rem 0
      font-size: .75rem
      line-height: 1.2rem
      .product-img
        width: 4.6rem
        height: 4.6rem
        float: left
        margin-right: 1.6rem
      .product-name
        margin-bottom: 1rem
        color: #000
      .product-origin
        color: #ccc
    .product-info
      clear: both
      .info
        line-height: 2rem
        .value
          margin-left: 1rem
        .payment
          color: red
    .user
      margin: 0 .5rem
      .user-list
        font-size: .75rem
        padding: .8rem 0
        .img
          width: .75rem
          height: .75rem
          float: left
          margin-right: .3rem
      .user-info
        font-size: .75rem
        line-height: 1.2rem
        .info
          line-height: 2rem
          .username
            padding-bottom: .4rem
          .usertel
            padding-bottom: .4rem
    .tabbar
      position: fixed
      right: 0
      left: 0
      bottom: 0
      border-top: .01rem solid #eee
      z-index: 999
      background: #fff
      width: 100%
      height: 12%vw
      .price
        position: absolute
        top: 0
        left : 0
        bottom: 0
        width: 70%
        background: #ccc
        padding: 1rem .5rem
        .num
          color: red
      .pay
        position: absolute
        right: 0
        bottom: 0
        width: 30%
        height: 100%
        line-height: 100%
        background: green
        text-align:center
        color: #fff
      .button
        width: 100%
        height: 100%
        line-height: 100%
        margin: 1rem auto
</style>
