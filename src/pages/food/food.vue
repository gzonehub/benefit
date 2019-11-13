<template>
  <div class='food'>
    <Recommendation :swiperData='swiperRes'/>
    <Buying />
    <Bar />
  </div>
</template>

<script>
import Recommendation from './components/recommendation'
import Buying from './components/buying'
import Bar from '../common/Bar'

export default {
  name: 'Food',
  components: {
    Recommendation,
    Buying,
    Bar
  },
  // <img :src='imgUrl'/>
  data () {
    return {
      swiperData: [],
      buyingData: []
    }
  },
  mounted () {
    let that = this
    getFooData (this.$route.params.id).then(res=>{
      that.swiperData = res.xxxx;
      that.$set(that, 'banner', res.data.banner);
      that.$set(that, 'menus', res.data.menus);
    })
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
