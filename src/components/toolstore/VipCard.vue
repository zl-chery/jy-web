<template>
  <div class="jy-card--all">
    <ul class="jy-card--des">
      <li>
        <div class="jy-card--img">
          <img src="../../assets/img/card-vip-day.png" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">7天会员周卡体验</p>
          <p class="jy-card--infomation">24小时秒进卡用于启动游戏，通过优先通道快速进入游戏，减少因高峰期排队拥挤造成的等待时间。</p>
          <p class="jy-card--tips">24秒进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p>￥<span>29.9</span></p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="dialogVisible = true">立即购买</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div class="jy-toolpay--show">
              <div class="jy-toolpay--title">
                <p class="jy-toolstore--pay">会员卡</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <div class="jy-toolpay--info">
                <img src="../../assets/img/toolpay-second.png" alt="">
                <div class="jy-toolpay--des">
                  <p>1小时秒进卡</p>
                  <p>一小时内免进</p>
                </div>
                <p>¥<span>9.9</span></p>
              </div>
            </div>
            <div class="jy-toolpay--content">
              <div class="jy-toopay--row">
                <p>选择购买数量</p>
                <div class="jy-toolpay-inputnum">
                  <el-input-number class="toolpay-inputnum" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                </div>
              </div>
              <div class="jy-toolpay--method">
                <div class="jy-recharge--content">
                  <div class="jy-pay--method3 jy-toolpay--method">
                    <p class="jy-pay--title jy-toolstore--paymethod">选择充值方式</p>
                    <div class="jy-pay--ways">
                      <button>
                        <img src="~@/assets/img/pay-wx.png" alt="微信支付">
                        <p>微信支付</p>
                      </button>
                      <button>
                        <img src="~@/assets/img/pay-zfb.png" alt="支付宝支付">
                        <p>支付宝</p>
                      </button>
                      <button>
                        <img src="~@/assets/img/recharge-jz.png" alt="鲸钻支付">
                        <p>鲸钻</p>
                      </button>
                    </div>
                    <div class="jy-qr--code">
                      <img src="~@/assets/img/jy-footer-logo.png" alt="">
                      <div class="jy-pay--money jy-qr-money">
                        <p>您需支付：<span>38</span>元</p>
                        <p>请用<span>微信</span>扫描二维码支付</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-card--img">
          <img src="../../assets/img/card-vip-month.png" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">30天会员卡</p>
          <p class="jy-card--infomation">24小时秒进卡用于启动游戏，通过优先通道快速进入游戏，减少因高峰期排队拥挤造成的等待时间。</p>
          <p class="jy-card--tips">24秒进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p>￥<span>29.9</span></p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="dialogVisible = true">立即购买</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div class="jy-toolpay--show">
              <div class="jy-toolpay--title">
                <p class="jy-toolstore--pay">秒进卡</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <div class="jy-toolpay--info">
                <img src="../../assets/img/toolpay-second.png" alt="">
                <div class="jy-toolpay--des">
                  <p>1小时秒进卡</p>
                  <p>一小时内免进</p>
                </div>
                <p>¥<span>9.9</span></p>
              </div>
            </div>
            <div class="jy-toolpay--content">
              <div class="jy-toopay--row">
                <p>选择购买数量</p>
                <div class="jy-toolpay-inputnum">
                  <el-input-number class="toolpay-inputnum" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                </div>
              </div>
              <div class="jy-toolpay--method">
                <div class="jy-recharge--content">
                  <div class="jy-pay--method3 jy-toolpay--method">
                    <p class="jy-pay--title jy-toolstore--paymethod">选择充值方式</p>
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
                    <div class="jy-qr--code">
                      <img src="../../assets/img/jy-footer-logo.png" alt="">
                      <div class="jy-pay--money jy-qr-money">
                        <p>您需支付：<span>38</span>元</p>
                        <p>请用<span>微信</span>扫描二维码支付</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-card--img">
          <img src="../../assets/img/card-vip-quarter.png" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">90天会员季卡</p>
          <p class="jy-card--infomation">24小时秒进卡用于启动游戏，通过优先通道快速进入游戏，减少因高峰期排队拥挤造成的等待时间。</p>
          <p class="jy-card--tips">24秒进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p><span>300</span>鲸钻</p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="dialogVisible = true">立即购买</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div class="jy-toolpay--show">
              <div class="jy-toolpay--title">
                <p class="jy-toolstore--pay">秒进卡</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <div class="jy-toolpay--info">
                <img src="../../assets/img/toolpay-second.png" alt="">
                <div class="jy-toolpay--des">
                  <p>1小时秒进卡</p>
                  <p>一小时内免进</p>
                </div>
                <p>¥<span>9.9</span></p>
              </div>
            </div>
            <div class="jy-toolpay--content">
              <div class="jy-toopay--row">
                <p>选择购买数量</p>
                <div class="jy-toolpay-inputnum">
                  <el-input-number class="toolpay-inputnum" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                </div>
                
              </div>
              <div class="jy-toolpay--method">
                <div class="jy-recharge--content">
                  <div class="jy-pay--method3 jy-toolpay--method">
                    <p class="jy-pay--title jy-toolstore--paymethod">选择充值方式</p>
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
                    <div class="jy-qr--code">
                      <img src="../../assets/img/jy-footer-logo.png" alt="">
                      <div class="jy-pay--money jy-qr-money">
                        <p>您需支付：<span>38</span>元</p>
                        <p>请用<span>微信</span>扫描二维码支付</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-card--img">
          <img src="../../assets/img/exp-day.png" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">1天会员体验卡</p>
          <p class="jy-card--infomation">24小时秒进卡用于启动游戏，通过优先通道快速进入游戏，减少因高峰期排队拥挤造成的等待时间。</p>
          <p class="jy-card--tips">24秒进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p>￥<span>29.9</span></p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="dialogVisible = true">立即购买</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div class="jy-toolpay--show">
              <div class="jy-toolpay--title">
                <p class="jy-toolstore--pay">秒进卡</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <div class="jy-toolpay--info">
                <img src="../../assets/img/toolpay-second.png" alt="">
                <div class="jy-toolpay--des">
                  <p>1小时秒进卡</p>
                  <p>一小时内免进</p>
                </div>
                <p>¥<span>9.9</span></p>
              </div>
            </div>
            <div class="jy-toolpay--content">
              <div class="jy-toopay--row">
                <p>选择购买数量</p>
                <div class="jy-toolpay-inputnum">
                  <el-input-number class="toolpay-inputnum" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                </div>
                
              </div>
              <div class="jy-toolpay--method">
                <div class="jy-recharge--content">
                  <div class="jy-pay--method3 jy-toolpay--method">
                    <p class="jy-pay--title jy-toolstore--paymethod">选择充值方式</p>
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
                    <div class="jy-qr--code">
                      <img src="../../assets/img/jy-footer-logo.png" alt="">
                      <div class="jy-pay--money jy-qr-money">
                        <p>您需支付：<span>38</span>元</p>
                        <p>请用<span>微信</span>扫描二维码支付</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-card--img">
          <img src="../../assets/img/exp-month.png" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">30天会员体验卡</p>
          <p class="jy-card--infomation">24小时秒进卡用于启动游戏，通过优先通道快速进入游戏，减少因高峰期排队拥挤造成的等待时间。</p>
          <p class="jy-card--tips">24秒进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p>￥<span>29.9</span></p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="toShow(item, index)">立即购买</el-button>
          <CardPayVue :item="content" :dialogVisible="dialogVisible" @changeVisable="changeVisable"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CardPayVue from './cardPay/CardPay.vue';
export default {
  name: 'VipCard',
  props: {
    msg: String
  },
  components: {
    CardPayVue
  },
  data() {
    return {
      num: 1,
      dialogVisible: false,  //dialog
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(value) {
      console.log(value);
    },
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        })
        .catch(() => {});
    },
    //展示dialog
    toShow(content, index) {
      this.dialogVisible = true
      this.content = content
      this.allCardList[index].dialogVisible = true
    },
    //关闭dialog
    changeVisable(index) {
      this.dialogVisible = false
      this.allCardList[index].dialogVisible = false
    }
  }

}
</script>

<style lang="stylus">
//支付dialog
.jy-card--shopping .el-dialog
  width 433px !important
  height 513px !important
  background: #EFF1F5;
  box-shadow: 0px 0px 9px 0px rgba(77, 80, 131, 0.17);
  border-radius: 16px;

.jy-card--shopping .el-dialog__header
  display none

.jy-card--shopping .el-dialog__body
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  padding 0

.jy-toolpay--show
  position relative
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  width 434px
  height 164px
  background: url('../../assets/img/toolstore-pay-bgc.png')

.jy-toolpay--title
  position relative
  display flex
  justify-content space-between
  align-content center
  padding 28px 0 30px
  
  &>img
    position absolute
    right -166px
    bottom 30px 
    width 22px
    height 22px
    cursor pointer

.jy-toolstore--pay
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #793200;
  line-height: 26px;

.jy-toolpay--info
  box-sizing border-box
  position absolute
  right 20px
  bottom -10px
  display flex
  justify-content flex-start
  align-items center
  width: 393px;
  height: 90px;
  padding 9px 20px
  background: #fff
  border-radius: 10px;
  border: 1px solid #E8E8E8;
  &>img
    width 101px
    height 72px
  &>p
    width 25%
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #4B81FE;
    line-height: 20px;
    &>span
      margin-left 4px
      font-size: 20px;
      font-family: MicrosoftYaHei;
      color: #4B81FE;
      line-height: 26px;
      

.jy-toolpay--des
  margin-left 21px
  width 188px

.jy-toolpay--des p:nth-of-type(1)
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #626161;
  line-height: 24px;


.jy-toolpay--des p:nth-of-type(2)
  font-size: 12px;
  font-family: MicrosoftYaHei;
  color: #A7ABB8;
  line-height: 18px;

.jy-toolpay--content
  box-sizing border-box
  margin-top 30px
  padding 20px
  width 393px
  height 289px
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #4D4C4C;
  background: rgba(255, 255, 255, .75)
  border-radius: 10px;

.jy-toopay--row
  display flex
  justify-content flex-start
  align-items center
  &>p
    margin-right 15px

//支付计数器hack .el-input-number
.jy-toolpay-inputnum .el-input-number .el-input {
    display: block;
    width 74px
    height 28px
}

.jy-toolpay-inputnum .el-input__inner
  width: 74px;
  height: 25px;
  overflow hidden
  border-radius: 28px;
  border: 1px solid #9297A5;

.jy-toolpay-inputnum .el-input-number
  width: 74px;
  height: 25px;

.jy-toolpay-inputnum>.toolpay-inputnum .el-input-number__decrease,
.jy-toolpay-inputnum>.toolpay-inputnum .el-input-number__increase
  width 24px
  height 24px
  line-height 26px
  overflow hidden
  background transparent

//调整- +上下距离
.jy-toolpay-inputnum .toolpay-inputnum .el-input-number__decrease,
.jy-toolpay-inputnum .toolpay-inputnum .el-input-number__increase
  top 2px

.jy-toolpay-inputnum .el-icon-minus
.jy-toolpay-inputnum .el-icon-plus:before
  color #9297A5;

.jy-toolpay-inputnum .el-input-number__increase
  left 50px
  border-left 1px solid #9297A5;

.jy-toolpay-inputnum .el-input-number .el-input__inner
  padding-left 0
  padding-right 0
  position absolute
  top 2px
  left 0

.jy-toolpay-inputnum .el-input-number__decrease
  border-right 1px solid #9297A5;

.jy-toolpay-inputnum .el-input-number__decrease:hover,
.jy-toolpay-inputnum .el-input-number__increase:hover
  color: #9297A5;

//.jy-toolpay-inputnum p
//  margin-left 30px
//  font-size: 20px;
//  font-family: PingFangSC-Semibold, PingFang SC;
//  font-weight: 700;
//  color: #3873FD;
//  &>span
//    margin-right 8px
//    font-size: 40px;
//    font-family: SanFranciscoText-Semibold, SanFranciscoText;
//    color: #3873FD

.jy-toolpay--method.jy-pay--method3
  width 353px

.jy-toolstore--paymethod
  padding-top 24px
</style>
