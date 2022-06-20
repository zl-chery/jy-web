import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'

import App from './App.vue'

import infiniteScroll from 'vue-infinite-scroll'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css"


// import './rem.js'

Vue.use(infiniteScroll)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.use(ElementUi)

//路由跳转到页面顶部
router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
