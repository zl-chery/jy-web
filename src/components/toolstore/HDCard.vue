<template>
  <div class="jy-card--all">
    <ul class="jy-card--des">
      <li v-for="item in HDcardList" :key="item.id">
        <div class="jy-card--img">
          <img :src="item.img_url" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">{{item.name}}</p>
          <p class="jy-card--infomation">{{item.desc | queryString}}</p>
          <p class="jy-card--tips">{{item.name}}进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p>￥<span>{{item.price}}</span></p>
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
import Http from '@/request/http';
export default {
  name: 'HDCard',
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
      HDcardList: []
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
    async getHDCard() {
      //秒进卡
      try {
        let {data} = await Http({
          type: 'cardList', 
          data: {
            type: 2
          }
        })
        this.HDcardList = data.list
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
  },
  mounted() {
    this.getHDCard()
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

.jy-toolpay--content.jy-HDcard--info
  margin-top 30px

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

.jy-toolstore--paymethod
  padding-top 24px
</style>
