<template>
  <div>
    <div class="jy-personwidth">
      <div class="jy-wrap--title jy-personcenter--title">
        <p>资产记录</p>
        <el-tabs
          class="deleteBorder jy-assets--tabs"
          v-model="activeName"
          @tab-click="changeComponent(activeName)"
        >
          <el-tab-pane
            v-for="(item, index) in label"
            :key="index"
            :label="item.label"
            :name="item.name"
          ></el-tab-pane>
        </el-tabs>
        <!-- <keep-alive :includes="keepComponents" :max="3">
            <component :is="activeComponent"></component>
          </keep-alive> -->
        <!-- <router-view></router-view> -->
        <AllAssetsVue :assetsList="assetsList" />
      </div>
    </div>
  </div>
</template>

<script>
import Http from '@/request/http'
//全部
import AllAssetsVue from './AssetsCom/AllAssets.vue'
// //鲸钻
// import DiamondAssetsVue from './AssetsCom/DiamondAssets.vue'
// //鲸币
// import CoinAssetsVue from './AssetsCom/CoinAssets.vue'
export default {
  name: 'PersonAssets',
  props: {
    msg: String,
  },
  components: {
    AllAssetsVue,
    // DiamondAssetsVue,
    // CoinAssetsVue
  },
  data() {
    return {
      activeName: 'first',
      activeType: 'all',
      // activeComponent: AllAssetsVue,
      keepComponents: [],
      label: [
        {
          label: '全部',
          // comp: AllAssetsVue,
          name: 'first',
          type: 'all',
          activeIndex: 0,
        },
        {
          label: '鲸钻',
          // comp: DiamondAssetsVue,
          name: 'second',
          type: 'coins',
          activeIndex: 1,
        },
        {
          label: '鲸币',
          // comp: CoinAssetsVue,
          name: 'thirth',
          type: 'gold',
          activeIndex: 2,
        },
      ],
      assets: {
        all: { page: 1, list: [] },
        coins: { page: 1, list: [] },
        gold: { page: 1, list: [] },
      },
    }
  },
  mounted() {
    this.getAssets('all')
    this.getAssets('coins')
    this.getAssets('gold')
  },
  methods: {
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeType = comItem[0].type
      //this.activeComponent = this.label[this.activeIndex].comp
    },
    async getAssets(type) {
      try {
        let coin_type
        switch (type) {
          case 'all':
            coin_type = ''
            break
          case 'coins':
            coin_type = '1'
            break
          case 'gold':
            coin_type = '2'
            break
        }
        await Http({
          type: 'assetRecord',
          data: {
            user_token: this.$cookies.get('as_user_token'),
            coin_type,
          },
        }).then((res) => {
          // console.log(JSON.stringify(res.data))
          this.assets[type].list =
            JSON.stringify(res.data) == '{}' ? [] : res.data
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    assetsList() {
      return this.assets[this.activeType].list
    },
  },
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
  min-height: 570px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%

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
