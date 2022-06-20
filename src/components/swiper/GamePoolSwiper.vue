<template>
  <div class="jy-gamepool-swiper">
    <!-- swiper1 -->
    <swiper class="swiper1 gallery-top" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper2 gallery-thumbs" v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/banner1.png" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";

export default {
  name: 'GamePoolSwiper',
  props: {
    msg: String
  },
  components: {
    Swiper,  
    SwiperSlide
  },
  data() {
    return {
      swiperOptionThumbs: {
          loop: true,
          loopedSlides: 7, // looped slides should be the same
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          slidesPerView :'auto',
        },
        swiperOption: {  //略缩图
          loop: true,
          loopedSlides: 7, // looped slides should be the same
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
  mounted() {
    // this.initSwiper(),
    this.$nextTick(() => {
        const swiperTop = this.$refs.swiperThumbs.swiper
        const swiperThumbs = this.$refs.mySwiper.swiper
        swiperThumbs.controller.control = swiperTop
        swiperTop.controller.control = swiperThumbs
        
      }),
      console.log('Current Swiper instance object', this.mySwiper)
      // this.mySwiper.slideTo(3, 1000, false)
  },
  methods: {
    handleClick(tab, event) {
      // this.$router.push({path: this.activeIndex});
      console.log(tab, event);
    },
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeIndex = comItem[0].activeIndex
      this.activeComponent = this.label[this.activeIndex].comp
    },
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
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.swiper1
  width: 1025px;
  height: 650px;
  margin-bottom 20px
  background: #D8D8D8;
  border-radius: 16px;

.swiper1 .swiper-slide
  width: 1025px;
  height: 650px;
  border-radius 16px
  & img
    width 100%
    height 100%

.swiper2
  box-sizing border-box
  display flex
  justify-content center
  align-content center
  width: 1025px;
  height: 136px;
  padding 15px 10px
  overflow hidden
  background-color #fff
  border-radius: 16px;

.swiper2 .swiper-slide
  width: 168px !important
  height: 106px
  overflow hidden
  border-radius 16px
  & img
    width: 168px;
    height: 106px;

.swiper-button-prev
  width: 40px;
  height: 106px;
  background: #D5D5D5;
  color #fff
  border-radius: 10px 0 0 10px;

.swiper-button-next
  width: 40px;
  height: 106px;
  background: #E4E4E4;
  color #fff
  border-radius: 0 10px 10px 0

.swiper-button-prev, .swiper-container-rtl .swiper-button-next
  left 10px

.swiper-button-prev, .swiper-button-next
 top 27%

.swiper-button-prev::after
  content '<'
  color #fff
  top 0
  left 0
  margin-left 8px
  font-size 48px
  text-align center
  line-height 106px

.swiper-button-next::after
  content '>'
  color #fff
  top 0
  left 0
  margin-left 8px
  font-size 48px
  text-align center
  line-height 106px

.swiper2 .swiper-slide-active
  border: 4px solid pink


</style>