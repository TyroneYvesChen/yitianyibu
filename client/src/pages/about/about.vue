<template>
  <y-layout menu="about">
    <div class="about-wrapper-main">
      <div class="about-header">
        <img src="../../assets/about/cat@2x.png" />
        <span>“HI,I’am Dinan”</span>
      </div>
      <div class="about-main">
        <p>I am a designer, living in the interior of China, I like painting, reading, Cat, cooking.</p>
        <div class="about-main-images">
          <img src="../../assets/about/a1.png" />
          <img src="../../assets/about/a2.png" />
          <img src="../../assets/about/a3.png" />
        </div>
        <p class="about-main-user">Follow me @castling</p>
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
.about-wrapper-main
  width: 6.45rem
  margin: 0 auto
  .about-header
    font-size: 0
    margin-top: 0.46rem
    margin-bottom: 0.88rem
    img
      width: 1.09rem
      height: 0.95rem
      vertical-align: middle
    span
      font-family: PingFangSC-Semibold
      font-size: 0.64rem
      color: #000000
      letter-spacing: 0
      vertical-align: middle
      line-height: 0.9rem
      margin-left: 0.45rem
      position: relative
      &:after
        content: ''
        display: block
        position: absolute
        width: 0.72rem
        height: 0.08rem
        background-color: #000
        bottom: -0.14rem
        right: 0.07rem
  .about-main
    font-family: PingFangSC-Regular
    font-size: 0.18rem
    color: #191919
    letter-spacing: 0
    margin-bottom: 2.4rem
    .about-main-user
      font-size: 0.2rem
    .about-main-images
      font-size: 0
      text-align: center
      img
        width: 0.93rem
        height: 0.67rem
        margin: 0.5rem
</style>
