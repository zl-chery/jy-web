<template>
  <!-- banner区域 -->
  <div class="banner">
    <div class="wrapper">
      <div class="swiper-box">
        <!-- swiper1 -->
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide class="" v-for="item in list" :key="item.sort">
            <img :src="item.img" alt="" style="width: 100%" />
          </swiper-slide>
          <!-- <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
          ></div>
          <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
          ></div> -->
        </swiper>
        <!-- swiper2 Thumbs -->
        <div class="swiper-wrap">
          <swiper
            :options="swiperOptionThumbs"
            class="gallery-thumbs swiper2"
            ref="swiperThumbs">
            <swiper-slide class="" v-for="item in list" :key="item.sort">
              <img :src="item.img" alt="" style="height: 100%; width: 100%" />
              <i class="el-icon-caret-left"></i>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GamePoolSwiper',
  props: {
    msg: String,
    img: Array
  },
  watch: {
    img: {
      handler(new_value) {
        this.list = new_value
      },
      deep: true,
    }
  },
  data() {
    return {
      list: this.img,  //轮播图
      swiperOptionTop: {
        observer:true,
        observeParents:true,
        spaceBetween: 10,
        loop: true,
        freeMode: true,
        loopedSlides: 4,
        autoplay: {
          disableOnInteraction: false,
          delay: 1000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        observer:true,
        observeParents:true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      id: "",
    };
  },
  created() {
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>
<style lang="stylus">
.swiper-box
  display flex
  justify-content center
  align-content space-between

.banner
  & .wrapper
    height 566px

.swiper-container
  background-color: #fff;

.swiper-slide
  & img
    width 100%
    height: 100%
    overflow hidden
    border-radius: 10px;

.swiper-slide
  background-size: cover;
  background-position: center;

.swiper-wrap .swiper-wrapper
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  top -544px
  left 0
  transform: translate3d(0, 0, 0) !important

.gallery-top
  width: 885px;
  height: 566px
  border-radius: 16px

.swiper-wrap
  width: 150px;
  height: 526px
  padding 20px 10px
  margin 0 15px
  overflow hidden
  background: #FEFEFE;
  border-radius 16px

.gallery-thumbs
  box-sizing: border-box;
  background: #FEFEFE;

.gallery-thumbs .swiper-slide
  width: 140px
  height: 89px
  margin-right 0 !important
  margin-bottom 20px
  border-radius: 8px
  & .el-icon-caret-left
    opacity 0

.el-icon-caret-left
  position absolute
  top 50%
  left -11px
  transform translateY(-50%)
  font-size 18px
  color #3873FD

.gallery-thumbs .swiper-slide-active
  position relative
  opacity: 1
  & .el-icon-caret-left
    opacity 1
  &::before
    position absolute
    content ''
    right 0
    bottom 0
    width 132px
    height 81px
    background-color transparent
    border 4px solid #3873FD
    border-radius 10px
  &::after
    position absolute
    content ''
    top 0
    left 0
    width 132px
    height 81px
    background-color transparent
    border 4px solid #3873FD
    border-radius 10px


.swiper-button-prev, .swiper-button-next
  width: 40px !important
  height: 106px !important
  background: #D5D5D5;
  margin-top -53px !important

.swiper-button-prev
  border-radius: 10px 0 0 10px;

.swiper-button-next
  border-radius: 0 10px 10px 0
</style>