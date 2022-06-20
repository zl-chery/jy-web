<template>
  <div class="jy-gamepool--bg">
    <div class="jy-mainwidth">
      <el-breadcrumb
        class="gamepool-breadcrumb"
        separator-class="el-icon-arrow-right"
      >
        <el-breadcrumb-item :to="{ path: '/' }">云游戏</el-breadcrumb-item>
        <el-breadcrumb-item>{{gameList.game_name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="jy-gamepool--info">
        <!-- swiper -->
        <GamePoolSwiper1 :img="swiperList"/>
        <div class="jy-gamepool--des">
          <p class="jy-gamepool--name">{{gameList.game_name}}</p>
          <div class="jy-gamepool--price">
            <p>{{gameList.unit_price}}鲸钻/小时</p>
            <p>{{gameList.unit_price}}鲸币/小时</p>
          </div>
          <div class="jy-gamepool--tags">
            <el-row>
              <el-button class="button-gray" round v-for="(item) in gameList.has_game_labels" :key="item.game_key">{{item.label_name}}</el-button>
            </el-row>
          </div>
          <p class="jy-game--description">{{gameList.game_introduce | queryString}}</p>
          <p class="jy-gamepool--version">游戏版本号：{{gameList.version}}</p>
          <div class="jy-gamepool--operation">
            <p>操作方式：</p>
            <el-row>
              <el-button class="button-gray" round>手柄</el-button>
              <el-button class="button-gray" round>键鼠</el-button>
            </el-row>
          </div>

          <div class="jy-game--author">
            <p>游戏提供者</p>
            <img src="../assets/img/head-user.png" alt="!" />
          </div>
          <div class="jy-game--start">
            <el-button
              class="button-gamepool button-rchive"
              type="primary"
              round
              @click="gameArchiveDialog = true"
              >选择存档</el-button
            >
            <el-button
              class="button-gamepool button-startgame"
              type="primary"
              round
              @click="gameTakeoverDialog = true"
              >开始游戏</el-button
            >
            <SecondStartGameDialogVue
              :startGameDialog="startGameDialog"
              @closeGame="closeGame"
            />
          </div>
          <!-- 游戏存档 -->
          <GameArchive
            :showDialog="gameArchiveDialog"
            @closeDialog="closeDialog"
          />
          <!-- 登录弹窗 -->
          <Login :showDialog="loginDialog" @closeDialog="closeDialog" />
          <!-- 绑定手机号弹窗 -->
          <BindPhone :showDialog="bindPhoneDialog" @closeDialog="closeDialog" />
          <!-- 会员专享弹窗 -->
          <OpenVip :showDialog="openVipDialog" @closeDialog="closeDialog" />
          <!-- 游戏接管弹窗 -->
          <GameTakeover
            :showDialog="gameTakeoverDialog"
            @closeDialog="closeDialog"
          />
          <div class="jy-gamepool--plugin">
            <a href="javascript:;">用手机玩</a>
            <a href="javascript:;" @click="shareDialog = true">分享</a>
            <shareDialogVue
              :shareDialog="shareDialog"
              @closeDialog="closeDialog"
            />
            <a href="javascript:;">收藏</a>
          </div>
          <div class="jy-gamepool--rating">
            <p>{{gameList.score}}</p>
          </div>
        </div>
      </div>
      <div class="jy-gamepool">
        <div class="jy-gamepool--tabs">
          <el-tabs
            class="deleteBorder jy-gamepool-tab"
            v-model="activeName"
            @tab-click="changeComponent(activeName, gameList.gid)"
          >
            <el-tab-pane
              v-for="(item, index) in label"
              :key="index"
              :label="item.label"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
        </div>
        <div class="jy-gamepool--loader">
          <!-- <keep-alive :includes="keepComponents" :max="3">
            <component :is="activeComponent"></component>
          </keep-alive> -->
          <router-view :gameKey="gameName"></router-view>
        </div>
      </div>
      <GameCommentVue v-show="isComment" :rating="ratingInfo"/>
    </div>
  </div>
</template>

<script>
//推荐
import GameRecommendVue from './gamepool/GameRecommend.vue'

//评论
import GameCommentVue from './gamepool/GameComment.vue'

//排行
import GameSortVue from './gamepool/GameSort.vue'

//交易
import GameTradingVue from './gamepool/GameTrading.vue'

//创建房间
import GameCreateHomeVue from './gamepool/GameCreateHome.vue'

//攻略
import GameStrategyVue from './gamepool/GameStrategy.vue'

//swiper
import GamePoolSwiper1 from './swiper/GamePoolSwiper1.vue'

//分享
import shareDialogVue from './gamepool/coms/shareDialog.vue'

//开通会员
// import UpdateVipVue from './comp/UpdateVip.vue'

//开始游戏  普通用户
// import startGameDialogVue from './gamepool/coms/StartGameDialog.vue'

//开始游戏鲸钻用户
// import DiaStartGameDialogVue from './gamepool/coms/DiaStartGameDialog.vue'

//vip 开始游戏
// import VipStartGameDialogvue from './gamepool/coms/VipStartGameDialog.vue'

//秒进卡 开始游戏
import SecondStartGameDialogVue from './gamepool/coms/SecondStartGameDialog.vue'

//游戏存档
import GameArchive from './gamepool/coms/GameArchive'

//登录弹窗
import Login from './dialog/Login'

//绑定手机
import BindPhone from './dialog/BindPhone'

//会员专享
import OpenVip from './gamepool/coms/OpenVip'

//游戏接管弹窗
import GameTakeover from './gamepool/coms/GameTakeover'

import Http from '@/request/http'

export default {
  name: 'GamePool',
  props: {
    msg: String,
  },
  components: {
    GameRecommendVue,
    GameCommentVue,
    GameSortVue,
    GameTradingVue,
    GamePoolSwiper1,
    GameCreateHomeVue,
    GameStrategyVue,
    shareDialogVue,
    SecondStartGameDialogVue,
    GameArchive,
    Login,
    BindPhone,
    OpenVip,
    GameTakeover,
  },
  data() {
    return {
      gameName: '',  //游戏名称
      gameList: '', // 游戏详情信息
      swiperList: [], //siwper
      ratingInfo: {
        score: 0,
        comment: 0
      }
      , // 评分细节
      startGameDialog: false, // 开始游戏
      shareDialog: false, //分享
      activeName: 'first',
      activeIndex: 0,
      isComment: true, //是否加载评论
      activeComponent: GameRecommendVue,
      keepComponents: [],
      label: [
        {
          label: '推荐',
          comp: GameRecommendVue,
          name: 'first',
          path: 'gameRecommend',
          activeIndex: 0,
        },
        {
          label: '房间',
          comp: GameCreateHomeVue,
          name: 'second',
          path: 'gameCreateHome',
          activeIndex: 1,
        },
        {
          label: '存档',
          comp: GameTradingVue,
          name: 'third',
          path: 'gameTrading',
          activeIndex: 2,
        },
        {
          label: '排行',
          comp: GameSortVue,
          name: 'forth',
          path: 'gameSort',
          activeIndex: 3,
        },
        {
          label: '攻略',
          comp: GameStrategyVue,
          name: 'fifth',
          path: 'GameStrategy',
          activeIndex: 4,
        },
      ],
      gameArchiveDialog: false, //是否展示存档
      loginDialog: false, //是否显示登录弹窗
      bindPhoneDialog: false, //是否显示绑定手机号弹窗
      openVipDialog: false, //是否显示会员专享弹窗
      gameTakeoverDialog: false, //是否显示游戏接管弹窗
    }
  },
  mounted() {
    this.getGamePoolInfo()
  },
  methods: {
    handleClick(tab, event) {
      // this.$router.push({path: this.activeIndex});
      console.log(tab, event)
    },
    changeComponent(value, id) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeIndex = comItem[0].activeIndex
      //是否加载评论
      if (this.activeIndex !== 0) {
        this.$nextTick(() => {
          // 在 DOM 中删除 comment 组件
          this.isComment = false
        })
      } else {
        this.$nextTick(() => {
          // 在 DOM 中添加 comment 组件
          this.isComment = true
        })
      }
      // this.activeComponent = this.label[this.activeIndex].comp
      this.$router.push({
        path: `/gamePool/${this.label[this.activeIndex].path}`,
        query: {
          id: id
        }
        // name: this.label[this.activeIndex].path,
        // params:{
        //   id: id
        // }
      })
    },
    //开始游戏
    // startGame(dialogValue) {
    //   if(!dialogValue) {
    //     dialogValue = true
    //   }
    //   this.$nextTick(() => {
    //       this.startGameDialog = dialogValue
    //     });
    // }
    closeGame(value) {
      this.$nextTick(() => {
        //关闭秒进卡充值
        this.startGameDialog = value ? !value : value
      })
    },
    closeDialog() {
      this.shareDialog = false
      this.gameArchiveDialog = false
      this.loginDialog = false
      this.bindPhoneDialog = false
      this.openVipDialog = false
      this.gameTakeoverDialog = false
    },
    async getGamePoolInfo() {
      let gid = this.$route.query.id
      try {
        let {data} = await Http({
          type: 'gamePoolInfo', 
            data: {
              gid: gid,
          }
        })
        this.gameList = data
        this.swiperList = this.gameList.has_game_imgs
        this.ratingInfo.score = data.score, 
        this.ratingInfo.comment = data.comments
        this.gameName = data.game_name
      } catch (error) {
        console.log(error)
      }
    }
  },
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 70)}...`
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
// 背景图片
.jy-gamepool--bg {
  background: #eff1f5 url('../assets/img/game-bgc.png') no-repeat;
  background-size: 1920px 976px;
}

// 卡片样式
.jy-card
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  align-content space-between
  width 946px
  height 212px

.jy-card li {
  width: 350px;
  height: 284px;
  overflow: hidden;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.06);
}

.jy-cardinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  overflow: hidden;
  background-color: #eff1f5;
  border-radius: 16px 16px 0 0;

  &>img {
    width: 240px;
    height: auto;
  }
}

jy-cardGame--des {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  height: 84px;
  padding: 0 20px;
  letter-spacing: 1px;
}

.jy-gamepool .jy-card--title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left 20px
}

.jy-gamepool .jy-card--title p:nth-of-type(1) {
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #3C3B3B;
  line-height: 30px;
  margin-top 8px
}

.jy-card--title p:nth-of-type(2) {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 24px;
}

// 面包屑 hack
.gamepool-breadcrumb .el-breadcrumb__inner.is-link {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #9297A5;
  line-height: 74px;
}

.gamepool-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #3873FD;
  line-height: 74px;
}

// 游戏库页面
.jy-gamepool--info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1500px;
  height: 566px;
}

.jy-gamepool-swiper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 1025px;
  height: 806px;
}

.jy-gamepool--des {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 374px;
  height: 526px;
  padding: 20px;
  background: #FEFEFE;
  border-radius: 16px;
}

.jy-gamepool--rating {
  position: absolute;
  top: 0;
  left: 313px;
  width: 72px;
  height: 85px;
  text-align: center;
  font-size: 24px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 66px;
  letter-spacing: 1px;
  background: linear-gradient(#febb36, #fd7607);

  &::after {
    content: '';
    position: absolute;
    top: 13px;
    left: 0;
    border: 36px solid transparent;
    border-bottom-color: #fff;
  }
}

.jy-gamepool--name {
  font-size: 26px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: 700;
  color: #444343;
  line-height: 60px;
}

.jy-gamepool--version {
  margin-top: 10px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 34px;
}

.jy-gamepool--operation {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & p {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #9297A5;
  }
}

.jy-gamepool--price, .jy-game--author {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 30px;
}

.jy-gamepool--price p {
  position: relative;
  padding-left: 26px;
  margin-right: 10px;
}

.jy-gamepool--price p:nth-of-type(1)::after {
  content: '';
  background: url('../assets/img/game-diamond.png') no-repeat;
  position: absolute;
  top: 4px;
  left: 0;
  width: 20px;
  height: 20px;
}

.jy-gamepool--price p:nth-of-type(2)::after {
  content: '';
  background: url('../assets/img/game-coin.png') no-repeat;
  position: absolute;
  top: 4px;
  left: 0;
  width: 20px;
  height: 20px;
}

// 按钮
.jy-gamepool--tags {
  padding: 12px 0;
}

.button-gray.is-round {
  padding: 7px 15px !important;
  border-radius: 17px !important;
  border: 1px solid #eee;
  color: #9297A5;
  cursor: text;

  &:hover {
    background-color: #fff;
    border: 1px solid #eee;
  }
}

// 游戏文字描述
.jy-game--description {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 29px;
}

// 作者
.jy-game--author {
  padding-top: 10px;

  & p {
    margin-right: 14px;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #9297A5;
    line-height: 16px;
  }

  & img {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
  }
}

// 开始游戏
.jy-game--start {
  padding: 76px 0 20px;
  width: 100%;
}

// 按钮
.button-gamepool.is-round {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  border-radius: 33px !important;
  border: 0;
}

// 存档按钮
.button-rchive.is-round {
  position: relative;
  padding: 17px 31px !important;
  color: #9297A5;
  background-color: #EFF1F5;

  &:hover {
    border: 0;
    color: #9297A5;
    background-color: #EFF1F5;
  }

  &::after {
    position: absolute;
    content: '';
    top: 4px;
    left: 8px;
    width: 42px;
    height: 40px;
    transform: scale(0.5);
    background: url('../assets/img/game-doc.png') no-repeat;
  }

  & span {
    display: block;
    padding-left: 10px;
  }
}

// 开始游戏按钮
.button-startgame.is-round {
  padding: 17px 77px !important;
  margin-left: 20px;
  color: #fff;
  background-color: #3873FD;

  &:hover {
    border: 0;
    color: #fff;
    background-color: #3873FD;
  }
}

// 用手机玩 分享 收藏
.jy-gamepool--plugin {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 19px;

  & a {
    position: relative;
    padding: 0 50px 0 28px;

    &:hover {
      color: #3873FD;
    }
  }
}

.jy-gamepool--plugin a:nth-of-type(1) {
  padding-left: 35px;
}

// 用手机玩
.jy-gamepool--plugin a:nth-of-type(1)::after {
  content: '';
  background: url('../assets/img/game-phone.png') no-repeat;
  position: absolute;
  top: -6px;
  left: 0;
  width: 27px;
  height: 22px;
}

// 分享
.jy-gamepool--plugin a:nth-of-type(2)::after {
  content: '';
  background: url('../assets/img/game-share.png') no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 19px;
}

// 收藏
.jy-gamepool--plugin a:nth-of-type(3)::after {
  content: '';
  background: url('../assets/img/game-like.png') no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}

.jy-gamepool--plugin a:hover:nth-of-type(1)::after {
  background: url('../assets/img/game-phone-hover.png') no-repeat;
}

.jy-gamepool--plugin a:hover:nth-of-type(2)::after {
  background: url('../assets/img/game-share-hover.png') no-repeat;
}

.jy-gamepool--plugin a:hover:nth-of-type(3)::after {
  background: url('../assets/img/game-like-hover.png') no-repeat;
}

// 游戏tab栏
.jy-gamepool {
  margin: 20px 0;
  width: 1500px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 16px;
}

.jy-gamepool--tabs {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 8px;
}

.jy-gamepool-tab {
  width: 1500px;
  height: 74px;
  line-height: 74px;
  background: #FEFEFE;
  border-radius: 16px 16px 0px 0px;
}

.jy-gamepool-tab #tab-first {
  padding-left: 74px;
}

.jy-gamepool-tab .el-tabs__item
  padding 0 74px

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


.jy-game--nomessage p
  margin-top 20px
  font-size 24px
</style>
