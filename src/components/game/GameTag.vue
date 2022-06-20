<template>
  <div class="jy-game jy-bgc--whitebor">
    <div class="jy-mainwidth">
      <div class="jy-game--tag">
        <el-row  class="jy-tag--left">
          <el-button round class="button-width100">全部标签</el-button>
        </el-row>
        <el-row class="jy-tag--right">
          <el-button round class="jy-tag--common button-width60" v-for="item in tagList" :key="item.id" @click="queryGame(item.label_name)">{{item.label_name}}</el-button>
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
    msg: String,
    tag: Array,
  },
  watch: {
    tag(new_value) {
      this.tagList = new_value
    }
  },
  // components: {
  //   ButtonBorderWhiteWidth80
  // },
  data() {
    return {
      tagList: this.tag, //tag列表
    }
  },
  created() {
    console.log(this.getGameTag, this.tagList)
  },
  methods:{
    //获取标签内容
    queryGame(value) {
      console.log(value)
      this.$emit('getgametag', value)
      console.log('end')
    }
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
  &:hover,
  &:focus
    color #3873FD
    background-color #e7eefe
    border 1px solid #3873FD

.button-width100.is-round
  padding 7px 21px  !important
  border-radius: 17px !important
  color #3873FD
  background-color #e7eefe
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
