<template>
  <div class="form">
    <el-input
      v-model="loginData.gmail"
      size="small"
      placeholder="请输入Gmail邮箱"
      class="input"
    >
    </el-input>
    <div class="checkCode">
      <el-input
        v-model="loginData.password"
        size="small"
        placeholder="密码"
        class="input"
        show-password
      >
      </el-input>
    </div>
    <div class="toRegister">
      <el-checkbox v-model="loginData.checked">记住登录状态</el-checkbox>
      <a href="javascript:;" @click="toGmailRegister"
        >没用账号？去注册<i class="el-icon-arrow-right"></i
      ></a>
    </div>

    <el-button type="primary" round class="login" @click="gmailLogin"
      >登录</el-button
    >
    <div class="icon">
      <img
        src="~@/assets/img/login-weChat.png"
        alt="微信"
        @click="thirdAuth(wx_url, 'wx')"
      />
      <img
        src="~@/assets/img/login-qq.png"
        alt="QQ"
        @click="thirdAuth(qq_url, 'qq')"
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
  name: 'PhoneLogin',
  props: {
    agreement: {
      type: Boolean,
      default: false,
    },
    qq_url: String,
    wx_url: String,
  },
  data() {
    return {
      loginData: {
        show: false,
        gmail: '',
        password: '',
        checked: false,
      },
    }
  },
  methods: {
    toGmailRegister() {
      this.$emit('toGmailRegister')
    },
    toPhoneLogin() {
      this.$emit('toPhoneLogin')
    },
    // eslint-disable-next-line vue/no-dupe-keys
    async gmailLogin() {
      if (this.agreement) {
        try {
          await Http({
            type: 'emailLogin',
            data: {
              email: this.loginData.gmail,
              password: this.loginData.password,
            },
          }).then(
            (res) => {
              // console.log(res)
              if (res.msg == 'success') {
                this.loginData.gmail = ''
                this.loginData.password = ''
                this.$emit('closeDialog')
                // alert('登录成功')
                this.$alert('登录成功', '提示', {
                  confirmButtonText: '确定',
                })
                //获取用户账户信息
                // const userInfo = JSON.parse(getCookie('userInfo'))
                // this.$store.commit('person/login', userInfo)
              } else {
                alert(res.msg)
              }
            },
            (err) => {
              console.log(err)
            }
          )
        } catch (error) {
          console.log(error)
        }
      } else {
        // alert('请勾选《用户协议》和《隐私协议》')
        this.$alert('请勾选《用户协议》和《隐私协议》', '提示', {
          confirmButtonText: '确定',
        })
      }
    },
    thirdAuth(url, type) {
      location.href = `${url}&redirect_uri=http://localhost:4000&type=${type}&sn=53bfded5c32d620d1b2c36b04c2a5e52`
    },
  },
}
</script>

<style scoped lang="less"></style>
