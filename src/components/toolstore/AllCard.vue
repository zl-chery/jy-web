<template>
  <div class="jy-card--all">
    <ul>
      <li v-for="(item, index) in allCardList" :key="item.id">
        <div class="jy-card--img">
          <img :src="item.img_url" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">{{item.name}}</p>
          <p class="jy-card--infomation">{{item.desc | queryString}}</p>
          <p class="jy-card--tips">{{item.name}}进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p><span>{{item.price}}</span>鲸钻</p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="toShow(item, index)">立即购买</el-button>
          <!-- <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div class="jy-toolpay--show">
              <div class="jy-toolpay--title">
                <p class="jy-toolstore--pay">秒进卡</p>
                <img src="~@/assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <div class="jy-toolpay--info">
                <img :src="item.img_url" alt="">
                <div class="jy-toolpay--des">
                  <p>{{item.name}}</p>
                  <p>{{item.valid_hours}}小时内免进</p>
                </div>
                <p>¥<span>9.9</span></p>
              </div>
              <div class="jy-toolpay--content jy-card--show">
                <div class="jy-toopay--row">
                  <p>选择购买数量</p>
                  <div class="jy-toolpay-inputnum">
                    <el-input-number class="toolpay-inputnum" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                  </div>
                </div>
                <div class="jy-toolpay-inputnum">
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
          </el-dialog> -->
          <CardPayVue :item="content" :dialogVisible="dialogVisible" @changeVisable="changeVisable"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CardPayVue from './cardPay/CardPay.vue';
import Http from '@/request/http';
export default {
  name: 'AllCard',
  props: {
    msg: String,
  },
  components: {
    CardPayVue
  },
  data() {
    return {
      num: 1,
      allCardList: [], // 所有卡片
      dialogVisible: false,  //dialog
      content: '',  //购买内容
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
    async getAllCard() {
      //秒进卡，有限卡/ 高清卡
      try {
        let {data} = await Http({
          type: 'cardList', 
        })
        // let result = await Http({
        //   type: 'vipCardList', 
        // })
        this.allCardList = data.list
        this.allCardList.map((item, index) => {
          item.dialogVisible = false
          item.index = index
        })
      } catch (error) {
        console.log(error)
      }
    },
    //展示dialog
    toShow(content, index) {
      this.dialogVisible = true
      // this.$set(item, 'dialogVisible', true)
      this.content = content
      this.allCardList[index].dialogVisible = true
    },
    //关闭dialog
    changeVisable(index) {
      this.dialogVisible = false
      this.allCardList[index].dialogVisible = false
    }
    //获取vip卡
    // async getVipCard() {
    //   //秒进卡，有限卡/ 高清卡
    //   try {
    //     let {data} = await Http({
    //       type: 'vipCardList', 
    //     })
    //     this.cardList = this.cardList.push(data.list)
    //     console.log(this.cardList, 'vip')
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
  mounted() {
    this.getAllCard()
    // this.getVipCard()
    // console.log(this.cardList, 'cardList')
  },
  filters: {
    queryString(value) {
      if (!value) return ''
        return `${value.split('。')[0]}。`
    },
  },

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

.jy-toopay--row
  display flex
  justify-content flex-start
  align-items center
  &>p
    margin-right 15px

.jy-card--show.jy-toopay--row
  margin-top 25%

.jy-card--pay
  display flex
  justify-content flex-start
  align-items center
  width 100%
  & p
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
