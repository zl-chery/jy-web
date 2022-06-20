<template>
  <div class="jy-personwidth">
    <div class="jy-wrap--title jy-personcenter--title hobby-nav">
      <p>我的收藏</p>
      <el-tabs
        class="deleteBorder"
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
    </div>

    <div>
      <!-- <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
//最近玩过
// import GameRecord from './HobbyCom/GameRecord'

//收藏游戏
// import GameCollect from './HobbyCom/GameCollect'
export default {
  name: 'MyHobby',
  props: {
    msg: String,
  },
  // components: { GameRecord, GameCollect },
  mounted() {
    let path = this.$route.path
    path = path.substring(path.lastIndexOf('personCenter/Hobby') + 19)
    let active = this.label.filter((item) => {
      return path.indexOf(item.path) !== -1
    })
    this.activeName = active[0].name
  },
  data() {
    return {
      activeName: 'first',
      // activeIndex: 0,
      // activeComponent: GameRecord,
      label: [
        {
          label: '最近玩过',
          // comp: GameRecord,
          name: 'first',
          path: 'gameRecord',
          activeIndex: 0,
        },
        {
          label: '收藏游戏',
          // comp: GameCollect,
          name: 'second',
          path: 'gameCollect',
          activeIndex: 1,
        },
      ],
    }
  },

  methods: {
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.$router.push(`/personCenter/Hobby/${comItem[0].path}`)
      // this.activeIndex = comItem[0].path
      // this.activeComponent = this.label[this.activeIndex].comp
    },
  },
}
</script>

<style lang="stylus">
.jy-comment--gameshow
  display flex
  flex-wrap wrap
  justify-content space-between
  // align-items center
  min-height: 465px
  width 1146px
  padding 0 20px
  & li
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    width 271px
    height 256px
    margin-bottom 30px
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius 16px
    & img
      width: 271px;
      height: 172px;
      overflow hidden
      background: #D8D8D8;
      border-radius: 16px 16px 0px 0px;

.jy-gameshow--info
  margin-left 20px
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;

.jy-gameshow--title
  margin-top 10px
  font-size: 16px;
  font-weight: 700;
  color: #3C3B3B;
  line-height 32px

.jy-gameshoe--content
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
.hobby-nav
  padding-bottom: 10px !important
</style>
