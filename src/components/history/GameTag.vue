<template>
  <div class="jy-game jy-bgc--whitebor">
    <div class="jy-mainwidth">
      <div class="jy-game--tag">
        <el-row  class="jy-tag--left">
          <el-button round class="button-width100">全部标签</el-button>
        </el-row>
        <el-row class="jy-tag--right">
          <el-button round class="jy-tag--common button-width60">休闲</el-button>
          <el-button round class="jy-tag--common button-width60">体育</el-button>
          <el-button round class="jy-tag--common button-width60">冒险</el-button>
          <el-button round class="jy-tag--common button-width60">动作</el-button>
          <el-button round class="jy-tag--common button-width60">街机</el-button>
          <el-button round class="jy-tag--common button-width60">吃鸡</el-button>
          <el-button round class="jy-tag--common button-width60">武侠</el-button>
          <el-button round class="jy-tag--common button-width60">MOBA</el-button>
          <el-button round class="jy-tag--common button-width60">格斗</el-button>
          <el-button round class="jy-tag--common button-width60">RPG</el-button>
          <el-button round class="jy-tag--common button-width60">射击</el-button>
          <el-button round class="jy-tag--common button-width60">模拟</el-button>
          <el-button round class="jy-tag--common button-width60">竞速</el-button>
          <el-button round class="jy-tag--common button-width60">策略</el-button>
          <el-button round class="jy-tag--common button-width60">解谜</el-button>
          <el-button round class="jy-tag--common button-width60">恐怖</el-button>
          <el-button round class="jy-tag--common button-width60">科幻</el-button>
          <el-button round class="jy-tag--common button-width60">二次元</el-button>
          <el-button round class="jy-tag--common button-width60">仙侠</el-button>
          <el-button round class="jy-tag--common button-width60">放置</el-button>
          <el-button round class="jy-tag--common button-width60">开放世界</el-button>
          <el-button round class="jy-tag--common button-width60">棋牌</el-button>
          <el-button round class="jy-tag--common button-width60">音乐</el-button>
          <el-button round class="jy-tag--common button-width60">互动电影</el-button>
          <el-button round class="jy-tag--common button-width60">卡牌</el-button>
          <el-button round class="jy-tag--common button-width60">塔防</el-button>
          <el-button round class="jy-tag--common button-width60">沙雕</el-button>
          <el-button round class="jy-tag--common button-width60">网红</el-button>
        </el-row>
      </div>
      <div class="jy-game--tag jy-game-pad10">
        <el-row  class="jy-tag--left">
          <el-button round class="button-width100">全部标签</el-button>
        </el-row>
        <el-row class="jy-tag--right">
          <el-button round class="jy-tag--common button-width60">免费游戏</el-button>
          <el-button round class="jy-tag--common button-width60">付费游戏</el-button>
          <el-button round class="jy-tag--common button-width60">会员专享</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// import ButtonBorderWhiteWidth80 from '../button/ButtonBorderWhiteWidth80.vue'

export default {
  name: 'GameTag',
  props: {
    msg: String
  },
  // components: {
  //   ButtonBorderWhiteWidth80
  // },
  mounted() {
    this.getList();
  },
  methods:{
    getList() {

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.button-width60.is-round
  padding 7px 15px  !important
  border-radius: 17px !important
  color: #9297A5;
  border 1px solid #fff
  &:hover
    border 1px solid #3873FD

.button-width100.is-round
  padding 7px 21px  !important
  border-radius: 17px !important
  color: #9297A5;
  border 1px solid #fff
  &:hover
    border 1px solid #3873FD

.jy-tag--left button,
.jy-tag--right button
  border-color: #fff

.jy-tag--common
  padding 7px 15px !important

.jy-game--tag
  display: flex
  padding-top 28px
  justify-content: flex-start
  align-content: center

.jy-bgc--whitebor
  background-color #fff
  border-top 2px solid #f9f9f9

.jy-tag--right
  padding-left 20px !important
  .jy-tag--common
    margin-bottom:  20px !important

.jy-game-pad10
  padding-top 0px !important
  padding-bottom 10px !important
  

</style>
