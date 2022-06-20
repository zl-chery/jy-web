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
export default {
  name: 'HistoryGameTag',
  props: {
    msg: String,
    tag: Array
  },
  watch: {
    tag:{
      handler(new_value) {
        this.tagList = new_value
      },
      deep: true,
    },
  },
  data() {
    return {
      tagList: this.tag, //标签列表
    }
  },
  methods:{
    //获取标签内容
    queryGame(value) {
      this.$emit('getgametag', value)
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
  &:hover
  justify-content: flex-start
