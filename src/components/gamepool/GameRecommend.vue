<template>
  <div>
    <ul class="jy-card jy-gameshow--rec">
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-second.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardGame--des">
          <div class="jy-card--title">
            <p>1小时秒进卡</p>
            <p>永久使用,永久使用永久使用,永...</p>
          </div>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
        </div>
        <div class="jy-cardGame--des">
          <div class="jy-card--title">
            <p>24小时会员卡</p>
            <p>永久使用</p>
          </div>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-weekend.png" alt="1周秒进卡">
        </div>
        <div class="jy-cardGame--des">
          <div class="jy-card--title">
            <p>1周秒进卡</p>
            <p>永久使用</p>
          </div>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-30day.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardGame--des">
          <div class="jy-card--title">
            <p>30天会员卡</p>
            <p>永久使用</p>
          </div>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-30day.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardGame--des">
          <div class="jy-card--title">
            <p>30天会员卡</p>
            <p>永久使用</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- <component :is="activeComponent"></component> -->
  </div>
  
</template>

<script>
// import GameCommentVue from './GameComment.vue'
export default {
  name: 'GameRecommend',
  props: {
    msg: String
  },
  components:{
    // GameCommentVue
  },
  data(){
    return {
      //  activeComponent: GameCommentVue,
    }
  },
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 50)}...`
    }
  },
}
</script>

<style lang="stylus">
.jy-card.jy-gameshow--rec
  flex-direction row
  flex-wrap wrap
  width 1460px
  padding 20px
  margin-left 0
  height 293px
  background-color #fff
  border-radius: 16px;
.jy-card.jy-gameshow--rec li
  width 276px
  height 253px

.jy-card.jy-gameshow--rec .jy-cardinfo
  width 276px
  height 175px

.jy-card.jy-gameshow--rec  .jy-cardGame--des
  width 276px
  height 78px
</style>