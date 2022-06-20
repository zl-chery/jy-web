<template>
  <div class="jy-feedback">
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
    <el-dialog
      title="意见反馈"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :modal="false"
    >
      <div class="jy-carduse--title">
        <h2>问题反馈</h2>
        <img
          src="../../assets/img/toolpay-cancel.png"
          alt="取消"
          @click="closeDialog"
        />
      </div>
      <div class="jy-feedback--type jy-feedback--span">
        <span>反馈类型</span>
        <el-row>
          <el-button class="button-width88" type="primary" round
            >开放失败</el-button
          >
          <el-button class="button-width88" type="primary" round
            >连接失败</el-button
          >
          <el-button class="button-width88" type="primary" round
            >声音异常</el-button
          >
          <el-button class="button-width88" type="primary" round
            >颜色失真</el-button
          >
          <el-button
            class="button-width88 button-nomarginbottom"
            type="primary"
            round
            >延迟严重</el-button
          >
          <el-button
            class="button-width88 button-nomarginbottom"
            type="primary"
            round
            >手柄异常</el-button
          >
          <el-button
            class="button-width88 button-nomarginbottom"
            type="primary"
            round
            >需求建议</el-button
          >
          <el-button
            class="button-width88 button-nomarginbottom"
            type="primary"
            round
            >画面卡顿</el-button
          >
        </el-row>
      </div>
      <div class="jy-feedback--question jy-feedback--span">
        <span>问题截图</span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="jy-feedback--questiondes jy-feedback--span">
        <span>问题详情</span>
        <el-input
          class="jy-feedback--des"
          type="textarea"
          :rows="2"
          placeholder="请输入问题详情"
          v-model="textarea"
        >
        </el-input>
      </div>
      <span></span>
      <div class="jy-feedback--contact jy-feedback--span">
        <span>联系方式</span>
        <el-input
          class="jy-feedback--des"
          v-model="input"
          placeholder="请输入联系方式"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'VipArea',
  props: {
    msg: String,
    showDialog: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  filters: {
    queryString(value) {
      if (!value) return ''
      return `${value.substr(0, 84)}...`
    },
  },
  data() {
    return {
      dialogVisible: this.showDialog,
      imageUrl: '', //上传图片
      textarea: '', //问题描述
      input: '', //联系方式
    }
  },
  watch: {
    showDialog(newVal) {
      this.dialogVisible = newVal
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          this.closeDialog()
          done()
        })
        .catch(() => {})
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    closeDialog() {
      this.dialogVisible = false
      this.$emit('closeDialog')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.jy-feedback .el-dialog__wrapper .el-dialog
  box-sizing border-box
  width: 422px !important
  height: 688px;
  margin-top 196px  !important
  background: #fff
  border-radius: 10px;

.jy-feedback .el-dialog__header
  padding-top 30px
  padding-bottom 0
  &>.el-dialog__title
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #3C3B3B;
    line-height: 26px;

.jy-feedback .el-dialog__header .el-dialog__headerbtn
  top 30px

.jy-feedback
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #3C3B3B;
  line-height: 28px;

.jy-feedback .jy-carduse--title>h2{
  color: #3c3b3b
}

.jy-feedback .jy-feedback--span>span
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #3C3B3B;
  line-height 56px

.jy-feedback .el-dialog__body
  padding 20px
  margin-bottom: 10px
  text-align: left

.button-width88.is-round
  padding 8px 16px  !important
  margin-bottom 10px
  border-radius: 17px !important
  color: #9297A5
  background: #F5F6FA;
  border 0
  &:hover
    color #fff
    background: #3873FD;
    border 0

.button-nomarginbottom.is-round
  margin-bottom 0

.el-row .button-width88:nth-of-type(4n + 1)
  margin-left 0

//问题截图
.avatar-uploader .el-upload
  border-radius 6px
  cursor pointer
  position relative
  overflow hidden

.avatar-uploader .el-upload:hover
  border-color #409EFF

.avatar-uploader-icon
  font-size 18px
  color #9297a5
  width 86px
  height 86px
  line-height 86px
  text-align center
  background #F5F6FA

.avatar
  width 178px
  height 178px
  display block

//问题详情
.jy-feedback--des .el-textarea__inner
  padding 10px
  width: 382px;
  height: 88px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  background: #F5F6FA;
  border-radius: 5px;

//联系方式
.jy-feedback--des .el-input__inner
  padding 0 10px
  width: 382px;
  height: 39px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  background: #F5F6FA;
  border-radius: 5px;
  border 0

//.jy-feedback--des .el-textarea__inner:focus
//  border: 1px solid #DCDFE6;

.jy-feedback--des .el-textarea__inner,
.jy-feedback--des .el-textarea__inner:focus
  resize: none;   //不允许拉伸
  border 0

//取消  提交
.jy-feedback--type .el-dialog__footer
  padding 40px 20px 30px 0

.dialog-footer button
    width: 100px;
    height: 40px;
    background: rgba(56, 115, 253, 0.12);
    border-radius: 37px;
    color: #3873FD;
    font-size: 14px;
    font-family: MicrosoftYaHei
    border 0

.el-button:focus, .el-button:hover
  color: #fff
  background: #3873FD;
</style>
