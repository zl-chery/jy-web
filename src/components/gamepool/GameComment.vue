<template>
  <div class="jy-mainwidth jy-game--comment">
    <div class="jy-comment--title jy-wrap--title">
      <p>发布评论</p>
      <div class="jy-comment--toshow">
        <div class="jy-comment--input">
          <p class="jy-login--tips"><a href="javascript:;">登录</a>后才能发布评论哦～</p>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="发布我的看法"
            v-model="textarea">
          </el-input>
          <div class="jy-comment--myrating">
            <div class="jt-comment--login">
              <div class="jy-comment--ratinginfo">
                <span>评分：</span>
                <el-rate
                  v-model="value2"
                  :colors="colors">
                </el-rate>
              </div>
              <el-button round class="button-send">发送</el-button>
            </div>
          </div>
        </div>
        <div class="jy-comment--des">
          <div class="jy-comment--count">
            <p>9.5</p>
            <p>1907人评分</p>
          </div>
          <div class="jy-comment--show">
            <div class="jy-comment--rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#C3C7E0"
                  :max="5">
                </el-rate>
                <el-progress class="game-rate" :percentage="100" :format="format"></el-progress>
            </div>
            <div class="jy-comment--rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#C3C7E0">
                </el-rate>
                <el-progress class="game-rate" :percentage="15" :format="format"></el-progress>
            </div>
            <div class="jy-comment--rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#C3C7E0">
                </el-rate>
                <el-progress class="game-rate" :percentage="10" :format="format"></el-progress>
            </div>
            <div class="jy-comment--rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#C3C7E0">
                </el-rate>
                <el-progress class="game-rate"  :percentage="5" :format="format"></el-progress>
            </div>
            <div class="jy-comment--rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#C3C7E0">
                </el-rate>
                <el-progress class="game-rate" :stroke-width="26"  :percentage="25" :format="format"></el-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jy-comment--title jy-wrap--title">
      <p>热门评论</p>
      <div class="jy-comment--list">
        <div class="jy-comment--pool">
          <div class="jy-comment--description">
            <img src="../../assets/img/head-user.png" alt="!">
            <div class="jy-comment--person">
              <p class="jy-person--nickname">爱吃蛋饼的栗子</p>
              <div class="jy-ingame--time">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
                <p class="jy-comment--time">游戏时长：24小时</p>
              </div>
              <p class="jy-person--comment">
                船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦  中的“火”！四年了。没有亮，我仿佛看  见了火中新生的凤凰！一直在低  声私语！这正是火中的凤凰：我的眼光追随着我脑中的幻影
              </p>
              <div class="jy-comment--footer">
                <p class="jy-comment--time">2022-04-05</p>
                <div class="jy-comment--tool">
                  <div class="jy-comment--admin">
                    <p>120</p>
                    <img src="../../assets/img/comment-like.png" alt="!">
                  </div>
                  <div class="jy-comment--comment">
                    <p>75</p>
                    <img src="../../assets/img/comment-icon.png" alt="!">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CommentReview />
        </div>
        <div class="jy-comment--pool">
          <div class="jy-comment--description">
            <img src="../../assets/img/head-user.png" alt="!">
            <div class="jy-comment--person">
              <p class="jy-person--nickname">爱吃蛋饼的栗子</p>
              <div class="jy-ingame--time">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
                <p class="jy-comment--time">游戏时长：24小时</p>
              </div>
              <p class="jy-person--comment">
                船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦  中的“火”！四年了。没有亮，我仿佛看  见了火中新生的凤凰！一直在低  声私语！这正是火中的凤凰：我的眼光追随着我脑中的幻影
              </p>
              <div class="jy-comment--footer">
                <p class="jy-comment--time">2022-04-05</p>
                <div class="jy-comment--tool">
                  <div class="jy-comment--admin">
                    <p>120</p>
                    <img src="../../assets/img/comment-like.png" alt="!">
                  </div>
                  <div class="jy-comment--comment">
                    <p>75</p>
                    <img src="../../assets/img/comment-icon.png" alt="!">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jy-comment--pool">
          <div class="jy-comment--description">
            <img src="../../assets/img/head-user.png" alt="!">
            <div class="jy-comment--person">
              <p class="jy-person--nickname">爱吃蛋饼的栗子</p>
              <div class="jy-ingame--time">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
                <p class="jy-comment--time">游戏时长：24小时</p>
              </div>
              <p class="jy-person--comment">
                船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦  中的“火”！四年了。没有亮，我仿佛看  见了火中新生的凤凰！一直在低  声私语！这正是火中的凤凰：我的眼光追随着我脑中的幻影
              </p>
              <div class="jy-comment--footer">
                <p class="jy-comment--time">2022-04-05</p>
                <div class="jy-comment--tool">
                  <div class="jy-comment--admin">
                    <p>120</p>
                    <img src="../../assets/img/comment-like.png" alt="!">
                  </div>
                  <div class="jy-comment--comment">
                    <p>75</p>
                    <img src="../../assets/img/comment-icon.png" alt="!">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jy-comment--pool">
          <div class="jy-comment--description">
            <img src="../../assets/img/head-user.png" alt="!">
            <div class="jy-comment--person">
              <p class="jy-person--nickname">爱吃蛋饼的栗子</p>
              <div class="jy-ingame--time">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
                <p class="jy-comment--time">游戏时长：24小时</p>
              </div>
              <p class="jy-person--comment">
                船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦  中的“火”！四年了。没有亮，我仿佛看  见了火中新生的凤凰！一直在低  声私语！这正是火中的凤凰：我的眼光追随着我脑中的幻影
              </p>
              <div class="jy-comment--footer">
                <p class="jy-comment--time">2022-04-05</p>
                <div class="jy-comment--tool">
                  <div class="jy-comment--admin">
                    <p>120</p>
                    <img src="../../assets/img/comment-like.png" alt="!">
                  </div>
                  <div class="jy-comment--comment">
                    <p>75</p>
                    <img src="../../assets/img/comment-icon.png" alt="!">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jy-comment--pool">
          <div class="jy-comment--description">
            <img src="../../assets/img/head-user.png" alt="!">
            <div class="jy-comment--person">
              <p class="jy-person--nickname">爱吃蛋饼的栗子</p>
              <div class="jy-ingame--time">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
                <p class="jy-comment--time">游戏时长：24小时</p>
              </div>
              <p class="jy-person--comment">
                船停在什么地方？把整个船都塞满了？我把他的膀子推一下，我自己的梦  中的“火”！四年了。没有亮，我仿佛看  见了火中新生的凤凰！一直在低  声私语！这正是火中的凤凰：我的眼光追随着我脑中的幻影
              </p>
              <div class="jy-comment--footer">
                <p class="jy-comment--time">2022-04-05</p>
                <div class="jy-comment--tool">
                  <div class="jy-comment--admin">
                    <p>120</p>
                    <img src="../../assets/img/comment-like.png" alt="!">
                  </div>
                  <div class="jy-comment--comment">
                    <p>75</p>
                    <img src="../../assets/img/comment-icon.png" alt="!">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jy-comment--more">
          <el-button class="button-comment-more" type="primary" round>查看更多评论</el-button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
//评论回复
import CommentReview from './CommentReview.vue';
export default {
  name: 'GameComment',
  props: {
    msg: String
  },
  components: {CommentReview},
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 50)}...`
    }
  },
  data() {
    return {
      value2: null,
      value: 5, //评分
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      textarea: ''
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    }
  }
}
</script>

<style lang="stylus">
.jy-game--comment
  box-sizing border-box
  padding 20px
  text-align center
  background-color #fff
  border-radius 16px

.jy-game--comment.jy-mainwidth
  margin-bottom 20px

.jy-comment--title.jy-wrap--title
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  padding 10px 0

.jy-comment--toshow
  display flex
  justify-content space-between
  align-items center

//评论评分展示
.jy-comment--des
  display flex
  justify-content flex-start
  align-items center
  width: 487px;
  height: 122px
  padding 50px 20px 40px
  background: rgb(249, 250, 251, .29)
  border-radius: 24px;

.jy-comment--count
  height 135px
  margin-right 28px
  & p:nth-of-type(1)
    font-size: 42px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: 700;
    color: #4B505B;
  & p:nth-of-type(2)
    font-size: 10px;
    font-family: MicrosoftYaHei;
    color: #868C9B;

//星星
.jy-comment--rate .el-rate__item
  display block
  width 14px
  height 14px

.jy-comment--rate .el-rate__icon
  display block
  width 14px
  height 14px
  color #C3C7E0 !important

//   .el-rate__icon::before {
//     content: "\e797";
// }

//评分条
.jy-comment--show
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  width 395px

.jy-comment--rate 
  margin-bottom 7px
.jy-comment--rate .el-rate__text,
.jy-comment--rate .el-progress__text
  display none

.jy-comment--rate  .el-rate__icon
  margin-right 0
  font-size 14px

.jy-comment--rate .el-rate
  display flex
  justify-content space-between
  align-items center
  width 86px
  margin-right 7px


.jy-comment--rate
  display flex
  justify-content center
  align-items center
  width 395px

.game-rate
  width 320px
  height 11px

.jy-comment--rate .el-progress-bar
  padding-right 0
  margin-right 0
  width 320px
  height 11px

.jy-comment--rate .el-progress
  line-height 0

.jy-comment--rate .el-progress-bar__outer
.jy-comment--rate .el-progress-bar__inner
  height 11px !important
  background-color #EFF1F5  //#3873FD

.jy-comment--rate .el-progress-bar__inner
  background-color #3873FD

.jy-ingame--time .el-rate__icon
  color #f96722 !important
  font-size 20px

.jy-comment--ratinginfo .el-rate__icon
  color #f96722 !important
  border-color #C0C4CC

.jy-ingame--time .el-rate__text
  display none

.jy-ingame--time .el-rate
  margin-right 20px


//评论内容
.jy-comment--input
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-start
  width: 913px
  height: 212px
  padding 20px 32px
  margin-right 20px
  background: rgb(249, 250, 251, .29)
  border-radius: 24px;

.jy-comment--input .el-textarea
  width 94%
  .el-textarea__inner
    padding 9px 4px
    height 100px
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #9297A5;
    line-height: 20px;
    outline: none;
    resize: none;
    background: rgb(249, 250, 251, .29)
    border 0
    &:focus
      outline 0
      border 0

.jy-comment--myrating
  display flex
  justify-content flex-end
  align-items center
  width 100%
  & div
    display flex
    justify-content center
    align-items center

.jy-login--tips
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9a9eab
  line-height: 19px;
  & a
    color #3873fd

.button-send.is-round
  padding 12px 56px !important
  border-radius: 37px !important
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #fff
  background-color #3873FD;

//评论内容展示
.jy-comment--list
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  width 1024px

.jy-comment--pool
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  padding-top 30px
  border-top 1px solid #D9D9D9;

.jy-comment--description
  display flex
  justify-content flex-start
  align-items flex-start
  & img
    width 80px
    height 80px
    margin-right 20px
</style>