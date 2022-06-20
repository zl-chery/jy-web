<template>
  <div>
    <el-dialog
      :visible.sync="showOpenVip"
      width="20%"
      :before-close="closeDialog"
      custom-class="open-vip"
    >
      <div class="jy-joinhome-dialog">
        <div class="jy-carduse--title">
          <p class="jy-carduse--pay">会员专享</p>
          <img
            src="~@/assets/img/toolpay-cancel.png"
            alt="取消"
            @click="closeDialog"
          />
        </div>
        <div class="jy-carduse-content">
          <div class="content-title">
            当前游戏为会员专享游戏，立即开通抢先体验吧~
          </div>
          <div class="content-open-vip">
            <img src="~@/assets/img/vip-king.png" alt="" />
            <div class="content-text">
              <h4>会员专享</h4>
              <div>爆款游戏 抢先体验</div>
            </div>
            <el-button round>开通体验</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'OpenVip',
  props: {
    showDialog: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      showOpenVip: this.showDialog,
    }
  },
  watch: {
    showDialog(newVal) {
      this.showOpenVip = newVal
    },
  },
  methods: {
    closeDialog() {
      this.showOpenVip = false
      this.$emit('closeDialog')
    },
  },
}
</script>

<style lang="stylus">


.open-vip {
      border-radius: 10px;
      overflow: hidden;
      .el-dialog__body {
      padding : 0
    }

    .jy-joinhome-dialog {
        padding: 0;

        .jy-carduse--title {
            padding: 20px 10px;
            background-image: url('~@/assets/img/vip.png');
            background-size: 100%;
            position: relative;
            text-align: center;

            .jy-carduse--pay {
                width: 100%;
            }

            img {
                position: absolute;
                right: 15px;
                top: 17px;
            }
        }

        .jy-carduse-content {
            // padding: 0 10px 15px 10px;
            .content-title {
                width: 100%;
                padding: 25px 0;
                text-align: center;
            }

            .content-open-vip {
                display: flex;
                align-items: center;
                // padding-bottom: 15px;
                padding: 20px;
                background-image: url('~@/assets/img/toolstore-pay-bgc.png');
                background-size: 100% 100%;

                img {
                    width: 15%;
                    height: auto;
                    margin-right: 10px;
                }

                .content-text {
                    flex: 1;
                    color: #894500;
                }

                button {
                    width: 30%;
                    color: #793200;
                    padding: 8px 20px;
                }
            }
        }
    }
}
</style>
