<template>
  <div class="jy-show--recharge jy-head--recharge">
    <div class="jy-recharge--title">
      <div class="jy-recharge--method">
        <p class="jy-recharge--online">在线充值</p>
        <img
          src="../../assets/img/recharge-cancel.png"
          alt="充值取消"
          @click="show.showRecharge = false"
        />
      </div>
      <div class="jy-recharge--ways">
        <div class="jy-recharge--jz">
          <div class="jy-recharge--coins">
            <div class="jy-jz--coins">
              <img src="../../assets/img/recharge-jz.png" alt="鲸钻充值" />
              <p>60</p>
            </div>
          </div>
          <p class="jy-rmb jy-rmb--nopresent">6元</p>
        </div>
        <div class="jy-recharge--jz">
          <div class="jy-recharge--coins">
            <div class="jy-jz--coins">
              <img src="../../assets/img/recharge-jz.png" alt="鲸钻充值" />
              <p>450</p>
            </div>
          </div>
          <p class="jy-rmb jy-rmb--nopresent">45元</p>
        </div>
        <div class="jy-recharge--jz">
          <div class="jy-recharge--coins">
            <div class="jy-jz--coins">
              <img src="../../assets/img/recharge-jz.png" alt="鲸钻充值" />
              <p>680</p>
            </div>
          </div>
          <p class="jy-rmb">68元</p>
          <p class="jy-fist--recharge">赠送299鲸币</p>
        </div>
        <div class="jy-recharge--jz">
          <div class="jy-recharge--coins">
            <div class="jy-jz--coins">
              <img src="../../assets/img/recharge-jz.png" alt="鲸钻充值" />
              <p>1180</p>
            </div>
          </div>
          <p class="jy-rmb">118元</p>
          <p class="jy-fist--recharge">赠送999鲸币</p>
        </div>
        <div class="jy-recharge--jz">
          <div class="jy-recharge--coins">
            <div class="jy-jz--coins">
              <img src="../../assets/img/recharge-jz.png" alt="鲸钻充值" />
              <p>1980</p>
            </div>
          </div>
          <p class="jy-rmb">198元</p>
          <p class="jy-fist--recharge">赠送2999鲸币</p>
        </div>
        <div class="jy-recharge--jz">
          <div class="jy-recharge--coins">
            <div class="jy-jz--coins">
              <img src="../../assets/img/recharge-jz.png" alt="鲸钻充值" />
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
            <img src="../../assets/img/pay-wx.png" alt="微信支付" />
            <p>微信支付</p>
          </button>
          <button>
            <img src="../../assets/img/pay-zfb.png" alt="支付宝支付" />
            <p>支付宝</p>
          </button>
          <button>
            <img src="../../assets/img/pay-paypal.png" alt="银行卡支付" />
            <p>PayPal</p>
          </button>
        </div>
        <div class="jy-qr--code">
          <img src="../../assets/img/jy-footer-logo.png" alt="" />
          <div class="jy-pay--money jy-qr-money">
            <p>您需支付：<span>38</span>元</p>
            <p>请用<span>微信</span>扫描二维码支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineRecharge',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>
