<template>
  <y-layout menu="plan">
    <p class="content-wrapper-title text-right">
      手帐
    </p>
    <p class="content-wrapper-desc text-right">
      用自己整理的教学文章集合来构成了这本计划预期的手帐。
    </p>
    <hr class="content-wrapper-line right"/>
    <div class="bm-panel content-plan-list clearfix">
      <router-link tag="a" class="content-plan-list-item shadow" v-for="(item, index) in 9" :key="index" to="/plan/n-crawler">
        <div class="content-plan-list-item-cover" style="background-image: url(http://yitianyibu.com/images/homepage/default/poster/small/9.jpg);">
          <div class="content-plan-list-item-header">
            <div class="content-plan-list-item-header-box">
              <span>Node: 爬虫</span>
            </div>
          </div>
        </div>
        <div class="content-plan-list-item-info text-shadow">
          <time>2017-04-06</time>
          <span class="right">8篇</span>
        </div>
      </router-link>
    </div>
  </y-layout>
</template>

<script>
import YLayout from 'components/layout/layout'
export default {
  components: {
    YLayout
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content-plan-list
  .content-plan-list-item
    display: block
    width: 49%
    float: left
    margin-bottom: 2%
    &:nth-child(2n)
      margin-left: 2%
    &:hover
      .content-plan-list-item-cover
        .content-plan-list-item-header
          background-color: rgba(255, 255, 255, 0.15)
          .content-plan-list-item-header-box
            span
              background-color: rgba(0, 0, 0, 1)
              &:after
                border-right: 3px solid rgba(0, 0, 0, 1)
                border-bottom: 3px solid rgba(0, 0, 0, 1)
              &:before
                border-left: 3px solid rgba(0, 0, 0, 1)
                border-top: 3px solid rgba(0, 0, 0, 1)
    .content-plan-list-item-info
      font-size: .14rem
      color: #838383
      padding: .1rem
      line-height: 0.2rem
    .content-plan-list-item-cover
      width: 100%
      height: 0
      padding-bottom: 44.57%
      background-size: cover
      background-position: center
      text-align: center
      position: relative
      .content-plan-list-item-header
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: rgba(255, 255, 255, 0.3)
        transition: background-color .15s linear
        .content-plan-list-item-header-box
          position: absolute
          height: 0.44rem
          margin-top: -0.22rem
          top: 50%
          width: 100%
          span
            color: #fff
            background-color: rgba(0, 0, 0, 0.7)
            line-height: 0.44rem
            font-size: 0.2rem
            transition: background-color .15s linear
            display: inline-block
            padding: 0 2%
            min-width: 50%
            position: relative
            &:after
            &:before
              content: ''
              display: block
              color: #fff
              border: 3px solid rgba(0, 0, 0, 0.7)
              z-index: 1
              position: absolute
              width: 75%
              height: 50%
              transition: border-color .15s linear
            &:before
              top: -6px
              left: -6px
              border-right: 3px solid transparent
              border-bottom: 3px solid transparent
            &:after
              bottom: -6px
              right: -6px
              border-left: 3px solid transparent
              border-top: 3px solid transparent
</style>