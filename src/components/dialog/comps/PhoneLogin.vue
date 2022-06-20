<template>
  <div class="form" v-if="phoneLoginData.show">
    <el-input
      v-model="phoneLoginData.phone"
      size="small"
      placeholder="请输入手机号"
      class="input"
    ></el-input>
    <div class="checkCode">
      <el-input
        v-model="phoneLoginData.checkCode"
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
    <el-checkbox v-model="phoneLoginData.checked">记住登录状态</el-checkbox>
    <el-button type="primary" round class="login" @click.native="phoneLogin"
      >登录</el-button
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
        src="~@/assets/img/login-email.png"
        alt="邮箱"
        @click="toGmailLogin"
      />
    </div>
  </div>
</template>

<script>
import Http from '@/request/http'

export default {
  name: 'PhoneLogin',
  props: {
    agreement: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      phoneLoginData: {
        show: true,
        phone: '',
        checkCode: '',
        checked: false,
      },
      countdown: 0, //验证码倒计时
      disabled: {},
    }
  },
  methods: {
    toGmailLogin() {
      this.$emit('toGmailLogin')
    },
    async sendCode() {
      if (this.countdown <= 0) {
        if (!this.rightMobile) {
          // alert('手机号码格式错误')
          this.$alert('手机号码格式错误', '提示', {
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
          type: 'sendSmsCode',
          data: {
            phone: this.phoneLoginData.phone,
            type: 'login',
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
    async phoneLogin() {
      if (this.agreement) {
        const data = {
          phone: this.phoneLoginData.phone,
          code: this.phoneLoginData.checkCode,
        }
        try {
          await Http({
            type: 'phoneLogin',
            data,
          }).then((res) => {
            if (res.msg == 'success') {
              this.phoneLoginData.phone = ''
              this.phoneLoginData.checkCode = ''
              this.$emit('closeDialog')
              // alert('登录成功')
              this.$alert('登录成功', '提示', {
                confirmButtonText: '确定',
              })
            } else {
              alert(res.msg)
            }
          })
        } catch (err) {
          console.log(err)
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
    rightMobile() {
      return /^1\d{10}$/.test(this.phoneLoginData.phone)
    },
  },
}
</script>

<style scoped lang="less"></style>
