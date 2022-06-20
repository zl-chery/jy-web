<template>
  <div class="jy-carl-list">
    <ul class="jy-card jy-cardNouse" v-if="cardList.length > 0">
      <li class="jy-card--used" v-for="(item, index) in cardList" :key="index">
        <div class="jy-cardinfo">
          <img :src="item.has_card.img_url" :alt="item.card_name" />
        </div>
        <div class="jy-cardused--info">
          <img src="../../assets/img/card-used.png" alt="卡片已使用" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>{{ item.card_name }}</p>
            <p>{{ item.valid_time }}到期</p>
          </div>
        </div>
      </li>
      <!-- <li class="jy-card--used">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
        </div>
        <div class="jy-cardused--info">
          <img src="../../assets/img/card-used.png" alt="卡片已使用">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>24小时会员卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li>
      <li class="jy-card--used">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-weekend.png" alt="1周秒进卡">
        </div>
        <div class="jy-cardused--info">
          <img src="../../assets/img/card-used.png" alt="卡片已使用">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1周秒进卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li>
      <li class="jy-card--used">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-30day.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardused--info">
          <img src="../../assets/img/card-used.png" alt="卡片已使用">
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
  name: 'CardUsed',
  props: {
    msg: String,
  },
  components: {
    NoContent,
  },
  data() {
    return {
      num: 1,
      dialogVisible: false, //dialog
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
        this.cardList = res.data.filter((item) => item.status === 2)
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {},
}
</script>

<style lang="stylus">
//已使用卡片样式
.jy-card--used
  position relative

//已使用卡片
.jy-cardused--info
  position absolute
  display flex
  justify-content center
  align-items center
  width 100%
  height 200px
  top 0
  left 0
  overflow hidden
  background-color rgba(137, 137, 137, .75)
  border-radius 16px
  &>img
    width 104px
    height 104px
</style>
