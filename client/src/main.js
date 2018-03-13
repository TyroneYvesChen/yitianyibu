import 'babel-polyfill'
import 'common/stylus/index.styl'
import Vue from 'vue'
import fastclick from 'fastclick'

import App from './App'
import router from './router'
import { device } from 'common/js/util'

fastclick.attach(document.body)
Vue.config.productionTip = false

// 根据ua 处理移动端适配
if (device.isPC()) {
  document.documentElement.style.fontSize = '100px'
  document.body.style.minWidth = '960px'
} else {
  var deviceWidth = document.documentElement.clientWidth
  if (deviceWidth > 420) {
    deviceWidth = 420
  }
  document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px'
}
document.body.style.display = 'none'
setTimeout(function () {
  document.body.style.display = 'block'
}, 10)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
