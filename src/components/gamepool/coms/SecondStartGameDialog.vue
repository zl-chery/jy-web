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
          <p>秒进队列</p>
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
  name: 'SecondStartGameDialog',
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
  height: 384px;
  background: #fff
  border-radius: 10px;

.jy-createhome-info
  position relative
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 30px
  

.jy-createHome--game
  position relative
  display flex
  justify-content center
  align-items center
  width 191px
  height 191px
  text-align center
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FBDD94;
  border-radius 50%
  background url('../../../assets/img/startGame-secondstart-bgc.png') no-repeat
  & img
    width 164px
    height 164px
    border-radius 50%
    overflow hidden
  &::before
    content ''
    position absolute
    z-index 2
    top 11px
    left 12px
    width 167px
    height 166px
    background url('../../../assets/img/startGame-secondstart-before.png') no-repeat
  &::after
    content ''
    position absolute
    z-index 2
    top -11px
    left -10px
    width 214px
    height 215px
    background url('../../../assets/img/startGame-secondstart-after.png') no-repeat

.jy-createHome--mask
  position absolute
  display flex
  flex-direction column
  justify-content center
  align-items center
  top 12px
  left 13px
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