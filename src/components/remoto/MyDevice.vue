<template>
  <div class="jy-device--content jy-device-padding">
    <div class="jy-device jy-device--padding"  v-for="(item, index) in playList" :key="index">
      <img src="../../assets/img/device-phone.png" alt="手机">
      <div class="jy-device--des">
        <p class="jy-device--title">{{item.phoneType}}</p>
        <p class="jy-device--area">地区：{{item.area}}</p>
        <p class="jy-device--operator">运营商：{{item.operator}}</p>
        <el-row>
          <el-button class="button-width94" type="primary" round>下线</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDevice',
  props: {
    msg: String
  },
  data() {
    return {
      playList: [
        {
          phoneType: 'Mi10',
          url: "../../assets/img/hot-bgc.jpg",
          area: '福建省',
          operator: '中国移动',
        },
        {
          phoneType: 'Mi Pro15.6',
          url: "../../assets/img/hot-bgc.jpg",
          area: '福建省',
          operator: '中国移动',
        },
        {
          phoneType: 'ipad',
          url: "../../assets/img/hot-bgc.jpg",
          area: '福建省',
          operator: '中国移动',
        },
        {
          phoneType: 'ipad',
          url: "../../assets/img/hot-bgc.jpg",
          area: '福建省',
          operator: '中国移动',
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
//我的设备
.jy-remoto--content
  padding 0 20px

.jy-device--content
  padding-bottom: 202px;

.jy-device
  display flex
  justify-content center
  align-items center
  width: 350px;
  height: 200px;
  background: #EFF1F5;
  border-radius: 16px;
  &>img
    width 116px
    height 116px

.jy-device--des
  margin-left 45px

.jy-device--title
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #3C3B3B;
  line-height: 24px;
  letter-spacing: 1px;

.jy-device--area,
.jy-device--operator
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 30px
  letter-spacing: 1px;

.jy-device--operator
  margin-bottom 12px

.button-width94.is-round
  padding 9px 32px  !important
  border-radius: 17px !important
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #fff
  background: #3873FD
  border 0

</style>
