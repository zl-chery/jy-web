<template>
  <div>
    <el-dialog
      :visible.sync="showLoginDialog"
      :before-close="closeDialog"
      width="22%"
      custom-class="dialog"
    >
      <div class="jy-joinhome-dialog">
        <div class="jy-carduse--title">
          <img
            src="../../assets/img/toolpay-cancel.png"
            alt="取消"
            @click="closeDialog"
          />
        </div>
        <div class="jy-carduse-content">
          <div class="logo">
            <img src="~@/assets/img/jy-logo.png" alt="" />
          </div>
          <div class="form" v-if="phoneLogin.show">
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
              <el-button type="text">获取验证码</el-button>
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
          </div>
          <div class="form" v-if="gmailLogin.show">
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
              <el-button type="text" @click="toGmailRegister"
                >没用账号？去注册<i class="el-icon-arrow-right"></i
              ></el-button>
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
          </div>
          <div class="form" v-if="register.show">
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
              <!-- 占位的空div -->
              <div class="el-checkbox"></div>
              <el-button type="text" @click="toGmailLogin"
                >已有账号？去登录<i class="el-icon-arrow-right"></i
              ></el-button>
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
          </div>
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
  data() {
    return {
      showLoginDialog: this.showDialog,
      phoneLogin: {
        show: true,
        phone: '',
        checkCode: '',
        checked: false,
      },
      gmailLogin: {
        show: false,
        gmail: '',
        password: '',
        checked: false,
      },
      register: {
        show: false,
        gmail: '',
        password: '',
        confirmPassword: '',
      },
      user_agreement: false,
    }
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
    toGmailLogin() {
      this.gmailLogin.show = true
      this.phoneLogin.show = false
      this.register.show = false
    },
    toPhoneLogin() {
      this.gmailLogin.show = false
      this.phoneLogin.show = true
      this.register.show = false
    },
    toGmailRegister() {
      this.gmailLogin.show = false
      this.phoneLogin.show = false
      this.register.show = true
    },
  },
}
</script>

<style scoped lang="stylus">
.jy-joinhome-dialog {

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

            >button {
                position: absolute;
                right: 35px;
                bottom: 11px;
            }
        }

        .el-input {
            width: 90% !important;
            margin: 15px 5%;

            .el-input__inner {
                width: 100% !important;
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
