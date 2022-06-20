<template>
  <div class="jy-row">
    <div class="jy-mainwidth">
      <div class="jy-article--wrap">
        <div class="jy-wrap--title jy-row--color">
          <p>四列横排</p>
          <div class="jy-play--more jy-more--whilte">
            <a href="javascript:;">查看更多 ></a>
          </div>
        </div>
        <div class="jy-row--body">
          <router-link v-for="item in rowList" :key="item.desc" :to="{path:'/gamePool', query:{id:item.jump_id}}">
            <img :src="item.img" alt="">
            <div class="jy-mask jy-row-height">
              <p class="jy-row--title">{{item.title}}</p>
              <p class="jy-row--body">{{item.desc}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageRow',
  props: {
    msg: String,
    row: Array
  },
  watch:{
    row:{
      handler(new_value) {
        this.rowList = new_value
      },
      deep: true,
    },
  },
  data() {
    return {
      rowList: this.row
    }
  },
  methods: {
    //跳转到游戏详情页
    toGamePool(id) {
      this.$emit('toGamePool', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.jy-row
  width 100%
  height 502px
  background-image url("../../assets/img/row-bgc.png")

.jy-row--color
  display: flex
  justify-content: space-between
  align-items: center

.jy-article--wrap .jy-row--color p
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700
  color #fff

.jy-row--body
  display: flex
  justify-content: space-between
  align-items: center
  &>a
    position relative
    width 360px
    height 312px 
    overflow: hidden
    border-radius: 16px
    &>img
      width 360px
      height 312px

.jy-row-height
  position: absolute;
  top: 228px;
  left: 0;
  box-sizing: border-box
  height 84px
  opacity 1
  background-color #fff

.jy-more--whilte a
  color #fff

.jy-row--title
  font-weight: 700
  font-size 16px
  line-height 36px
  color #3C3B3B

.jy-mask .jy-row--body
  font-family: MicrosoftYaHei;
  font-weight 400
  font-size 14px
  line-height 24px
  color #9297A5

.jy-row--body a:hover
  transform: scale(1.05)

.jy-wrap--column.jy-column--wrap 
  margin-bottom 30px

</style>
