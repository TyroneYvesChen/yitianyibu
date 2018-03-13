<template>
  <y-layout menu="portfolio">
    <div class="portfolio-wrapper-main">
      <div class="portfolio-tags">
        <span>ALL</span>
        <span>UI</span>
        <span>Illustration</span>
        <span>ICON</span>
        <span>Animation</span>
        <span>Modeling</span>
      </div>
      <div class="portfolio-list">
        <div class="portfolio-list-item" v-for="(item, index) in 6" :key="index" @click="openModal(index)">
          <img src="../../assets/temp/portfolio.png" />
          <h2>Type something</h2>
          <h4>28.Jay.2017</h4>
          <h6>Web 设计,交互设计,插画</h6>
        </div>
        <div class="portfolio-list-more">
          Loadling More…
        </div>
      </div>
    </div>
    <div v-if="modal" class="portfolio-modal-wrapper">
      <div class="portfolio-modal-cover" @click="closeModal"></div>
      <div class="portfolio-modal-panel">
        <div class="portfolio-modal-panel-left">
          <img src="../../assets/temp/portfolio.png" />
          <img src="../../assets/temp/portfolio.png" />
          <img src="../../assets/temp/portfolio.png" />
        </div>
        <div class="portfolio-modal-panel-right">
          <div class="portfolio-modal-panel-title">
            Shoping made personal-IKEA online这是标题，两行的
          </div>
          <div class="portfolio-modal-panel-view">
            853view
          </div>
          <div class="portfolio-modal-panel-date">
            28Jay.2017
          </div>
          <div class="portfolio-modal-panel-color">
            <span style="background-color: #CDF9FD;"></span>
            <span style="background-color: #91E2F9;"></span>
            <span style="background-color: #4782D9;"></span>
            <span style="background-color: #2842A2;"></span>
            <span style="background-color: #F78A74;"></span>
            <span style="background-color: #D8D8D8;"></span>
          </div>
          <div class="portfolio-modal-panel-tool">
            <i class="portfolio-icon icon-ae"></i>
            <i class="portfolio-icon icon-pr"></i>
            <i class="portfolio-icon icon-ps"></i>
            <i class="portfolio-icon icon-ai"></i>
          </div>
          <div class="portfolio-modal-panel-tags">
            <h4>Tags</h4>
            <span>3d</span>
            <span>apps</span>
            <span>city</span>
            <span>devices</span>
            <span>dmit</span>
            <span>isometric</span>
            <span>laptop</span>
            <span>web</span>
          </div>
        </div>
      </div>
      <div class="portfolio-modal-panel-arrows"></div>
    </div>
  </y-layout>
</template>

<script>
import YLayout from 'components/layout'

export default {
  components: {
    YLayout
  },
  data () {
    return {
      modal: false
    }
  },
  methods: {
    openModal (id) {
      console.log(id)
      this.modal = true
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
    },
    closeModal () {
      this.modal = false
      document.body.style.overflow = 'inherit'
      document.body.style.height = 'inherit'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.portfolio-wrapper-main
  width: 9.6rem
  margin: 0 auto
  .portfolio-tags
    font-size: 0
    width: 5.93rem
    padding-bottom: 0.15rem
    border-bottom: 1px solid #d8d8d8
    text-align: center
    margin: 0 auto
    span
      text-transform: uppercase
      font-family: PingFangSC-Regular
      font-size: 0.12rem
      color: #000000
      letter-spacing: 0
      line-height: 0.17rem
      margin: 0 0.15rem
  .portfolio-list
    margin-top: 0.95rem
    padding: 0 0.075rem
    font-size: 0
    .portfolio-list-item
      margin: 0 0.075rem 0.15rem
      width: 3rem
      height: 4.5rem
      background: #162633
      box-shadow: 0 1px 4px 1px rgba(190,190,190,0.50)
      display: inline-block
      cursor: pointer
      position: relative
      overflow: hidden
      transition: box-shadow .45s
      img
        width: 100%
        height: 100%
        transition: opacity 0.45s
      h2
      h4
      h6
        position: absolute
        font-family: PingFangSC-Regular
        color: #ffffff
        transition: transform 0.35s
      h2
        text-transform: uppercase
        font-size: 0.24rem
        letter-spacing: -1.4px
        line-height: 0.26rem
        top: 0.15rem
        left: 0.15rem
        transform: translate3d(0, -0.8rem, 0)
      h4
        font-size: 0.14rem
        letter-spacing: 0
        line-height: 0.19rem
        top: 0.5rem
        left: 0.15rem
        transform: translate3d(0, -0.8rem, 0)
      h6
        font-size: 0.12rem
        letter-spacing: 0
        line-height: 0.17rem
        right: 0.15rem
        bottom: 0.15rem
        transform: translate3d(0, 0.4rem, 0)
      &:hover
        box-shadow: 0 1px 20px 4px rgba(190,190,190,0.80)
        img
          opacity: 0.6
        h2
        h4
        h6
          transform: translate3d(0, 0, 0)
    .portfolio-list-more
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
.portfolio-modal-wrapper
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 999
  overflow: auto
  .portfolio-modal-cover
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: -1
    background-color: rgba(69,69,69,0.78)
  .portfolio-modal-panel
    margin: 0.54rem auto
    background-color: #fafafa
    border-radius: 0.18rem
    width: 9.3rem
    overflow: hidden
    font-size: 0
    .portfolio-modal-panel-left
      padding: 0.2rem
      display: inline-block
      height: 100%
      vertical-align: top
      background-color: #ffffff
      width: 6.15rem
      img
        width: 100%
        margin-bottom: 0.1rem
        &:last-child
          margin-bottom: 0
    .portfolio-modal-panel-right
      padding: 0.2rem
      display: inline-block
      height: 100%
      vertical-align: top
      width: 2.35rem
      .portfolio-modal-panel-title
        font-family: PingFangSC-Regular
        font-size: 0.14rem
        color: #000000
        letter-spacing: 0
        line-height: 0.15rem
        margin-bottom: 0.44rem
      .portfolio-modal-panel-view
      .portfolio-modal-panel-date
      .portfolio-modal-panel-color
        line-height: 0.38rem
        width: 100%
        border-bottom: 1px solid #dedede
        font-family:PingFangSC-Regular
        font-size: 0.1rem
        color: #a8a8a8
        letter-spacing: 0
        text-align: right
        background-repeat: no-repeat
        background-size: 10px 11px
        background-position: 0px center
      .portfolio-modal-panel-view
        background-image: url('../../assets/icon/view.png')
      .portfolio-modal-panel-date
        background-image: url('../../assets/icon/date.png')
      .portfolio-modal-panel-color
        background-image: url('../../assets/icon/color.png')
        font-size: 0
        span
          display: inline-block
          vertical-align: middle
          line-height: 0.38rem
          width: 0.34rem
          height: 0.12rem
          background-color: #f78a74
          &:last-child
            margin-right: 0.1rem
      .portfolio-modal-panel-tool
        font-size: 0
        line-height: 0.66rem
        border-bottom: 1px solid #dedede
        padding: 0 0.1rem
        .portfolio-icon
          display: inline-block
          vertical-align: middle
          width: 0.4rem
          height: 0.4rem
          margin-right: 0.05rem
          background-repeat: no-repeat
          background-size: cover
          &.icon-ae
            background-image: url('../../assets/portfolio/ae.jpg')
          &.icon-ai
            background-image: url('../../assets/portfolio/ai.jpg')
          &.icon-pr
            background-image: url('../../assets/portfolio/pr.jpg')
          &.icon-ps
            background-image: url('../../assets/portfolio/ps.jpg')
      .portfolio-modal-panel-tags
        margin-top: 0.13rem
        h4
        span
          font-family: PingFangSC-Regular
          letter-spacing: 0
        h4
          font-size: 0.14rem
          color: #000000
          line-height: 0.17rem
        span
          font-size: 0.12rem
          color: #dadada
          margin-right: 0.08rem
          line-height: 0.2rem
</style>
