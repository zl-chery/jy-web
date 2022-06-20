<template>
  <div>
    <el-dialog
      :visible.sync="showLoginDialog"
      :before-close="closeDialog"
      width="22%"
      custom-class="loginDialog"
      append-to-body
    >
      <div class="jy-joinhome-dialog">
        <div class="jy-carduse--title">
          <img
            src="~@/assets/img/toolpay-cancel.png"
            alt="取消"
            @click="closeDialog"
          />
        </div>
        <div class="jy-carduse-content">
          <div class="logo">
            <img src="~@/assets/img/jy-logo.png" alt="" />
          </div>
          <PhoneLogin
            v-if="showPhoneLogin"
            @toGmailLogin="toGmailLogin"
            @closeDialog="closeDialog"
            :agreement="user_agreement"
            :qq_url="qq_url"
            :wx_url="wx_url"
          />
          <!-- <div class="form" v-if="showPhoneLogin">
            <el-input
              v-model="phoneLogin.phone"
              size="small"
              placeholder="请输入手机号"
              class="input"
            ></el-input>
            <div class="checkCode">
              <el-input
                v-model="phoneLogin.checkCode"
                size="small"
                placeholder="验证码"
                class="input"
              >
              </el-input>
              <a href="javascript:;">获取验证码</a>
            </div>
            <el-checkbox v-model="phoneLogin.checked">记住登录状态</el-checkbox>
            <el-button type="primary" round class="login">登录</el-button>
            <div class="icon">
              <img src="~@/assets/img/login-weChat.png" alt="微信" />
              <img src="~@/assets/img/login-qq.png" alt="QQ" />
              <img
                src="~@/assets/img/login-email.png"
                alt="邮箱"
                @click="toGmailLogin"
              />
            </div>
          </div> -->
          <!-- <div class="form" v-if="showGmailLogin">
            <el-input
              v-model="gmailLogin.gmail"
              size="small"
              placeholder="请输入Gmail邮箱"
              class="input"
            >
            </el-input>
            <div class="checkCode">
              <el-input
                v-model="gmailLogin.password"
                size="small"
                placeholder="密码"
                class="input"
              >
              </el-input>
            </div>
            <div class="toRegister">
              <el-checkbox v-model="gmailLogin.checked"
                >记住登录状态</el-checkbox
              >
              <a href="javascript:;" @click="toGmailRegister"
                >没用账号？去注册<i class="el-icon-arrow-right"></i
              ></a>
            </div>

            <el-button type="primary" round class="login">登录</el-button>
            <div class="icon">
              <img src="~@/assets/img/login-weChat.png" alt="微信" />
              <img src="~@/assets/img/login-qq.png" alt="QQ" />
              <img
                src="~@/assets/img/login-phone.png"
                alt="手机"
                @click="toPhoneLogin"
              />
            </div>
          </div> -->
          <!-- <div class="form" v-if="showRegister">
            <el-input
              v-model="register.gmail"
              size="small"
              placeholder="请输入Gmail邮箱"
              class="input"
            >
            </el-input>
            <el-input
              v-model="register.password"
              size="small"
              placeholder="请设置密码"
              class="input"
            ></el-input>
            <el-input
              v-model="register.confirmPassword"
              size="small"
              placeholder="请输入密码"
              class="input"
            >
            </el-input>
            <div class="toRegister">
              <div class="el-checkbox"></div>
              <a href="javascript:;" @click="toGmailLogin"
                >已有账号？去登录<i class="el-icon-arrow-right"></i
              ></a>
            </div>

            <el-button type="primary" round class="login">注册</el-button>
            <div class="icon">
              <img src="~@/assets/img/login-weChat.png" alt="微信" />
              <img src="~@/assets/img/login-qq.png" alt="QQ" />
              <img
                src="~@/assets/img/login-phone.png"
                alt="手机"
                @click="toPhoneLogin"
              />
            </div>
          </div> -->
          <GmailLogin
            v-if="showGmailLogin"
            @toGmailRegister="toGmailRegister"
            @toPhoneLogin="toPhoneLogin"
            @closeDialog="closeDialog"
            :agreement="user_agreement"
            :qq_url="qq_url"
            :wx_url="wx_url"
          />
          <Register
            v-if="showRegister"
            @toPhoneLogin="toPhoneLogin"
            @toGmailLogin="toGmailLogin"
            :agreement="user_agreement"
            :qq_url="qq_url"
            :wx_url="wx_url"
          />
          <div class="agreement">
            <el-checkbox v-model="user_agreement"
              >登录即代表你阅读并同意<a href="#">《用户协议》</a>和<a href="#"
                >《隐私协议》</a
              >
            </el-checkbox>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import PhoneLogin from './comps/PhoneLogin.vue'
import GmailLogin from './comps/GmailLogin.vue'
import Register from './comps/Register.vue'
import Http from '@/request/http'

export default {
  name: 'LoginVue',
  props: {
    showDialog: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  components: {
    PhoneLogin,
    GmailLogin,
    Register,
  },
  data() {
    return {
      showLoginDialog: this.showDialog, //展示登录窗口
      showPhoneLogin: true, //手机登录
      showGmailLogin: false, //邮箱登录
      showRegister: false, //邮箱注册
      user_agreement: false, //用户协议
      qq_url: '',
      wx_url: '',
    }
  },
  async mounted() {
    // try {
    //   await Http({
    //     type: 'thirdAuth',
    //   }).then(
    //     (res) => {
    //       console.log(res)
    //       this.qq_url = res.data.qq_auth_url
    //       this.wx_url = res.data.wx_auth_url
    //     },
    //     (err) => {
    //       console.log(err)
    //     }
    //   )
    // } catch (error) {
    //   console.log(error)
    // }
  },
  watch: {
    showDialog(newVal) {
      this.showLoginDialog = newVal
    },
  },
  methods: {
    closeDialog() {
      this.showLoginDialog = false
      this.$emit('closeDialog')
    },
    //邮箱登录
    toGmailLogin() {
      this.showGmailLogin = true
      this.showPhoneLogin = false
      this.showRegister = false
    },
    //手机登录
    toPhoneLogin() {
      this.showGmailLogin = false
      this.showPhoneLogin = true
      this.showRegister = false
    },
    //邮箱注册
    toGmailRegister() {
      this.showGmailLogin = false
      this.showPhoneLogin = false
      this.showRegister = true
    },
  },
}
</script>

<style lang="stylus">
.loginDialog {
  width: 360px;
  background: #FFFFFF;
  border-radius: 10px;
  line-height: normal
  .jy-carduse--title {
    justify-content: right;
  }

  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

    img {
      width: auto;
      height: auto;
    }
  }

  .form {
    padding: 0 5%;
    display: flex;
    flex-flow: column;
    align-items: center;

    .checkCode {
      width: 100%;
      position: relative;

      >a {
        position: absolute;
        right: 35px;
        bottom: 25px;
      }
    }

    .el-input {
      width: 90% !important;
      margin: 15px 5%;

      .el-input__inner {
        height: 39px;
        background: #F5F6FA;
        border: 1px solid transparent;
        &:focus {
          outline: none;
          border: 1px solid #DCDFE6;
        }
      }
    }

    .el-checkbox {
      width: 100%;
      margin-left: 10%;
      font-size: 12px;
    }

    .toRegister {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .el-checkbox {
        width: 50%;
        margin-left: 5%;
      }
    }
  }

  .login {
    width: 90%;
    margin: 20px 5%;
  }

  .icon {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 20px;

    img {
      width: 15%;
      height: auto;
    }
  }

  .agreement {
    margin: 0 3%;
    font-size: 12px;
  }
}
</style>
