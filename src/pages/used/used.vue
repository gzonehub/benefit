<template>
  <div>
    <Header />
    <UsedList />
  </div>
</template>

<script>
import Header from './components/header'
import UsedList from './components/usedlist'
export default {
  name: 'Used',
  components: {
    Header,
    UsedList
  }
}
</script>

<style lang="stylus" scoped>
</style>
