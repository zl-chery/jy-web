<template>
<div class="jy-game--create">
  <ul class="jy-card jy-gameshow--rec">
    <li>
      <div class="jy-gamelist--info">
        <div class="jy-createhome--info">
          <p @click="homeCreate=true">+</p>
          <el-dialog
          :visible.sync="homeCreate"
          width="30%"
          :before-close="handleClose">
          <div class="jy-createhome-dialog">
            <div class="jy-createhome--title">
              <p class="jy-createhome--pay">创建房间</p>
              <img src="../../assets/img/toolpay-cancel.png" alt="!"  @click="homeCreate=false">
            </div>
          </div>
          <div class="jy-createhome--des">
            <div class="jy-creategame--show">
              <div class="jy-creategame--img">
                <img class="jy-creategame--bgc" src="../../assets/img/jy-logo.jpg" alt="!">
                <div class="jy-creategame--mask"></div>
              </div>
              <img class="jy-creategame--logo" src="../../assets/img/jy-logo.jpg" alt="!">
            </div>
            <div class="jy-createhome--form">
              <div class="jy-creategame--name">
                <label for="gameName">游戏名称</label>
                <el-select id="gameName" v-model="value" filterable placeholder="下拉选择搜索游戏">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" class="element-input">
                  </el-option>
                  <!-- <template slot="prefix">
                  <span style="padding-left: 5px;">
                    <i class="el-icon-caret-top"></i>
                  </span>
                </template> -->
                </el-select>
              </div>
              <div class="jy-creategame--type">
                <label>房间类型</label>
                <el-radio v-model="radio" label="1">公开</el-radio>
                <el-radio v-model="radio" label="2">私密</el-radio>
              </div>
              <div class="jy-creategame--num">
                <label for="homeNum">房间人数</label>
                <el-input
                  id="homeNum"
                  placeholder="1-4人"
                  v-model="input"
                  clearable>
                </el-input>
              </div>
              <div class="jy-creategame--pwd">
                <label for="homePwd">房间密码</label>
                <el-input
                  id="homePwd"
                  placeholder="1-6位数字"
                  v-model="input"
                  clearable>
                </el-input>
              </div>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button class="dialog-button-carduse" @click="homeCreate=false">取消</el-button>
            <el-button class="dialog-button-carduse" type="primary" @click="homeCreate=false">创建</el-button>
          </span>
          </el-dialog>
        </div>
        <p>开启游戏接力</p>
        <p>邀请好友一起接力玩游戏！</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1234</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：123</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
    <li>
      <div class="jy-cardinfo">
        <img src="../../assets/img/card-nouse-day.png" alt="24小时秒进卡">
      </div>
      <div class="jy-card--des">
        <div class="jy-card--title">
          <p>龙珠Z</p>
          <p>这是一款以激烈的肉搏战为特色…</p>
        </div>
      </div>
      <div class="jy-home--num">
        <p>人数：1</p>
      </div>
    </li>
  </ul>
    
</div>
</template>

<script>

export default {
  name: 'GameCreateHome',
  props: {
    msg: String
  },
  data() {
    return {
      playList: [
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        },
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        },
        {
          title: '嗨呀',
          url: "../../assets/img/hot-bgc.jpg",
          content: '这是嗨呀嗨呀嗨呀',
          homeNum: 315,
          homePeople: '1/4'
        },
      ],
      input: '',  //input密码输入框
      homeCreate: false,  //创建房间
      isShow: false, //初次加载不加载评论内容
      dialogVisible: false,  //dialog
      shareDialog: false, //shareDialog
      radio: '1', //公开私密单选框
       options: [{   //select
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
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
    }
  }

}
</script>

<style lang="stylus">
//开黑房间
.jy-game--create
  display flex
  justify-content space-between
  align-items center

.jy-game--create .jy-card.jy-gameshow--rec
  height 566px
  & li
    position relative
    overflow hidden

.jy-home--num
  position absolute
  top 0
  left 0
  padding-left 6px
  height 27px
  line-height 27px
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #fff
  background-image: linear-gradient(to right, #ff7a03, #ffc33d)
  border-radius 5px 0 0 0
  &::after
    content: ''
    position absolute
    bottom 0
    right -28px
    border 14px solid transparent
    border-top-color #FFC33D
    border-left-color #FFC33D
    border-radius 0 5px 0 0

.jy-gamelist--info
  position relative
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.06);

.jy-gamelist--info
  display flex
  flex-direction column
  justify-content center
  align-items center
  & .jy-createhome--info
    width 100px
    height 100px

.jy-createhome--info>p
  width 100px
  height 100px
  text-align center
  font-size 36px
  line-height 100px
  color #333
  background-color #eee
  border-radius 50%
  cursor pointer

//正式房间列表
.jy-gamelist--info
  width 100%
  height 100%
  background-color #fff
  border-radius 16px 16px 0 0
  &>p
    margin-top 16px
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #444343;
    line-height 24px
  & p:nth-of-type(2)
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #9297A5;
    line-height 22px

.jy-gamelist--humen
  display flex
  justify-content flex-start
  align-items center
  padding 15px 20px
  width 310px
  overflow hidden
  &>img
    width 50px
    height 50px
    border-radius 50%

.button-join.is-round
  padding 7px 15px !important
  border-radius: 17px !important
  color: #9297A5;

.button-join.el-button,
.button-join.el-button,
.button-join.el-button:focus,
.button-join.el-button:hover
  color: #3873FD;
  border-color: #3873FD;
  background-color: #ecf5ff;

//创建房间
.jy-createhome--info .el-dialog
  width: 636px !important
  height: 421px;
  background: #fff
  border-radius: 10px;

.jy-createhome--title
  display flex
  justify-content space-between
  align-items center
  & .jy-createhome--pay
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: 700;
    color: #3C3B3B;
  & img
    width 22px
    height 22px

.jy-createhome--des
  display flex
  justify-content space-between
  align-items center
  margin-top 30px

.jy-creategame--show
  position relative
  width 307px
  height 225px
  overflow hidden
  border-radius 16px

.jy-creategame--show .jy-creategame--img
  position relative
  width 100%
  height 100%
  & .jy-creategame--bgc
    width 100%
    height 100%
  & .jy-creategame--mask
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0, 0, 0, .5)


.jy-creategame--show .jy-creategame--logo
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  width: 81px;
  height: 112px;
  border-radius 0

.jy-createhome--form
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-start
  &>div
    margin-bottom 20px
  & label
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #3C3B3B;
    margin-right 20px

.jy-creategame--type
  display flex
  justify-content space-between
  align-items center
  height 39px

.jy-creategame--name .el-input__inner,
.jy-creategame--num .el-input,
.jy-creategame--pwd .el-input
  width: 198px;
  height: 39px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 40px
  background: #F5F6FA;
  border-radius: 5px;
  border 0
  outline 0

.el-icon-arrow-up:before {
    content:   "\e78f" //"\e790"
}

.jy-creategame--num .el-input__inner,
.jy-creategame--pwd .el-input__inner
  background: #F5F6FA;
  border-radius: 5px;
  border 0
  outline 0

.jy-creategame--type .el-radio__input.is-checked .el-radio__inner
  border #3873fd;
  background-color: #3873fd;

.jy-creategame--type .el-radio__input.is-checked+.el-radio__label
  color #3873fd;

//编辑dailog
.jy-personedit--nickname  .el-dialog
  width: 426px !important
  height: 512px;
  background: #FFFFFF;
  border-radius: 10px;
  margin-top 284px
</style>