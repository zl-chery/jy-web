<template>
  <div class="jy-head--vip jy-secondcard--open">
    <div class="jy-vip--title">
      <p>秒进卡</p>
      <img src="../../assets/img/recharge-cancel.png" alt="取消" @click="closeSecond()">
    </div>
    <div class="jy-joinvip--banner">
      <div class="jy-vip--card">
        <div class="jy-card--info">
          <img src="../../assets/img/day-card.png" alt="">
          <div class="jy-card--content">
            <p>会员体验卡（7天）</p>
            <p>开通立送5小时</p>
            <p>¥<span>9.9</span></p>
          </div>
        </div>
        <div class="jy-card--info">
          <img src="../../assets/img/month-card.png" alt="">
          <div class="jy-card--content">
            <p>会员月卡（30天）</p>
            <p>每日赠送15分钟免费时长</p>
            <p>¥<span>38</span></p>
          </div>
        </div>
        <div class="jy-card--info">
          <img src="../../assets/img/three-months-card.png" alt="">
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
            <img src="../../assets/img/pay-wx.png" alt="微信支付">
            <p>微信支付</p>
          </button>
          <button>
            <img src="../../assets/img/pay-zfb.png" alt="支付宝支付">
            <p>支付宝</p>
          </button>
          <button>
            <img src="../../assets/img/pay-paypal.png" alt="银行卡支付">
            <p>PayPal</p>
          </button>
          <button>
            <img src="../../assets/img/recharge-jz.png" alt="鲸钻支付">
            <p>鲸钻</p>
          </button>
        </div>
        <div class="jy-pay--code">
          <div class="jy-qr--code">
            <img src="../../assets/img/jy-footer-logo.png" alt="">
            <div class="jy-pay--money">
              <p>您需支付：<span>38</span>元</p>
              <p>请用<span>微信</span>扫描二维码支付</p>
            </div>
          </div>
          <el-checkbox>我已阅读并同意<a>《会员服务协议》</a></el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OpenSecondCard',
  props: {
    msg: String,
    confirmSecondDialog: Boolean
  },
  data() {
    return {
      second: this.confirmSecondDialog
    }

  },
  watch:{
    confirmSecondDialog(newVal){
      this.second = newVal
    }
  },
  methods: {
    closeSecond() {
      this.$emit('changeSecondCard', this.second, 'second')
    }
  }
}
</script>

<style lang="stylus">
.jy-secondcard--open.jy-head--vip
  height 393px

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


</style>