<template>
<div class="jy-game--trading">
  <div class="jy-trading--search">
    <div class="demo-input-suffix">
      <el-input
        placeholder="查找存档"
        suffix-icon="el-icon-search"
        v-model="input">
      </el-input>
    </div>
    <div class="jy-trading--sortmeth">
      <p>最新</p>
      <p>销量</p>
      <p>价格</p>
    </div>
  </div>
  <ul class="jy-trading--game">
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        <img class="jy-trading--operate" src="../../assets/img/trading-operate.png" alt="">
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">加入房间</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>该房间状态为非公开，请输入房间密码</p>

        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">加 入</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">温馨提示</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>您确认使用40鲸钻购买【左岸先生】提供的存“完美通关”！</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">温馨提示</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>您确认使用40鲸钻购买【左岸先生】提供的存“完美通关”！</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">温馨提示</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>您确认使用40鲸钻购买【左岸先生】提供的存“完美通关”！</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
  </ul>
  <!-- 点击查看评论 -->
  <CommentReview/>
  <ul class="jy-trading--game">
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        <img class="jy-trading--operate" src="../../assets/img/trading-operate.png" alt="">
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">加入房间</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>该房间状态为非公开，请输入房间密码</p>

        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">加 入</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">温馨提示</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>您确认使用40鲸钻购买【左岸先生】提供的存“完美通关”！</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">温馨提示</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>您确认使用40鲸钻购买【左岸先生】提供的存“完美通关”！</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
    <li>
      <div class="jy-trading--info">
        <img src="../../assets/img/trading-logo.png" alt="">
        <p>鲸云官方</p>
        <p>9<span>.0分</span></p>
        
      </div>
      <p class="jy-trading--des">船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦中的“火”！四年了。没有亮，我仿佛看见了火中新。</p>
      <div class="jy-trading--doc">
        <img src="../../assets/img/trading-doc.png" alt="">
        <div class="jy-trading--gameinfo">
          <p>穿越火线存档</p>
          <div class="jy-doc--des">
            <p>50</p>
            <p>销量:12</p>
          </div>
        </div>
      </div>
      <el-button round class="button-trading" @click="dialogVisible = true">立即购买</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="jy-carduse-dialog">
          <div class="jy-carduse--title">
            <p class="jy-carduse--pay">温馨提示</p>
            <img src="../../assets/img/toolpay-cancel.png" alt="取消"   @click="dialogVisible = false">
          </div>
          <p>您确认使用40鲸钻购买【左岸先生】提供的存“完美通关”！</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="dialog-button-carduse" @click="dialogVisible = false">取 消</el-button>
          <el-button class="dialog-button-carduse" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="jy-trading--play">
        <p>试玩</p>
        <p>查看评论</p>
        <p @click="shareDialog = true">分享</p>
        <shareDialogVue :shareDialog='shareDialog'/>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import CommentReview from './CommentReviewMore.vue';

//分享
import shareDialogVue from './coms/shareDialog.vue';

export default {
  name: 'GameTrading',
  props: {
    msg: String
  },
  components: {
    CommentReview,
    shareDialogVue},
  data() {
    return {
      input: '',  //搜索框
      isShow: false, //初次加载不加载评论内容
      dialogVisible: false,  //dialog
      shareDialog: false, //shareDialog
    }

  },
  methods: {
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        })
        .catch(() => {});
    },
    changeShare(value) {
      this.shareDialog = value
    }
  }

}
</script>

<style lang="stylus">
.jy-game--trading
  display flex
  flex-direction column
  flex-wrap wrap
  padding 20px
  width 1460px

.jy-trading--search
  display flex
  justify-content space-between
  align-items center
  margin-bottom 30px

.jy-trading--search .el-input 
  width 280px
  overflow hidden

.jy-trading--search .el-input__inner
  border-radius: 25px;
  border: 1px solid rgba(182, 182, 184, 0.43);

.jy-trading--sortmeth
  display flex
  justify-content center
  align-items center
  & p
    margin-left 39px
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #444343;
    line-height: 19px;
    letter-spacing: 1px;
    cursor pointer
    &:hover
      color #3873FD

.jy-trading--game
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  & li
    width: 350px;
    margin-bottom 20px
    overflow hidden
    background: #FEFEFE;
    box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.03);
    border-radius: 16px;

.jy-trading--info
  position relative
  display flex
  justify-content space-between
  align-items center
  width 310px
  height 59px
  padding 20px
  background #fff url('../../assets/img/trading-gamebgc.png')
  & img
    width 60px
    height auto
    margin-right 14px
  & p:nth-of-type(1)
    width 177px
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: #444343;
    line-height: 24px;
  & p:nth-of-type(2)
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #01CBFD;
    line-height: 45px;
    & span
      font-size: 22px;

.jy-trading--operate 
  position absolute
  right -14px
  bottom 68px

.jy-trading--des
  margin 0 20px
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 30px;

.jy-trading--doc
  display flex
  justify-content center
  align-items center
  width 222px
  height 56px
  padding 8px 44px 6px
  margin 30px 20px 20px
  background #fff url('../../assets/img/trading-docbgc.png')
  & img
    margin-right 30px

.jy-trading--gameinfo
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-start
  height 48px
  &>p
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #444343;
    line-height: 24px;

.jy-doc--des
  display flex
  justify-content center
  align-items flex-start
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 22px;

.jy-doc--des p:nth-of-type(1)
  position relative
  margin 0 30px 0 20px
  &::after
    position absolute
    content ''
    background: url('../../assets/img/trading-coin.png') no-repeat
    position absolute
    left -20px
    bottom 4px
    width 18px
    height 18px

.button-trading.is-round
  padding 12px 126px !important
  margin 0 20px
  border-radius: 37px !important
  color: #fff
  background-color #3873FD
  font-size: 14px;
  font-family: MicrosoftYaHei;

.jy-trading--play
  display flex
  justify-content space-between
  align-items center
  width 310px
  margin 23px 20px 0
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  &>p
    position relative
    margin-left 30px
    cursor pointer
    &:hover
      color #3873fd

.jy-trading--play>p:nth-of-type(1)::after
  content ''
  position absolute
  background: url('../../assets/img/trading-play.png') no-repeat
  position absolute
  left -30px
  bottom 0
  width 26px
  height 21px

.jy-trading--play p:nth-of-type(2)::after
  content ''
  position absolute
  background: url('../../assets/img/trading-comment.png') no-repeat
  position absolute
  left -30px
  bottom 0
  width 22px
  height 18px

.jy-trading--play p:nth-of-type(3)::after
  content ''
  position absolute
  background: url('../../assets/img/trading-share.png') no-repeat
  position absolute
  left -30px
  bottom 0
  width 22px
  height 19px

//评论内容hack
.jy-game--trading .jy-comment--review 
  width 1460px
  margin 0 0 8px 0
  background: #fff
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07);
  & .jy-review--des
    width 1440px

.jy-game--trading  .jy-review--footer.jy-comment--footer
  margin-top 0

.jy-game--trading  .jy-review--author
  line-height 30px

.jy-game--trading  .jy-review--content
  margin-top 7px
  width 250%

.jy-game--trading .jy-review--des>img
  width 60px
  height 60px

.jy-game--trading .jy-comment--footer
  padding-bottom 0
  height 30px
  



.el-dialog__headerbtn
  display none

//使用卡片dialog
.jy-trading--game .el-dialog
  width: 360px !important
  height: 240px;
  margin-top 420px !important
  background #fff
  border-radius 10px
  box-shadow 0px 0px 9px 0px rgba(77, 80, 131, 0.17)

.jy-trading--game .el-dialog__header
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
</style>