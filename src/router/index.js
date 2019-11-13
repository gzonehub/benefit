import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import Mine from '../pages/mine/mine'
import Food from '../pages/food/food'
import ProductDetails from '../pages/productDetails/detaile'
import Pay from '../pages/pay/pay'
import Search from '../pages/search/search'
import Brand from '../pages/brand/brand'
import MyPromotion from '../pages/mypromotion/mypromotion'
import Used from '../pages/used/used'
import Unused from '../pages/unused/unused'
import Collection from '../pages/collection/collection'
import Order from '../pages/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {needLogin: true}
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/detaile/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay,
      meta: {needLogin: true}
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/mypromotion',
      name: 'MyPromotion',
      component: MyPromotion,
      meta: {needLogin: true}
    }, {
      path: '/used',
      name: 'Used',
      component: Used,
      meta: {needLogin: true}
    }, {

      path: '/brand',
      name: 'Brand',
      component: Brand
    }, {
      path: '/unused',
      name: 'Unused',
      component: Unused,
      meta: {needLogin: true}
    }, {
      path: '/collection',
      name: 'Collection',
      component: Collection,
      meta: {needLogin: true}
    }, {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {needLogin: true}
    }]
})
