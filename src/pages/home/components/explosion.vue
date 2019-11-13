<template>
  <div class="explosion-recommendation">
    <div class="box"></div>
    <h2 class="left column">本周爆款</h2>
    <span class="right synopsis">查看更多 ></span>
    <router-link to="/detaile">
      <div class="list">
        <div v-for="(item) in explosionList" :key="item.id">
          <router-link :to="{path: '/detaile/' + item.id}">
            <img class="img" :src="item.image" alt="">
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
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
    import {getCateName} from '@api/public';

    export default {
        data() {
            return {
                cate_name: ''
            }
        },
        name: 'Explosion',
        props: {
            explosionList: Array
        },
        methods: {
            getNum(index) {
                this.num = index
            },
            handleJump($id) {
                this.$router.push('/detaile/id=' + id)
            },
            getCateName(cate_id) {
                let that = this
                getCateName(cate_id).then(res => {
                    this.cate_name = res.data[0]
                }).catch(() => {
                    console.log('*');
                });
            }
        }
    }
</script>

<style>
  .explosion-recommendation {
    margin: .5rem;
  }

  .box {
    height: 12.4rem;
    margin-bottom: 1rem;
  }

  .left {
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


  .list {
    clear: both;
    position: relative;
    margin-bottom: 1rem;
  }


  .img {
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
    height: 3rem;
  }


  .price {
    position: absolute;
    left: 0;
  }


  .right {
    position: absolute;
    right: 0;
  }

  .people {
    margin-top: 1.8rem;
    color: #81807c;
  }

  .origin {
    margin-top: 1.8rem;
    text-decoration: line-through;
  }

  .num {
    font-size: 1rem;
    color: #fb6969;
  }

  .pricenum {
    padding: .35rem;
    background: #fb6969;
    border-radius: .8rem;
    color: #fff;
  }
</style>
