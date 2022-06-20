<template>
  <div class="jy-show jy-head--login">
    <div class="jy-login--title">
      <a class="jy-login--icon">
        <img src="../assets/img/head-user.png" alt=""/>
      </a>
      <div class="jy-login--nan">
        <p><span @click="login()">登录</span>/<span>注册</span></p>
        <p>登录即可畅玩游戏</p>
        <Login :showDialog="showDialog"/>
      </div>
      <router-link to="/personCenter" v-show="isLogined">
        进入个人中心&nbsp;<span class="iconfont">&#xe67e;</span>
      </router-link>
    </div>
    <div class="jy-login--banner">
      <div class="jy-merbership--content">
        <p>开通会员</p>
        <p>尊享12项特权</p>
      </div>
      <div class="jy-open--merbership">
        <el-row>
          <el-button round class="button-width100 button-vip"
            >开通会员</el-button
          >
        </el-row>
      </div>
    </div>
    <div class="jy-login--footer">
      <router-link class="jy-login--des" to="/hobby">
        <span class="iconfont">&#xe74f;</span>
        <p>最近玩过</p>
      </router-link>
      <router-link class="jy-login--des" to="/personCenter/Package/CardNoUse">
        <span class="iconfont">&#xe61d;</span>
        <p>我的卡包</p>
      </router-link>
      <router-link class="jy-login--des" to="/constCommonQa">
        <span class="iconfont">&#xe689;</span>
        <p>常见问题</p>
      </router-link>
      <a href="javascript:;" class="jy-login--des" @click="feedBack">
        <span class="iconfont">&#xe8a1;</span>
        <p>意见反馈</p>
      </a>
    </div>
  </div>
</template>

<script>
import Login from './dialog/Login'
export default {
  name: 'LoginInfo',
  props: {
    msg: String,
  },
  components: {
    Login
  },
  data() {
    return {
      isLogined: false,  //是否登录
      activeComponent: '',
      showDialog: false,
      label: {
        comp: Login
      }
    }
  },
  mounted() {},
  methods: {
    feedBack() {
      this.$emit('feedBack')
    },
    login() {
      this.showDialog = true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.iconfont
  font-family: "iconfont logo" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

.jy-show
  box-sizing border-box
  width: 473px;
  height: 387px;
  padding 20px
  background #fff url("../assets/img/login-bgc.png") no-repeat
  box-shadow: 0px 0px 9px 0px rgba(77, 80, 131, 0.17);
  border-radius: 16px;

.jy-login--title
  display flex
  justify-content space-between
  align-items flex-start
  padding 20px 0 29px 0
  &>a:hover
    color #3873FD

.jy-login--icon
  display flex
  justify-content flex-start
  align-items center
  cursor pointer
  &>img
    width 70px
    height 70px
    overflow hidden
    border-radius 50%

.jy-login--nan
  margin-left 16px

.jy-login--nan p:nth-of-type(1)
  font-size 18px
  font-family MicrosoftYaHei-Bold, MicrosoftYaHei
  font-weight 700
  color #4D4C4C
  line-height 24px

.jy-login--nan p:nth-of-type(2)
  font-size 14px
  font-family MicrosoftYaHei
  color #9297A5
  line-height 24px

.jy-login--banner
  box-sizing border-box
  display flex
  justify-content space-between
  align-items center
  padding 20px 20px 30px 20px
  width 433px
  height 88px
  background linear-gradient(289deg, #ECB465 0%, #FFE4BA 100%)
  border-radius 10px

.jy-merbership--content p:nth-of-type(1)
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #712A00;
  line-height: 24px;

.jy-merbership--content p:nth-of-type(2)
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #712A00;
  line-height: 20px;

.button-vip.is-round
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #793200;
  &:hover
    background-color #fff
    border 1px solid #fff

.jy-login--footer
  display flex
  justify-content space-between
  align-items center
  width 433px
  height 130px
  text-align center

.jy-login--des span
  display block
  width 63px
  height 63px
  text-align center
  line-height 63px
  font-size 33px
  color #c28c3c
  background-color #FFF7ED;
  border-radius 50%

.jy-login--des p
  margin-top 8px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #575656;
  line-height: 18px;
</style>
