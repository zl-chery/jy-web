<template>
  <div>
    <div class="jy-toolstore-bgc">
      <img src="../assets/img/card-banner.png" alt="">
    </div>
    <div class="jy-mainwidth">
      <div class="jy-toolstore--title jy-wrap--title">
        <p>道具商城</p>
        <el-tabs class="deleteBorder jy-toolstore--tabs" v-model="activeName" @tab-click="changeComponent(activeName)">
          <el-tab-pane v-for="(item, index) in label" :key="index" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
        <div class="jy-toolstore--package">
          <img src="../assets/img/toolstore-package.png" alt="">
          <p>我的卡包</p>
        </div>
      </div>
    </div>
    <div class="jy-mainwidth">
      <div class="jy-toolstore">
        <!-- <keep-alive :includes="keepComponents" :max="3">
          <component :is="activeComponent"></component>
        </keep-alive> -->
        <router-view></router-view>
        </div>
    </div>
  </div>
  
</template>

<script>
import CardNoUse from './cardpackage/CardNoUse.vue'
import CardUsed from './cardpackage/CardUsed.vue';
import CardExp from './cardpackage/CardExp.vue';
export default {
  name: 'MyPackage',
  props: {
    msg: String
  },
  components: {
    CardNoUse,
    CardUsed,
    CardExp
  },
  data() {
    return {
      activeName: 'first',
      activeIndex: 0,
      activeComponent: "CardNoUse",
      keepComponents: ['CardNoUse', 'CardUsed', 'CardExp'],
      label: [
        {
          label: "未使用",
          comp: CardNoUse,
          name: "first",
          activeIndex: 0
        },
        {
          label: "已使用",
          comp: CardUsed,
          name: "second",
          activeIndex: 1
        },
        {
          label: "已过期",
          comp: CardExp,
          name: "third",
          activeIndex: 2
        },
        ]
    }
  },
  methods: {
    handleClick(tab, event) {
      // this.$router.push({path: this.activeIndex});
      console.log(tab, event);
    },
    changeComponent(value) {
      // this.activeIdx = idx
      // console.log(idx)
      // this.activeComponent = this.label[idx].comp
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeIndex = comItem[0].activeIndex
      this.activeComponent = this.label[this.activeIndex].comp
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
//卡片  未使用
//banner
.jy-toolstore-bgc img
  width 1920px
  height 4auto

.jy-toolstore--title.jy-wrap--title
  padding-top 30px

//去掉elementUI tab的底部灰色线条
.deleteBorder .el-tabs__nav-wrap::after
  height: 0

//去掉elementUI tab切换底部蓝色线条
.deleteBorder .el-tabs__active-bar
  background transparent

.deleteBorder.jy-toolstore--tabs .el-tabs__item
  line-height 46px

//修改样式
.jy-toolstore--title .deleteBorder .el-tabs__item
  height 48px
  padding: 0 30px 0 0
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color #3C3B3B
  line-height: 48px;

.el-tabs__header
  margin-bottom 0

.deleteBorder .el-tabs__item
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 22px;

.jy-toolstore
  margin-bottom 20px
  background-color #fff
  border-radius 16px

.jy-toolstore .jy-toolstore--padding
  padding-top 24px

//道具商城头部
.jy-toolstore .jy-toolstore--title
  display flex
  justify-content flex-start
  align-items center
  padding-left 20px

//.jy-toolstore--package
//  display flex
//  justify-content flex-start
//  align-items center
//  width 136px
//  height 36px
//  margin-left 50px
//  line-height 33px
//  vertical-align middle
//  background-color #3873fd
//  border-radius 36px
//  cursor pointer
//  &>img
//    margin-left 14px
//    width 20px
//    height 20px
//  &>p
//    margin-left 12px
//    color #fff

//卡片样式
.jy-card
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  align-content space-between
  width 946px
  height 212px
.jy-card li
  width 350px
  height 284px
  overflow hidden
  border-radius 16px
  background-color #fff
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.06);

.jy-cardinfo
  display flex
  justify-content center
  align-items center
  width 350px
  height 200px
  overflow hidden
  background-color #eff1f5
  border-radius 16px 16px 0 0
  &>img
    width 240px
    height auto

//.jy-cardPackage--des
//  display flex
//  justify-content space-between
//  align-items center
//  width 1460px
//  height 84px
//  padding 0 20px
//  letter-spacing: 1px;

.jy-card--title
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start

.jy-card--title p:nth-of-type(1)
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #3C3B3B;
  line-height 30px

.jy-card--title p:nth-of-type(2)
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 24px
</style>
