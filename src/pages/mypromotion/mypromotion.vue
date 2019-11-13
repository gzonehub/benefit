<template>
    <div class="mypromotion">
        <Header />
        <Commission />
        <Icons />
    </div>
</template>

<script>
import Header from './components/header'
import Commission from './components/commission'
import Icons from './components/icons'
export default {
  name: 'MyPromotion',
  components: {
    Header,
    Commission,
    Icons
  }
}
</script>

<style lang="stylus" scoped>
    .mypromotion
      height: 100%
      background: #eee !important
</style>
