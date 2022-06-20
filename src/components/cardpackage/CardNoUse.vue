<template>
  <div class="jy-carl-list">
    <ul
      class="jy-card"
      :style="{
        'align-content': cardList.length > 0 ? 'space-between' : 'center',
      }"
      v-if="cardList.length > 0"
    >
      <li v-for="(item, index) in cardList" :key="index">
        <div class="jy-cardinfo">
          <img :src="item.has_card.img_url" :alt="item.card_name" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>{{ item.card_name }}</p>
            <p>{{ item.expire_time.substring(0, 10) }}过期</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="showDialog(item.id)"
            >立即使用</el-button
          >
        </div>
      </li>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        custom-class="userCard"
      >
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <div class="jy-carduse--pay">温馨提示</div>
            <img
              src="../../assets/img/toolpay-cancel.png"
              alt="取消"
              @click="dialogVisible = false"
            />
          </div>
          <p>确认使用“1小时秒进卡”</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button
            class="dialog-button-carduse"
            @click="dialogVisible = false"
            >取 消</el-button
          >
          <el-button
            class="dialog-button-carduse"
            type="primary"
            @click="cardEnable"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>24小时会员卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-weekend.png" alt="1周秒进卡" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1周秒进卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-30day.png" alt="1小时秒进卡" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>30天会员卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-7day.png" alt="1小时秒进卡" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>7天会员体验卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-90day.png" alt="90天季卡" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>90天会员季卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img src="../../assets/img/card-nouse-expday.png" alt="1小时秒进卡" />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>1天会员体验卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li>
      <li>
        <div class="jy-cardinfo">
          <img
            src="../../assets/img/card-nouse-expday30.png"
            alt="30天体验卡"
          />
        </div>
        <div class="jy-cardPackage--des">
          <div class="jy-card--title">
            <p>30天会员体验卡</p>
            <p>永久使用</p>
          </div>
          <el-button
            class="button-use"
            type="primary"
            round
            @click="dialogVisible = true"
            >立即使用</el-button
          >
          <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <div class="jy-carduse-dialog">
              <div class="jy-carduse--title">
                <p class="jy-carduse--pay">温馨提示</p>
                <img
                  src="../../assets/img/toolpay-cancel.png"
                  alt="取消"
                  @click="dialogVisible = false"
                />
              </div>
              <p>确认使用“1小时秒进卡”</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="dialog-button-carduse"
                @click="dialogVisible = false"
                >取 消</el-button
              >
              <el-button
                class="dialog-button-carduse"
                type="primary"
                @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </li> -->
    </ul>

    <NoContent v-else />
  </div>
</template>

<script>
import Http from '@/request/http'
import NoContent from '@/components/comp/NoContent.vue'

export default {
  name: 'CardNoUse',
  props: {
    msg: String,
  },
  components: {
    NoContent,
  },
  data() {
    return {
      num: 1,
      dialogVisible: false, //dialog
      cardList: [],
      activeId: '',
    }
  },
  async mounted() {
    try {
      await Http({
        type: 'cardPackage',
        data: {
          user_token: this.$cookies.get('as_user_token'),
        },
      }).then((res) => {
        // console.log(res)
        //过滤获取未使用未过期的卡
        this.cardList = res.data.filter((item) => {
          return item.status === 1 && new Date(item.expire_time) >= new Date()
        })
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    showDialog(id) {
      this.dialogVisible = true
      this.activeId = id
    },
    async cardEnable() {
      try {
        await Http({
          type: 'cardEnable',
          data: {
            user_token: this.$cookies.get('as_user_token'),
            package_id: this.activeId,
          },
        }).then((res) => {
          // console.log(res)
          if (res.msg == 'success') {
            this.dialogVisible = false
            this.$message({
              message: '使用成功！',
              type: 'success',
            })
            this.cardList = this.cardList.filter(
              (item) => item.id != this.activeId
            )
          } else {
            this.$message({
              message: res.msg,
              type: 'warning',
            })
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
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
.userCard{
    width: 360px !important;
    height: 212px !important;
    margin-top: 434px !important;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 9px 0px rgb(77 80 131 / 17%);
  .el-dialog__body{
    padding 0
  }

}
</style>
