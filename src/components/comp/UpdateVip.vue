<template>
  <div class="jy-head--vip">
    <div class="jy-vip--title">
      <p>升级会员</p>
      <img src="../../assets/img/recharge-cancel.png" alt="取消" />
    </div>
    <div class="jy-joinvip--banner">
      <div class="jy-vip--card">
        <div
          class="jy-card--info"
          v-for="(item, index) in vip"
          :key="item.id"
          :class="{ 'jy-card--info-active': index == activeVip.index }"
          @click="changeVip(index, item.id)"
        >
          <img :src="item.img" alt="" />
          <div class="jy-card--content">
            <p>{{ item.name }}</p>
            <p>{{ item.desc }}</p>
            <p>
              ¥<span>{{ item.price }}</span>
            </p>
          </div>
        </div>
        <!-- <div class="jy-card--info">
          <img src="../../assets/img/month-card.png" alt="" />
          <div class="jy-card--content">
            <p>会员月卡（30天）</p>
            <p>每日赠送15分钟免费时长</p>
            <p>¥<span>38</span></p>
          </div>
        </div>
        <div class="jy-card--info">
          <img src="../../assets/img/three-months-card.png" alt="" />
          <div class="jy-card--content">
            <p>会员季卡（90天）</p>
            <p>每日赠送30分钟免费时长</p>
            <p>¥<span>98</span></p>
          </div>
        </div> -->
      </div>
      <div class="jy-pay--method">
        <p class="jy-pay--title">选择充值方式</p>
        <div class="jy-pay--ways">
          <button
            @click="changePay(1)"
            :class="{ 'active-pay': activeVip.payType === 1 }"
          >
            <img src="../../assets/img/pay-wx.png" alt="微信支付" />
            <p>微信支付</p>
          </button>
          <button
            @click="changePay(2)"
            :class="{ 'active-pay': activeVip.payType === 2 }"
          >
            <img src="../../assets/img/pay-zfb.png" alt="支付宝支付" />
            <p>支付宝</p>
          </button>
          <button
            @click="changePay(4)"
            :class="{ 'active-pay': activeVip.payType === 4 }"
          >
            <img src="../../assets/img/pay-paypal.png" alt="银行卡支付" />
            <p>PayPal</p>
          </button>
          <button
            @click="changePay(5)"
            :class="{ 'active-pay': activeVip.payType === 5 }"
          >
            <img src="../../assets/img/recharge-jz.png" alt="鲸钻支付" />
            <p>鲸钻</p>
          </button>
        </div>
        <div class="jy-pay--code" v-if="!userInfo.isVip">
          <div class="jy-qr--code" v-show="activeVip.payType != 5">
            <img :src="code_img" alt="二维码" />
            <div class="jy-pay--money">
              <p>
                您需支付：<span>{{
                  vip[activeVip.index] ? vip[activeVip.index].price / 10 : 0
                }}</span
                >元
              </p>
              <p>请用<span>微信</span>扫描二维码支付</p>
            </div>
          </div>
          <div class="jy-qr--code">
            <div class="jy-pay--money" v-show="activeVip.payType == 5">
              <p>
                您需支付：<span>{{
                  vip[activeVip.index] ? vip[activeVip.index].price : 0
                }}</span
                >鲸钻
              </p>
              <el-button type="primary" round @click="coinsBuy"
                >立即支付</el-button
              >
            </div>
          </div>
          <el-checkbox v-model="agreement"
            >我已阅读并同意<a>《会员服务协议》</a></el-checkbox
          >
        </div>
        <div class="jy-pay--isVip" v-if="userInfo.isVip">
          您已经是会员了，无需重复开会员～
        </div>
      </div>
    </div>
    <div class="jy-vip--footer jy-vip--bgc">
      <p class="jy-vippower--title">会员特权</p>
      <a
        href="javascript:;"
        class="jy-login--des"
        v-for="item in auth_list"
        :key="item.id"
      >
        <img :src="item.icon" alt="图标" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import Http from '@/request/http'
import { mapState } from 'vuex'
export default {
  name: 'UpdateVip',
  props: {
    msg: String,
  },
  data() {
    return {
      vip: [],
      activeVip: {
        card_id: 0,
        payType: 1,
        index: 0,
      },
      agreement: false,
      code_img: '',
    }
  },
  async mounted() {
    try {
      await Http({
        type: 'memberList',
        data: {
          user_token: this.$cookies.get('as_user_token'),
        },
      }).then((res) => {
        // console.log(res)
        this.vip = res.data
        this.activeVip.card_id = this.vip[0].id
        this.getCodeImg()
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    changeVip(index, card_id) {
      this.activeVip.index = index
      this.activeVip.card_id = card_id
      this.getCodeImg()
    },
    changePay(type) {
      // console.log(type)
      this.activeVip.payType = type
      this.getCodeImg()
    },
    async coinsBuy() {
      if (this.agreement) {
        try {
          await Http({
            type: 'coinsBuy',
            data: {
              user_token: this.$cookies.get('as_user_token'),
              card_id: this.activeVip.card_id,
            },
          }).then((res) => {
            console.log(res)
            if (res.status == 200) {
              this.$alert('开通成功', '提示', {
                confirmButtonText: '确定',
              })
            } else {
              this.$alert(res.msg, '提示', {
                confirmButtonText: '确定',
              })
            }
          })
        } catch (error) {
          console.log(error)
        }
      } else {
        this.$alert('请勾选会员服务协议', '提示', {
          confirmButtonText: '确定',
        })
      }
    },
    async getCodeImg() {
      try {
        await Http({
          type: 'moneyBuy',
          data: {
            user_token: this.$cookies.get('as_user_token'),
            card_id: this.activeVip.card_id,
            pay_type: this.activeVip.payType,
          },
        }).then((res) => {
          console.log(res)
          this.code_img = res.data.code_img
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    auth_list() {
      return this.vip[this.activeVip.index]
        ? this.vip[this.activeVip.index].auth_list
        : []
    },
    ...mapState('person', ['userInfo']),
  },
}
</script>

<style lang="stylus">

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

.jy-card--info:hover,.jy-card--info-active
  color: #894500;
  border: 1px solid #FAD89D !important;


.jy-card--info:hover .jy-card--content>p:nth-of-type(1),
.jy-card--info:hover .jy-card--content>p:nth-of-type(2),
.jy-card--info-active .jy-card--content>p:nth-of-type(2)
  color: #894500 !important;

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
    width: 138px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

.jy-pay--ways .active-pay
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

.jy-pay--isVip
  width: 224px;
  height: 19px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 19px;
  margin-top: 40px;
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
  &>button
    width: 152px;
    margin-bottom: 12px


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
</style>
