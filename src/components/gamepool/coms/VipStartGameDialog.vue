<template>
  <el-dialog class="jy-startGame" title="创建房间" :visible.sync="start">
    <div class="jy-createhome-dialog">
      <div class="jy-createhome--title">
        <p class="jy-createhome--pay">创建房间</p>
        <img src="../../../assets/img/toolpay-cancel.png" alt="!"  @click="close(false)">
      </div>
    </div>
    <div class="jy-createhome-info">
      <div class="jy-createHome--game">
        <img src="../../../assets/img/jy-logo.jpg" alt="">
        <div class="jy-createHome--mask">
          <p>排<span>74</span>位</p>
          <p>会员队列</p>
        </div>
      </div>
      <div class="jy-createHome--card">
        <div class="jy-startGame--second">
          <p>无需排队</p>
          <div class="jy-createCard--info">
            <p>秒进卡通道</p>
            <el-button round class="button-card--comment" @click="confirmSecondDialog = true">使用</el-button>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer vipStartGame-button">
      <el-button class="dialog-button-carduse" @click="close(false)">取消等待</el-button>
      <el-button class="dialog-button-carduse" type="primary" @click="start = true">继续等待</el-button>
    </div>
  </el-dialog>
</template>

<script>
//秒进卡
// import OpenSecondCardVue from '@/components/comp/OpenSecondCard.vue'

export default {
  name: 'VipStartGameDialog',
  props: {
    msg: String,
    startGameDialog: Boolean,
  },
  data() {
    return {
      confirmSecondDialog: false,   //开通VIP
      start: this.startGameDialog, //startDialog
    }

  },
  watch:{
    startGameDialog(newVal){
      this.start = newVal
    },
    confirmSecondDialog(newVal) {
      this.confirmSecondDialog = newVal
    }
  },
  methods: {
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        })
        .catch(() => {});
        this.$parent.changeShare()
    },
    //关闭充值
    changeSecondCard(value, card) {
      this.$nextTick(() => {
        //关闭秒进卡充值
        if(card === 'second') {
          this.confirmSecondDialog = value ? !value : value
        }
        //关闭vip充值
        if(card === 'vip') {
          this.confirmVipDialog = value ? !value : value
        }
      })
    },
    //关闭游戏
    close(value) {
      this.$nextTick(() => {
        console.log(value)
        this.start = value
      })
      this.$emit('closeGame', value)
    }
  }
}
</script>

<style lang="stylus">
//开始游戏dialog
.jy-startGame .el-dialog
  width: 317px;
  height: 505px;
  background: #fff
  border-radius: 10px;

.jy-createhome-info
  position relative
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 10px
  

.jy-createHome--game
  position relative
  display flex
  justify-content center
  align-items center
  width 214px
  height 214px
  text-align center
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FBDD94;
  border-radius 50%
  background url('../../../assets/img/startGame-vipstart-bgc.png') no-repeat
  & img
    width 166px
    height 166px
    border-radius 50%
    overflow hidden
  &::before
    content ''
    position absolute
    z-index 2
    top 22px
    left 22px
    width 170px
    height 170px
    background url('../../../assets/img/startGame-vipstart-before.png') no-repeat
  &::after
    content ''
    position absolute
    z-index 2
    top 20px
    left 18px
    width 177px
    height 177px
    background url('../../../assets/img/startGame-vipstart-after.png') no-repeat

.jy-createHome--mask
  position absolute
  display flex
  flex-direction column
  justify-content center
  align-items center
  top 24px
  left 24px
  width 166px
  height 166px
  border-radius 50%
  overflow hidden
  background-color rgba(0, 0, 0, .3)
  & span
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FBDD94;

.jy-createHome--card
  display flex
  justify-content center
  align-items center
  width 100%
  height 90px
  margin-top 20px
  &>div
    position relative
    width 257px
    height 90px
    text-align center
    line-height 61px
    overflow hidden
    border-radius 5px
    & span
      font-size 18px
      margin 0 5px

.jy-startGame-vip
  color #c39658
  background url('../../../assets/img/startGame-vip-bgc.png') no-repeat
  & .jy-createCard--info
    background-color rgba(#ddb77f, .5)
  & .button-card--comment
    color #c59a5e

.jy-startGame--second
  color #ffecc5
  background url('../../../assets/img/startGame-vipstart-second.png') no-repeat
  & .jy-createCard--info
    background-color rgba(#979595, .5)
  & .button-card--comment
    color #676666

.jy-createCard--info
  position absolute
  display flex
  justify-content space-between
  align-items center
  bottom 0
  right 0
  width 235px
  height 30px
  padding 0 10px 0 12px
  color #fff
  font-size 14px
  font-family: PingFangSC-Regular, PingFang SC;
  & p
    line-height 30px

.button-card--comment.is-round
  padding 1px 8px !important
  border-radius: 17px !important
  border 0
  & span
    font-size 14px !important
  &:hover
    background-color #fff

.jy-startGame--secondCard .el-dialog
  width 857px !important
  height 393px
  border-radius: 16px;
  & .el-dialog__body
    padding 0

.vipStartGame-button.dialog-footer
  display flex
  justify-content center
  align-items center


</style>