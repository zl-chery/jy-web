<template>
  <div>
    <div class="jy-personwidth">
      <div class="jy-wrap--title jy-personcenter--title">
        <p>资产记录</p>
        <el-tabs class="deleteBorder jy-assets--tabs" v-model="activeName" @tab-click="changeComponent(activeName)">
          <el-tab-pane v-for="(item, index) in label" :key="index" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
        <div>
          <!-- <keep-alive :includes="keepComponents" :max="3">
            <component :is="activeComponent"></component>
          </keep-alive> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//全部
import AllAssetsVue from './AssetsCom/AllAssets.vue'
//鲸钻
import DiamondAssetsVue from './AssetsCom/DiamondAssets.vue'
//鲸币
import CoinAssetsVue from './AssetsCom/CoinAssets.vue'
export default {
  name: 'PersonAssets',
  props: {
    msg: String,
  },
  components: {
    AllAssetsVue,
    DiamondAssetsVue,
    CoinAssetsVue
  },
  data() {
    return {
      activeName: 'first',
      activeIndex: 0,
      activeComponent: AllAssetsVue,
      keepComponents: [],
      label: [
        {
          label: "全部",
          comp: AllAssetsVue,
          name: "first",
          path: 'AllAssets',
          activeIndex: 0
        },
        {
          label: "鲸钻",
          comp: DiamondAssetsVue,
          name: "second",
          path: 'DiamondAssets',
          activeIndex: 1
        },
        {
          label: "鲸币",
          comp: CoinAssetsVue,
          name: "thirth",
          path: 'CoinAssets',
          activeIndex: 2
        }
        ],
    }

  },
  watch:{
    // shareDialog(newVal){
    //   this.share = newVal
    // }
  },
  methods: {
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeIndex = comItem[0].activeIndex
      //this.activeComponent = this.label[this.activeIndex].comp
      this.$router.push(`/personCenter/Assets/${this.label[this.activeIndex].path}`)
    },
  }
}
</script>

<style lang="stylus">
//去掉elementUI tab的底部灰色线条
.deleteBorder .el-tabs__nav-wrap::after
  height: 0

//去掉elementUI tab切换底部蓝色线条
.deleteBorder .el-tabs__active-bar
  background transparent

//修改样式
.el-tabs__header
  margin-bottom 0

.deleteBorder .el-tabs__item
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 22px;

//tabs  border
.deleteBorder.jy-assets--tabs
  margin-top 27px
  & .el-tabs__item
    box-sizing border-box
    width 74px
    padding 0 21px
    height 30px
    line-height:30px

.deleteBorder.jy-assets--tabs.el-tabs--top .el-tabs__item.is-top:nth-child(2)
  padding-left 21px
.deleteBorder.jy-assets--tabs.el-tabs--top .el-tabs__item.is-top:last-child
  width 76px
  padding-right 21px

//全部 鲸钻 鲸币
.jy-assets
  border 1px solid #D9D9D9
  border-radius 0px 5px 5px 5px

.jy-assets--all
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  width 1106px
  padding 20px 20px 0
  & li
    display flex
    justify-content space-between
    align-items center
    width 1146px
    height 90px
    border-bottom 1px solid #D9D9D9;

.jy-assets--task
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  & div
    display flex
    justify-content flex-start
    align-items center
    width 100%
    line-height: 24px;
    & img
      width 19px
      height 19px

.jy-assets--coins
  margin-left 6px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #3873FD;
  line-height: 36px;

.jy-assets--title
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 24px;

.jy-assets--time
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;

</style>