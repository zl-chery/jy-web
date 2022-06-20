<template>
  <div class="jy-game jy-bgc--gray">
    <div class="jy-mainwidth">
      <div class="jy-gameinfo--title">
        <p class="jy-game--total">共<a href="javascript:;">120</a>款游戏</p>
        <div class="jy-game--sort">
          <label for="gamesort">排序：</label>
          <el-select id="gamesort" v-model="value" filterable placeholder="默认排序">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value" class="element-input">
            </el-option>
          </el-select>
          <p class="jy-game--show">展示:字体图标</p>
        </div>
      </div>
      <div class="jy-gameinfo--content">
        <ul class="jy-game--list">
          <li>
            <a href="javascript:;" class="jy-gamelist--info">
              <img src="../../assets/img/jy-logo.jpg" alt="">
              <div class="jy-gamecontent--info">
                <p class="jy-damedes--title">刺客信条：大革命-死亡</p>
                <p class="jy-damedes--content">“死王”DLC将会继续主角亚诺在《刺客信条：大革命》主线之后的剧情。亚诺离开巴黎来到圣但尼大教堂，探索已故法国国王的地下墓室。玩家将会遭遇新的敌人…</p>
                <div class="jy-game--button">
                  <el-row>
                    <el-button round class="button-gray" v-for="content in buttonContent" :key="content.id">{{content.value}}</el-button>
                  </el-row>
                </div>
              </div>
              <el-row>
                <el-button type="primary" round class="button-blue">开始游戏</el-button>
              </el-row>
              <div class="jy-game--rating">
                <p class="jy-rating--des">9.5</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="jy-gamelist--info">
              <img src="../../assets/img/jy-logo.jpg" alt="">
              <div class="jy-gamecontent--info">
                <p class="jy-damedes--title">刺客信条：大革命-死亡</p>
                <p class="jy-damedes--content">“死王”DLC将会继续主角亚诺在《刺客信条：大革命》主线之后的剧情。亚诺离开巴黎来到圣但尼大教堂，探索已故法国国王的地下墓室。玩家将会遭遇新的敌人…</p>
                <div class="jy-game--button">
                  <el-row>
                    <el-button round class="button-gray" v-for="content in buttonContent" :key="content.id">{{content.value}}</el-button>
                  </el-row>
                </div>
              </div>
              <el-row>
                <el-button type="primary" round class="button-blue">开始游戏</el-button>
              </el-row>
              <div class="jy-game--rating">
                <p class="jy-rating--des">9.5</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="jy-gamelist--info">
              <img src="../../assets/img/jy-logo.jpg" alt="">
              <div class="jy-gamecontent--info">
                <p class="jy-damedes--title">刺客信条：大革命-死亡</p>
                <p class="jy-damedes--content">“死王”DLC将会继续主角亚诺在《刺客信条：大革命》主线之后的剧情。亚诺离开巴黎来到圣但尼大教堂，探索已故法国国王的地下墓室。玩家将会遭遇新的敌人…</p>
                <div class="jy-game--button">
                  <el-row>
                    <el-button round class="button-gray" v-for="content in buttonContent" :key="content.id">{{content.value}}</el-button>
                  </el-row>
                </div>
              </div>
              <el-row>
                <el-button type="primary" round class="button-blue">开始游戏</el-button>
              </el-row>
              <div class="jy-game--rating">
                <p class="jy-rating--des">9.5</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="jy-gamelist--info">
              <img src="../../assets/img/jy-logo.jpg" alt="">
              <div class="jy-gamecontent--info">
                <p class="jy-damedes--title">刺客信条：大革命-死亡</p>
                <p class="jy-damedes--content">“死王”DLC将会继续主角亚诺在《刺客信条：大革命》主线之后的剧情。亚诺离开巴黎来到圣但尼大教堂，探索已故法国国王的地下墓室。玩家将会遭遇新的敌人…</p>
                <div class="jy-game--button">
                  <el-row>
                    <el-button round class="button-gray" v-for="content in buttonContent" :key="content.id">{{content.value}}</el-button>
                  </el-row>
                </div>
              </div>
              <el-row>
                <el-button type="primary" round class="button-blue">开始游戏</el-button>
              </el-row>
              <div class="jy-game--rating">
                <p class="jy-rating--des">9.5</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="jy-gamelist--info">
              <img src="../../assets/img/jy-logo.jpg" alt="">
              <div class="jy-gamecontent--info">
                <p class="jy-damedes--title">刺客信条：大革命-死亡</p>
                <p class="jy-damedes--content">“死王”DLC将会继续主角亚诺在《刺客信条：大革命》主线之后的剧情。亚诺离开巴黎来到圣但尼大教堂，探索已故法国国王的地下墓室。玩家将会遭遇新的敌人…</p>
                <div class="jy-game--button">
                  <el-row>
                    <el-button round class="button-gray" v-for="content in buttonContent" :key="content.id">{{content.value}}</el-button>
                  </el-row>
                </div>
              </div>
              <el-row>
                <el-button type="primary" round class="button-blue">开始游戏</el-button>
              </el-row>
              <div class="jy-game--rating">
                <p class="jy-rating--des">9.5</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="jy-gamelist--info">
              <img src="../../assets/img/jy-logo.jpg" alt="">
              <div class="jy-gamecontent--info">
                <p class="jy-damedes--title">刺客信条：大革命-死亡</p>
                <p class="jy-damedes--content">“死王”DLC将会继续主角亚诺在《刺客信条：大革命》主线之后的剧情。亚诺离开巴黎来到圣但尼大教堂，探索已故法国国王的地下墓室。玩家将会遭遇新的敌人…</p>
                <div class="jy-game--button">
                  <el-row>
                    <el-button round class="button-gray" v-for="content in buttonContent" :key="content.id">{{content.value}}</el-button>
                  </el-row>
                </div>
              </div>
              <el-row>
                <el-button type="primary" round class="button-blue">开始游戏</el-button>
              </el-row>
              <div class="jy-game--rating">
                <p class="jy-rating--des">9.5</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import ButtonBorderGray from '../button/ButtonBorderGray.vue'


export default {
  name: 'GameInfo',
  props: {
    msg: String
  },
  data() {
    return {
      options: [{
        id: 123,
        value: '选项1',
        label: '默认排序'
      }, {
         id: 124,
        value: '选项2',
        label: '按游戏热度'
      }, {
         id: 125,
        value: '选项3',
        label: '按上线时间'
      }, {
         id: 126,
        value: '选项4',
        label: '按游戏评分'
      }],
      value: '',
      buttonContent: [
        {
          id: 1,
          value: '开放世界'
        },
        {
          id: 2,
          value: '单机'
        },
        {
          id: 3,
          value: '多人联机'
        }
      ]
    }
  },
  // components: {
  //   ButtonBorderGray
  // },
  mounted() {
    this.getList();
  },
  methods:{
    getList() {

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.jy-bgc--gray
  background-color #EFF1F5

.jy-game--total
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #444343
  &>a
    color #3873FD

.jy-game--sort
  display flex
  justify-content space-between
  align-items: center

.jy-game--sort .el-select .el-input__inner:focus
    border-color transparent !important

.jy-game--sort label
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #444343;

.jy-game--sort input
  width 160px
  padding 0 0 0 12px
  height: 30px !important
  line-height: 30px !important 

.jy-game--sort input::placeholder
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;

.el-input__icon
  line-height 30px !important

.jy-game--show
  margin-left 30px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #444343;

.jy-game--list
  display flex
  flex-direction: column
  justify-content: space-between
  align-content: center
  &>li
    position relative
    margin-bottom: 20px

.jy-gamelist--info
  box-sizing border-box
  display: flex
  justify-content: flex-start
  align-items: center
  width 1500px
  height 253px
  padding  20px
  overflow hidden
  background: #FFFFFF;
  border-radius: 16px;
  &>img
    width 336px
    height 212px
    overflow hidden
    border-radius: 16px;

.jy-gamecontent--info
  margin 0 113px 0 20px
  width 694px

.jy-damedes--title
  margin-bottom 10px
  font-size: 24px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  color: #3C3B3B;
  line-height: 30px;
  letter-spacing: 2px;

.jy-damedes--content
  margin-bottom 20px
  font-size 16px
  font-family MicrosoftYaHei
  color #9297A5
  line-height 30px
  letter-spacing 1px

.button-blue.is-round
  padding 22px 62px  !important
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
  letter-spacing: 1px;
  border-radius: 39px !important
  background: #3873FD;
  border-radius: 39px;

.jy-game--rating
  position: absolute
  right 28px
  bottom 168px
  width 72px
  height 85px
  text-align center
  font-size: 24px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 66px;
  letter-spacing: 1px;
  background linear-gradient(#febb36, #fd7607)
  &::after
    content ''
    position absolute
    top 13px
    left 0
    border 36px solid transparent
    border-bottom-color #fff
</style>
