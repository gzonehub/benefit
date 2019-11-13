<template>
  <div class="commission">
    <div class="list">
      <div class="midd">
          <div class="current-commission">当前佣金（元）</div>
          <div class="current-commission-many">1233.99</div>
          <div class="button">提现记录</div>
      </div>
      <div class="abc">
          <div class="income">
            <div class="title">昨日收益</div>
            <div class="title num">2.2666</div>
          </div>
          <div class="income">
            <div class="title">累计已提</div>
            <div class="title num">122.26</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Commission'
}
</script>

<style lang="stylus" scoped>
  .commission
    margin: .5rem
    .list
      position: relative
      height: 77.6%vw
      border-radius: .8rem
      background: rgba(251, 72, 19, 1)
      .midd
        padding: 2rem 0
        .current-commission
          text-align: center
          font-size: 1rem
          font-weight: 600
          color: #fff
        .current-commission-many
          position: absolute
          top: 17.5%
          left: 28%
          right: 29.2%
          bottom: 60.8%
          width: 41.5%
          text-align: center
          margin: 2rem 0
          font-size: 1.6rem
          font-weight: 600
          color: #fff
        .button
          position: absolute
          top: 47.5%
          left: 35.5%
          right: 37.5%
          bottom: 39.7%
          width: 25%
          height: 5%vw
          line-height: 5%vw
          text-align: center
          font-size: .8rem
          color: #fff
          padding: .3rem
          border: .05rem solid #ffffff
          border-radius: .8rem
      .abc
        display: flex
        flex-direction: row
        justify-content : space-around
        .income
          margin-top: 38%vw
          display: flex
          flex-direction: column
          .title
            text-align: center
            margin: .5rem
            font-size: .6rem
            color: #ffffff
          .num
            font-size: 1rem
</style>
