<template>
  <div class="jy-article">
    <div class="jy-mainwidth">
      <div class="jy-article--wrap">
        <div class="jy-wrap--title">
          <p>热门推荐</p>
        </div>
        <div class="jy-hot--body">
          <a href="javascript:;" v-for="item in hotList" :key="item.desc" @click="toGamePool(item.jump_id)">
            <div class="box">
              <img :src="item.img" alt="">
              <div class="jy-scale--info">
                <p class="jy-scale--title">{{item.title}}</p>
                <img src="../../assets/img/triangle.png" alt="">
                <p class="jy-scale--content">
                  {{item.desc}}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="jy-article--wrap">
      <div class="jy-wrap--title">
        <p>火爆必玩</p>
        <div class="jy-play--more">
          <a href="javascript:;">查看更多 ></a>
        </div>
      </div>
      <div class="jy-play--body">
        <div class="jy-body--left">
          <a href="javascript:;"  v-for="item in playList.slice(0, 1)" :key="item.desc" @click="toGamePool(item.jump_id)">
            <img :src="item.img" alt="">
            <div class="jy-mask">
              <p class="jy-gamedes--title">{{item.title}}</p>
              <p class="jy-des--body">{{item.desc}}</p>
            </div>
          </a>
        </div>
        <div class="jy-body--right">
          <div class="jy-right--des" v-for="item in playList.slice(1, playList.length)" :key="item.desc" @click="toGamePool(item.jump_id)">
            <a href="javascript:;">
              <img :src="item.img" alt="">
              <div class="jy-des--mask">
                <p class="jy-gamedes--title">{{item.title}}</p>
                <p class="jy-des--body">{{item.desc}}</p>
              </div>
            </a>
          </div>
          <div class="jy-right--des" v-for="item in playList.slice(1, playList.length)" :key="item.title" @click="toGamePool(item.jump_id)">
            <a href="javascript:;">
              <img :src="item.img" alt="">
              <div class="jy-des--mask">
                <p class="jy-gamedes--title">{{item.title}}</p>
                <p class="jy-des--body">{{item.desc}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
      <div class="jy-article--wrap">
      <div class="jy-wrap--title">
        <p>榜单·TOP10</p>
      </div>
      <div class="jy-top--body">
        <div class="jy-hotlist jy-list--common">
          <div class="jy-list--title">
            <div class="jy-list--left">
              <img src="~@/assets/img/list-hot.png" alt="">
              <p>热门榜</p>
            </div>
            <div class="jy-list--more">
              <a href="javascript:;">更多 ></a>
            </div>
          </div>
          <div class="jy-list--body">
            <ul class="jy-scoed--des">
              <li v-for="(item, index) in hotSortList" :key="item.url" @click="toGamePool(item.jump_id)">
                <a href="javascript:;">
                  <p>{{++index}}</p>
                  <div class="jy-top--des">
                    <img :src="item.game_icon" alt="">
                    <div class="jy-list--info">
                      <p>{{item.game_name}}</p>
                      <p>{{item.game_desc | queryString}}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="jy-hotlist jy-list--common">
          <div class="jy-list--title">
            <div class="jy-list--left">
              <img src="~@/assets/img/list-up.png" alt="">
              <p>高分榜</p>
            </div>
            <div class="jy-list--more">
              <a href="javascript:;">更多 ></a>
            </div>
          </div>
          <div class="jy-list--body">
            <ul class="jy-scoed--des">
              <li v-for="(item, index) in highSortList" :key="item.url" @click="toGamePool(item.jump_id)">
                <a href="javascript:;">
                  <p>{{++index}}</p>
                  <div class="jy-top--des">
                    <img :src="item.game_icon" alt="">
                    <div class="jy-list--info">
                      <p>{{item.game_name}}</p>
                      <p>{{item.game_desc | queryString}}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="jy-hotlist jy-list--common">
          <div class="jy-list--title">
            <div class="jy-list--left">
              <img src="../../assets/img/list-new.png" alt="">
              <p>新游榜</p>
            </div>
            <div class="jy-list--more">
              <a href="javascript:;">更多 ></a>
            </div>
          </div>
          <div class="jy-list--body">
            <ul class="jy-scoed--des">
              <li v-for="(item, index) in newlist" :key="index" @click="toGamePool(item.jump_id)">
                <a href="javascript:;">
                  <p>{{++index}}</p>
                  <div class="jy-top--des">
                    <img :src="item.game_icon" alt="">
                    <div class="jy-list--info">
                      <p>{{item.game_name}}</p>
                      <p>{{item.game_desc | queryString}}</p>
                    </div>
                    <p class="jy-game--scoed">{{item.score}}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePageGame',
  props: {
    msg: String,
    hot: Array,
    play: Array,
    new: Array,
    highSort: Array,
    hotSort: Array,
  },
  watch:{
    hot:{
      handler(new_value) {
        this.hotList = new_value
      },
      deep: true,
    },
    play:{
      handler(new_value) {
        this.playList = new_value
      },
      deep: true,
    },
    new:{
      handler(new_value) {
        this.newlist = new_value
      },
      deep: true,
    },
    highSort:{
      handler(new_value) {
        this.highSortList = new_value
      },
      deep: true,
    },
    hotSort:{
      handler(new_value) {
        this.hotSortList = new_value
      },
      deep: true,
    },
  },
  data() {
    return {
      hotList: this.hot,
      playList: this.play,
      newlist: this.new,
      highSortList: this.highSort,
      hotSortList: this.hotSort
    }
  },
  filters: {
    queryString(value) {
      if (!value) return ''
      return `${value.substr(0, 14)}...`
    },
  },
  methods: {
    //跳转到游戏详情页
    toGamePool() {
      this.$emit('toGamePool')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../assets/fonts/font.css'
p
  font-family: 'Microsoft YaHei';

a:hover 
  color #3873FD

.jy-article
  background #eff1f5 url("../../assets/img/game-bgc.png") no-repeat

.jy-article--wrap
  display flex
  flex-direction: column
  justify-content: center
  align-items: left

.jy-play--more a:hover
  color #3873FD

.jy-list--left p
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700

.jy-hot--body 
  display flex
  justify-content: space-between
  align-items: center

.jy-hot--body a
  width 284px
  height 380px
  border-radius 16px
  overflow: hidden
  &>img
    width 284px
    height 380px;

.box{
  position: relative;
  perspective: 1000px;
  width 284px
  height 380px;
}

.box>img{
  position: absolute
  top 0
  left 0
  z-index: 1;
  backface-visibility: hidden;
  width 284px
  height 380px;
  transform-origin: center center
  transition: all 0.50s ease-in-out 0s;
}

.jy-scale--info
  display flex
  justify-content: center
  align-items: center
  flex-direction: column
  width 100%
  height 100%
  text-align: center
  background-color: #3873FD

.jy-scale--title
  padding-bottom: 8px
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 24px;
  letter-spacing: 1px;

.jy-scale--content
  padding 15px 18px 0 18px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #FFFFFF;
  line-height: 20px;
  letter-spacing: 1px;

.box:hover img{
  transform: rotateY(-180deg);
}

.jy-mask p
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  letter-spacing: 1px;

.jy-play--body
  display: flex
  justify-content: space-between
  align-items: center

.jy-body--left
  position relative
  width 588px
  height 372px
  margin-right 20px
  overflow: hidden
  border-radius 16px
  &:hover
    transform: scale(1.05)
  &>a>img
    width 588px
    height 372px

.jy-body--right 
  display flex
  justify-content: space-between
  align-content: space-between
  flex-wrap: wrap
  width 892px
  height 372px

.jy-right--des
  position relative
  width 284px
  height 176px
  overflow: hidden
  border-radius 16px
  &:hover
    transform: scale(1.05)

.jy-right--des img 
  width 284px
  height 176px

.jy-mask, .jy-des--mask
  box-sizing border-box
  position absolute
  top 114px
  left 0
  width 100%
  height 75px
  background-color:  rgba(0, 0, 0, .36)

.jy-mask
  box-sizing: border-box
  position absolute
  top 296px
  left 0
  padding 12px 12px 0 20px
.jy-mask .jy-des--body
  width 556px
  font-size: 14px;
  font-weight 400
  font-family: MicrosoftYaHei;
  color: #DBDBDB;

.jy-des--mask
  padding 5px 0 0 20px
  height 62px

.jy-gamedes--title
  line-height 30px
  color #fff
  font-size 18px

.jy-des--body
  line-height 20px
  font-size 14px
  color #DCDCDC;

.jy-top--body
  display flex
  justify-content: space-between
  align-items: center
  text-align: left

.jy-hotlist
  display flex
  flex-direction: column
  justify-content: left
  align-content: center
  width 487px
  height 1114px
  background-color #fff
  border-radius 16px

.jy-list--title
  display flex
  justify-content: space-between
  align-items: center
  padding 0 20px 0
  background-color #F0F0F1

.jy-list--left
  display flex
  justify-content: center
  align-items: center
  &>img
    width 23px
    height auto
  &>p
    margin-left 8px
    line-height 93px
    color #3C3B3B 
    font-size 24px

.jy-scoed--des li
  position relative
.jy-scoed--des li>a
  box-sizing border-box
  display flex
  justify-content: left
  align-items: center
  width 487px
  height 99px
  padding-left 20px
  box-shadow: inset 0px -1px 0px 0px #F6F6F6;
  &>p
    width 32px
    height 32px
    margin-right 16px
    font-weight 700
    text-align: center
    font-size 24px
    line-height 32px
    color #fff
    border-radius 5px
    background-color: #D4D4D4
  &:hover
    background-color: #f5f8ff

.jy-scoed--des li:last-child>a
  box-shadow: none

.jy-scoed--des li:nth-child(1)>a
  &>p
    background-color: #F64546

.jy-scoed--des li:nth-child(2)>a
  &>p
    background-color: #F98548

.jy-scoed--des li:nth-child(3)>a
  &>p
    background-color: #FAAA34 

.jy-top--des
  display flex
  justify-content: left
  align-items: center
  &>img
    width 80px
    height 80px
    margin-right 26px
    border-radius 16px
  &>p
    font-size 28px
    color #FF7600

.jy-game--scoed
    position: absolute
    bottom 30px
    right 30px

.jy-list--info p:nth-child(1)
  line-height 20px
  font-size 16px
  color #444343

.jy-list--info p:first-child
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;

.jy-list--info p:last-child
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 36px;
  letter-spacing: 1px;

.jy-list--common
  margin-bottom 110px

.jy-scoed--des a:hover
  .jy-list--info p:nth-child(1)
    color #3873FD 


</style>
