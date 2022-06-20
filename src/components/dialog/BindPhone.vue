<template>
  <div>
    <el-dialog
      :visible.sync="bindPhone"
      width="20%"
      :before-close="closeDialog"
      custom-class="bind-phone"
    >
      <div class="jy-joinhome-dialog">
        <div class="jy-carduse--title">
          <p class="jy-carduse--pay">绑定手机</p>
          <img
            src="~@/assets/img/toolpay-cancel.png"
            alt="取消"
            @click="closeDialog"
          />
        </div>
        <div class="jy-carduse-content">
          <el-form ref="form" :model="phoneData" label-width="20%">
            <el-form-item label="手机号码">
              <el-input v-model="phoneData.phone"></el-input>
            </el-form-item>
            <div class="checkCode">
              <el-form-item label="验证码">
                <el-input v-model="phoneData.checkCode"></el-input>
              </el-form-item>
              <el-button type="text">获取验证码</el-button>
            </div>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="dialog-button-carduse" @click="closeDialog"
          >取 消</el-button
        >
        <el-button
          class="dialog-button-carduse"
          type="primary"
          @click="closeDialog"
          >确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BindPhone',
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
      bindPhone: this.showDialog,
      phoneData: {
        phone: '',
        checkCode: '',
      },
    }
  },
  watch: {
    showDialog(newVal) {
      this.bindPhone = newVal
    },
  },
  created() {},
  mounted() {},
  methods: {
    closeDialog() {
      this.bindPhone = false
      this.$emit('closeDialog')
    },
  },
}
</script>

<style lang="stylus">
.bind-phone {
    .jy-joinhome-dialog {

        .jy-carduse--title {
            margin-bottom: 25px;
        }

        .jy-carduse-content {
            .el-input {
                width: 90%;
                margin-left: 5%;

                .el-input__inner {
                    width: 100% !important;
                }
            }

            .checkCode {
                width: 100%;
                position: relative;

                >button {
                    position: absolute;
                    right: 28px;
                    bottom: 0;
                }
            }
        }
    }
    .el-dialog__footer{
      padding-bottom 30px
    }
}
</style>
