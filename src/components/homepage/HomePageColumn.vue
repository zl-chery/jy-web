<template>
  <div class="jy-column--des">
    <div class="jy-mainwidth">
      <div class="jy-column--wrap">
        <div class="jy-wrap--title">
          <p>六列竖排</p>
        </div>
        <div class="jy-column">
          <a href="javascript:;" v-for="item in cloumnList" :key="item.desc" @click="toGamePool(item.jump_id)">
            <img :src="item.img" alt="">
            <div class="jy-mask jy-column-height">
              <p class="jy-column--title">{{item.title}}</p>
            </div>
          </a>
        </div>
      </div>
      <div class="jy-column--wrap jy-column--space">
        <div class="jy-wrap--title">
          <p>六列竖排</p>
        </div>
        <div class="jy-column">
          <a href="javascript:;" v-for="item in cloumnList" :key="item.desc" @click="toGamePool(item.jump_id)">
            <img :src="item.img" alt="">
            <div class="jy-mask jy-column-height">
              <p class="jy-column--title">{{item.title}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageColumn',
  props: {
    msg: String,
    cloumn: Array
  },
  watch:{
    cloumn:{
      handler(new_value) {
        this.cloumnList = new_value
      },
      deep: true,
    },
  },
  data() {
    return {
      cloumnList: this.cloumn
    }
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
.jy-column
  display: flex
  justify-content: space-between
  align-items: center

  &>a
    position relative
    width 233px
    height 311px
    overflow: hidden
    border-radius: 16px
    &:hover
      border: none
      transform: scale(1.05)
    &>img
      width 233px
      height 311px

.jy-column-height
  position: absolute;
  top: 256px;
  left: 0;
  height 55px
  text-align: center
  box-sizing: border-box
  background-color #fff
  opacity 1
  border none

.jy-column--title
  line-height 28px
  color #3C3B3B

.jy-column--space
  padding-bottom 60px

</style>
