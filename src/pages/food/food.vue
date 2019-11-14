<template>
  <div class="food">
    <div class="banner">
      <div class="left">
        <h2 class="column">精品推荐</h2>
        <p class="synopsis">下沙美食活动精品推荐</p>
      </div>
      <div class="right">
        <span class="current">1</span>
        /
        <span class="total">{{bastBanner.length}}</span>
      </div>
      <div class="wrap">
        <swiper v-if="bastBanner.length>1">
          <swiper-slide v-for='item of bastBanner' :key="item.id">
            <router-link :to="{path: '/detaile/' + item.url}">
              <img class="swiper-img" :src="item.img"/>
              <p class="title">{{item.title}}</p>
              <p class="disc">{{item.description}}</p>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="buying">
      <div class="column">优选好店</div>
      <div class="list">
        <div v-for="item in hotList" :key="item.index">
          <router-link :to="'/detaile/' + item.id">
            <img class="img" :src="item.image" alt="">
            <p class="theme">{{item.store_name}}</p>
            <p class="disc">{{item.keyword}}}</p>
            <div class="pro">
              <span class="pripc ">{{item.price}}</span>
              <span class="origin ">市场价：{{item.ot_price}}</span>
              <span class="buy">立即抢购</span>
              <span class="people">{{item.stock}}人购买</span>
            </div>
          </router-link>
        </div>
      </div>
      <br>
      <br>
      <br>
    </div>
    <Bar/>
  </div>
</template>

<script>
    import Bar from '@/components/Bar'
    import {getHomeData} from "@api/public"

    export default {
        name: 'Food',
        components: {
            Bar
        },
        data() {
            return {
                info: {
                    fastList: [],
                    firstList: []
                },
                hotList: [],
                bastList: [],
                bastBanner: [],
                likeInfo: [],
                lovely: [],
                benefit: [],
                couponList: []
            }
        },
        mounted() {
            let that = this;
            getHomeData()
                .then(res => {
                    that.$set(that, "info", res.data.info);
                    that.$set(that, "bastList", res.data.info.bastList);
                    that.$set(that, "hotList", res.data.info.hotList);
                    that.$set(that, "bastBanner", res.data.info.bastBanner);
                    that.$set(that, "likeInfo", res.data.likeInfo);
                    that.$set(that, "lovely", res.data.lovely);
                    that.$set(that, "benefit", res.data.benefit);
                    that.$set(that, "couponList", res.data.couponList);
                })
                .catch(() => {
                    console.log("***");
                });
        },
        methods: {
            handleClick() {
                this.$router.push('/detaile')
            }
        }
    }
</script>

<style scoped>
  .left {
    float: left;
    margin: .5rem;
  }

  .column {
    font-size: 1.1rem;
    font-weight: bold;
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
    font-size: 1rem
  }

  .total {
    font-size: .5rem
  }

  .wrap {
    clear: both;
    width: 100%;
    padding-bottom: .1rem;
  }

  .swiper-img {
    width: 100%;
    height: 12rem;
  }

  .title {
    padding: .5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .disc {
    padding: 0 .5rem;
    font-size: .1rem;
    line-height: 1rem;
    color: #81807c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .buying {
    margin: .5rem
  }

  .column {
    margin-bottom: .5rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: #000;
  }

  .list {
    position: relative;
    margin-bottom: 1rem;
  }

  .img {
    width: 100%;
    height: 12rem;
  }

  .theme {
    margin-top: .8rem;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .disc {
    font-size: 0.2rem;
    margin-top: 0.5rem;
    font-weight: 500;
    color: #81807c;
    margin-bottom: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
