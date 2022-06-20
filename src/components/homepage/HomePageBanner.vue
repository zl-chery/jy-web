<template>
  <div class="swiper">
    <div class="container">
      <swiper :options="swiperOptionTop"
              :direction="'vertical'"
              :mousewheel="true"
              class="swiper-HomePage"
              ref="swiperTop">
        <swiper-slide class="swiper-slide" v-for="item in swiperList" :key="item.sort">
          <router-link :to="{path:'/gamePool',query:{id:item.jump_id}}">
            <img :src="item.img" alt="" style="width: 100%">
          </router-link>
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
        <div class="swiper-thumbs">
          <swiper
            :options="swiperOptionThumbs"
            class="des-swiper"
            ref="swiperThumbs">
            <swiper-slide class="" v-for="item in swiperList" :key="item.sort">
              <router-link :to="{path:'/gamePool',query:{id:item.jump_id}}">
                <p>{{item.title}}</p>
              </router-link>
            </swiper-slide>
          </swiper>
          
        </div>
        <div class="swiper-button">
          <swiper
            :options="swiperOptionButton"
            class="button-swiper"
            ref="swiperButton">
            <swiper-slide class="" v-for="item in swiperList" :key="item.sort">
              <div class="blur--area">
                <div class="button-swiper--des"></div>
                <div class="blur--show">
                  <p>{{item.title}}</p>
                  <p>{{item.desc}}</p>
                </div>
              </div>
              <router-link class="game--info" :to="{path:'/gamePool',query:{id:item.jump_id}}">
                <el-button round class="button-orange">查看详情</el-button>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";
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
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperList: this.swiper,
      swiperOptionTop: {
        direction: "vertical", // 竖向滚动
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoHeight: true, // 自适应高度
        slidesPerView: "auto", // 记得这里写 auto 不要默认写1哦
        loop: true,
        loopedSlides: 6,
        autoplay: {   // 自动轮播
          delay: 1500,
          disableOnInteraction: false,
        },
      },
      swiperOptionThumbs: {
        direction: "vertical", // 竖向滚动
        observer:true,
        observeParents:true,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 6,
        autoplay: {   // 自动轮播
          delay: 1500,
          disableOnInteraction: false,
        },
      },
      swiperOptionButton: {
        direction: "vertical", // 竖向滚动
        observer:true,
        observeParents:true,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 6,
        autoplay: {   // 自动轮播
          delay: 1500,
          disableOnInteraction: false,
        },
      }
    }
  },
  create: function() {
    
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.swiperList)
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      const swiperButton = this.$refs.swiperButton.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
      swiperButton.controller.control = swiperTop;
    });
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.container
  position relative

.swiper-HomePage .swiper-slide
  height 590px
  & img
    height 590px
    border-radius 0

.swiper-thumbs
  position absolute
  z-index 8
  right 10%
  bottom 50%
  transform translateY(50%)
  height 330px
  color #fff
  font-weight 700
  font-size: 16px
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei
  line-height: 55px;
  letter-spacing: 1px
  & .swiper-container
    display flex
    flex-direction column
    justify-content center
    align-items center
    text-align center
    background-color transparent


.des-swiper .swiper-slide
  height 55px
  & p
    width 220px
    height 55px
    cursor pointer

.swiper-thumbs
  & .swiper-container
    width 220px
    height 330px
  & .swiper-wrapper
    display flex
    flex-direction column
    justify-content center
    align-items center
    transform: translate3d(0, 0, 0) !important

.des-swiper a
  width 100%
  height 100%
  color #fff
  &:hover
    color #fff
.des-swiper .swiper-slide-active
  color black
  background: linear-gradient(90deg, rgba(238, 238, 238, 0.01) 0%, rgba(251, 251, 251, 0.44) 64%, rgba(255, 255, 255, 0.51) 100%);
  & a
    color black
    &:hover
      color black

//按钮
.button-swiper
  position absolute
  top 50%
  left 20%
  z-index 8

.swiper-container.button-swiper
  background-color transparent

.des-swiper .swiper-slide.swiper-slide-prev,
.des-swiper .swiper-slide.swiper-slide-next,
  display none

.button-swiper .swiper-slide.swiper-slide-active
  display block


.blur--area
  position relative
  width: 343px
  height: 109px
  overflow hidden
  border-radius: 28px
.button-swiper--des
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background: rgba(50, 153, 223, 0.58)
  filter blur(30px)
  
.blur--show
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700
  color: #fff
  text-align left
  letter-spacing: 3px
  & p
    margin-left 16px
    width 100%
  & p:nth-of-type(1)
    margin-top 20px
    font-size 36px
  & p:nth-of-type(2)
    font-size 16px

.button-orange.is-round
  margin-top 9px
  padding 12px 45px !important
  color: #fff
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  line-height: 24px;
  background: #FF8D00;
  border-radius: 31px !important
  border none

.swiper-button .swiper-wrapper
  height 170px

.swiper-button .swiper-slide
  height 170px
</style>
