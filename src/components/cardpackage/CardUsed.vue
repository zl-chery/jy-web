<template>
  <div>
    <ul class="jy-card jy-cardNouse">
      <li class="jy-card--used">
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-second.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardused--info">
          <img src="../../assets/img/card-used.png" alt="卡片已使用">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1小时秒进卡</p>
            <p>2022-3-30 14:30:43到期</p>
          </div>
        </div>
      </li>
      <li class="jy-card--used">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardUsed',
  props: {
    msg: String
  },
  data() {
    return {
      num: 1,
      dialogVisible: false,  //dialog
    }
  },
  methods: {
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        })
        .catch(() => {});
    }
  }

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

.jy-cardPackage--des
  display flex
  justify-content space-between
  align-items center
  padding 18px 20px
</style>
