<template>
  <div>
    <el-dialog
      :visible.sync="gameTakeover"
      width="20%"
      :before-close="closeDialog"
      custom-class="game-takeover"
    >
      <div class="jy-joinhome-dialog">
        <div class="jy-carduse--title">
          <p class="jy-carduse--pay">温馨提示</p>
          <img
            src="~@/assets/img/toolpay-cancel.png"
            alt="取消"
            @click="closeDialog"
          />
        </div>
        <p>您正在手机端玩此游戏，继续操作将接管并中断手机端游戏，是否继续？</p>
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
      gameTakeover: this.showDialog,
    }
  },
  watch: {
    showDialog(newVal) {
      this.gameTakeover = newVal
    },
  },
  methods: {
    closeDialog() {
      this.gameTakeover = false
      this.$emit('closeDialog')
    },
  },
}
</script>

<style lang="stylus">
.game-takeover {
    .jy-joinhome-dialog {

        .jy-carduse--title {
            margin-bottom: 25px;
        }

        p {
            line-height: normal;
            margin-bottom: 15px;
        }
    }
}
</style>
