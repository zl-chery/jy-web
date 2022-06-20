<template>
  <div class="jy-head--vip">
    <div class="jy-vip--title">
      <p>升级会员</p>
      <span>x</span>
    </div>
    <div class="jy-vip--banner">
      <div class="jy-vip--card">
        <div class="jy-card--info">
          <img src="../assets/img/day-card.png" alt="">
          <div class="jy-card--content">
            <p>会员体验卡（7天）</p>
            <p>开通立送5小时</p>
            <p>¥<span>9.9</span></p>
          </div>
        </div>
        <div class="jy-card--info">
          <img src="../assets/img/month-card.png" alt="">
          <div class="jy-card--content">
            <p>会员月卡（30天）</p>
            <p>每日赠送15分钟免费时长</p>
            <p>¥<span>38</span></p>
          </div>
        </div>
        <div class="jy-card--info">
          <img src="../assets/img/three-months-card.png" alt="">
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
            <img src="../assets/img/vip-wx.png" alt="">
            <p>微信支付</p>
          </button>
          <button>
            <img src="../assets/img/vip-wx.png" alt="">
            <p>支付宝</p>
          </button>
          <button>
            <img src="../assets/img/vip-wx.png" alt="">
            <p>PayPal</p>
          </button>
          <button>
            <img src="../assets/img/vip-wx.png" alt="">
            <p>鲸钻</p>
          </button>
        </div>
        <div class="jy-pay--code">
          <img src="../assets/img/jy-footer-logo.png" alt="">
          <div class="jy-pay--money">
            <p>您需支付：<span>38</span>元</p>
            <p>请用<span>微信</span>扫描二维码支付</p>
          </div>
          <p>
            <label for="agree-for-pay">
              <input type="checkbox" name="agree-for-pay" id="agree-for-pay">我已阅读并同意<a href="" target="_blank">《会员服务协议》</a>
            </label>
          </p>
        </div>
      </div>
    </div>
    <div class="jy-vip--footer jy-vip--bgc">
      <p class="jy-vippower--title">
        会员特权
      </p>
      <a href="javascript:;" class="jy-login--des">
        <img src="../assets/img/vip-day.png" alt="">
        <p>每天赠送60分钟</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-7prensent.png" alt="">
        <p>7折游玩</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-team.png" alt="">
        <p>极速排队</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-day.png" alt="">
        <p>意见反馈</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-nomoney.png" alt="">
        <p>每周限免</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-device.png" alt="">
        <p>高配机型</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-4k.png" alt="">
        <p>超清画质</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-noad.png" alt="">
        <p>免广告</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-longtime.png" alt="">
        <p>超长挂机</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-rometo.png" alt="">
        <p>远程连接</p>
      </a>
      <a href="javascript:;" class="jy-login--des">
         <img src="../assets/img/vip-moredevice.png" alt="">
        <p>多端互通</p>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  mounted() {
    this.getList();
  },
  methods:{
    getList() {
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
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
  &>p
    font-size 20px
    font-family MicrosoftYaHei-Bold, MicrosoftYaHei
    font-weight 700
    color #793200
    line-height 26px

.jy-vip--title span
  font-size 24px
  color #fff
  cursor pointer

.jy-vip--banner
  display flex
  justify-content flex-start
  align-items flex-start
  width 817px
  height 289px
  margin-bottom 9px

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

.jy-pay--ways button
  display flex
  justify-content center
  align-items center
  padding 9px 16px 10px 15px
  background-color #fff
  border-radius 10px
  border 1px solid transparent
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
  flex-wrap wrap
  justify-content flex-start
  align-items center
  &>img
    width 87px
    height 87px
    margin-right 16px
    padding-bottom 30px
  &>p
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #9297A5;

label
  line-height 21px
  vertical-align middle

input#agree-for-pay
  margin-right 8px
  vertical-align middle

label a
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 19px
  &:hover
    color: #3873FD;


.jy-pay--money
  width 342px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  line-height: 30px;
  &>p:nth-of-type(1)
    color: #4D4C4C;
    &>span
      margin-right 8px
      font-size: 30px;
      font-family: SanFranciscoText-Semibold, SanFranciscoText;
      font-weight: 600;
      color: #3873FD;
      line-height: 36px;
  &>p:nth-of-type(2)
    color: #9297A5;

.jy-vip--footer
  

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
    margin-right 78px
    text-align center
    &>img
      width 64px
    &>p
      width 64px
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #475163;
      line-height: 26px;

.jy-vip--bgc a:nth-of-type(6n)
  margin-right 0

.jy-vippower--title
  width 777px
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #793200;
  line-height: 24px;

</style>
