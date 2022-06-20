import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies';



import router from './router'
import store from './store'

import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css"

Vue.use(VueAwesomeSwiper)
Vue.use(VueCookies)

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
  router,
  store
}).$mount('#app')
