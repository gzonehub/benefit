<template>
  <div class="search">
    <div class="header">
      <div class="head">
        <img class="img-return" src="@/assets/icon/fanhui.png" alt="" @click="headleReturn">
          <span class="text">搜索</span>
      </div>
      <div class="searchbar">
        <img class="img-sousuo" src="@/assets/icon/sousuo.png" alt="">
        <input type="text" class="input" placeholder="商品/店铺/地点/口令">
        <span class="cancel">取消</span>
      </div>
    </div>

    <div class="area">
      <p class="area-name">进入专区</p>
      <div class="area-list">
        <div class="area-title" @click="headleClick">湖滨银泰</div>
        <div class="area-title">下沙</div>
        <div class="area-title">丁桥</div>
        <div class="area-title">中大银泰 新天地</div>
        <div class="area-title">运河</div>
        <div class="area-title">湖滨</div>
        <div class="area-title">下沙</div>
        <div class="area-title">丁桥</div>
        <div class="area-title">中大银泰 </div>
        <div class="area-title">运河钱江世纪城</div>
      </div>
    </div>

    <div class="hot">
    <p class="hot-name border-bottom">热门搜索</p>
    <div class="hot-list">
      <div class="hot-title border-bottom">
          <span class="left">9块9</span>
          <span class="midd"></span>
          <span class="right">即将售罄</span>
        </div>
    </div>
    <div class="hot-list">
      <div class="hot-title border-bottom">
          <span class="left">9块9</span>
          <span class="midd"></span>
          <span class="right">即将售罄</span>
        </div>
    </div>
    <div class="hot-list">
      <div class="hot-title border-bottom">
          <span class="left">9块9</span>
          <span class="midd"></span>
          <span class="right">即将售罄</span>
        </div>
    </div>
  </div>


    
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    headleReturn () {
      this.$router.push('/')
    },
    headleClick () {}
  }
}
</script>
<style scoped>
  .header{
    width: 100%;
    height: 5rem;
    background: #999;;
    overflow: hidden;
  }
    
  .head{
    margin: 1rem .5rem;
    font-size: .8rem;
    font-weight: bold;
  }
    
  .img-return{
    width: .6rem;
    height: 1rem;
    margin-right: .8rem;
  }
    
  .text{
    font-size: 1rem;
    padding-top: .3rem;
    vertical-align: middle;
  }
    
  .searchbar{
    position: relative;
    margin: 0 .5rem;
  }
      
  .img-sousuo{
    position: absolute;
    top: .42rem;
    left: .5rem;
    bottom: 2%vw;
    width: .8rem;
    height: .8rem;
  }
    
  .input{
    width: 80%;
    height: 1.6rem;
    border-radius: 2rem;
    padding-left: 1.8rem;
    margin-right: .3rem;
    background: #eee;
    margin-right: .6rem
  }
    
  .text{
    vertical-align: middle
  }

  .area{
    height: 7rem;
    border-bottom: .2rem solid #eee;
  }
    
  .area-name{
    margin-left: .5rem;
    padding: 1rem 0;
  }
    
  .area-list{
    margin: 0 .5rem 1rem;
    background: #666;
  }
  
    
  .area-title{
    float: left;
    padding: .3rem;
    background: #eee;
    margin: 0 .3rem .5rem;
    border-radius: .5rem;
  }

  .hot{
    height: 70%vw;
    margin: .5rem;
  }

  .hot-name{
    padding: .5rem 0 1rem
  }
    
  .hot-list{
    height: 2rem
  }
    
  .hot-title{
    line-height: 2rem
  }
    
  .left{
    margin-right: 40%
  }
    
  .midd{
    color: #999;
    margin-right: 1rem;
    border-left: .03rem solid #ccc;
  }
</style>
