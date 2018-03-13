<template>
  <y-layout menu="blog">
    <div class="blog-wrapper-main">
      <div class="blog-list">
        <router-link tag="div" class="blog-item" v-for="(item, index) in 8" :key="index" :to="'/blog/' + index">
          <div class="blog-item-title">我想要那么大36px的标题和那么长换行的标题，平芳粗体</div>
          <div class="blog-item-date">JAY28.2017</div>
          <img src="../../assets/temp/blog.jpg"/>
        </router-link>
        <div class="blog-list-more">
          Loadling More…
        </div>
      </div>
      <div class="blog-tags">
        <div class="blog-tags-title">ARCHIVE</div>
        <div class="blog-tags-tag" v-for="(item, index) in 5" :key="index">
          <span>Type something</span>
        </div>
      </div>
    </div>
  </y-layout>
</template>

<script>
import YLayout from 'components/layout'

export default {
  components: {
    YLayout
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.blog-wrapper-main
  width: 9.3rem
  margin: 0 auto
  font-size: 0
  margin-top: 0.21rem
  .blog-list
    width: 7.04rem
    display: inline-block
    vertical-align: top
    .blog-item
      margin-bottom: 0.7rem
      cursor: pointer
      .blog-item-title
        font-family: PingFangSC-Semibold
        font-size: 0.36rem
        color: #000000
        letter-spacing: 0
        line-height: 0.36rem
        width: 5.57rem
        position: relative
        margin-bottom: 0.52rem
        &:after
          content: ''
          display: block
          position: absolute
          width: 0.76rem
          height: 0.07rem
          background-color: #000000
          left: 0
          bottom: -0.32rem
      .blog-item-date
        font-family: PingFangSC-Regular
        font-size: 0.18rem
        color: #50e3c2
        letter-spacing: 0
        line-height: 0.25rem
        margin-bottom: 0.25rem
      img
        width: 100%
    .blog-list-more
      font-family: PingFangSC-Regular
      font-size: 0.12rem
      color: #858585
      letter-spacing: 0
      background-color: #ebebeb
      border-radius: 0.21rem
      width: 1.26rem
      height: 0.25rem
      line-height: 0.25rem
      text-align: center
      margin: 0.5rem auto 0.6rem
      cursor: pointer
  .blog-tags
    width: 1.89rem
    display: inline-block
    vertical-align: top
    font-size: 12px
    padding-left: 0.37rem
    .blog-tags-title
      font-family: PingFangSC-Semibold
      font-size: 0.18rem
      color: #000000
      letter-spacing: 0
      line-height: 0.25rem
      position: relative
      margin-bottom: 0.14rem
      &:after
        content: ''
        display: block
        position: absolute
        width: 0.5rem
        height: 0.05rem
        background-color: #000000
        left: 0
        bottom: -0.05rem
    .blog-tags-tag
      margin-top: 0.09rem
      margin-bottom: 0.09rem
      margin-left: 0.13rem
      line-height: 0.2rem
      height: 0.2rem
      span
        font-family: PingFangSC-Regular
        font-size: 0.12rem
        color: #000000
        letter-spacing: 0
        cursor: pointer
        position: relative
        &:after
          content: ''
          display: block
          position: absolute
          width: 120%
          height: 0
          background-color: #000
          top: 50%
          margin-top: -1px
          left: -10%
      &:hover
        padding-left: 0.14rem
        span
          font-size: 0.14rem
          &:after
            height: 2px

</style>
