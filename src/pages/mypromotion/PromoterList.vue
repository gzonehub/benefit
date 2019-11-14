<template>
  <div class="promoter-list" ref="container">
    <div class="header">
      <div class="promoterHeader bg-color-red">
        <div class="headerCon acea-row row-between-wrapper">
          <div>
            <div class="name">推广人数</div>
            <div>
              <span class="num">{{ first + second }}</span
              >人
            </div>
          </div>
          <div class="iconfont icon-tuandui"></div>
        </div>
      </div>
      <div class="nav acea-row row-around">
        <div
          class="item"
          :class="screen.grade == 0 ? 'on' : ''"
          @click="checkGrade(0)"
        >
          一级({{ first }})
        </div>
        <div
          class="item"
          :class="screen.grade == 1 ? 'on' : ''"
          @click="checkGrade(1)"
        >
          二级({{ second }})
        </div>
      </div>
      <div class="search acea-row row-between-wrapper">
        <form @submit.prevent="submitForm">
          <div class="input">
            <input placeholder="点击搜索会员名称" v-model="screen.keyword" />
            <span class="iconfont icon-guanbi"></span>
          </div>
        </form>
        <div class="iconfont icon-sousuo2"></div>
      </div>
    </div>
    <div class="list">
      <div
        class="sortNav acea-row row-middle"
        :class="fixedState === true ? 'on' : ''"
      >
        <div class="sortItem" @click="sort('childCount')">
          团队排序
          <img src="@assets/images/sort1.png" v-if="childCount == 1" />
          <img src="@assets/images/sort2.png" v-if="childCount == 2" />
          <img src="@assets/images/sort3.png" v-if="childCount == 3" />
        </div>
        <div class="sortItem" @click="sort('numberCount')">
          金额排序
          <img src="@assets/images/sort1.png" v-if="numberCount == 1" />
          <img src="@assets/images/sort2.png" v-if="numberCount == 2" />
          <img src="@assets/images/sort3.png" v-if="numberCount == 3" />
        </div>
        <div class="sortItem" @click="sort('orderCount')">
          订单排序
          <img src="@assets/images/sort1.png" v-if="orderCount == 1" />
          <img src="@assets/images/sort2.png" v-if="orderCount == 2" />
          <img src="@assets/images/sort3.png" v-if="orderCount == 3" />
        </div>
      </div>
      <div :class="fixedState === true ? 'sortList' : ''">
        <div
          class="item acea-row row-between-wrapper"
          v-for="(val, index) in spreadList"
          :key="index"
        >
          <div class="picTxt acea-row row-between-wrapper">
            <div class="pictrue"><img :src="val.avatar" /></div>
            <div class="text">
              <div class="name line1">{{ val.nickname }}</div>
              <div>加入时间: {{ val.time }}</div>
            </div>
          </div>
          <div class="right">
            <div>
              <span class="font-color-red">{{ val.childCount }}</span> 人
            </div>
            <div>{{ val.orderCount }} 单</div>
            <div>{{ val.numberCount ? val.numberCount : 0 }} 元</div>
          </div>
        </div>
      </div>
    </div>
    <Loading :loaded="loaded" :loading="loading"></Loading>
  </div>
</template>
<script>
import { getSpreadUser } from "../../../api/user";
import Loading from "@components/Loading";
export default {
  name: "PromoterList",
  components: {
    Loading
  },
  props: {},
  data: function() {
    return {
      fixedState: false,
      screen: {
        page: 1,
        limit: 15,
        grade: 0,
        keyword: "",
        sort: ""
      },
      childCount: 2,
      numberCount: 2,
      orderCount: 2,
      loaded: false,
      loading: false,
      spreadList: [],
      loadTitle: "",
      first: "",
      second: ""
    };
  },
  mounted: function() {
    this.getSpreadUsers();
    this.$scroll(this.$refs.container, () => {
      !this.loading && this.getSpreadUsers();
    });
  },
  watch: {
    "screen.sort": function() {
      this.screen.page = 0;
      this.loaded = false;
      this.loading = false;
      this.spreadList = [];
      this.getSpreadUsers();
    }
  },
  methods: {
    handleScroll: function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector(".header").clientHeight;
      if (scrollTop >= offsetTop) {
        this.fixedState = true;
      } else {
        this.fixedState = false;
      }
    },
    submitForm: function() {
      this.screen.page = 0;
      this.loaded = false;
      this.loading = false;
      this.spreadList = [];
      this.getSpreadUsers();
    },
    getSpreadUsers: function() {
      let that = this,
        screen = that.screen;
      if (that.loaded || that.loading) return;
      that.loading = true;
      getSpreadUser(screen).then(
        res => {
          that.loading = false;
          that.spreadList.push.apply(that.spreadList, res.data.list);
          that.loaded = res.data.list.length < that.screen.limit; //判断所有数据是否加载完成；
          that.loadTitle = that.loaded ? "人家是有底线的" : "上拉加载更多";
          that.screen.page = that.screen.page + 1;
          that.first = res.data.total;
          that.second = res.data.totalLevel;
        },
        error => {
          that.$dialog.message(error.msg);
        },
        300
      );
    },
    checkGrade: function(val) {
      if (val == this.screen.grade) return;
      else {
        this.screen.page = 1;
        this.screen.grade = val;
        this.loading = false;
        this.loaded = false;
        this.spreadList = [];
        this.getSpreadUsers();
      }
    },
    sort: function(types) {
      let that = this;
      switch (types) {
        case "childCount":
          if (that.childCount == 2) {
            that.childCount = 1;
            that.orderCount = 2;
            that.numberCount = 2;
            that.screen.sort = "childCount DESC";
          } else if (that.childCount == 1) {
            that.childCount = 3;
            that.orderCount = 2;
            that.numberCount = 2;
            that.screen.sort = "childCount ASC";
          } else if (that.childCount == 3) {
            that.childCount = 2;
            that.orderCount = 2;
            that.numberCount = 2;
            that.screen.sort = "";
          }
          break;
        case "numberCount":
          if (that.numberCount == 2) {
            that.numberCount = 1;
            that.orderCount = 2;
            that.childCount = 2;
            that.screen.sort = "numberCount DESC";
          } else if (that.numberCount == 1) {
            that.numberCount = 3;
            that.orderCount = 2;
            that.childCount = 2;
            that.screen.sort = "numberCount ASC";
          } else if (that.numberCount == 3) {
            that.numberCount = 2;
            that.orderCount = 2;
            that.childCount = 2;
            that.screen.sort = "";
          }
          break;
        case "orderCount":
          if (that.orderCount == 2) {
            that.orderCount = 1;
            that.numberCount = 2;
            that.childCount = 2;
            that.screen.sort = "orderCount DESC";
          } else if (that.orderCount == 1) {
            that.orderCount = 3;
            that.numberCount = 2;
            that.childCount = 2;
            that.screen.sort = "orderCount ASC";
          } else if (that.orderCount == 3) {
            that.orderCount = 2;
            that.numberCount = 2;
            that.childCount = 2;
            that.screen.sort = "";
          }
          break;
        default:
          that.screen.sort = "";
      }
    }
  }
};
</script>
<style>
  /*推广人列表*/
  .promoter-list .header{padding-bottom: 0.12rem;}
  .promoter-list .nav{background-color:#fff;height:0.86rem;line-height:0.86rem;font-size:0.28rem;color:#282828;border-bottom:1px solid #eee;}
  .promoter-list .nav .item{height:100%;}
  .promoter-list .nav .item.on{color:#e93323;border-bottom:0.05rem solid #e93323;}
  .promoter-list .search{width:100%;background-color:#fff;height:0.86rem;padding:0 0.3rem;}
  .promoter-list .search .input{width:6.3rem;height:0.6rem;border-radius:0.5rem;background-color:#f5f5f5;text-align:center;position:relative;}
  .promoter-list .search .input input{height:100%;font-size:0.26rem;width:6.2rem;text-align:center;}
  .promoter-list .search .input input::placeholder{color:#bbb;}
  .promoter-list .search .input .iconfont{position:absolute;right:0.28rem;color:#999;font-size:0.28rem;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);}
  .promoter-list .search .iconfont{font-size:0.4rem;color:#515151;}
  .promoter-list .list .sortNav{background-color:#fff;height:0.76rem;border-bottom:1px solid #eee;color:#333;font-size:0.28rem;}
  .promoter-list .list .sortNav.on{position: fixed;top: 0;left: 0;width: 100%;z-index: 5;}
  .promoter-list .list .sortNav .sortItem{text-align:center;flex:1;-webkit-flex:1;-o-flex:1;-ms-flex:1;}
  .promoter-list .list .sortNav .sortItem img{width:0.24rem;height:0.24rem;margin-left:0.06rem;vertical-align:-0.03rem;}
  .promoter-list .list .sortList{margin-top:0.76rem;}
  .promoter-list .list .item{background-color:#fff;border-bottom:1px solid #eee;height:1.52rem;padding:0 0.3rem 0 0.2rem;font-size:0.24rem;color:#666;}
  .promoter-list .list .item .picTxt{width:4.4rem;}
  .promoter-list .list .item .picTxt .pictrue{width:1.06rem;height:1.06rem;border-radius:50%;}
  .promoter-list .list .item .picTxt .pictrue img{width:100%;height:100%;border-radius:50%;border:0.03rem solid #fff;box-shadow:0 0 0.07rem #aaa;-webkit-box-shadow:0 0 0.07rem #aaa;-moz-box-shadow:0 0 0.07rem #aaa;-o-box-shadow:0 0 0.07rem #aaa;
    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
  .promoter-list .list .item .picTxt .text{width:3.04rem;font-size:0.24rem;color:#666;}
  .promoter-list .list .item .picTxt .text .name{font-size:0.28rem;color:#333;margin-bottom:0.13rem;}
  .promoter-list .list .item .right{width:2.4rem;text-align:right;font-size:0.22rem;color:#333;}
</style>
