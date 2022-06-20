<template>
  <div class="jy-mainwidth">
    <div class="jy-remoto">
      <div class="jy-remoto--title jy-wrap--title jy-remoto--padding">
        <p>远程连接</p>
      </div>
      <div class="jy-remoto--content">
        <el-tabs class="deleteBorder" v-model="activeName" @tab-click="changeComponent(activeName)">
          <el-tab-pane v-for="(item, index) in label" :key="index" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
        <div>
          <keep-alive :includes="keepComponents" :max="3">
            <component :is="activeComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeList from './remoto/HomeList.vue'
import MyDevice from './remoto/MyDevice.vue'
import HistoryDevice from './remoto/HistoryDevice.vue'
import RemotoSet from './remoto/RemotoSet.vue'
export default {
  name: 'RemotoCom',
  props: {
    msg: String
  },
  components: {
    HomeList, MyDevice, HistoryDevice, RemotoSet
  },
  data() {
    return {
      activeName: 'first',
      activeIndex: 0,
      activeComponent: "MyDevice",
      keepComponents: ['HomeList', 'MyDevice', 'HistoryDevice', 'RemotoSet'],
      label: [
        {
          label: "我的设备",
          comp: MyDevice,
          name: "first",
          activeIndex: 0
        },
        {
          label: "房间列表",
          comp: HomeList,
          name: "second",
          activeIndex: 1
        },
        {
          label: "历史链接",
          comp: HistoryDevice,
          name: "third",
          activeIndex: 2
        },
        {
          label: "远程设置",
          comp: RemotoSet,
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
    //tab切换
    changeComponent(value) {
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
//我的设备
//去掉elementUI tab的底部灰色线条
.deleteBorder .el-tabs__nav-wrap::after
  height: 0

//去掉elementUI tab切换底部蓝色线条
.deleteBorder .el-tabs__active-bar
  background transparent

.el-tabs__header
  margin-bottom 0

.jy-remoto
  margin 20px 0
  background-color #fff
  border-radius: 10px;

.jy-remoto--content
  padding 0 20px

.jy-device--content
  display flex
  justify-content space-between
  align-items center
  margin-top 21px

.jy-remoto--padding.jy-wrap--title
  padding-top 40px
</style>
