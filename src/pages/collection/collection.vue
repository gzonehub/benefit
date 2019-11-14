<template>
  <div class="collection">
    <div class="head">
      <div class="headlist">
        <img class="head-img" src="@/assets/icon/fanhui.png" alt="" @click="handleClick">
        <div class="head-text">我的收藏</div>
      </div>
    </div>
    <div class="order-list border-bottom" v-if="collectProductList.length > 0">
      <router-link
        :to="{ path: '/detail/' + item.pid }"
        class="item acea-row row-between-wrapper"
        v-for="(item, index) in collectProductList"
        :key="index"
      >
        <div class="activity border-bottom">
          <img class="img" :src="item.image" alt="">
          <div class="theme">{{ item.store_name }}</div>
          <p class="pripc">总额：
            <span class="num">{{item.pripc}}</span>
          </p>
          <div class="delete" @click.prevent="delCollection(index)">删除</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    import {getCollectUser, getCollectDel} from "@api/user";
    import Loading from "@components/Loading";

    export default {
        name: 'myScroll',
        components: {
            Loading
        },
        data() {
            return {
                page: 1,
                limit: 20,
                collectProductList: [],
                loadTitle: "",
                loading: false,
                loadend: false
            }
        },
        mounted() {
            this.get_user_collect_product();
            this.$scroll(this.$refs.container, () => {
                !this.loading && this.get_user_collect_product();
            });
        },
        methods: {
            handleClick() {
                this.$router.push('/mine')
            },
            get_user_collect_product: function () {
                let that = this;
                if (that.loading) return; //阻止下次请求（false可以进行请求）；
                if (that.loadend) return; //阻止结束当前请求（false可以进行请求）；
                that.loading = true;
                getCollectUser(that.page, that.limit).then(res => {
                    that.loading = false;
                    //apply();js将一个数组插入另一个数组;
                    that.collectProductList.push.apply(that.collectProductList, res.data);
                    that.loadend = res.data.length < that.limit; //判断所有数据是否加载完成；
                    that.page = that.page + 1;
                });
            },
            //删除收藏；
            delCollection: function (index) {
                let that = this,
                    id = that.collectProductList[index].pid,
                    category = that.collectProductList[index].category;
                getCollectDel(id, category).then(function () {
                    that.$dialog.toast({
                        mes: "删除收藏成功!",
                        callback: () => {
                            that.collectProductList.splice(index, 1);
                            that.$set(that, "collectProductList", that.collectProductList);
                        }
                    });
                });
            }
        }
    }
</script>

<style scoped>
  .head {
    margin-top: .8 rem；
  }

  .headlist {
    margin: 1rem .5rem 1.4rem;
    font-size: .9rem;
  }

  .head-img {
    width: .6rem;
    height: 1rem;
    float: left;
    margin-right: .3rem;
    margin-right: .8rem;
  }

  .head-text {
    font-size: 1rem;
    vertical-align: middle;
  }

  .order-list {
    margin: 1rem .5rem
  }

  .activity {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 6rem;
    margin-bottom: 1rem;
  }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 5rem;
    height: 5rem;
  }

  .theme {
    margin-left: 5.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
  }

  .pripc {
    margin: 3rem 5.5rem
  }

  .num {
    color: #f40
  }

</style>
