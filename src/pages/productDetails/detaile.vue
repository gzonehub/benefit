<template>
  <div class="detaile">
    <div class="wrap">
      <img class="swiper-img" :src="storeInfo.image"/>
    </div>
    <div class="activity">
      <p class="title">活动详情</p>
      <div class="border"></div>
      <div class="list">
        <img class="img" src="">
        <p class="text">为你烤律撸串公司为你烤律撸串公司为你烤律撸串公司为你烤律撸串公司</p>a
      </div>
    </div>

    <Productinfo :storeInfo='storeInfo'/>
    <TabBar/>
    <Precautions/>
    <Merchant/>
  </div>
</template>

<script>
    import Productinfo from './components/productinfo'
    import Img from './components/img'
    import Precautions from './components/precautions'
    import Merchant from './components/merchant'
    import Activity from './components/activitydetails'
    // import Purchase from './components/purchase'
    import TabBar from './components/tabbar'

    import {isWeixin} from "@utils/index"
    import {mapGetters} from "vuex"
    import {
        getProductDetail,
        postCartAdd,
        getCartCount,
        getProductCode
    } from "@api/store"

    export default {
        name: 'Detaile',
        components: {
            Img,
            Productinfo,
            Precautions,
            Merchant,
            Activity,
            TabBar
        },
        data() {
            return {
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
            }
        }
    }
</script>

<style>
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
</style>
