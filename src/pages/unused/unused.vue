<template>
  <div class="unused">
     <Header />
     <UnusedList />
  </div>
</template>

<script>
import Header from './components/header'
import UnusedList from './components/unusedlist'
export default {
  name: 'Unused',
  components: {
    Header,
    UnusedList
  }
}
</script>

<style lang="stylus" scoped>
</style>
