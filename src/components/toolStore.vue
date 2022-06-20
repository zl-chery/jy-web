<template>
  <div>
    <div class="jy-toolstore-bgc">
      <img src="../assets/img/card-banner.png" alt="">
    </div>
    <div class="jy-mainwidth">
      <div class="jy-toolstore--title jy-wrap--title">
        <p>道具商城</p>
        <el-tabs class="deleteBorder jy-toolstore--tabs" v-model="activeName"  @tab-click="changeComponent(activeName)">
          <el-tab-pane v-for="(item, index) in label" :key="index" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
        <div class="jy-toolstore--package" @click="toMyPackage()">
          <img src="../assets/img/toolstore-package.png" alt="">
          <p>我的卡包</p>
        </div>
      </div>
    </div>
    <div class="jy-mainwidth">
      <div class="jy-toolstore">
          <keep-alive :includes="keepComponents" :max="3">
            <component :is="activeComponent"></component>
          </keep-alive>
        </div>
    </div>
  </div>
  
</template>

<script>
import AllCard from './toolstore/AllCard.vue'
import SecondCardVue from './toolstore/SecondCard.vue';
import VipCardVue from './toolstore/VipCard.vue';
export default {
  name: 'ToolStore',
  props: {
    msg: String
  },
  components: {
    AllCard, SecondCardVue, VipCardVue
  },
  data() {
    return {
      activeName: 'first',
      activeIndex: 0,
      activeComponent: "AllCard",
      keepComponents: ['AllCard', 'SecondCardVue', 'VipCardVue'],
      label: [
        {
          label: "全部",
          comp: AllCard,
          name: "first",
          activeIndex: 0
        },
        {
          label: "秒进卡",
          comp: SecondCardVue,
          name: "second",
          activeIndex: 1
        },
        {
          label: "会员卡",
          comp: VipCardVue,
          name: "third",
          activeIndex: 2
        },
        {
          label: "远程高清卡",
          comp: AllCard,
          name: "fourth",
          activeIndex: 3
        }
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
    },
    toMyPackage() {
      this.$router.push(`/personCenter/Package`)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
//道具商城
.jy-toolstore--title.jy-wrap--title
  padding-top 30px

.jy-toolstore
  margin-bottom 20px
  background-color #fff
  border-radius 16px

.jy-toolstore-bgc img
  width 1920px
  height 4auto

//道具商城头部
.jy-toolstore--package
  display flex
  justify-content flex-start
  align-items center
  width 136px
  height 36px
  margin-left 50px
  line-height 33px
  vertical-align middle
  background-color #fff
  border-radius 36px
  cursor pointer
  &>img
    margin-left 14px
    width 20px
    height 20px
  &>p
    margin-left 12px
    color #9297a5

//卡片类
.jy-card--all
  padding 10px 20px
.jy-card--all ul
  display flex
  flex-direction column
  justify-content space-between
  align-items center

.jy-card--all ul li
  display flex
  justify-content flex-start
  align-items center
  width 1460px
  height 243px
  border-bottom 1px solid #eff1f5

.jy-card--all ul li:last-child
  border-bottom 0

.jy-card--img
  display flex
  justify-content center
  align-items center
  width 284px
  height 212px
  overflow hidden
  background-color #eff1f5
  border-radius 16px
  &>img
    width 229px
    height 164px

.jy-toolstore .jy-card
  flex-direction column
  margin-left 30px
  width 972px
  height 212px
  padding 0
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;

.jy-card--title
  font-size: 24px;
  font-weight: 700;
  color: #3C3B3B
  line-height: 44px;
  letter-spacing: 2px;

.jy-card--infomation,
.jy-card--tips
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 30px;
  letter-spacing: 1px;

.jy-card--num
  display flex
  justify-content flex-start
  align-items center
  overflow hidden
  margin-top 31px

//计数器hack .el-input-number
.jy-card--num .el-input__inner
  width: 147px;
  height: 50px;
  overflow hidden
  border-radius: 28px;
  border: 1px solid #9297A5;

.jy-card--num .el-input-number
  width: 147px;
  height: 50px;

.jy-card--num .el-input-number .el-input__inner
  padding-left: 48px;


.jy-card--num .el-input-number__decrease, .el-input-number__increase
  width 47px
  height 48px
  line-height 48px
  overflow hidden
  background transparent

.jy-card--num .el-icon-minus
.jy-card--num .el-icon-plus:before
  color #9297A5;

.jy-card--num .el-input-number__increase
  left 96px
  border-left 1px solid #9297A5;

.jy-card--num .el-input-number__decrease
  border-right 1px solid #9297A5;

.jy-card--num .el-input-number__decrease:hover,
.jy-card--num .el-input-number__increase:hover
  color: #9297A5;

.jy-card--num p
  margin-left 30px
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 700;
  color: #3873FD;
  &>span
    margin-right 8px
    font-size: 40px;
    font-family: SanFranciscoText-Semibold, SanFranciscoText;
    color: #3873FD;

.button-shopping.is-round
  padding 22px 58px !important
  border-radius: 39px !important
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  line-height: 24px;
  color: #fff
  background-color #3873FD
</style>
