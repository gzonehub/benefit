<template>
  <div class="collection">
    <Header />
    <collectionlist />
  </div>
</template>

<script>
import Header from './components/header'
import collectionlist from './components/collectionlist'
export default {
  name: 'myScroll',
  components: {
    Header,
    collectionlist
  }
}
</script>

<style lang="stylus" scoped>
</style>
