<template>
  <div id="app">
    <Head :label="label" :activeName="activeName" />
    <!-- <keep-alive :includes="keepComponents" :max="3">
      <component :is="activeComponent"></component>
    </keep-alive> -->
    <router-view></router-view>
    <!-- <GamePoolVue /> -->
    <!-- <PersonCenterVue /> -->
    <Footer />
  </div>
</template>

<script>
import Head from './components/Head.vue'
//首页
import HomePage from './components/HomePage.vue'

//首页/游戏库界面
import History from './components/History.vue'

//首页/vip会员专区
import VipGame from './components/VipGame.vue'

//远程连接
import Remoto from './components/remoto.vue'

//道具商城
import ToolStore from './components/toolStore.vue'

//首页下载
import LoadAppVue from './components/LoadApp.vue'

//游戏库/历史游戏
// import Game from './components/Game.vue'

//常见问题
// import CommonQA from './components/qa/CommonQA.vue'

//意见反馈  dialog
// import Feedback from './components/dialog/feedback.vue'

//我的卡包
// import MyPackage from './components/myPackage.vue'

//游戏库
import GamePoolVue from './components/GamePool.vue'

//个人中心
// import PersonCenterVue from './components/PersonCenter.vue'

import Footer from './components/Footer.vue'

//个人中心登录
// import login from './components/login.vue'
//充值
// import vip from './components/vip.vue'

import Http from '@/request/http'
export default {
  name: 'App',
  components: {
    Head,
    // HomePage,
    Footer,
    // GamePoolVue
    // PersonCenterVue
  },
  data() {
    return {
      activeName: 'home',
      activeIndex: 0,
      activeComponent: GamePoolVue,
      keepComponents: [],
      label: [
        {
          label: '首页',
          path: 'home',
          comp: HomePage,
          name: 'home',
          activeIndex: 0,
        },
        {
          label: '游戏库',
          path: 'history',
          comp: History,
          name: 'history',
          activeIndex: 1,
        },
        {
          label: 'VIP专区',
          path: 'vipGame',
          comp: VipGame,
          name: 'vipGame',
          activeIndex: 2,
        },
        {
          label: '一起玩',
          path: '',
          comp: VipGame,
          name: '',
          activeIndex: 3,
        },
        {
          label: '远程',
          path: 'remoto',
          comp: Remoto,
          name: 'remoto',
          activeIndex: 4,
        },
        {
          label: '商城',
          path: 'toolStore',
          comp: ToolStore,
          name: 'toolStore',
          activeIndex: 5,
        },
        {
          label: '下载',
          path: 'loadApp',
          comp: LoadAppVue,
          name: 'loadApp',
          activeIndex: 6,
        },
      ],
    }
  },
  methods: {
    handleClick(tab, event) {
      // this.$router.push({path: this.activeIndex});
      console.log(tab, event)
    },
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeIndex = comItem[0].activeIndex
      this.activeComponent = this.label[this.activeIndex].comp
    },
  },
  async created() {
    //如果存在token，则请求用户信息
    if (this.$cookies.get('as_user_token')) {
      await Http({
        type: 'usersAccount',
        data: {
          user_token: this.$cookies.get('as_user_token'),
        },
      }).then((res) => {
        const expire = new Date(res.data.expire)
        let userInfo = {
          ...this.$cookies.get('userInfo'),
          ...res.data,
          isVip: expire >= new Date(),
        }
        this.$store.commit('person/login', userInfo)
      })
    }
    // getCookie('as_user_token')
    //   ? this.$store.commit('person/login', JSON.parse(getCookie('userInfo')))
    //   : ''
  },
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background-color #f5f6fa

.jy-mainwidth
  margin 0 auto
  width 1500px

@media screen and (max-width: 1500px)
  body
    width 1500px

#app
  display: flex
  flex-direction: column
  flex: 1

//首页游戏头  homepage
.jy-wrap--title
  display: flex
  justify-content: space-between
  align-items: center

.jy-wrap--title
  padding 62px 0 33px 0
  &>p
    font-size: 26px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: 700
    font-size 30px
    color: #3C3B3B;
    &::before
      content ""
      margin-right 16px
      border-left 4px solid #3873FD
      border-radius: 2px;

//阿里图标
.iconfont
  font-family: "iconfont logo" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


// deleteBorder 去掉elementUI tab的底部灰色线条
.deleteBorder .el-tabs__nav-wrap::after
  height: 0

//去掉elementUI tab切换底部蓝色线条
.deleteBorder .el-tabs__active-bar
  background transparent

.deleteBorder.jy-toolstore--tabs
  width 1130px
  margin-top 15px

.deleteBorder .el-tabs__item.is-active
  color #3873FD

.el-tabs__header
  margin-bottom 0

.deleteBorder .el-tabs__item
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 22px;

.el-tabs__header
  margin-bottom 0

//dialog  隐藏
.el-dialog__headerbtn,
.el-dialog__header
  display none

.el-dialog__header
  padding 0

//页码部分
.jy-pagination
  display flex
  justify-content flex-end
  align-items center
  height 122px
  padding-right 15px

.jy-pagination .el-pagination button
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);

.jy-pagination .el-pagination .btn-prev
  margin-right 4px

.jy-pagination .el-pagination .btn-next
  margin-left 4px;

.jy-pagination .el-pager li
  margin 0 4px
  font-size: 14px;
  font-family: SFNS-Regular, SFNS;
  font-weight: 400;
  color: #444343;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15)

.el-pager li.active+li
  border-left: 1px solid rgba(0, 0, 0, 0.15)

.jy-pagination .el-pager li.active
  border-radius: 2px;
  border: 1px solid #4B81FE;

.jy-pagination .el-pagination .el-select .el-input .el-input__inner
  margin-left 12px

.jy-pagination .el-pagination__jump
  margin-left 12px
</style>
