<template>
  <div class="jy-head--vip jy-vip--recharge">
    <div class="jy-vip--title">
      <div class="jy-startGame--vip">
        <p>会员专享游戏，升级会员专享特权！</p>
        <p>开通会员，即可体验会员专享游戏：</p>
      </div>
      <img src="../../assets/img/recharge-cancel.png" alt="取消" @click="closeSecond()">
    </div>
    <div class="jy-joinvip--banner">
      <div class="jy-vip--money">
        <ul class="jy-vipMoney--info">
          <li>
            <p>月卡会员（30天）</p>
            <p>¥<span>38</span><del>¥67.5</del></p>
            <p>折合1.27/天</p>
            <div class="jy-vip--present">
              <p class="jy-present--title">立省¥5元</p>
            </div>
          </li>
          <li>
            <p>季卡会员（90天）</p>
            <p>¥<span>98</span><del>¥270</del></p>
            <p>折合1.08/天</p>
            <div class="jy-vip--present">
              <p class="jy-present--title">立省¥127元</p>
            </div>
          </li>
          <li>
            <p>年卡会员（365天）</p>
            <p>¥<span>365</span><del>¥1362</del></p>
            <p>折合1.00/天</p>
            <div class="jy-vip--present">
              <p class="jy-present--title">立省¥997元</p>
            </div>
          </li>
          
        </ul>
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
  name: 'OpenVipCard',
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
      this.$emit('changeSecondCard', this.second, 'vip')
    }
    //li点击的时候添加.vip-card--lock类名
  }
}
</script>

<style lang="stylus">
.jy-head--vip.jy-vip--recharge
  width: 675px
  height: 591px

.jy-startGame--vipCard .el-dialog
    width: 675px;
    height: 591px;
    border-radius 16px


.jy-startGame--vipCard .el-dialog
  & .el-dialog__body
    width: 675px;
    height: 591px;
    border-radius 16px
    padding 0

.jy-vip--recharge .jy-vip--title
  align-items flex-start

.jy-startGame--vip
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  height 60px
  color: #793200;
  line-height 28px
  &>p:nth-of-type(1)
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: 700;
  &>p:nth-of-type(2)
    font-size: 14px;
    font-family: MicrosoftYaHei;

.jy-vip--recharge .jy-vip--title
  margin-bottom 6px

.jy-vip--recharge .jy-joinvip--banner
  flex-direction column
  justify-content flex-start
  align-items flex-start
  width: 635px;
  height: 464px;
  background-color rgba(#fff, .75);
  border-radius: 10px;

.jy-vipMoney--info
  display flex
  justify-content space-between
  align-items center
  width: 595px;
  padding 20px 20px 0
  & li
    position relative
    display flex
    flex-direction column
    justify-content center
    align-items center
    width: 185px;
    height: 158px;
    text-align center
    font-family: MicrosoftYaHei;
    color: #793200;
    background: #fff
    border-radius: 16px;
    border: 1px solid rgba(146, 151, 165, 0.37);
    cursor pointer
    &>p:nth-of-type(1)
      margin-top 33px
      font-size: 16px;
    &>p:nth-of-type(2)
      width 153px
      margin 0 16px
      font-size: 23px;
      color: #803c0c
      height 59px
      border-bottom 1px solid rgba(121, 50, 0, 0.17);
      & span
        font-size: 42px;
      & del
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #883200;
    & p:nth-of-type(3)
      font-size: 14px;
      line-height 38px
  & .jy-vip--present
    position absolute
    top 0
    left 0
    width 95px
    height 24px
    text-align left
    line-height: 24px;
    & .jy-present--title
      margin-left 6px
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #fff
      

.jy-vipMoney--info li:nth-of-type(1) .jy-vip--present
  background url('../../assets/img/vip-present-month.png') no-repeat

.jy-vipMoney--info li:nth-of-type(2) .jy-vip--present,
.jy-vipMoney--info li:nth-of-type(3) .jy-vip--present
  background url('../../assets/img/vip-present-long.png') no-repeat

.jy-vip--recharge .jy-pay--method
  background-color transparent
  margin-left 0

.jy-vip--recharge .jy-pay--ways
  justify-content flex-start
  & button
    margin-right 10px

.vip-card--lock
  background: rgba(255, 246, 223, 0.66);
  border: 1px solid #FAD89D;
</style>