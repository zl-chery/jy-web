<template>
  <div class="jy-carl-list">
    <ul class="jy-card jy-cardNouse" v-if="cardList.length > 0">
      <li class="jy-card--exp">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-exp-hour.png" alt="1小时过期" />
        </div>
        <div class="jy-exp--info">
          <!-- <p>已过期</p> -->
          <img src="../../assets/img/card-exp.png" alt="已过期" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1小时秒进卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li>
      <!-- <li class="jy-card--exp">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-exp-day.png" alt="24小时过期">
        </div>
        <div class="jy-exp--info">
          <img src="../../assets/img/card-exp.png" alt="已过期">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>24小时会员卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li>
      <li class="jy-card--exp">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-exp-weekend.png" alt="1周过期">
        </div>
        <div class="jy-exp--info">
          <img src="../../assets/img/card-exp.png" alt="已过期">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1周秒进卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li>
      <li class="jy-card--exp">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-exp-month.png" alt="1个月过期">
        </div>
        <div class="jy-exp--info">
          <img src="../../assets/img/card-exp.png" alt="已过期">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>30天会员卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li> -->
    </ul>
    <NoContent v-else />
  </div>
</template>

<script>
import Http from '@/request/http'
import NoContent from '@/components/comp/NoContent.vue'
export default {
  name: 'CardExp',
  props: {
    msg: String,
  },
  components: {
    NoContent,
  },
  data() {
    return {
      num: 1,
      cardList: [],
    }
  },
  async mounted() {
    try {
      await Http({
        type: 'cardPackage',
        data: {
          user_token: this.$cookies.get('as_user_token'),
        },
      }).then((res) => {
        // console.log(res)
        //过滤获取未使用的卡
        this.cardList = res.data.filter(
          (item) => item.status === 1 && item.expire_time < new Date()
        )
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {},
}
</script>

<style lang="stylus">
//过期卡片样式
.jy-card--exp
  position relative

//.jy-exp--info
//  position absolute
//  right -30px
//  bottom 238px
//  color #a4a8b4
//  width 120px
//  height 30px
//  line-height 30px
//  text-align center
//  transform rotate(45deg)
//  background-color #fff


.jy-exp--info
  position absolute
  bottom 208px
  right 0
</style>
