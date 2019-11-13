<template>
  <div>
    <Header />
    <OrderList />
  </div>
</template>

<script>

import Header from './components/header'
import OrderList from './components/orderlist'
export default {
  name: 'Used',
  components: {
    Header,
    OrderList
  }
}
</script>

<style lang="stylus" scoped>
</style>
