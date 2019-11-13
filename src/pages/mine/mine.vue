<template>
   <div class="mine">
      <Header />
      <UserInfo />
      <Icons />
      <MinePromotion />
      <Bar />
   </div>
</template>

<script>
import Header from './components/header'
import UserInfo from './components/userinfo'
import Icons from './components/icons'
import MinePromotion from './components/minepromotion'
import Bar from '../common/Bar'
import axios from 'axios'
export default {
  name: 'Mine',
  components: {
    Header,
    UserInfo,
    Icons,
    MinePromotion,
    Bar
  },
  data () {
    return {
      userData: {}
    }
  },
  mounted () {
    this.ajaxgetInfo()
  },
  methods: {
    ajaxgetInfo () {
      axios.get(' https://dtc.shibida2018.com/ebapi/user_api/my.html').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      console.log('成功获取用户信息数据')
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mine
    background: #eee !important
</style>
