<template>
  <div class="app-wrapper-footer">
    <div class="footer-link">
      <a class="footer-link-be"></a>
      <a class="footer-link-dribble"></a>
      <a class="footer-link-weibo"></a>
      <a class="footer-link-twiter"></a>
      <a class="footer-link-more"></a>
    </div>
    <div class="copyright">
      <p>© 2017-2018 <b>CASTLING</b></p>
      <p>All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app-wrapper-footer
  padding: 0.4rem 0 0.25rem 0
  text-align: center
  .footer-link
    margin-bottom: 0.1rem
    font-size: 0
    a
      width: 0.22rem
      height: 0.22rem
      display: inline-block
      background-repeat: no-repeat;
      background-size: cover;
      margin-left: 7px;
      margin-right: 7px;
      &.footer-link-be
        background-image: url('../../../assets/link/be.png')
      &.footer-link-dribble
        background-image: url('../../../assets/link/dribble.png')
      &.footer-link-weibo
        background-image: url('../../../assets/link/weibo.png')
      &.footer-link-twiter
        background-image: url('../../../assets/link/twiter.png')
      &.footer-link-more
        background-image: url('../../../assets/link/more.png')
  .copyright
    font-size: 0.12rem
    color: #000
    letter-spacing: 0.8px
    line-height: 0.15rem
</style>
