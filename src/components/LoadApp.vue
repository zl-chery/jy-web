<template>
  <div class="jy-loading">
    <div class="jy-loading--info">
      <div class="jy-mainwidth jy-loading--des">
        <img src="../assets/img/loading-info.png" alt="">
        <div class="jy-download--info">
          <div class="jy-download--service">
            <p class="jy-service--title">PC客户端</p>
            <a class="jy-service--exp" href="javacript:;">云端体验3A大作，点击秒玩</a>
            <p class="jy-service--des">最新版本：2.2.0.324   更新日期：2022/04/15</p>
            <div class="jy-download--button">
              <img src="../assets/img/download-PC.png" alt="电脑下载">
              <el-button class="button-download" type="primary" round>立即下载</el-button>
              <p class="jy-download--des">Mac 用户可使用网页端畅玩游戏</p>
            </div>
          </div>
          <div class="jy-download--service">
            <p class="jy-service--title">手机客户端</p>
            <a class="jy-service--exp" href="javacript:;">随时随地畅玩手机</a>
            <p class="jy-service--des">手机扫描二维码，或点击选择对应平台即可免费下载</p>
            <div class="jy-download--code">
              <div class="jy-download--codeimg">
                <img src="../assets/img/jy-footer-logo.png" alt="">
              </div>
              <div>
                <div class="jy-download--button jy-phone--download">
                  <img src="../assets/img/download-android.png" alt="安卓下载">
                  <el-button class="button-download button-client" type="primary" round>立即下载</el-button>
                </div>
                <div class="jy-download--button jy-phone--download">
                  <img src="../assets/img/download-apple.png" alt="苹果下载">
                  <el-button class="button-download button-client" type="primary" round>立即下载</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="stylus">
@media screen and (max-width: 1500px) 
  body
    width 1500px

.jy-loading
  height 1010px
  background url('../assets/img/loading-bgc.png')

.jy-loading--info
  height 1010px
  background  rgba(255, 255, 255, .35) url('../assets/img/loading-info-bgc.png')

.jy-loading--des
  display flex
  flex-wrap wrap
  flex-direction column
  justify-content center
  align-items flex-start
  width 1500px
  &>img
    margin-top 113px

.jy-download--info
  display flex
  justify-content space-evenly
  align-content center
  margin-top 44px
  width 80%

.jy-download--service
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  text-align center

.jy-service--title
  font-size: 26px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #444343;
  line-height: 40px;

.jy-service--exp
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #3873FD;
  line-height: 28px;
  &:hover
    color: #3873FD;

.jy-service--des
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 18px;

.jy-download--des
  font-size: 12px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 32px;

.jy-download--button
  position relative
  margin-top 40px
  &>img
    position absolute
    top 22px
    left 28px
    width 27px
    height auto

//button  hack  电脑端
.button-download.is-round
  padding 22px 39px !important
  border-radius: 60px !important
  color: #fff
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  background-color #3976fd
  &:hover
     background-color #3976fd
    border 1px solid #3873FD
  &>span
    padding-left 20px

.jy-download--button.jy-phone--download img
  width 18px
  height 21px

//手机端
.button-client.button-download.is-round
  padding 10px 17px !important
  border-radius: 46px !important
  color: #fff
  font-size: 14px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  background-color #3976fd
  &:hover
     background-color #3976fd
    border 1px solid #3873FD
  &>span
    padding-left 20px

.jy-download--code
  display flex
  flex-wrap wrap
  justify-content flex-start
  align-items flex-start
  margin-top 40px
  width 100%

.jy-download--codeimg
  width 113px;
  height 113px;
  padding 5px
  margin-right 20px
  text-align center
  line-height 113px
  background: #E6E9F0;
  &>img
    width 113px
    height 113px

.jy-phone--download.jy-download--button
  margin-top 0
  margin-bottom 20px

.jy-phone--download.jy-download--button img
  top 11px
  left 17px
</style>
