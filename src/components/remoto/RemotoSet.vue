<template>
  <div class="jy-device--content jy-remoto--set">
    <div class="jy-device jy-remoto-color">
      <p class="jy-rset--title">客户端设置</p>
      <div class="jy-rset--info">
        <div class="jy-rset--item">
          <p class="jy-item--title">分辨率</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>自动</el-button>
            <el-button class="button-rset" type="primary" round>高清</el-button>
            <el-button class="button-rset" type="primary" round>超清</el-button>
            <el-button class="button-rset" type="primary" round>2k</el-button>
            <el-button class="button-rset" type="primary" round>4k</el-button>
          </el-row>
        </div>
        <div class="jy-rset--item">
          <p class="jy-item--title">帧率</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>自动</el-button>
            <el-button class="button-rset" type="primary" round>标准</el-button>
            <el-button class="button-rset" type="primary" round>流畅</el-button>
            <el-button class="button-rset" type="primary" round>极限</el-button>
          </el-row>
        </div>
        <div class="jy-rset--item">
          <p class="jy-item--title">解码</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>自动</el-button>
            <el-button class="button-rset" type="primary" round>H264</el-button>
            <el-button class="button-rset" type="primary" round>H265</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <div class="jy-device jy-remoto-color">
      <p class="jy-rset--title">服务端设置</p>
      <div class="jy-rset--info">
        <div class="jy-rset--item">
          <p class="jy-item--title">分辨率</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>自动</el-button>
            <el-button class="button-rset" type="primary" round>高清</el-button>
            <el-button class="button-rset" type="primary" round>超清</el-button>
            <el-button class="button-rset" type="primary" round>2k</el-button>
            <el-button class="button-rset" type="primary" round>4k</el-button>
          </el-row>
        </div>
        <div class="jy-rset--item">
          <p class="jy-item--title">帧率</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>自动</el-button>
            <el-button class="button-rset" type="primary" round>标准</el-button>
            <el-button class="button-rset" type="primary" round>流畅</el-button>
            <el-button class="button-rset" type="primary" round>极限</el-button>
          </el-row>
        </div>
        <div class="jy-rset--item">
          <p class="jy-item--title">解码</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>自动</el-button>
            <el-button class="button-rset" type="primary" round>H264</el-button>
            <el-button class="button-rset" type="primary" round>H265</el-button>
          </el-row>
        </div>
        <div class="jy-rset--item">
          <p class="jy-item--title">连接方式</p>
          <el-row>
            <el-button class="button-rset button-rset-hover" type="primary" round>人工连接</el-button>
            <el-button class="button-rset" type="primary" round>密码连接</el-button>
          </el-row>
        </div>
        <div class="jy-rset--item">
          <p class="jy-item--title">密码</p>
          <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        </div>
      </div>
    </div>
    <div class="jy-device jy-remoto-color">
      <div class="jy-rset--info">
        <div class="jy-rset--item">
          <p class="jy-item--title">消息通知</p>
          <el-switch
            v-model="value1"
            active-text="ON"
            inactive-text="OFF">
          </el-switch>
          <el-switch
            v-model="value2"
            active-text="ON"
            inactive-text="OFF">
          </el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemotoSet',
  props: {
    msg: String
  },
  data() {
    return {
      input: 'OFF',
      value1: true,
      value2: true
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
    //点击buttongei button添加button-rset-hover类名
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
//远程设置
.jy-remoto--set.jy-device--content 
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  padding-bottom 76px

.jy-remoto-color.jy-device
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  background-color #fff
  width 100%
  height auto

.jy-remoto-color.jy-device .jy-rset--title
  line-height 0
  margin 10px 0 20px

.jy-rset--info
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start

.jy-rset--item
  display flex
  justify-content flex-start
  align-items center
  width 100%
  margin-bottom 20px
  line-height 30px

.jy-rset--title
  font-size: 14px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  color: #444343;
  line-height 49px

.jy-item--title
  width 77px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #444343;
  letter-spacing: 1px;

//button hack
.button-rset.is-round
  padding 7px 15px  !important
  border-radius: 17px !important
  color: #9297A5;
  background-color #fff
  border: 1px solid #E9E9E9;

//  &:focus
//    color: #9297A5;
//    background-color #fff
//    border: 1px solid #E9E9E9;

.button-rset-hover.is-round
  color #fff
  background: #3873FD;

//密码框hack
.jy-rset--item .el-input
  width: 186px;
  height: 39px;
  background: #F5F6FA;
  border-radius: 20px;

.jy-rset--item .el-input .el-input__inner
  background: #F5F6FA;
  border-radius: 20px;
  border 0

.jy-rset--item .el-input.is-active .el-input__inner, .el-input__inner:focus
  border 0

.jy-rset--item .el-switch:nth-of-type(2)
  margin-left 10px

.jy-rset--item .el-switch__core
  width 56px !important
  height 28px
  border-radius: 36px;

.jy-rset--item .el-switch__core::after 
  width: 24px;
  height: 24px;

.jy-rset--item .el-switch.is-checked .el-switch__core::after
  left: 88%;


//修改el-switch中的文字显示
.jy-rset--item .el-switch__label *
    line-height: 1;
    font-size: 12px;
    display: inline-block;

.jy-rset--item .el-switch__label
    position: absolute;
    display: none;
    color: #fff !important;
    font-size: 12px !important;

/*打开时文字位置设置*/
.jy-rset--item .el-switch__label--right
    z-index: 1;
    right: 28px;

/*关闭时文字位置设置*/
.jy-rset--item .el-switch__label--left
  z-index: 1;
  left: 28px;

/*显示文字*/
.jy-rset--item .el-switch__label.is-active
  display: block;

.jy-rset--item .el-switch.is-checked .el-switch__core
  border #3873FD;
  background-color: #3873FD;


</style>
