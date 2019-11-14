<template>
  <div class="commission-details" ref="container">
    <div class="promoterHeader bg-color-red">
      <div class="headerCon acea-row row-between-wrapper">
        <div>
          <div class="name">佣金明细</div>
          <div class="money">
            ￥<span class="num">{{ commission }}</span>
          </div>
        </div>
        <div class="iconfont icon-jinbi1"></div>
      </div>
    </div>
    <div class="sign-record" ref="content">
      <div class="list">
        <div class="item" v-for="(item, index) in info" :key="index">
          <div class="data">{{ item.time }}</div>
          <div class="listn" v-for="(val, indexn) in item.list" :key="indexn">
            <div class="itemn acea-row row-between-wrapper">
              <div>
                <div class="name line1">{{ val.title }}</div>
                <div>{{ val.add_time }}</div>
              </div>
              <div class="num" v-if="val.pm == 1">+{{ val.number }}</div>
              <div class="num font-color-red" v-if="val.pm == 0">
                -{{ val.number }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading :loaded="loaded" :loading="loading"></Loading>
  </div>
</template>
<script>
    import {getCommissionInfo, getSpreadInfo} from "@api/user";
    import Loading from "@components/Loading";

    export default {
        name: "CommissionDetails",
        components: {
            Loading
        },
        props: {},
        data: function () {
            return {
                info: [],
                commission: 0,
                where: {
                    page: 1,
                    limit: 3
                },
                types: 3,
                loaded: false,
                loading: false
            };
        },
        mounted: function () {
            this.getCommission();
            this.getIndex();
            this.$scroll(this.$refs.container, () => {
                this.loading === false && this.getIndex();
            });
        },
        methods: {
            getIndex: function () {
                let that = this;
                if (that.loading == true || that.loaded == true) return;
                that.loading = true;
                getCommissionInfo(that.where, that.types).then(
                    res => {
                        that.loading = false;
                        that.loaded = res.data.length < that.where.limit;
                        that.loadTitle = that.loaded ? "人家是有底线的" : "上拉加载更多";
                        that.where.page = that.where.page + 1;
                        that.info.push.apply(that.info, res.data);
                    },
                    error => {
                        that.$dialog.message(error.msg);
                    }
                );
            },
            getCommission: function () {
                let that = this;
                getSpreadInfo().then(
                    res => {
                        that.commission = res.data.commissionCount;
                    },
                    error => {
                        this.$dialog.message(error.msg);
                    }
                );
            }
        }
    };
</script>
<style>
  /*佣金明细*/
  .commission-details .promoterHeader .headerCon .money {
    font-size: 0.36rem;
  }

  .commission-details .promoterHeader .headerCon .money .num {
    font-family: 'GuildfordProBook 5';
  }

  /*签到记录、账单明细列表*/
  .sign-record .list .item .data {
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    font-size: 0.24rem;
    color: #666;
  }

  .sign-record .list .item .listn {
    background-color: #fff;
    font-size: 0.24rem;
    color: #999;
  }

  .sign-record .list .item .listn .itemn {
    height: 1.2rem;
    border-bottom: 1px solid #eee;
    padding-right: 0.3rem;
    margin-left: 0.3rem;
  }

  .sign-record .list .item .listn .itemn .name {
    width: 3.9rem;
    font-size: 0.28rem;
    color: #282828;
    margin-bottom: 0.06rem;
  }

  .sign-record .list .item .listn .itemn .num {
    font-size: 0.36rem;
    font-family: 'GuildfordProBook 5';
    color: #16ac57;
  }
</style>
