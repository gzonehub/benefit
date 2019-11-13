<template>
  <div class='header'>
    <Header/>
    <Banner :swiperData='banner'/>
    <Explosion :explosionList='bastList'/>
    <Bar/>
  </div>
</template>

<script>
    import Header from './components/header';
    import Banner from './components/banner';
    import Explosion from './components/explosion';
    import Bar from '../common/Bar';
    import {isWeixin} from '@utils/index';
    import cookie from '@utils/store/cookie';
    import {getHomeData, getShare} from '@api/public';
    import {openShareAppMessage, openShareTimeline, ready} from '@libs/wechat';

    const HAS_COUPON_WINDOW = 'has_coupon_window';

    export default {
        name: 'Home',
        components: {
            Header,
            Banner,
            Explosion,
            Bar
        },
        data() {
            return {
                showCoupon: false,
                logoUrl: '',
                banner: [],
                menus: [],
                roll: [],
                activity: [],
                activityOne: {},
                info: {
                    fastList: [],
                    bastBanner: [],
                    firstList: []
                },
                bastList: [],
                likeInfo: [],
                lovely: [],
                benefit: [],
                couponList: [],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2000
                    },
                    loop: true,
                    speed: 1000,
                    observer: true,
                    observeParents: true
                }
            };
        },
        mounted() {
            let that = this;
            getHomeData()
                .then(res => {
                    that.logoUrl = res.logoUrl;
                    that.$set(that, 'banner', res.data.banner);
                    that.$set(that, 'menus', res.data.menus);
                    that.$set(that, 'roll', res.data.roll);
                    that.$set(that, 'activity', res.data.activity);
                    var activityOne = res.data.activity.shift();
                    that.$set(that, 'activityOne', activityOne);
                    that.$set(that, 'info', res.data.info);
                    that.$set(that, 'bastList',res.data.info.bastList);
                    that.$set(that, 'likeInfo', res.data.likeInfo);
                    that.$set(that, 'lovely', res.data.lovely);
                    that.$set(that, 'benefit', res.data.benefit);
                    that.$set(that, 'couponList', res.data.couponList);
                    this.showCoupon =
                        !cookie.has(HAS_COUPON_WINDOW) &&
                        res.data.couponList.some(coupon => coupon.is_use);
                })
                .catch(() => {
                    console.log('***');
                });
        },
        methods: {
            setOpenShare: function () {
                getShare().then(res => {
                    var data = res.data.data;
                    var configAppMessage = {
                        desc: data.synopsis,
                        title: data.title,
                        link: location.href,
                        imgUrl: data.img
                    };
                    var configTimeline = {
                        title: data.title,
                        link: location.href,
                        imgUrl: data.img
                    };
                    if (isWeixin() === true) {
                        ready().then(() => {
                            openShareAppMessage(configAppMessage).then(() => {
                            });
                            openShareTimeline(configTimeline).then(() => {
                            });
                        });
                    }
                });
            }
        }
    };
</script>

<style>
</style>
