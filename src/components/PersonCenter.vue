<template>
  <div class="jy-mainwidth">
    <div class="jy-personcenter">
      <div class="jy-personcenter--left">
        <div class="jy-personcenter--user">
          <div class="jy-personcenter--info">
            <img :src="headimg" alt="头像" />
            <div>
              <p class="jy-personcenter--nickname">{{ userInfo.nickname }}</p>
              <p class="jy-personcenter--uid">ID：{{ userInfo.id }}</p>
            </div>
            <img
              class="jy-person--vip"
              src="~@/assets/img/person-vip.png"
              alt=""
              v-if="userInfo.isVip"
            />
          </div>
          <div class="jy-personcenter--reset">
            <p class="jy-personcenter--coins">鲸钻 {{ userInfo.coins }}</p>
            <p class="jy-personcenter--coins">鲸币 {{ userInfo.gold }}</p>
            <p class="jy-personcenter--retire">
              <i class="el-icon-time"></i>
              {{ userInfo.free_times / 60 / 60 }}小时
              {{ userInfo.free_times / 60 }}分钟 【0点重置】
            </p>
            <p class="jy-personcenter--retire">
              {{ userInfo.free_times_member / 60 / 60 }}小时
              {{ userInfo.free_times_member / 60 }}分钟【不过期】
            </p>
          </div>
        </div>
        <div class="jy-personcenter--tool">
          <ul>
            <li
              @click="changeComponent('first', 0)"
              :class="{ person_is__actived: 0 == current }"
            >
              <img
                v-show="tabsActive[0].dective"
                src="~@/assets/img/person-vipinfo.png"
                alt=""
              />
              <img
                v-show="tabsActive[0].active"
                src="~@/assets/img/person-vip-active.png"
                alt=""
              />
              <p>会员中心</p>
            </li>
            <li
              @click="changeComponent('second', 1)"
              :class="{ person_is__actived: 1 == current }"
            >
              <img
                v-show="tabsActive[1].dective"
                src="~@/assets/img/person-like.png"
                alt=""
              />
              <img
                v-show="tabsActive[1].active"
                src="~@/assets/img/person-like-active.png"
                alt=""
              />
              <p>我的收藏</p>
            </li>
            <li
              @click="changeComponent('tirth', 2)"
              :class="{ person_is__actived: 2 == current }"
            >
              <img
                v-show="tabsActive[2].dective"
                src="~@/assets/img/person-card.png"
                alt=""
              />
              <img
                v-show="tabsActive[2].active"
                src="~@/assets/img/person-card-active.png"
                alt=""
              />
              <p>我的卡包</p>
            </li>
            <li
              @click="changeComponent('forth', 3)"
              :class="{ person_is__actived: 3 == current }"
            >
              <img
                v-show="tabsActive[3].dective"
                src="~@/assets/img/person-money.png"
                alt=""
              />
              <img
                v-show="tabsActive[3].active"
                src="~@/assets/img/person-money-active.png"
                alt=""
              />
              <p>资产记录</p>
            </li>
            <li
              @click="changeComponent('fifth', 4)"
              :class="{ person_is__actived: 4 == current }"
            >
              <img
                v-show="tabsActive[4].dective"
                src="~@/assets/img/person-help.png"
                alt=""
              />
              <img
                v-show="tabsActive[4].active"
                src="~@/assets/img/person-help-active.png"
                alt=""
              />
              <p>帮助反馈</p>
            </li>
            <li
              @click="changeComponent('sixth', 5)"
              :class="{ person_is__actived: 5 == current }"
            >
              <img
                v-show="tabsActive[5].dective"
                src="~@/assets/img/person-msg.png"
                alt=""
              />
              <img
                v-show="tabsActive[5].active"
                src="~@/assets/img/person-msg-active.png"
                alt=""
              />
              <p>消息中心</p>
            </li>
            <li
              @click="changeComponent('seventh', 6)"
              :class="{ person_is__actived: 6 == current }"
            >
              <img
                v-show="tabsActive[6].dective"
                src="~@/assets/img/person-safe.png"
                alt=""
              />
              <img
                v-show="tabsActive[6].active"
                src="~@/assets/img/person-safe-active.png"
                alt=""
              />
              <p>账号安全</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="jy-personcenter--right">
        <!-- components -->
        <!-- <keep-alive :includes="keepComponents" :max="3">
          <component :is="activeComponent"></component>
        </keep-alive> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//会员
// import vipCenterVue from './person/vipCenter.vue'

// //我的收藏
// import hobbyVue from './person/hobby.vue'

// //我的卡包
// import myPackageVue from './person/myPackage.vue'

// //资产记录
// import assetsVue from './person/assets.vue'

// //帮助反馈
// import helpAndReviewVue from './person/helpAndReview.vue'

// //消息中心
// import messageVue from './person/message.vue'

// //账号安全
// import accountSafeVue from './person/accountSafe.vue'
import { mapState } from 'vuex'

export default {
  name: 'PersonCenter',
  // components: {
  //   vipCenterVue,
  //   hobbyVue,
  //   myPackageVue,
  //   assetsVue,
  //   messageVue,
  //   helpAndReviewVue,
  //   accountSafeVue,
  // },
  // watch: {
  //   tabsActive: {
  //     handler(new_value, old_value) {
  //       console.log(new_value, old_value)
  //     },
  //     deep: true,
  //   },
  // },
  data() {
    return {
      current: 0, // 个人中心模块
      imageUrl: '', // 上传头像
      input: '', //input输入框
      radio: '1', //性别单选框
      editDialog: false, //编辑dailog
      activeName: 'first',
      activeIndex: 0,
      activeComponent: 'vipCenterVue',
      keepComponents: [],
      label: [
        {
          label: '会员中心',
          // comp: vipCenterVue,
          name: 'first',
          path: 'VIP',
          activeIndex: 0,
        },
        {
          label: '我的收藏',
          // comp: hobbyVue,
          name: 'second',
          path: 'Hobby',
          activeIndex: 1,
        },
        {
          label: '我的卡包',
          // comp: myPackageVue,
          name: 'tirth',
          path: 'Package',
          activeIndex: 2,
        },
        {
          label: '资产记录',
          // comp: assetsVue,
          name: 'forth',
          path: 'Assets',
          activeIndex: 3,
        },
        {
          label: '帮助反馈',
          // comp: helpAndReviewVue,
          name: 'fifth',
          path: 'HelpAndReview',
          activeIndex: 4,
        },
        {
          label: '消息中心',
          // comp: messageVue,
          name: 'sixth',
          path: 'Message',
          activeIndex: 5,
        },
        {
          label: '账号安全',
          // comp: accountSafeVue,
          name: 'seventh',
          path: 'AccountSafe',
          activeIndex: 6,
        },
      ],
      value: '',
      tabsActive: [
        {
          index: 0,
          dective: false,
          active: true,
        },
        {
          index: 1,
          dective: true,
          active: false,
        },
        {
          index: 2,
          dective: true,
          active: false,
        },
        {
          index: 3,
          dective: true,
          active: false,
        },
        {
          index: 4,
          dective: true,
          active: false,
        },
        {
          index: 5,
          dective: true,
          active: false,
        },
        {
          index: 6,
          dective: true,
          active: false,
        },
      ],
    }
  },
  mounted() {
    // console.log(this.$route.path)
    let path = this.$route.path
    path = path.substring(path.lastIndexOf('personCenter/') + 13)

    let index = this.label.filter((item) => {
      return path.indexOf(item.path) !== -1
    })
    index = index[0].activeIndex
    this.current = index
    this.changeImg(index)
  },
  methods: {
    changeComponent(value, index) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.current = index
      this.activeIndex = comItem[0].activeIndex
      //this.activeComponent = this.label[this.activeIndex].comp
      //点击切换图片
      this.changeImg(index)
      this.$router.push(`/personCenter/${this.label[this.activeIndex].path}`)
    },
    changeImg(index) {
      this.tabsActive.map((item) => {
        if (item['index'] === index) {
          this.tabsActive[index].dective = false
          this.tabsActive[index].active = true
        } else {
          this.tabsActive[item['index']].dective = true
          this.tabsActive[item['index']].active = false
        }
      })
    },
  },
  computed: {
    ...mapState('person', ['userInfo']),
    headimg() {
      // console.log(this.userInfo != null)
      return this.userInfo?.headimg
        ? this.userInfo.headimg
        : 'https://pg.jingyungame.com/web/img/tx.jpg'
    },
  },
}
</script>

<style lang="stylus">
.jy-personwidth
  width 1186px
  min-height 710px;
  background-color #fff
  border-radius: 10px;

.jy-personcenter
  display flex
  justify-content space-between
  align-items flex-start
  margin 20px 0

.jy-personcenter--left
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  width 294px
  &>div
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    background-color #fff

.jy-personcenter--user
  padding 40px 20px
  width 254px
  height 170px
  border-radius: 10px;

.jy-personcenter--info
  position relative
  display flex
  justify-content flex-start
  align-items center
  width 254px
  & img
    width 65px
    height 65px
    margin-right 10px

.jy-personcenter--info .jy-person--vip
  position absolute
  right:  -10px
  bottom:  36px
  width 42px
  height 17px

.jy-personcenter--nickname
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  color: #444343;
  line-height: 24px

.jy-personcenter--uid
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 24px

.jy-personcenter--reset
  display flex
  flex-wrap wrap
  margin-top 30px

.jy-personcenter--coins
  position relative
  margin 0 20px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #4D4C4C;

.jy-personcenter--reset p:nth-of-type(1)::after
  content: ''
  position absolute
  top 2px
  left -24px
  width 20px
  height 16px
  background: url('~@/assets/img/person-dia.png') no-repeat

.jy-personcenter--reset p:nth-of-type(2)::after
  content: ''
  position absolute
  top 0
  left -24px
  width 19px
  height 19px
  background: url('~@/assets/img/person-coins.png') no-repeat

.jy-personcenter--reset p:nth-of-type(3)
  margin-left 0
  & .el-icon-time
    font-size 16px

.jy-personcenter--retire
  position relative
  margin-left 20px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 32px

.jy-personcenter--reset p:nth-of-type(4)
  line-height 24px


.jy-personcenter--right
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  width: 1186px;

.jy-personcenter--tool
  margin-top 20px
  width: 294px;
  height: 420px;
  background: #FFFFFF;
  border-radius: 10px;
  padding 10px 0
  & ul li
    box-sizing border-box
    position relative
    display flex
    justify-content center
    align-items center
    width 294px
    height 60px
    line-height 60px
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #4D4C4C;
    cursor pointer
    & p
      margin-left 16px
    & img
      width 16px
      height 16px

.person_is__actived
  color #3873FD
  background-color: rgba(56, 115, 253, .29)
  &::after
    content: ''
    position absolute
    right 0
    bottom 10px
    width 2px
    height 60%
    background-color #3873FD
    border-radius 50

//会员中心 hack
.jy-personcenter--right .jy-head--vip
  margin-top 30px
  width: 1186px;
  height: 727px;
  background: #fff

.jy-personcenter--right .jy-vip--title
  & p
    position relative
    padding-left 20px
    color: #3C3B3B;
    letter-spacing: 2px;
    &::after
      content ''
      position absolute
      top 0
      left 0
      width: 4px;
      height: 27px;
      background: #3873FD;
      border-radius: 2px;
  & img
    display none

.jy-personcenter--right .jy-vippower--title
  position relative
  padding-left 20px
  color: #3C3B3B;
  letter-spacing: 2px;
  &::after
    content ''
    position absolute
    top 0
    left 0
    width: 4px;
    height: 27px;
    background: #3873FD;
    border-radius: 2px;

.jy-personcenter--right .jy-pay--method
  width: 747px;
  border: 1px solid #E8E8E8;

.jy-personcenter--right .jy-joinvip--banner
  width 1126px

.jy-personcenter--right .jy-pay--ways
  width 70%

.jy-personcenter--right .jy-vip--card,
.jy-personcenter--right .jy-card--info
  width 379px


.jy-personcenter--right .jy-vip--bgc
  padding-left 0


.jy-personcenter--title.jy-wrap--title
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  padding 20px 20px 33px
  &>p
    font-size: 20px

.jy-personcenter--title .deleteBorder
  margin-top 27px
</style>
