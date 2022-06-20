<template>
  <div>
    <div class="jy-personwidth">
      <div class="jy-wrap--title jy-personcenter--title">
        <p>账号安全</p>
        <div class="jy-personcenter--safe">
          <ul class="jy-person--safe">
            <li>
              <div class="jy-account--method">
                <p>绑定手机</p>
                <p>（未绑定）</p>
              </div>
              <div class="jy-account-confirm">
                <p @click="phoneDialog = true">去绑定</p>
                <i class="el-icon-arrow-right" @click="phoneDialog = true"></i>
                <el-dialog
                  :visible.sync="phoneDialog"
                  width="30%"
                  :before-close="handleClose">
                  <div class="jy-dialog">
                    <div class="jy-dialog--title">
                      <p>绑定手机</p>
                      <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="phoneDialog = false">
                    </div>
                    <div class="jy-confirm--form">
                      <div class="jy-safe--phone">
                        <p>手机号码</p>
                        <el-input
                          id="mynickName"
                          placeholder="请输入手机号码"
                          v-model="input"
                          clearable>
                        </el-input>
                      </div>
                      <div class="jy-safe--phone">
                        <p>验证码</p>
                        <el-input
                          id="mynickName"
                          placeholder="验证码"
                          v-model="input"
                          clearable>
                        </el-input>
                        <p class="jy-safe--ver">获取验证码</p>
                      </div>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button class="dialog-cancel dialog-comment" @click="phoneDialog = false">取消</el-button>
                    <el-button class="dialog-confirm dialog-comment" type="primary" @click="editDialog = false">保存</el-button>
                  </span>
                </el-dialog>
              </div>
            </li>
            <li>
              <div class="jy-account--method">
                <p>实名认证</p>
                <p>（未绑定）</p>
              </div>
              <div class="jy-account-confirm jy-confirm--name">
                <p @click="nameDialog = true">去认证</p>
                <i class="el-icon-arrow-right" @click="nameDialog = true"></i>
                <el-dialog
                  :visible.sync="nameDialog"
                  width="30%"
                  :before-close="handleClose">
                  <div class="jy-dialog">
                    <div class="jy-dialog--title jy-confirm--true">
                      <p>实名认证</p>
                      <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="nameDialog = false">
                    </div>
                    <div class="jy-confirm--form">
                      <p class="young-network--sns">根据国家新闻出版署《关于防止未成年人沉迷网络游戏的通知，未实名账号无法进行游戏和充值。请尽快完成实名登记，拥有完整的游戏体验。</p>
                      <div class="jy-safe--phone">
                        <p>真实姓名</p>
                        <el-input
                          id="mynickName"
                          placeholder="请输人真实姓名"
                          v-model="input"
                          clearable>
                        </el-input>
                      </div>
                      <div class="jy-safe--phone">
                        <p>身份证号</p>
                        <el-input
                          id="mynickName"
                          placeholder="请输入身份证号"
                          v-model="input"
                          clearable>
                        </el-input>
                      </div>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer real-name--auth">
                    <el-button class="dialog-confirm dialog-comment real-name" type="primary" @click="nameDialog = false">提交认证</el-button>
                  </span>
                </el-dialog>
              </div>
            </li>
            <li>
              <div class="jy-account--method">
                <p>绑定邮箱</p>
                <p>（未绑定）</p>
              </div>
              <div class="jy-account-confirm">
                <p @click="emailDialog = true">去绑定</p>
                <i class="el-icon-arrow-right" @click="emailDialog = true"></i>
                <el-dialog
                  :visible.sync="emailDialog"
                  width="30%"
                  :before-close="handleClose">
                  <div class="jy-dialog">
                    <div class="jy-dialog--title">
                      <p>绑定邮箱</p>
                      <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="emailDialog = false">
                    </div>
                    <div class="jy-confirm--form">
                      <div class="jy-safe--phone">
                        <p>邮箱地址</p>
                        <el-input
                          id="mynickName"
                          placeholder="请输入邮箱"
                          v-model="input"
                          clearable>
                        </el-input>
                      </div>
                      <div class="jy-safe--phone">
                        <p>验证码</p>
                        <el-input
                          id="mynickName"
                          placeholder="验证码"
                          v-model="input"
                          clearable>
                        </el-input>
                        <p class="jy-safe--ver">获取验证码</p>
                      </div>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button class="dialog-cancel dialog-comment" @click="emailDialog = false">取消</el-button>
                    <el-button class="dialog-confirm dialog-comment" type="primary" @click="emailDialog = false">保存</el-button>
                  </span>
                </el-dialog>
              </div>
            </li>
            <li>
              <div class="jy-account--method">
                <p>绑定QQ</p>
                <p>（未绑定）</p>
              </div>
              <div class="jy-account-confirm">
                <p>去绑定</p>
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
            <li>
              <div class="jy-account--method">
                <p>绑定微信</p>
                <p>（未绑定）</p>
              </div>
              <div class="jy-account-confirm">
                <p>去绑定</p>
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'accountSafe',
  props: {
    msg: String,
  },
  components: {
  },
  data() {
    return {
      emailDialog: false, //邮箱绑定
      phoneDialog: false, //手机绑定
      nameDialog: false, //实名认证
      input: ''
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
  }
}
</script>

<style lang="stylus">
.jy-person--safe
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  & li
    display flex
    justify-content space-between
    align-items center
    width 601px
    height 64px
    border-bottom 1px solid #D9D9D9;

.jy-person--safe li:nth-of-type(1)
  margin-top 20px

.jy-account--method
  display flex
  justify-content flex-start
  align-items center
  font-family: MicrosoftYaHei;
  & p:nth-of-type(1)
    margin-right 10px
    font-size: 18px;
    color: #444343;
  & p:nth-of-type(2)
    font-size: 14px;
    color: #9297A5;

.jy-account-confirm
  display flex
  justify-content flex-start
  align-items center
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #3873FD;
  cursor pointer

//dailog
.jy-account-confirm .el-dialog
  width: 360px !important
  height: 304px;
  padding 30px 20px
  margin-top 388px !important
  background: #fff
  border-radius: 10px;

.jy-confirm--form
  width 100%

.jy-safe--phone
  position relative
  display flex
  justify-content flex-start
  align-items center
  margin-top 30px
  & p
    width 72px
    margin-right 15px
    line-height 39px
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #3C3B3B;

.jy-safe--phone .jy-safe--ver
  position absolute
  right 0
  bottom 0
  color #3873FD


.jy-safe--phone p
  margin-right 8px

.jy-account-confirm .el-dialog__footer
  margin-top 20px

.jy-confirm--form .el-input__inner
  width: 249px;
  height: 39px;
  padding 0 10px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  background: #F5F6FA;
  border-radius: 5px;
  border 0
  outline 0

.jy-confirm--form .el-radio__input.is-checked .el-radio__inner
  border #3873fd;
  background-color: #3873fd;

//实名认证
.jy-account-confirm.jy-account-confirm .el-dialog
  height 402px

.jy-confirm--true.jy-dialog--title
  margin-bottom 30px
  & p
    width 298px
    text-align center

.young-network--sns
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #3C3B3B;

.jy-account-confirm.jy-account-confirm .el-dialog__footer
  padding 10px 0 20px

.dialog-footer .dialog-comment.real-name
  width: 320px;
  text-align center
</style>