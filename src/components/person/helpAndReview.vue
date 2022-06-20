<template>
  <div class="jy-personwidth">
    <div class="jy-personcenter--title jy-wrap--title">
      <p>常见问题</p>
      <div class="jy-qa--content jy-qa--padding">
        <div class="jy-qa--item">
          <el-tabs class="deleteBorder jy-person--help" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first"></el-tab-pane>
            <el-tab-pane label="会员相关" name="second"></el-tab-pane>
            <el-tab-pane label="游戏相关" name="third"></el-tab-pane>
            <el-tab-pane label="账号相关" name="fourth"></el-tab-pane>
            <el-tab-pane label="存档相关" name="fifth"></el-tab-pane>
            <el-tab-pane label="按键教程" name="sixth"></el-tab-pane>
            <el-tab-pane label="远程联机" name="seventh"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="jy-qa--content jy-person--helpBorder">
          <el-collapse accordion>
          <el-collapse-item v-for="(item,index) in list" :key="index" :name="index" @click.native="showCollapse(item, index)">
            <template slot="title">
                {{item.title}}<i class="header-icon el-icon-info"></i>
              <i class="el-icon-arrow-down iconcolor" :class="{'jy-qa-active':item.isActive}"></i> 
            </template>
            <div class="el-content">
              <p v-show="item.close">{{item.content | queryString}}</p>
              <p v-show="item.isClose">{{item.content }}</p>
              <span @click="showCollapseAll(item, index)" v-show="item.close">展开<i class="el-icon-arrow-right iconcolor" :class="{'jy-qa-active': !item.isActive}" @click="showCollapse(item, index)"></i></span>
            </div>
          </el-collapse-item>
          </el-collapse>
          <div class="jy-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, prev, pager, next, sizes, jumper"
            :total="1000">
          </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ButtonBorderGray from '../button/ButtonBorderGray.vue'


export default {
  name: 'helpAndReview',
  props: {
    msg: String
  },
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 60)}...`
    }
  },
  data() {
      return {
        activeName: 'second',
        currentPage1: 1,
        currentPage2: 2,
        currentPage3: 3,
        currentPage4: 4,
        list: [
          {
            isActive: false,
            title: '4G耗流量吗？为什么我用WiFi玩延迟还是那么高？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '鲸云漫游需要收费吗？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '排队等待时间会计入游戏时长吗？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '用这个软件安全吗，账号不会泄露吧？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '未成年人防沉迷说明',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '会员与非会员区别？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '关于 鲸钻/鲸币/免费时长的消耗规则：',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '道具商城的物品如何购买？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '【秒进卡】是什么？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '购买了【秒进卡】后，如何使用？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '秒进卡】的时效时间如何看？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          }
          ,{
            isActive: false,
            title: '游戏一直显示一个画面或者一直加载怎么办？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          }
          ,{
            isActive: false,
            title: '如果升级app后遇到游戏黑屏怎么办？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '中途切回app界面后不知道怎么返回游戏？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '在（免账号）游戏可以登录自己的账号吗？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '单机游戏怎么存档，云电脑会保存下载的文件吗？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '鲸云漫游的存档可以保留多个不同进度吗？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '鲸云漫游的云存档和steam云存档互通吗？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          },
          {
            isActive: false,
            title: '如果购买到与存档描述不符的存档或遇到蓄意以虚假截图欺诈怎么办？',
            content: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、  图  标和文本、元素的 位 置等。当同一时间使用鲸云漫游的人数较多，服务器满载时就需要排  队，会  员队列速度快于普 通用户队列，如果不想等待排队时间，可以购买秒进卡，可以快速排 队！秒进 卡，可以快速排 队！',
            close: true, //折叠框部分展开
            isClose: false, //折叠框全部展开
          }
        ],
      };
    },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //自定义展开事件  部分展开
    showCollapse(item) {
      item.isActive = !item.isActive
      this.$forceUpdate() //强制刷新
    },
    //全部展开
    showCollapseAll(item) {
      //折叠框展开
      item.isClose = true
      item.close = false
      this.showCollapse(item)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
//去掉elementUI tab的底部灰色线条
.deleteBorder .el-tabs__nav-wrap::after
  height: 0

//折叠框的border
//.el-collapse-item__header
//  border 0
.el-collapse-item__header
  border 0

.el-collapse-item.is-active
  z-index 5
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.08);

.el-collapse-item__wrap
  border-bottom 0

//折叠框外围border
.el-collapse 
  border-top 0
  border-bottom 0

.jy-qa
  box-sizing border-box
  background-color #fff

.jy-qa .jy-qa--title
  margin-top 20px
  padding-top 40px
  background url('../../assets/img/qa-bgc.png') no-repeat

.jy-person--helpBorder.jy-qa--content
  border 1px solid #D9D9D9;
.jy-personcenter--title .jy-qa--content
  width 1146px

.jy-qa--content .el-collapse .el-collapse-item__header
.jy-qa--content .el-collapse .el-content 
  padding-left 20px

.el-content
  font-size 14px
  font-family MicrosoftYaHei
  color #9297A5
  line-height 20px
  letter-spacing 1px
  &>span
    position relative
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #3873FD;
    line-height: 20px;
    cursor pointer
    &>.el-icon-arrow-right
      display block
      position absolute
      top 2px
      left 32px

.el-collapse-item__header
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #3C3B3B;
  line-height: 20px;
  letter-spacing: 1px;

.el-collapse-item__header.is-active
  color #3873FD

.el-collapse-item
  position relative

.el-icon-arrow-down
  position absolute
  top 16px
  left 1470px

.el-icon-arrow-right
  display none

.jy-qa--active {
  transform: rotate(-180deg);
}

//常见问题hack
.jy-personcenter--title.jy-wrap--title
  padding-bottom 0

.deleteBorder.jy-person--help.el-tabs--top .el-tabs__item.is-top:nth-child(2)
  padding-left 21px
.deleteBorder.jy-person--help.el-tabs--top .el-tabs__item.is-top:last-child
  width 108px
  padding-right 21px

.deleteBorder.jy-person--help
  margin-top 27px
  & .el-tabs__item
    box-sizing border-box
    padding 0 21px
    height 32px
    line-height:30px
    border 1px solid #fff
    border-bottom-color #D9D9D9;
  & .el-tabs__item.is-active
    border 1px solid #D9D9D9;
    border-bottom 1px solid #fff
    border-radius 5px 5px  0 0

.jy-person--helpBorder .el-content
  display flex
  justify-content flex-start
  align-items center
  & p
    margin-right 20px
</style>
