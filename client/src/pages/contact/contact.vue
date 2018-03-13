<template>
  <y-layout menu="contact">
    <div class="contact-wrapper-main">
      <div class="contact-title">CONTACT US</div>
      <div class="contact-desc">castling@foxmail.com</div>
      <div class="contact-from">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"/>
        <div class="contact-from-btn">Send</div>
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
.contact-wrapper-main
  width: 4.78rem
  margin: 0 auto
  text-align: center
  .contact-title
    font-family: PingFangSC-Semibold
    font-size: 0.3rem
    color: #000000
    letter-spacing: 0.68px
    line-height: 0.42rem
    margin-bottom: 0.17rem
    margin-top: 0.19rem
    position: relative
    &:after
      content: ''
      display: block
      position: absolute
      width: 0.31rem
      height: 0.04rem
      background-color: #000
      bottom: -0.04rem
      left: 50%
      margin-left: -0.15rem
  .contact-desc
    line-height: 0.17rem
    font-family: PingFangSC-Light
    font-size: 0.12rem
    color: #000000
    letter-spacing: 0.38px
    margin-bottom: 0.22rem
  .contact-from
    padding-bottom: 0.5rem
    textarea
    input
      width: 3.47rem
      height: 0.49rem
      font-family: PingFangSC-Regular
      font-size: 0.12rem
      color: #000
      border-bottom: 1px solid #000000
    textarea
      padding: 0.1rem 0
      height: 1.37rem
    .contact-from-btn
      background-color: #000000
      box-shadow: 0 2px 7px 2px rgba(138,131,131,0.50)
      border-radius: 0.25rem
      width: 2.84rem
      height: 0.5rem
      font-family: PingFangSC-Regular
      font-size: 0.18rem
      color: #ffffff
      letter-spacing: 0.3px
      text-align: center
      line-height: 0.5rem
      margin: 0.5rem auto 0
</style>
