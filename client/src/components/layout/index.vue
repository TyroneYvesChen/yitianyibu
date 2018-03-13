<template>
  <div class="app-wrapper">
    <y-header :menu="menu"></y-header>
    <div class="fade-in">
      <slot></slot>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from 'components/layout/header'
import YFooter from 'components/layout/footer'

export default {
  components: {
    YFooter,
    YHeader
  },
  props: {
    menu: {
      type: String,
      default: 'index'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app-wrapper
  font-size: 0.14rem
.fade-in
  animation: fade-in .5s
@keyframes fade-in
  0%
    opacity: 0
    transform: translateY(20px)
  100%
    opacity: 1
    transform: translateY(0px)
.opacity-in
  animation: opacity .5s
@keyframes opacity
  0%
    opacity: 0
  100%
    opacity: 1
</style>
