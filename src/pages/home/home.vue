<template>
  <div class="index">
    <div class="header">
      <div class="input" @click="handleSearch">
        <img class="img" src="@/assets/icon/sousuo.png" alt="">
        云便利优惠券
      </div>
    </div>
    <div class='banner-conten'>
      <div class="banner">
        <div class="left">
          <h2 class="column">热门推荐</h2>
          <p class="synopsis">每日爆品，限时福利，精选指南</p>
        </div>
        <div class="right">
          <span class="current">{{index}}</span>
          /
          <span class="total">3</span>
        </div>
        <div class="wrap">
          <swiper @click="handleClick">
            <swiper-slide v-for='item of banner' :key="item.id">
              <router-link :to="'/detaile/' + item.id">
                <img class="swiper-img" :src="item.pic"/>
                <p class="title">{{item.store_name}}</p>
                <p class="disc">{{item.description}}</p>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="explosion-recommendation">
      <div class="box"></div>
      <h2 class="explosion-left column">本周爆款</h2>
      <span class="explosion-right synopsis">查看更多 ></span>
      <router-link to="/detaile">
        <div class="list">
          <div v-for="(item) in bastList" :key="item.id">
            <router-link :to="{path: '/detaile/' + item.id}">
              <img class="explosion-img" :src="item.image" alt="">
              <p class="store">{{item.keyword}}</p>
              <div class="dis">
                <span class="project">{{item.cate_name}}</span>
                <span class="theme">{{item.store_name}}</span>
              </div>
              <div class="pro">
                <span class="price num">{{item.price}}</span>
                <p class="origin price">{{item.ot_price}}</p>
                <p class="pricenum right">立即抢购</p>
                <p class="people right">{{item.sales}}人购买</p>
              </div>
            </router-link>
          </div>
        </div>
      </router-link>
      <br>
      <br>
      <br>
    </div>
    <Bar/>
  </div>
</template>

<script>
    import Bar from "@/components/Bar";
    import {isWeixin} from "@utils/index";
    import cookie from "@utils/store/cookie";
    import {getHomeData, getShare} from "@api/public";
    import {openShareAppMessage, openShareTimeline, ready} from "@libs/wechat";

    const HAS_COUPON_WINDOW = "has_coupon_window";

    export default {
        name: "Home",
        components: {
            Bar
        },
        data() {
            return {
                index: '1',
                showCoupon: false,
                logoUrl: "",
                banner: [],
                menus: [],
                roll: [],
                activity: [],
                activityOne: {},
                info: {
                    fastList: [],
                    bastBanner: [],
                    firstList: [],
                    bastList: []
                },
                bastList: [],
                likeInfo: [],
                lovely: [],
                benefit: [],
                couponList: [],
                swiperOption: {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2000
                    },
                    loop: true,
                    speed: 1000,
                    observer: true,
                    observeParents: true,
                    onSlideChangeEnd: swiper => {
                        this.index = swiper.realIndex + 1
                    }
                }
            };
        },
        mounted() {
            let that = this;
            getHomeData()
                .then(res => {
                    that.logoUrl = res.logoUrl;
                    that.$set(that, "banner", res.data.banner);
                    that.$set(that, "menus", res.data.menus);
                    that.$set(that, "roll", res.data.roll);
                    that.$set(that, "activity", res.data.activity);
                    var activityOne = res.data.activity.shift();
                    that.$set(that, "activityOne", activityOne);
                    that.$set(that, "info", res.data.info);
                    that.$set(that, "bastList", res.data.info.bastList);
                    that.$set(that, "likeInfo", res.data.likeInfo);
                    that.$set(that, "lovely", res.data.lovely);
                    that.$set(that, "benefit", res.data.benefit);
                    that.$set(that, "couponList", res.data.couponList);
                    // that.setOpenShare();
                    this.showCoupon =
                        !cookie.has(HAS_COUPON_WINDOW) &&
                        res.data.couponList.some(coupon => coupon.is_use);
                })
                .catch(() => {
                    console.log("***");
                });
        },
        methods: {
            // 搜索框的点击事件
            handleSearch() {
                this.$router.push('/search')
            },
            // 商品的点击事件
            handleClick() {
                this.$router.push('/detaile')
            },
            setOpenShare: function () {
                getShare().then(res => {
                    var data = res.data.data;
                    var configAppMessage = {
                        desc: data.synopsis,
                        title: data.title,
                        link: location.href,
                        imgUrl: data.img
                    };
                    var configTimeline = {
                        title: data.title,
                        link: location.href,
                        imgUrl: data.img
                    };
                    if (isWeixin() === true) {
                        ready().then(() => {
                            openShareAppMessage(configAppMessage).then(() => {
                            });
                            openShareTimeline(configTimeline).then(() => {
                            });
                        });
                    }
                });
            }
        }
    };
</script>

<style scoped>
  .header {
    height: 8rem;
    background: #41454e;
    padding-top: 1.1rem;
    color: #81807c;
  }

  .input {
    width: 90%;
    margin: 0 auto;
    padding-left: .5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 1rem;
  }

  .img {
    width: .8rem;
    height: .8rem;
  }

  .banner {
    position: absolute;
    top: 3.6rem;
    left: .6rem;
    right: .6rem;
    bottom: 0rem;
    border-radius: 1rem 1rem 0 0;
    height: 18.4rem;
    background: #fff;
  }

  .left {
    float: left;
    margin: .5rem;
  }

  .column {
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
  }

  .synopsis {
    font-size: 0.2rem;
    margin-top: 0.5rem;
    font-weight: 500;
    color: #81807c;
  }

  .right {
    float: right;
    margin: 1.1rem .5rem;
  }

  .current {
    font-size: 1rem;
  }

  .total {
    font-size: .5rem
  }

  .wrap {
    clear: both;
    margin: .2rem;
    padding-bottom: .5rem;
  }

  .swiper-img {
    width: 100%;
    height: 12rem;
  }

  .title {
    padding: .8rem 0 .4rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .disc {
    font-size: .1rem;
    color: #81807c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .explosion-recommendation {
    margin: .5rem
  }

  .box {
    height: 12.4rem;
    margin-bottom: 1rem;
  }

  .explosion-left {
    float: left;
    margin-bottom: .5rem;
  }

  .column {
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
  }

  .synopsis {
    float: right;
    font-size: 0.2rem;
    margin-top: 0.5rem;
    font-weight: 500;
    color: #81807c;
    padding-bottom: .5rem;
  }

  .activity {
    float: right;
    border: .08rem solid #ffd940;
    border-radius: .5rem;
    padding: .4rem;
  }

  .option {
    padding: 0 .2rem;
    float: left;
  }

  .active {
    color: #fff;
    background: #ffd940;
  }

  .explosion-list {
    clear: both;
    position: relative;
    margin-bottom: 1rem;
  }

  .explosion-img {
    width: 100%;
    height: 12rem;
  }

  .store {
    font-size: .2rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  .dis {
    margin-bottom: 1rem;
  }

  .project {
    background: #ffd940;
    padding: 0.2rem;
  }

  .theme {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  .pro {
    position: relative;
    padding-bottom: 4rem;
  }

  .pripc {
    float: left;
    font-size: 1.2rem;
    color: #fb6969;
  }

  .buy {
    float: right;
    padding: .35rem;
    background: #fb6969;
    border-radius: .8rem;
    color: #fff;
  }

  .origin {
    position: absolute;
    top: 2rem;
    left: 0;
    text-decoration: line-through;
  }

  .people {
    position: absolute;
    top: 2rem;
    right: 0;
    color: #81807c;
  }
</style>
