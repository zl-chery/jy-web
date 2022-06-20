<template>
  <div class="jy-head">
    <div class="jy-mainwidth">
      <div class="jy-head--des">
        <div class="jy-head--logo">
          <h1>
            <img src="../assets/img/jy-logo.png" alt="鲸云漫游" />
          </h1>
        </div>
        <div class="jy-head--nav">
          <el-tabs
            class="deleteBorderTabs"
            v-model="activeTopTemp"
            @tab-click="changeCom(activeTopTemp)"
          >
            <el-tab-pane
              v-for="(item, index) in label"
              :key="index"
              :label="item.label"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
          <!-- <a href="javascript:" @click="changeCom()">首页</a>
          <a href="javascript:">游戏库</a>
          <a href="javascript:">VIP专区</a>
          <a href="javascript:">一起玩</a>
          <a href="javascript:">远程</a>
          <a href="javascript:">商城</a>
          <a href="javascript:">下载</a> -->
        </div>
        <div class="jy-head--search">
          <!-- <input type="text" placeholder="这是一个search" /> -->
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
            <el-button slot="append" class="head-search" icon="el-icon-search" @click="getUserList" ></el-button>
          </el-input>
          <ul class="game-search">
            <li v-for="item in queryInfo.data" :key="item.id">
              <router-link :to="{path:'/gamePool', query:{id:item.id}}">
                <img :src="item.game_main_img" alt="">
                <p>{{item.game_name}}</p>
              </router-link>
            </li>
          </ul>
          <!-- <el-button :plain="true" v-show="queryInfo.queryResult === 0">您所查找的{{queryInfo.query}}游戏不存在哦，来试试别的游戏吧！</el-button> -->
        </div>
        <div class="jy-head--info">
          <div class="jy-head--icon">
            <div class="jy-icon--des">
              <router-link class="jy-login" to="/recentlyPlayed">
                <img src="../assets/img/head-history.png" alt="历史" />
                <p>历史</p>
              </router-link>
              <!-- <a href="javascript:;" class="jy-login">
                <img src="../assets/img/head-history.png" alt="历史" />
                <span>历史</span>
              </a> -->
            </div>
            <div class="jy-icon--des">
              <a
                href="javascript:;"
                class="jy-login"
                @click="showContainer(show.showRecharge, 'showRecharge')"
              >
                <img src="../assets/img/head-rechange.png" alt="充值" />
                <span>充值</span>
              </a>
              <OnlineRecharge v-show="show.showRecharge" ref="showRecharge" />
              <!-- <div
                class="jy-show--recharge jy-head--recharge"
                v-show="show.showRecharge"
                ref="showRecharge"
              >
                <div class="jy-recharge--title">
                  <div class="jy-recharge--method">
                    <p class="jy-recharge--online">在线充值</p>
                    <img
                      src="../assets/img/recharge-cancel.png"
                      alt="充值取消"
                      @click="show.showRecharge = false"
                    />
                  </div>
                  <div class="jy-recharge--ways">
                    <div class="jy-recharge--jz">
                      <div class="jy-recharge--coins">
                        <div class="jy-jz--coins">
                          <img
                            src="../assets/img/recharge-jz.png"
                            alt="鲸钻充值"
                          />
                          <p>60</p>
                        </div>
                      </div>
                      <p class="jy-rmb jy-rmb--nopresent">6元</p>
                    </div>
                    <div class="jy-recharge--jz">
                      <div class="jy-recharge--coins">
                        <div class="jy-jz--coins">
                          <img
                            src="../assets/img/recharge-jz.png"
                            alt="鲸钻充值"
                          />
                          <p>450</p>
                        </div>
                      </div>
                      <p class="jy-rmb jy-rmb--nopresent">45元</p>
                    </div>
                    <div class="jy-recharge--jz">
                      <div class="jy-recharge--coins">
                        <div class="jy-jz--coins">
                          <img
                            src="../assets/img/recharge-jz.png"
                            alt="鲸钻充值"
                          />
                          <p>680</p>
                        </div>
                      </div>
                      <p class="jy-rmb">68元</p>
                      <p class="jy-fist--recharge">赠送299鲸币</p>
                    </div>
                    <div class="jy-recharge--jz">
                      <div class="jy-recharge--coins">
                        <div class="jy-jz--coins">
                          <img
                            src="../assets/img/recharge-jz.png"
                            alt="鲸钻充值"
                          />
                          <p>1180</p>
                        </div>
                      </div>
                      <p class="jy-rmb">118元</p>
                      <p class="jy-fist--recharge">赠送999鲸币</p>
                    </div>
                    <div class="jy-recharge--jz">
                      <div class="jy-recharge--coins">
                        <div class="jy-jz--coins">
                          <img
                            src="../assets/img/recharge-jz.png"
                            alt="鲸钻充值"
                          />
                          <p>1980</p>
                        </div>
                      </div>
                      <p class="jy-rmb">198元</p>
                      <p class="jy-fist--recharge">赠送2999鲸币</p>
                    </div>
                    <div class="jy-recharge--jz">
                      <div class="jy-recharge--coins">
                        <div class="jy-jz--coins">
                          <img
                            src="../assets/img/recharge-jz.png"
                            alt="鲸钻充值"
                          />
                          <p>3480</p>
                        </div>
                      </div>
                      <p class="jy-rmb">348元</p>
                      <p class="jy-fist--recharge">赠送9999鲸币</p>
                    </div>
                  </div>
                </div>
                <div class="jy-recharge--content">
                  <div class="jy-pay--method3">
                    <p class="jy-pay--title">选择充值方式</p>
                    <div class="jy-pay--ways">
                      <button>
                        <img src="../assets/img/pay-wx.png" alt="微信支付" />
                        <p>微信支付</p>
                      </button>
                      <button>
                        <img src="../assets/img/pay-zfb.png" alt="支付宝支付" />
                        <p>支付宝</p>
                      </button>
                      <button>
                        <img
                          src="../assets/img/pay-paypal.png"
                          alt="银行卡支付"
                        />
                        <p>PayPal</p>
                      </button>
                    </div>
                    <div class="jy-qr--code">
                      <img src="../assets/img/jy-footer-logo.png" alt="" />
                      <div class="jy-pay--money jy-qr-money">
                        <p>您需支付：<span>38</span>元</p>
                        <p>请用<span>微信</span>扫描二维码支付</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
            <div class="jy-icon--des">
              <a
                href="javascript:;"
                class="jy-login"
                @click="showContainer(show.showVip, 'showVip')"
              >
                <img src="../assets/img/head-vip.png" alt="会员" />
                <span>会员</span>
              </a>
              <UpdateVip
                class="jy-show--vip jy-head--vip"
                v-show="show.showVip"
                ref="showVip"
              />
              <!-- <div
                class="jy-show--vip jy-head--vip"
                v-show="show.showVip"
                ref="showVip"
              >
                <div class="jy-vip--title">
                  <p>升级会员</p>
                  <img
                    src="../assets/img/recharge-cancel.png"
                    alt="取消"
                    @click="show.showVip = false"
                  />
                </div>
                <div class="jy-joinvip--banner">
                  <div class="jy-vip--card">
                    <div class="jy-card--info">
                      <img src="../assets/img/day-card.png" alt="" />
                      <div class="jy-card--content">
                        <p>会员体验卡（7天）</p>
                        <p>开通立送5小时</p>
                        <p>¥<span>9.9</span></p>
                      </div>
                    </div>
                    <div class="jy-card--info">
                      <img src="../assets/img/month-card.png" alt="" />
                      <div class="jy-card--content">
                        <p>会员月卡（30天）</p>
                        <p>每日赠送15分钟免费时长</p>
                        <p>¥<span>38</span></p>
                      </div>
                    </div>
                    <div class="jy-card--info">
                      <img src="../assets/img/three-months-card.png" alt="" />
                      <div class="jy-card--content">
                        <p>会员季卡（90天）</p>
                        <p>每日赠送30分钟免费时长</p>
                        <p>¥<span>98</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="jy-pay--method">
                    <p class="jy-pay--title">选择充值方式</p>
                    <div class="jy-pay--ways">
                      <button>
                        <img src="../assets/img/pay-wx.png" alt="微信支付" />
                        <p>微信支付</p>
                      </button>
                      <button>
                        <img src="../assets/img/pay-zfb.png" alt="支付宝支付" />
                        <p>支付宝</p>
                      </button>
                      <button>
                        <img
                          src="../assets/img/pay-paypal.png"
                          alt="银行卡支付"
                        />
                        <p>PayPal</p>
                      </button>
                      <button>
                        <img
                          src="../assets/img/recharge-jz.png"
                          alt="鲸钻支付"
                        />
                        <p>鲸钻</p>
                      </button>
                    </div>
                    <div class="jy-pay--code">
                      <div class="jy-qr--code">
                        <img src="../assets/img/jy-footer-logo.png" alt="" />
                        <div class="jy-pay--money">
                          <p>您需支付：<span>38</span>元</p>
                          <p>请用<span>微信</span>扫描二维码支付</p>
                        </div>
                      </div>
                      <el-checkbox
                        >我已阅读并同意<a>《会员服务协议》</a></el-checkbox
                      >
                    </div>
                  </div>
                </div>
                <div class="jy-vip--footer jy-vip--bgc">
                  <p class="jy-vippower--title">会员特权</p>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-day.png" alt="" />
                    <p>每天赠送60分钟</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-7prensent.png" alt="" />
                    <p>7折游玩</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-team.png" alt="" />
                    <p>极速排队</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-day.png" alt="" />
                    <p>意见反馈</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-nomoney.png" alt="" />
                    <p>每周限免</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-device.png" alt="" />
                    <p>高配机型</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-4k.png" alt="" />
                    <p>超清画质</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-noad.png" alt="" />
                    <p>免广告</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-longtime.png" alt="" />
                    <p>超长挂机</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-rometo.png" alt="" />
                    <p>远程连接</p>
                  </a>
                  <a href="javascript:;" class="jy-login--des">
                    <img src="../assets/img/vip-moredevice.png" alt="" />
                    <p>多端互通</p>
                  </a>
                </div>
              </div> -->
            </div>
          </div>
          <div class="jy-head--user">
            <a
              href="javascript:;"
              class="jy-login"
              @click="showContainer(show.showPerson, 'showPerson')"
            >
              <img src="../assets/img/head-user.png" alt="个人信息" />
            </a>
            <Login
              v-show="show.showPerson"
              ref="showPerson"
              @feedBack="showFeedBack = true"
            />
            <feedbackVue
              :showDialog="showFeedBack"
              @closeDialog="closeDialog"
            />
            <!-- <div
              class="jy-show jy-head--login"
              v-show="show.showPerson"
              ref="showPerson"
            >
              <div class="jy-login--title">
                <a class="jy-login--icon">
                  <img src="../assets/img/head-user.png" alt="" />
                </a>
                <div class="jy-login--nan">
                  <p>你还未登录</p>
                  <p>登录即可畅玩游戏</p>
                </div>
                <a href="javascript:;"
                  >进入个人中心&nbsp;<span class="iconfont">&#xe67e;</span></a
                >
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
                <router-link class="jy-login--des" to="/hobby">
                  <span class="iconfont">&#xe61d;</span>
                  <p>我的卡包</p>
                </router-link>
                <router-link class="jy-login--des" to="/constCommonQa">
                  <span class="iconfont">&#xe689;</span>
                  <p>常见问题</p>
                </router-link>
                <a
                  href="javascript:;"
                  class="jy-login--des"
                  @click="showFeedBack = true"
                >
                  <span class="iconfont">&#xe8a1;</span>
                  <p>意见反馈</p>
                </a>
              </div>
              <feedbackVue
                :showDialog="showFeedBack"
                @closeDialog="closeDialog"
              />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//在线充值
import OnlineRecharge from '@/components/comp/OnlineRecharge.vue'
//升级会员
import UpdateVip from '@/components/comp/UpdateVip.vue'
//会员中心
import Login from '@/components/login.vue'
//反馈
import feedbackVue from './dialog/feedback.vue'

import Http from '@/request/http'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Head',
  props: {
    msg: String,
    label: Array,
    activeName: String,
  },
  components: {
    OnlineRecharge,
    UpdateVip,
    Login,
    feedbackVue,
  },
  watch: {
    show: {
      handler(new_value, old_value) {
        console.log(new_value, old_value)
      },
      deep: true,
    },
  },
  data() {
    return {
      activeTopTemp: this.activeName,
      show: {
        showRecharge: false, //展示充值
        showVip: false, //vip充值
        showPerson: false, //个人登录
        showResult: false, //查询结果展示
      },
      showFeedBack: false,
      // 获取列表的参数对象
      queryInfo:{
        //查询参数
        query: '',
        // 查询结果
        queryResult: '',
        // 查询结果个数
        data: 0
      },
      //查询结果展示框
      isSearchResult: false
    }
  },
  mounted() {
    //给页面添加鼠标抬起事件
    document.addEventListener('mouseup', (e) => {
      let showArr = Object.keys(this.$refs)
      showArr.map((item) => {
        let tree = this.$refs[`${item}`]?.$el
        if (!tree) {
          return false
        }
        // console.log(tree, showArr, this.show[item])
        // 判断鼠标点击的区域是否在tree里面，否则关闭弹窗
        // console.log(tree.contains(e.target))
        // 判断鼠标点击的区域是否在tree里面，否则关闭弹窗
        if (!tree.contains(e.target)) {
          this.show[item] = false
          //this.$router.push()
        }
      })
    })
  },
  methods: {
    changeCom(activeName) {
      this.$router.push(`/${activeName}`)
      // this.$parent.changeComponent(activeName)
    },
    showContainer(container, value) {
      let containerArr = Object.keys(this.$refs)
      if (containerArr.includes(value)) {
        this.show[value] = !container
      }
    },

    closeDialog() {
      this.showFeedBack = false
    },
    async getUserList(){
      let game_name = this.queryInfo.query
      try {
        let {data} = await Http({
            type: 'gamePool',
            data: {
              game_name: game_name
            }
        })
        this.queryInfo.queryResult = data.length
        if(!this.queryInfo.queryResult) {
          this.message(game_name)
        }
        if(this.queryInfo.queryResult) {
          // this.$router.push({
          //   name:'gamePool',
          //   params:{id:data[0].id}
          // })
          this.queryInfo.data = data.slice(0, 10)
          this.isSearchResult  = true
        }
      } catch (error) {
        console.log(error)
      }
    },
    //游戏搜索结果提示信息
    message(value) {
      this.$message(`您所查找的${value}游戏不存在哦，来试试别的游戏吧！`);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
a
  text-decoration none

h1
  font-size 0

input
  outline none

//element ui tabs hack
.deleteBorderTabs .el-tabs__nav-wrap::after
  height: 0

.deleteBorderTabs .el-tabs__item.is-active
  color #3873FD

.deleteBorderTabs .el-tabs__active-bar
  bottom 1px
  border-radius 2px
  background-color: #3873fd;

.el-tabs__item:hover
  color #303133;

.el-input-group__append button.el-button.head-search
  border-right 0
  background-color #fff
  border-radius 0 25px 25px 0

.el-input-group__append
  border-radius 0 25px 25px 0

.jy-head
  position sticky
  top 0
  z-index 999
  height 70px
  background-color #fff
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);

.jy-head--des
  display flex
  justify-content space-between
  align-items center
  height 70px

.jy-head--logo
  display flex
  justify-content center
  align-items center
  margin-right 56px
  &img
    width 158px
    height auto

.jy-head--nav
  display flex
  justify-content center
  align-content center
  line-height 70px

.jy-head--nav a
  position relative
  display flex
  margin 0 15px
  line-height 68px
  font-size 16px
  font-family: MicrosoftYaHei;
  color: #3C3B3B;
  cursor pointer
  border-bottom: 2px solid transparent
  &:hover
    color #3873FD
    &::after
      content ''
      position absolute
      right 12%
      bottom 0
      height 2px
      width 80%
      background-color #3873FD

.jy-head--search
  position relative
  display flex
  justify-content center
  align-items center
  margin 0 30px 0 210px

.game-search
  box-sizing border-box
  position absolute
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  top 60px
  left 0
  width 280px
  background-color #fff
  border-radius 16px
  & li
    width 100%
    border-bottom 1px solid #D9D9D9
    cursor pointer
    & a
      display flex
      justify-content flex-start
      align-items center
      width 100%
      height 60px
    & img
      width 40px
      height 40px
      margin 0 20px
      border-radius 50%
    & p
      font-size 16px
      font-family: MicrosoftYaHei;
      color #9297a5;

.game-search li:last-child
  border-bottom none

.jy-head--search input
  box-sizing border-box
  width 224px
  height 40px
  padding-left 16px
  color #999
  font-size 16px
  border: 1px solid rgba(182, 182, 184, 0.43);
  border-right none
  border-radius 25px
  &:focus
    border: 1px solid rgba(182, 182, 184, 0.43);
    border-right none

.jy-head--search input::placeholder
  margin-left 16px
  font-size 16px
  color rgb(182, 182, 184)

.jy-head--info
  position relative
  display flex
  justify-content center
  align-items center
  text-align center
  vertical-align middle

.jy-head--icon
  display flex
  justify-content center
  align-items center

.jy-icon--des
  display flex
  margin 0 10px
  justify-content center
  align-items center
  &>a
    position relative
    display flex
    justify-content center
    align-items center
    &>img
      margin-right 3px
      width 17px
      height 17px

.jy-icon--des a>span
  font-size 17px
  color #444343

.jy-head--user>a>img
  display flex
  justify-content center
  align-items center
  width 40px
  height auto
  cursor pointer

//登录模块
.jy-show
  position absolute
  right 0
  bottom -394px

.jy-head--login
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
  &>a
    line-height 20px
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
  width 225px
  text-align left

.jy-login--nan p:nth-of-type(1)
  font-size 18px
  font-family MicrosoftYaHei-Bold, MicrosoftYaHei
  font-weight 700
  color #4D4C4C
  line-height 40px


.jy-login--nan p:nth-of-type(2)
  font-size 14px
  font-family MicrosoftYaHei
  color #9297A5
  line-height 12px

.jy-login--banner
  box-sizing border-box
  display flex
  justify-content space-between
  align-items center
  padding 20px 20px 30px 20px
  width 433px
  height 88px
  text-align left
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
  line-height: 24px;

.button-width100.is-round.button-vip
  font-size 14px
  font-family MicrosoftYaHei
  color #793200
  background-color #fff
  border 1px solid #fff
  &:hover
    background-color #fff
    border 1px solid #fff

.jy-login--footer
  box-sizing border-box
  display flex
  justify-content space-around
  align-items center
  width 433px
  height 130px
  padding 20px 0
  text-align center
  border-radius: 10px;
  border: 1px solid rgba(207, 207, 207, .18);

.jy-login--des
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  width 64px
  height 100px

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
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #575656;
  line-height: 22px;


//购买会员
.jy-show--vip
  position absolute
  right 0
  bottom -718px

.jy-head--vip
  box-sizing border-box
  display flex
  flex-direction column
  padding 30px 20px 20px 20px
  width 857px
  height 711px
  background #EFF1F5 url("../assets/img/vip-show-bgc.png") no-repeat
  box-shadow 0px 0px 9px 0px rgba(77, 80, 131, 0.17)
  border-radius 16px

.jy-vip--title
  display flex
  justify-content space-between
  align-items center
  margin-bottom 17px
  line-height 0
  &>p
    font-size 20px
    font-family MicrosoftYaHei-Bold, MicrosoftYaHei
    font-weight 700
    color #793200
    line-height 27px

.jy-vip--title span
  font-size 24px
  color #fff
  cursor pointer

.jy-joinvip--banner
  display flex
  justify-content flex-start
  align-items flex-start
  width 817px
  height 289px
  margin-bottom 9px
  text-align left

.jy-vip--card
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  width: 302px;
  height 289px

.jy-card--info
  box-sizing border-box
  display flex
  justify-content flex-start
  align-items center
  width 302px
  height 90px
  padding 11px 0 11px 20px
  background #fff
  border-radius 10px
  border 1px solid #E8E8E8
  cursor pointer
  &>img
    width 113px
    height 67px

.jy-card--info:hover
  color: #894500;
  border: 1px solid #FAD89D;


.jy-card--info:hover .jy-card--content>p:nth-of-type(1),
.jy-card--info:hover .jy-card--content>p:nth-of-type(2)
  color: #894500;

.jy-card--content
  margin-left 13px
  &>p:nth-of-type(1)
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #626161;
    line-height: 21px;
  &>p:nth-of-type(2)
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #A7ABB8;
    line-height: 24px;
  &>p:nth-of-type(3)
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #4B81FE;
    line-height: 19px;
    &>span
      margin-left 4px
      font-size: 18px;
      font-family: MicrosoftYaHei;
      color: #4B81FE;
      line-height: 24px;

.jy-pay--method
  box-sizing border-box
  width: 505px;
  height: 289px;
  padding 18px
  margin-left 20px
  background: rgba(255, 255, 255, .75)
  border-radius: 10px;

.jy-pay--title
  padding-bottom 20px
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #4D4C4C;
  line-height: 16px;

.jy-pay--ways
  display flex
  justify-content space-between
  align-items center
  padding-bottom 30px
  width 100%

.jy-pay--ways button
  display flex
  justify-content center
  align-items center
  padding 9px 16px 10px 15px
  background-color #fff
  border-radius 10px
  border 1px solid #E9E9E9
  cursor pointer
  &>img
    width 25px
    height auto
  &>p
    margin-left 11px
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #4D4C4C;
  &:hover
    background #4B81FE
    border 1px solid #437CFF
    &>p
      color #fff


.jy-pay--code
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  &>p
    line-height 0
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #9297A5;

.jy-qr--code
  display flex
  justify-content center
  align-items flex-start
  vertical-align middle
  &>img
    width 87px
    height 87px
    margin-right 16px
    padding-bottom 30px

label
  line-height 0
  &>a
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #9297A5;
    line-height 19px
    &:hover
      color #409EFF

//elementUI  hack
.el-checkbox__input.is-checked+.el-checkbox__label a
  color #409EFF


.jy-pay--money
  width 342px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  line-height: 50px;
  &>p:nth-of-type(1)
    line-height: 50px;
    color: #4D4C4C;
    &>span
      margin-right 8px
      font-size: 30px;
      font-family: SanFranciscoText-Semibold, SanFranciscoText;
      font-weight: 600;
      color: #3873FD;
      line-height: 36px;
  &>p:nth-of-type(2)
    line-height: 16px;
    color: #9297A5;

.jy-vip--bgc
  box-sizing border-box
  display flex
  flex-wrap wrap
  justify-content flex-start
  align-items flex-start
  padding 31px 20px 0
  width: 817px;
  height: 318px;
  background: #fff
  border-radius: 10px;
  &>a
    width 64px
    height 120px
    margin-right 78px
    text-align center
    &>img
      width 64px
    &>p
      margin-top 4px
      width 64px
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #475163;

.jy-vip--bgc a:nth-of-type(6n)
  margin-right 0

.jy-vippower--title
  padding-bottom 20px
  width 777px
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  text-align left
  color: #793200;
  line-height: 24px;

//充值
.jy-show--recharge
  position absolute
  right 0
  bottom -544px

.jy-head--recharge
  box-sizing border-box
  width: 440px;
  height: 538px;
  padding 30px 20px
  background: #FFFFFF;
  box-shadow: 0px 0px 9px 0px rgba(77, 80, 131, 0.17);
  border-radius: 16px;

.jy-head--recharge
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

.jy-recharge--title
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

.jy-recharge--method
  display flex
  justify-content space-between
  align-items center
  width 400px
  margin-bottom 20px
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #4D4C4C;
  line-height: 24px;
  &>img
    width 22px
    height 22px
    cursor pointer

.jy-recharge--ways
  box-sizing border-box
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  width 400px


.jy-recharge--jz
  box-sizing border-box
  position relative
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  margin-right 8px
  margin-bottom 10px
  padding-top 16px
  width: 128px;
  height: 97px;
  overflow hidden
  line-height 28px
  border-radius: 10px;
  border: 1px solid #E9E9E9;
  cursor pointer
  &>.jy-rmb
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #868C9B;
    line-height 16px
  &:hover
    background url("../assets/img/jz-border.png") no-repeat
  &>.jy-rmb--nopresent
    line-height 40px


.jy-fist--recharge
  position absolute
  right 0
  bottom 0
  width 100%
  height 29px
  line-height 29px
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #883200;
  background: #FEE1B5;

.jy-recharge--jz:nth-of-type(3n)
  margin-right 0

.jy-jz--coins
  display flex
  justify-content center
  align-items center
  vertical-align middle
  &>p
    margin-left 8px
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: #03071A;

.jy-pay--method3
  display flex
  flex-wrap wrap
  width 400px
  &.jy-pay--title
    padding-top 10px
    text-align left
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #4D4C4C;
    line-height: 21px;
  &.jy-pay--ways
    width 400px

.jy-qr-money
  width 75%
  text-align left
  & p
    width 100%
</style>
