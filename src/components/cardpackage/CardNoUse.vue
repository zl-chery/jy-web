<template>
  <div>
    <ul class="jy-card">
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-second.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1小时秒进卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>24小时会员卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-weekend.png" alt="1周秒进卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1周秒进卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-30day.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>30天会员卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-7day.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>7天会员体验卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-90day.png" alt="90天季卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>90天会员季卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-expday.png" alt="1小时秒进卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1天会员体验卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-expday30.png" alt="30天体验卡">
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>30天会员体验卡</p>
            <p>永久使用</p>
          </div>
          <el-button class="button-use" type="primary" round @click="dialogVisible = true">立即使用</el-button>
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
              <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardNoUse',
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
//卡片样式
//button  hack
.button-use.is-round
  padding 7px 18px  !important
  border-radius: 17px !important
  color: #fff
  background-color #3873fd
  border 1px solid #fff

//使用卡片dialog
.jy-cardPackage--des .el-dialog
  width 360px !important
  height 212px !important
  margin-top 434px !important
  background #fff
  border-radius 10px
  box-shadow 0px 0px 9px 0px rgba(77, 80, 131, 0.17)

.jy-cardPackage--des .el-dialog__header
  display none

.jy-carduse-dialog
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-start
  padding 30px 20px 20px
  &>p
    margin-top 30px
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #3C3B3B;
    line-height: 21px;

.jy-carduse--title
  display flex
  justify-content space-between
  align-items center


.jy-carduse--pay
  width 300px
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #3C3B3B;
  line-height: 26px;

//dialog  取消确认按钮hack
.dialog-button-carduse.el-button
  width: 100px;
  height: 40px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  border-radius: 37px;
  border 0

.dialog-button-carduse.el-button--default:focus,
.dialog-button-carduse.el-button--default:hover
  color: #3873FD;
  border-color: #DCDFE6;
  background-color: rgba(56, 115, 253, 0.12);

.dialog-button-carduse.el-button--primary
  color: #fff
  background: #3873FD;

.dialog-button-carduse.el-button--default
  color: #3873FD;
  background: rgba(56, 115, 253, 0.12);
</style>
