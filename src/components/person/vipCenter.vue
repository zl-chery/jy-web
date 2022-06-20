<template>
  <div>
    <div class="jy-personcenter--show">
      <img src="../../assets/img/trading-logo.png" alt="">
      <div class="jy-personcenter--edit">
        <div class="jy-personedit--nickname">
          <p>Matilda Nguyen</p>
          <i class="el-icon-edit-outline" @click="editDialog = true"></i>
          <el-dialog
            :visible.sync="editDialog"
            width="30%"
            :before-close="handleClose">
            <div class="jy-dialog">
              <div class="jy-dialog--title">
                <p>个人资料</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="editDialog = false">
              </div>
              <div class="jy-edit--form">
                <div class="jy-person--picture">
                  <p>我的头像</p>
                  <img src="../../assets/img/trading-logo.png" alt="">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
                <div class="jy-person--nickname">
                  <p>我的昵称</p>
                  <el-input
                    id="mynickName"
                    placeholder="Matilda Nguyen"
                    v-model="input"
                    clearable>
                  </el-input>
                </div>
                <div class="jy-person--human">
                  <p>我的性别</p>
                  <el-radio v-model="radio" label="1">男</el-radio>
                  <el-radio v-model="radio" label="2">女</el-radio>
                  <el-radio v-model="radio" label="3">保密</el-radio>
                </div>
                <div class="jy-person--birthday">
                  <p>我的生日</p>
                  <el-input
                    id="我的生日"
                    placeholder="1996-05-24"
                    v-model="input"
                    clearable>
                  </el-input>
                </div>
                <div class="jy-person--area">
                  <p>所在地区</p>
                  <el-select id="gameName" v-model="value" filterable placeholder="请选择省">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value" class="element-input">
                    </el-option>
                  </el-select>
                  <el-select id="gameName" v-model="value" filterable placeholder="请选择市">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value" class="element-input">
                    </el-option>
                  </el-select>
                  <el-select id="gameName" v-model="value" filterable placeholder="请选择区">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value" class="element-input">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-cancel dialog-comment" @click="editDialog = false">取消</el-button>
              <el-button class="dialog-confirm dialog-comment" type="primary" @click="editDialog = false">保存</el-button>
            </span>
          </el-dialog>
        </div>
        <p>您还不是会员哦～</p>
      </div>
    </div>
    <component :is="activeComponent"></component>
  </div>
  
</template>

<script>
//会员
import UpdateVipVue from '../comp/UpdateVip.vue'
export default {
  name: 'vipCenter',
  props: {
    msg: String,
  },
  components: {
    UpdateVipVue
  },
  data() {
    return {
      activeComponent: UpdateVipVue,
      options: [{
        value: '选项1',
        label: '默认排序'
      }, {
        value: '选项2',
        label: '按游戏热度'
      }, {
        value: '选项3',
        label: '按上线时间'
      }, {
        value: '选项4',
        label: '按游戏评分'
      }],
      value: '',
      imageUrl: '', // 上传头像
      input: '', //input输入框
      radio: '1', //性别单选框
      editDialog: false, //编辑dailog
    }

  },
  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style lang="stylus">
.jy-personcenter--show
  display flex
  justify-content flex-start
  align-items center
  width: 1146px;
  height: 70px;
  padding 20px
  background: #FFFFFF;
  border-radius: 10px;

.jy-personcenter--right .jy-personcenter--show>img
  width 70px
  height 70px
  margin-right 20px

.jy-personedit--nickname
  display flex
  justify-content flex-start
  align-items center
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  vertical-align middle
  &:hover 
    color #3873FD

.jy-personedit--nickname p
  margin-right 8px

.jy-personcenter--edit>p
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 30px

.jy-personcenter--edit .el-icon-edit-outline
  font-size 18px
  cursor pointer

.jy-personedit--nickname .el-dialog
  width: 426px !important
  height: 512px
  padding 30px 20px
  margin-top 284px !important
  background: #fff
  border-radius: 10px;

.jy-dialog
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

.jy-dialog--title
  display flex
  justify-content space-between
  align-items center
  width: 100%
  & p
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: 700;
    color: #444343;

.jy-dialog .jy-dialog--title img
  width 22px
  height 22px
  margin-right 0

.jy-edit--form
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  width: 386px
  &>div
    margin-top 24px

.jy-person--picture
  position relative
  & img
    width 60px
    height 60px
  & .el-icon-plus:before
    content '重新上传'
    position absolute
    right 0
    bottom 0
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #3873FD;

.avatar-uploader .avatar-uploader-icon
  display flex
  justify-content flex-end
  align-items center
  width 254px
  text-align right
  line-height 90px
  background-color #fff

.jy-person--picture,
.jy-person--nickname,
.jy-person--human,
.jy-person--birthday,
.jy-person--area
  display flex
  justify-content flex-start
  align-items center
  width 386px
  & p
    width 72px
    margin-right 15px
    line-height 39px
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #3C3B3B;

.jy-person--nickname p
  margin-right 8px

.jy-edit--form .el-input__inner
  width: 315px;
  height: 39px;
  padding 0 10px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  background: #F5F6FA;
  border-radius: 5px;
  border 0
  outline 0

.jy-edit--form .el-radio__input.is-checked .el-radio__inner
  border #3873fd;
  background-color: #3873fd;

.jy-person--area .el-icon-arrow-up:before
  content:   "\e78f" //"\e790"

.jy-person--area .el-select .el-input__inner
  width: 98px;
  height: 39px;
  padding 0 10px
  margin-right 10px
  background: #F5F6FA;
  border-radius: 5px;

.jy-person--area .el-select:nth-of-type(3) .el-input__inner
  margin-right 0

.el-select-dropdown
  top 664px !important

.el-popper .popper__arrow
  display none !important

.dialog-footer .el-button 
  padding 0
.dialog-footer .dialog-comment
  width: 100px;
  height: 40px;
  font-size: 14px;
  line-height 40px
  font-family: MicrosoftYaHei;
  border-radius: 37px;
  border 0

.jy-personedit--nickname .el-dialog__footer
  margin-top 20px

.dialog-footer
  & .dialog-cancel
    color #3873FD
    background: rgba(56, 115, 253, 0.12);
    &:hover
      color #3873FD
      background: rgba(56, 115, 253, 0.12);
  & .dialog-confirm
    color #fff
    background: #3873FD;

.jy-personcenter--right .el-dialog__body
  padding 0

</style>