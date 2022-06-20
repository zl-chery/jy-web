<template>
  <div class="form">
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
      show-password
    ></el-input>
    <el-input
      v-model="register.confirmPassword"
      size="small"
      placeholder="请输入密码"
      class="input"
      show-password
    >
    </el-input>
    <div class="checkCode">
      <el-input
        v-model="register.checkCode"
        size="small"
        placeholder="验证码"
        class="input"
      >
      </el-input>
      <a
        @click="sendCode"
        :disabled="countdown > 0"
        :style="{ 'pointer-events': countdown > 0 ? 'none' : 'initial' }"
        href="javascript:;"
        >{{ countdown > 0 ? `${countdown}s后再次发送` : '获取验证码' }}</a
      >
    </div>
    <div class="toRegister">
      <div class="el-checkbox"></div>
      <a href="javascript:;" @click="toGmailLogin"
        >已有账号？去登录<i class="el-icon-arrow-right"></i
      ></a>
    </div>

    <el-button type="primary" round class="login" @click="gmailRegister"
      >注册</el-button
    >
    <div class="icon">
      <img
        src="~@/assets/img/login-weChat.png"
        alt="微信"
        @click="thirdAuth(wx_url)"
      />
      <img
        src="~@/assets/img/login-qq.png"
        alt="QQ"
        @click="thirdAuth(qq_url)"
      />
      <img
        src="~@/assets/img/login-phone.png"
        alt="手机"
        @click="toPhoneLogin"
      />
    </div>
  </div>
</template>

<script>
import Http from '@/request/http'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  props: {
    agreement: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      register: {
        show: false,
        gmail: '',
        password: '',
        checkCode: '',
        confirmPassword: '',
      },
      countdown: 0, //验证码倒计时
    }
  },
  methods: {
    toPhoneLogin() {
      this.$emit('toPhoneLogin')
    },
    toGmailLogin() {
      this.$emit('toGmailLogin')
    },
    async sendCode() {
      if (this.countdown <= 0) {
        if (!this.rightEmail) {
          // alert('邮箱格式错误')
          this.$alert('邮箱格式错误', '提示', {
            confirmButtonText: '确定',
          })
          return
        }
        this.countdown = 30
        const timer = setInterval(() => {
          this.countdown--
          if (this.countdown <= 0) {
            clearInterval(timer)
            this.countdown = 0
          }
        }, 1000)
        //发送邮箱验证码
        const data = {
          type: 'sendEmail',
          data: {
            email: this.register.gmail,
            type: 'register',
          },
        }
        try {
          await Http(data).then((res) => {
            console.log(res)
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
    async gmailRegister() {
      if (this.agreement) {
        if (this.checkconfirmPassword) {
          const data = {
            email: this.register.gmail,
            password: this.register.password,
            code: this.register.checkCode,
          }
          try {
            await Http({
              type: 'register',
              data,
            }).then((res) => {
              if (res.msg == 'success') {
                this.register.gmail = ''
                this.register.password = ''
                this.register.confirmPassword = ''
                this.register.checkCode = ''
                this.toGmailLogin()
              } else {
                alert(res.msg)
              }
            })
          } catch (err) {
            console.log(err)
          }
        } else {
          // alert('两次输入的密码不一致')
          this.$alert('两次输入的密码不一致', '提示', {
            confirmButtonText: '确定',
          })
        }
      } else {
        // alert('请勾选《用户协议》和《隐私协议》')
        this.$alert('请勾选《用户协议》和《隐私协议》', '提示', {
          confirmButtonText: '确定',
        })
      }
    },
  },
  computed: {
    rightEmail() {
      return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
        this.register.gmail
      )
    },
    checkconfirmPassword() {
      return this.register.password === this.register.confirmPassword
    },
  },
}
</script>

<style scoped lang="less"></style>
