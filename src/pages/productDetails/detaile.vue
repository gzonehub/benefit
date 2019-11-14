<template>
  <div class="detaile">
    <div class="wrap">
      <swiper v-if="swiperList.length>1">
        <swiper-slide v-for='item in swiperList' :key="item.id">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="buying">
      <!--      <div v-for="item in buyList" :key="item.id">-->
      <p class="theme">{{storeInfo.store_name}}</p>
      <div class="desc">
        <span class="pripc ">{{storeInfo.price}}元</span>
        <span class="origin ">市场价：{{storeInfo.ot_price}}</span>
        <span class="time">购买截至:{{storeInfo.unit_name}}</span>
        <span class="remaining">剩余{{storeInfo.stock}}份</span>
      </div>
      <!--      </div>-->
    </div>
    <div class="precautions">
      <p class="title">注意事项</p>
      <div class="border"></div>
      <p class="list">{{storeInfo.store_info}}</p>
    </div>
    <div class="merchant">
      <div class="header">
        <p class="title">商家信息</p>
        <div class="border"></div>
      </div>
      <div class="list">
        <img class="img" src="../../assets/icon/shangjia.png" alt="">
        <p class="text">商家名称: 为你烤律撸串公司</p>
      </div>
      <div class="merchant-list">
        <img class="img" src="../../assets/icon/shijian.png" alt="">
        <p class="text">营业时间: 16:30-次日02:00</p>
      </div>
      <div class="merchant-list">
        <img class="img" src="../../assets/icon/tel.png" alt="">
        <p class="text">联系电话: 为你烤律撸串公司</p>
        <span class="button">拨打</span>
      </div>
      <div class="merchant-list">
        <img class="img" src="../../assets/icon/ditu.png" alt="">
        <p class="text">商家地址为你烤律撸串公司商家地址为你烤律撸串公司商家地址为你烤律撸串公司</p>
        <span class="button">地图</span>
      </div>
    </div>
    <div class="activity">
      <p class="activity-title">活动详情</p>
      <div class="border"></div>
      <div class="activity-list">
        <!--        <img class="activity-img" src="../../assets/icon/demo2.jpg">-->
        <p class="activity-text" v-html="storeInfo.description"></p>
      </div>
    </div>
    <div class="tabbar">
      <div class="icon">
        <div class="icon-img">
          <img class="icon-img-content"/>
        </div>
        <p class="icon-desc">首页</p>
      </div>
      <div class="item" @click="setCollect">
        <div
          class="iconfont"
          :class="storeInfo.userCollect ? 'icon-shoucang1' : 'icon-shoucang'"
        ></div>
        <div>收藏</div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class="icon-img-content"/>
        </div>
        <div class="iconfont" :class="storeInfo.userCollect ? 'icon-shoucang1' : 'icon-shoucang'"></div>
        <div>分享</div>
      </div>
      <div class="buy" @click="">
        <p class="text">立即购买</p>
        <p class="price">19.90</p>
      </div>
    </div>
  </div>
</template>

<script>
    import TabBar from '@/components/tabbar'
    import {getProductDetail, postCartAdd, getCartCount, getProductCode} from "@api/store"
    import {getCoupon, getCollectAdd, getCollectDel} from "@api/user";

    export default {
        name: 'Detaile',
        components: {
            TabBar
        },
        data() {
            return {
                num: 0,
                swiperList: [],
                shareInfoStatus: false,
                weixinStatus: false,
                posterData: {
                    image: "",
                    title: "",
                    price: "",
                    code: ""
                },
                id: 0,
                storeInfo: {},
                couponList: [],
                attrTxt: "请选择",
                attrValue: "",
                cart_num: 1, //购买数量
                replyCount: "",
                replyChance: "",
                reply: [],
                priceName: 0,
                CartCount: 0,
                posters: false
            }
        },
        mounted: function () {
            this.id = this.$route.params.id
            this.productCon()
            // this.coupons()
            console.log(this.id)
        },
        methods: {
            //产品详情接口；
            productCon: function () {
                let that = this;
                getProductDetail(that.id)
                    .then(res => {
                        that.$set(that, "storeInfo", res.data.storeInfo);
                        that.$set(that, "swiperList", res.data.storeInfo.slider_image);
                        console.log(that.swiperList);
                        // that.$set(that.attr, "productAttr", res.data.productAttr);
                        // that.$set(that, "productValue", res.data.productValue);
                        that.$set(that, "replyCount", res.data.replyCount);
                        that.$set(that, "replyChance", res.data.replyChance);
                        that.reply = res.data.reply ? [res.data.reply] : [];
                        that.$set(that, "reply", that.reply);
                        that.$set(that, "priceName", res.data.priceName);
                        that.posterData.image = that.storeInfo.image_base;
                        if (that.storeInfo.store_name.length > 30) {
                            that.posterData.title =
                                that.storeInfo.store_name.substring(0, 30) + "...";
                        } else {
                            that.posterData.title = that.storeInfo.store_name;
                        }
                        that.posterData.price = that.storeInfo.price;
                        that.posterData.code = that.storeInfo.code_base;
                        // that.updateTitle();
                        // that.DefaultSelect();
                        // that.getCartCount();
                    })
                    .catch(res => {
                        that.$router.go(-1);
                    });
            },
            //收藏商品
            setCollect: function () {
                let that = this,
                    id = that.storeInfo.id,
                    category = "product";
                if (that.storeInfo.userCollect) {
                    getCollectDel(id, category).then(function () {
                        that.storeInfo.userCollect = !that.storeInfo.userCollect;
                    });
                } else {
                    getCollectAdd(id, category).then(function () {
                        that.storeInfo.userCollect = !that.storeInfo.userCollect;
                    });
                }
            }
        }
    }
</script>

<style scoped>
  .wrap {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: #eee;
  }

  .swiper-img {
    width: 100%;
  }

  .buying {
    margin: .5rem;
  }

  .theme {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  .desc {
    position: relative;
    padding-bottom: 4rem;
  }

  .pripc {
    float: left;
    font-size: 1.2rem;
    color: #fb6969;
  }

  .time {
    float: right;
    padding: .35rem;
    color: #000;
  }


  .origin {
    position: absolute;
    top: 2rem;
    left: 0;
    text-decoration: line-through;
  }

  .remaining {
    position: absolute;
    top: 2rem;
    right: 0;
    color: #81807c;
  }

  .precautions {
    margin: .5rem;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .border {
    width: 4.4rem;
    margin: .2rem auto 1.5rem;
    border-bottom: .16rem solid red;
  }

  .list {
    font-size: .9rem;
    line-height: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .merchant {
    margin: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .border {
    width: 4.4rem;
    margin: .2rem auto 1.5rem;
    border-bottom: .14rem solid red;
  }

  .merchant-list {
    position: relative;
    font-size: .9rem;
    line-height: 1.3rem;
    margin-bottom: 1rem;
  }

  .img {
    width: .9rem;
    height: .9rem;
    float: left;
    margin-right: .5rem;
  }

  .text {
    line-height: 1.3rem;
    margin-right: 2.2rem;
  }

  .button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: .2rem;
    padding: .05rem .4rem;
    background: #ff4400;
    color: #fff;
    border-radius: .3rem;
  }

  .activity {
    margin: .5rem .5rem 4rem;
  }

  .activity-title {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .activity-list {
    border: .05rem solid #ccc;
    border-radius: .8rem;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .1);
    -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, .1);
    -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, .1);
  }

  .activity-img {
    width: 100%;
    height: 10rem;
    border-radius: .8rem .8rem 0 0;
    margin-bottom: .1rem;
  }

  .activity-text {
    font-size: 1rem;
    font-weight: 500;
    margin: .8rem .5rem;
  }

  .detaile .tabbar {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    border-top: .01rem solid #eee;
    z-index: 9;
    background: #fff;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 14%;
  }

  .detaile .tabbar .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 20%;
    height: 0;
    padding-bottom: 12%;
    margin-top: .2rem;
    color: #000;
  }

  .detaile .tabbar .icon .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1rem;
    box-sizing: border-box;
    padding: .3rem;
  }

  .detaile .tabbar .icon .icon-img .icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }

  .detaile .tabbar .icon .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #999;
  }

  .detaile .tabbar .buy {
    position: absolute;
    left: 60%;
    top: 0;
    bottom: 0;
    right: 0;
    background: red;
    width: 40%;
    font-size: 1.1rem;
    color: #fff;
    text-align: center;
    padding: .5rem 0;
    font-weight: bold;
  }

  .detaile .tabbar .buy .text {
    margin-bottom: .4rem
  }

</style>
