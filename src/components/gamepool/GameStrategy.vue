<template>
<div class="jy-game--strategy">
  <div v-show="gameStrategy.length !== 0">
    <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="正在阅读：" name="1">
      <span class="collapse-title" slot="title">正在阅读：<a href="javascript:;">第一章-李道村 西部亡命之徒</a></span>
      <!-- <span>
        展开<i class="el-collapse-item__arrow el-icon-arrow-up is-active"></i>
      </span> -->
        <ul>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>

        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>

        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li><li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>
        <li>
          <a href="javascript:;">第一章-李道村 西部亡命之徒</a>
        </li>

        </ul>
      </el-collapse-item>
    </el-collapse>
    <p>《荒野大镖客2》是迄今为止最高水准的大型开放世界游戏。它对细节的打磨吹毛求疵，对内容的填充扎实稳重，故事的讲述娓娓动人。和前作及GTA5  相比本作不但有全方位提升，在互动体验的打磨上更上一层楼，创造出一个内在运行逻辑能够自洽的虚拟社会，足以让人沉浸数周、数月、甚至数年，绝  对有资格进入史上最伟大作品行列。</p>
    <img src="~@/assets/img/vip.png" alt="">
    <p>《荒野大镖客2》是迄今为止最高水准的大型开放世界游戏。它对细节的打磨吹毛求疵，对内容的填充扎实稳重，故事的讲述娓娓动人。和前作及GTA5  相比本作不但有全方位提升，在互动体验的打磨上更上一层楼，创造出一个内在运行逻辑能够自洽的虚拟社会，足以让人沉浸数周、数月、甚至数年，绝  对有资格进入史上最伟大作品行列。</p>
    <p>大型开放世界在如今的游戏圈已经不再稀罕，但是能让我真正沉浸其中并为之着迷的依然屈指可数。这样的游戏往往需要丰富而逼真的细节，层出不 穷且精彩纷呈的可探索元素，惊心动魄的故事——以及最重要的，脱离公式化框架的有趣玩法。《荒野大镖客2》给我带来的无与伦比的沉浸感，可能已经  达到了大型开放世界游戏在本世代主机上所能做到的极致。漫游其中的数十个小时，让我仿佛在狂野的美国西部经历了另一重人生。</p>
    <p>大型开放世界在如今的游戏圈已经不再稀罕，但是能让我真正沉浸其中并为之着迷的依然屈指可数。这样的游戏往往需要丰富而逼真的细节，层出不穷且精彩纷呈的可探索元素，惊心动魄的故事——以及最重要的，脱离公式化框架的有趣玩法。《荒野大镖客2》给我带来的无与伦比的沉浸感，可能已经达到了大型开放世界游戏在本世代主机上所能做到的极致。漫游其中的数十个小时，让我仿佛在狂野的美国西部经历了另一重人生。</p>
  </div>
  <div class="jy-game--nomessage" v-show="gameStrategy.length === 0">
    <p>很遗憾，该游戏还没有游戏攻略噢！</p>
  </div>
</div>
</template>

<script>
import Http from '@/request/http';

export default {
  name: 'GameStrategy',
  props: {
    msg: String,
    gameKey: String
  },
  watch: {
    gameKey(new_value) {
      this.gameName = new_value
    }
  },
  data() {
    return {
      activeNames: 0,  //折叠面板
      gameName: this.gameKey,  //游戏名称
      gameStrategy: '',   //游戏攻略信息
      input: '',  //input密码输入框
      homeCreate: false,  //创建房间
      isShow: false, //初次加载不加载评论内容
      dialogVisible: false,  //dialog
      shareDialog: false, //shareDialog
      radio: '1', //公开私密单选框
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
    },
    handleChange(val) {
      console.log(val);
    },
    //获取攻略
    async getGameList() {
      try {
        let {data} = await Http({
          type: 'gameStrategy', 
            data: {
              game_key: this.gameName,
          }
        })
        this.gameStrategy = data
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    try {
      this.getGameList()
    } catch (error) {
      console.log(error)
    }
  }

}
</script>

<style lang="stylus">
//攻略
.jy-game--strategy
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  margin 0 20px 30px
  & .el-collapse
    width 1460px
    margin-top 30px
    background #F3F4F7
    border-radius 8px
  & .el-collapse-item__header
    padding-left 20px
    height 49px
    line-height 50px
    background #F3F4F7
    border-bottom: 1px solid #EBEEF5;
  & .collapse-title
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #444343;
    &>a
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #3873FD

.jy-game--strategy .el-collapse-item
  border-radius 8px

.jy-game--strategy .el-collapse-item__content
  width 1440px
  padding 3px 0 8px 20px
  background #F3F4F7
  & ul
    display flex
    flex-wrap wrap
    justify-content flex-start
    align-items center
    & li
      margin-right 50px
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #444343;
      line-height 33px

.jy-game--strategy
  & img
    margin-top 20px
    margin-left 30px
    width: 750px;
    height: 475px;
    overflow hidden
    border-radius 16px
  & p
    margin-top 20px
    text-indent 2em
    font-size: 14px;
    line-height 27px
    font-family: MicrosoftYaHei;
    color: #444343;

//.jy-game--strategy .el-collapse-item
//  display flex
//  flex-wrap wrap
//  justify-content flex-start
//  align-items center
</style>