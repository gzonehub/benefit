<template>
  <div class="search">
    <SearchHead />
    <Area />
    <Hot />
  </div>
</template>

<script>
import SearchHead from './header'
import Area from './area'
import Hot from './hot'
export default {
  name: 'Search',
  components: {
    SearchHead,
    Area,
    Hot
  }
}
</script>
<style lang="stylus" scoped>
</style>
