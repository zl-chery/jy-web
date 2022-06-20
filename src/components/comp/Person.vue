<template>
  <div
    class="jy-show jy-head--login"
    :style="{ height: !isLogin ? 'auto' : '416px' }"
  >
    <div class="jy-login--title">
      <a class="jy-login--icon">
        <img
          src="~@/assets/img/head-user.png"
          alt=""
          @click="login"
          v-if="!isLogin"
        />
        <img :src="headimg" alt="" v-if="isLogin" />
      </a>
      <!-- <component :is="activeComponent"></component> -->
      <div class="jy-login--nan" @click="login" v-if="!isLogin">
        <p>你还未登录</p>
        <p>登录即可畅玩游戏</p>
        <p></p>
      </div>
      <div class="jy-login--nan" v-if="isLogin">
        <p>{{ userInfo.nickname }}</p>
        <div class="property">
          <div>
            <img src="~@/assets/img/game-diamond.png" alt="" />
            <div>鲸钻</div>
            <div>{{ userInfo.coins }}</div>
          </div>
          <div>
            <img src="~@/assets/img/game-coin.png" alt="" />
            <span>鲸币</span>
            <span>{{ userInfo.gold }}</span>
          </div>
          <div>
            <img src="~@/assets/img/free-time.png" alt="" />
            <span>{{ userInfo.free_times / 60 || 0 }}分钟</span>
          </div>
          <span>+</span>
          <div>
            <img src="~@/assets/img/vip-time.png" alt="" />
            <span>{{ userInfo.free_times_member / 60 || 0 }}分钟</span>
          </div>
        </div>
      </div>

      <router-link to="/personCenter" v-if="isLogin">
        进入个人中心&nbsp;<span class="iconfont">&#xe67e;</span>
      </router-link>
    </div>
    <div class="jy-login--banner" v-if="!userInfo.isVip">
      <div class="jy-merbership--content">
        <p>开通会员</p>
        <p>尊享12项特权</p>
      </div>
      <div class="jy-open--merbership">
        <el-row>
          <el-button
            round
            class="button-width100 button-vip"
            @click="jump('/personCenter/VIP')"
            >开通会员</el-button
          >
        </el-row>
      </div>
    </div>
    <div class="jy-login--banner vip-banner" v-if="isLogin && userInfo.isVip">
      <div class="jy-merbership--content">
        <p>{{ userInfo.card_name }}</p>
        <p>{{ userInfo.expire }}到期</p>
      </div>
    </div>
    <div class="jy-login--footer">
      <a
        href="javascript:;"
        class="jy-login--des"
        @click="jump('/recentlyPlayed')"
      >
        <span class="iconfont">&#xe74f;</span>
        <p>最近玩过</p>
      </a>
      <a
        href="javascript:;"
        class="jy-login--des"
        @click="jump('/personCenter/Package/CardNoUse')"
      >
        <span class="iconfont">&#xe61d;</span>
        <p>我的卡包</p>
      </a>
      <a
        href="javascript:;"
        class="jy-login--des"
        @click="jump('/constCommonQa')"
      >
        <span class="iconfont">&#xe689;</span>
        <p>常见问题</p>
      </a>
      <a href="javascript:;" class="jy-login--des" @click="feedBack">
        <span class="iconfont">&#xe8a1;</span>
        <p>意见反馈</p>
      </a>
    </div>
    <div class="jy-login--logout" v-if="isLogin">
      <button @click="logout">
        <img src="~@/assets/img/logout.png" alt="" />
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data() {
    return {
      activeComponent: '',
      // showDialog: true,
      // isLogin: getCookie('uid'),
    }
  },
  mounted() {},
  methods: {
    feedBack() {
      this.$emit('feedBack')
    },
    login() {
      // this.activeComponent = this.label.comp
      this.$emit('login')
    },
    logout() {
      this.$confirm('确定退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$store.commit('person/logout')
          this.$router.push('/home')
          this.$message({
            type: 'success',
            message: '退出成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出',
          })
        })
      // this.$alert('退出成功', '提示', {
      //   confirmButtonText: '确定',
      // })
    },
    jump(path) {
      if (!this.$cookies.get('as_user_token')) this.login()
      else this.$router.push(path)
    },
  },
  computed: {
    ...mapState('person', ['userInfo', 'isLogin']),
    headimg() {
      return (
        this.userInfo.headimg || 'https://pg.jingyungame.com/web/img/tx.jpg'
      )
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus"></style>
