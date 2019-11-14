<template>
  <div class="promoter-order" ref="container">
    <div class="promoterHeader bg-color-red">
      <div class="headerCon acea-row row-between-wrapper">
        <div>
          <div class="name">累计推广订单</div>
          <div>
            <span class="num">{{ count }}</span
            >单
          </div>
        </div>
        <div class="iconfont icon-2"></div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="title acea-row row-column row-center">
          <div class="data">{{ item.time }}</div>
          <div>本月累计推广订单：{{ item.count ? item.count : 0 }}单</div>
        </div>
        <div class="listn">
          <div class="itenm" v-for="(val, indexn) in item.child" :key="indexn">
            <div class="top acea-row row-between-wrapper">
              <div class="pictxt acea-row row-between-wrapper">
                <div class="pictrue">
                  <img :src="val.avatar"/>
                </div>
                <div class="text line1">{{ val.nickname }}</div>
              </div>
              <div class="money">
                返佣：<span class="font-color-red"
              >￥{{ val.number ? val.number : 0 }}</span
              >
              </div>
            </div>
            <div class="bottom">
              <div><span class="name">订单号：</span>{{ val.order_id }}</div>
              <div><span class="name">下单时间：</span>{{ val.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading :loaded="loaded" :loading="loading"></Loading>
  </div>
</template>
<script>
    import {getSpreadOrder} from "../../../api/user";
    import Loading from "@components/Loading";

    export default {
        name: "PromoterOrder",
        components: {
            Loading
        },
        props: {},
        data: function () {
            return {
                list: [],
                where: {
                    page: 1,
                    limit: 15
                },
                loaded: false,
                loading: false,
                loadTitle: "",
                count: ""
            };
        },
        mounted: function () {
            this.getIndex();
            this.$scroll(this.$refs.container, () => {
                !this.loading && this.getIndex();
            });
        },
        methods: {
            getIndex: function () {
                let there = this;
                if (there.loaded == true || there.loading == true) return;
                there.loading = true;
                getSpreadOrder(there.where).then(
                    res => {
                        there.loading = false;
                        there.loaded = res.data.list.length < there.where.limit;
                        there.loadTitle = there.loaded ? "人家是有底线的" : "上拉加载更多";
                        there.where.page = there.where.page + 1;
                        there.list.push.apply(there.list, res.data.list);
                        there.count = res.data.count;
                    },
                    error => {
                        there.$dialog.message(error.msg);
                    },
                    300
                );
            }
        }
    };
</script>
<style>
  /*推广人订单*/
  .promoter-order .list .item .title {
    height: 1.33rem;
    padding: 0 0.3rem;
    font-size: 0.26rem;
    color: #999;
  }

  .promoter-order .list .item .title .data {
    font-size: 0.28rem;
    color: #282828;
    margin-bottom: 0.05rem;
  }

  .promoter-order .list .item .listn .itenm {
    background-color: #fff;
  }

  .promoter-order .list .item .listn .itenm ~ .itenm {
    margin-top: 0.12rem;
  }

  .promoter-order .list .item .listn .itenm .top {
    margin-left: 0.3rem;
    padding-right: 0.3rem;
    border-bottom: 1px solid #eee;
    height: 1rem;
  }

  .promoter-order .list .item .listn .itenm .top .pictxt {
    width: 3.2rem;
  }

  .promoter-order .list .item .listn .itenm .top .pictxt .text {
    width: 2.3rem;
    font-size: 0.3rem;
    color: #282828;
  }

  .promoter-order .list .item .listn .itenm .top .pictxt .pictrue {
    width: 0.66rem;
    height: 0.66rem;
  }

  .promoter-order .list .item .listn .itenm .top .pictxt .pictrue img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.03rem solid #fff;
    box-shadow: 0 0 0.1rem #aaa;
    -webkit-box-shadow: 0 0 0.1rem #aaa;
    -moz-box-shadow: 0 0 0.1rem #aaa;
    -o-box-shadow: 0 0 0.1rem #aaa;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .promoter-order .list .item .listn .itenm .top .money {
    font-size: 0.28rem;
  }

  .promoter-order .list .item .listn .itenm .bottom {
    padding: 0.2rem 0.3rem;
    font-size: 0.28rem;
    color: #666;
    line-height: 1.6;
  }

  .promoter-order .list .item .listn .itenm .bottom .name {
    color: #999;
  }
</style>
