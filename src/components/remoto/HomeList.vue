<template>
  <div class="jy-device--content">
    <div class="jy-homelist--info" v-for="(item, index) in playList" :key="index">
      <a href="javascript:;">
        <img src="../../assets/img/hot-bgc.jpg" alt="">
        <div class="jy-homelist--mask">
          <p class="jy-des--title">{{item.title}}</p>
        </div>
        <div class="jy-homelist--humen">
          <img src="../../assets/img/hot-bgc.jpg" alt="头像">
          <div class="jy-home--infomation">
            <p>房间：{{item.homeNum}}</p>
            <p>人数：{{item.homePeople}}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    msg: String
  },
  data() {
    return {
      playList: [
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        },
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        },
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        },
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        }
      ],
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
//房间列表
.jy-homelist--info
  position relative
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.06);

.jy-homelist--info:hover
  transform scale(1.01)

//正式房间列表
.jy-homelist--info
  width 350px
  height 302px
  background-color #fff
  border-radius 16px 16px 0 0

.jy-homelist--info a::after
  content ''
  background: url('../../assets/img/homelist-lock.png') no-repeat
  position absolute
  right -16px
  bottom 290px
  width 35px
  height 34px

.jy-homelist--mask
  position absolute
  bottom 80px
  right 0
  width 100%
  height 48px
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  color: #fff
  line-height: 48px;
  letter-spacing: 1px;
  background rgba(0, 0, 0, .5)

.jy-des--title
  margin-left 20px

.jy-homelist--info img
  width 350px
  height 222px
  overflow hidden
  border-radius 16px 16px 0 0

.jy-homelist--humen
  display flex
  justify-content flex-start
  align-items center
  padding 15px 20px
  overflow hidden
  &>img
    width 50px
    height 50px
    border-radius 50%

.jy-home--infomation
  position relative
  margin-left 20px
  font-family: MicrosoftYaHei;
  line-height: 24px;
  letter-spacing: 1px;
  &>p:nth-of-type(1)
    font-size: 16px;
    color: #444343;
  &>p:nth-of-type(2)
    margin-left 24px
    font-size: 14px;
    color: #3873FD;
    line-height 30px

.jy-home--infomation::after
  content ''
  background: url('../../assets/img/homelist-humen.png') no-repeat
  position absolute
  top 28px
  left 0
  width 21px
  height 18px
</style>
