<template>
  <el-dialog
    :visible.sync="share"
    width="30%"
    :before-close="handleClose">
    <div class="jy-share--dialog">
      <div class="jy-share--content">
        <p class="jy-share--game">我在鲸云漫游平台上玩【孤岛惊魂】，太好玩了，你也一起来玩吧！点击下方链接，立即加入</p>
        <a href="jaascript:;">https://so.ali213.net/s/s3242233</a>
        <!-- <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false"> -->
      </div>
      <div class="jy-comment--share">
        <p>复制</p>
      </div>
    </div>
  </el-dialog>
</template>

<script>

export default {
  name: 'shareDialog',
  props: {
    msg: String,
    shareDialog: Boolean
  },
  data() {
    return {
      share: this.shareDialog, //shareDialog
    }

  },
  watch:{
    shareDialog(newVal){
      this.share = newVal
    }
  },
  methods: {
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          this.$emit('closeDialog')
          done();
        })
        .catch(() => {});
        this.$parent.changeShare()
    }
  }
}
</script>

<style lang="stylus">
//dialog  取消确认按钮hack
.dialog-button-carduse.el-button
  width: 100px;
  height: 40px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  border-radius: 37px;
  border 0

.dialog-button-carduse.el-button--default:focus,
.dialog-button-carduse.el-button--default:hover
  color: #3873FD;
  border-color: #DCDFE6;
  background-color: rgba(56, 115, 253, 0.12);

.dialog-button-carduse.el-button--primary
  color: #fff
  background: #3873FD;

.dialog-button-carduse.el-button--default
  color: #3873FD;
  background: rgba(56, 115, 253, 0.12);


//分享dialog
.jy-trading--play .el-dialog__wrapper .el-dialog,
.jy-gamepool--plugin .el-dialog__wrapper .el-dialog
  width: 594px !important
  height: 136px;
  padding 20px
  margin-top: 420px !important;
  background: #fff
  border-radius: 10px;

.jy-trading--play .el-dialog__wrapper .el-dialog__body,
.jy-gamepool--plugin .el-dialog__wrapper .el-dialog__body
  width: 554px !important
  height: 96px;
  padding 0
  background: #fff

.jy-share--dialog
  display flex
  justify-content space-between
  align-items center

.jy-share--content
  width: 408px;
  height: 74px;
  padding 11px 20px
  line-height 26px
  background: #EFF1F5;
  border-radius: 10px;
  & a
    color #3873FD

.jy-comment--share
  width: 96px;
  height: 96px;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  text-align center
  color: #fff
  line-height: 96px;
  background: #5688FF;
  border-radius: 10px;
  cursor pointer
  & p
    cursor pointer
</style>