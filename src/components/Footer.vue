<template>
  <div class="jy-footer">
    <div class="jy-bgc--white">
      <div class="jy-mainwidth">
        <div class="jy-footer-head">
          <div class="jy-footer--logo">
            <a href="">
              <img src="../assets/img/jy-footer-logo.png" alt="鲸云漫游">
            </a>
          </div>
          <div class="jy-footer--dec">
            <div class="jy-des--info">
              <a href="javascript:;">
                <img src="../assets/img/footer-link.png" alt="友情合作">
              </a>
              <tr>
                <th>
                  <a href="javascript:;">友情链接</a>
                </th>
                <td>
                  <a href="javascript:;">虫虫助手</a>
                </td>
                <td>
                  <a href="javascript:;">虫虫助手</a>
                </td>
              </tr>
            </div>
            <div class="jy-des--info">
              <a href="javascript:;">
                <img src="../assets/img/footer-coperation.png" alt="商务合作">
              </a>
              <tr>
                <th>
                  <a href="javascript:;">商务合作</a>
                </th>
                <td>
                  <a href="javascript::">广告合作：18699776655</a>
                </td>
                <td>
                  <a href="javascript::">广告合作：18699776655</a>
                </td>
              </tr>
            </div>
            <div class="jy-des--info">
              <a href="javascript:;">
                <img src="../assets/img/footer-us.png" alt="关于我们">
              </a>
              <tr>
                <th>
                  <a href="javascript:;">关于我们</a>
                </th>
                <td>
                  <a href="javascript::">广告合作：18699776655</a>
                </td>
                <td>
                  <a href="javascript::">广告合作：18699776655</a>
                </td>
              </tr>
            </div>
          </div>
          <div class="jy-footer--code">
            <div class="jy-code--des">
              <a href="javascript:;">
                <img src="../assets/img/jy-footer-logo.png" alt="鲸云漫游">
                <p>产品下载</p>
              </a>
            </div>
            <div class="jy-code--des">
              <a href="javascript:;">
                <img src="../assets/img/jy-footer-logo.png" alt="鲸云漫游">
                <p>关于我们</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jy-bgc-gray">
      <div class="jy-mainwidth">
        <div class="jy-footer--buttom">
          <p>Copyright ©2019-2020 鲸云游戏版权所有保留一切权利&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">备案号：闽ICP备19025641号-2</a></p>
          <p>本站由鲸云游戏提供技术和产品支持&nbsp;&nbsp;QQ群：182649323</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterVue',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
*
  margin 0
  padding 0

a
  text-decoration none

input 
  outline none

.jy-bgc--white 
  background-color #fff

.jy-bgc-gray 
  background-color #4D4C4C

.jy-footer-head 
  display flex
  padding 55px 0
  justify-content space-between

.jy-footer--logo 
  margin-right 90px

.jy-footer--dec 
  display flex

.jy-footer--dec .jy-des--info
  margin-right 104px

.jy-des--info 
  display flex
  flex-direction column

.jy-des--info img 
  width 17px
  height 18px

.jy-des--info tr 
  display flex
  flex-direction column
  text-align left
  line-height 26px

.jy-des--info tr>th 
  font-weight 400
  color #3C3B3B
  font-size 16px
  &:hover a
    color #3C3B3B
 
.jy-des--info tr>td a
  color #9297A5
  font-size 14px
 
.jy-footer--code 
  display flex
  text-align center
 
.jy-code--des 
  margin-left 72px
  &img 
    width 88px
    height 88px
  &>p 
    line-height 20px
    color #444343 
    font-size 16px

.jy-code--des a:hover
  &>p
    color #444343

.jy-footer--dec 
  margin-right 268px

.jy-footer--buttom 
  font-size 12px
  text-align center
  line-height 20px
  padding 22px 0
  &>p
    display flex
    justify-content center
    align-content center
    color #9297A5
    &>a
      color #9297A5
      cursor pointer
</style>
