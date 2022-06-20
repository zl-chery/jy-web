<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="../../assets/img/banner1.png" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="../../assets/img/banner1.png" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="../../assets/img/banner1.png" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="../../assets/img/banner1.png" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="../../assets/img/banner1.png" alt="">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
      </div> -->
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
  name: 'HomePageBanner',
  props: {
    swiper: Array
  },
  watch:{
    swiper:{
      handler(new_value) {
        this.swiperList = new_value
      },
      deep: true,
    },
  },
  data() {
    return {
      swiperList: this.swiper
    }
  },
  create: function() {
    console.log(this.swiperList, 3)
  },
  mounted() {
    console.log(this.swiperList, 222244)
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      this.$nextTick(()=> {
        setTimeout(()=>{
          this.mySwiper = new Swiper('.swiper-container', {
            initialSlide :0,
            slidesPerView :'auto',
            pagination: '.swiper-pagination', //分页器
            autoplay: {// 自动滑动
              stopOnLastSlide: false,
              delay: 5000, //5秒切换一次
              disableOnInteraction: false
            },
            direction:'vertical',
            grabCursor:true,
            autoplayDisableOnInteraction:false,
            // mousewheelControl:true,
            autoHeight: true,
            observer: true,
            observeParents: true, 
            speed: 4000,
            loop : true
          })
        },500)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
