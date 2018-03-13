<template>
  <div class="app-wrapper-header">
    <div class="app-wrapper-header-title">CASTLING</div>
    <div class="app-wrapper-header-caption">
      <span>GRAPHIC</span>
      <span>DESIGNER</span>
    </div>
    <ul class="app-wrapper-header-menus">
      <li v-for="(item, index) in menus" :key="index">
        <router-link tag="a" :class="{'on': menu === item.name}" :to="item.to">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: String,
      default: 'index'
    }
  },
  data () {
    return {
      menus: [{name: 'index', to: '/'},
        {name: 'about', to: '/about'},
        {name: 'portfolio', to: '/portfolio'},
        // {name: 'blog', to: '/blog'},
        {name: 'contact', to: '/contact'}]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app-wrapper-header
  text-align: center
  color: #000000
  padding-bottom: 0.28rem
  .app-wrapper-header-title
    font-family: Arial-Black
    font-size: 0.85rem
    line-height: 1.2rem
  .app-wrapper-header-caption
    font-family: PingFangSC-Light
    letter-spacing: 6.89px
    line-height: 0.16rem
    margin-top: -0.1rem
    margin-bottom: 0.47rem
    font-size: 0
    span
      font-size: 0.2rem
      margin-left: 0.25rem
      margin-right: 0.25rem
  .app-wrapper-header-menus
    font-size: 0
    li
      display: inline-block
      margin-left: 0.24rem
      margin-right: 0.24rem
      a
        display: block
        line-height: 0.2rem
        font-family: PingFangSC-Regular
        text-transform: uppercase
        font-size: 0.14rem
        letter-spacing: 0
        cursor: pointer
        &.on
        &:hover
          color: #50e3c2

</style>
