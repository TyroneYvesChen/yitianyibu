<template>
  <y-layout menu="index">
    <div class="app-wrapper-main">
      <a v-for="(item, index) in 1" :key="index" class="index-image">
        <img src="../../assets/temp/index.png">
      </a>
      <a class="index-image">
        <img src="../../assets/temp/shop.png">
      </a>
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
.app-wrapper-main
  width: 4.78rem
  margin: 0 auto
  .index-image
    display: block
    margin-bottom: 0.35rem
    img
      width: 100%
</style>
