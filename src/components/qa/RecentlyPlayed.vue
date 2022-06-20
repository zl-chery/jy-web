<template>
  <div class="jy-mainwidth hobby">
    <div class="jy-wrap--title jy-personcenter--title">
      <el-tabs
        class="deleteBorder hobby-nav"
        v-model="activeName"
        @tab-click="changeComponent(activeName)"
      >
        <el-tab-pane
          v-for="(item, index) in label"
          :key="index"
          :label="item.label"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>
      <!-- <div class="hobby-nav">
        <el-button
          round
          plain
          class="jy-tag--common button-width60"
          :class="{ active: activeIndex === item.activeIndex }"
          @click="changeComponent(item.activeIndex)"
          v-for="(item, index) in label"
          :key="index"
          >{{ item.label }}</el-button
        > -->
    </div>

    <div>
      <ul class="jy-history--list">
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
        <li>
          <a href="javscript:;" class="jy-historylist--info">
            <img src="../../assets/img/jy-logo.jpg" alt="" />
            <div class="jy-history--des">
              <p class="jy-historydes--title">龙珠Z</p>
              <p class="jy-historydes--content">这是一款以激烈的肉搏战为特色…</p>
            </div>
          </a>
          <div class="jy-history--rating">
            <p>9.5</p>
          </div>
        </li>
      </ul>
      <div class="jy-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, sizes, jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
//最近玩过
// import ColumnNoButtonVue from '../commentCom/ColumnNoButton.vue'

//收藏游戏
// import NotificationMsgVue from './MessageCom/NotificationMsg.vue'
export default {
  name: 'MyHobby',
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      activeName: 'first',
      activeIndex: 0,
      activeComponent: 'ColumnNoButtonVue',
      keepComponents: [],
      label: [
        {
          label: '最近玩过',
          comp: 'ColumnNoButtonVue',
          name: 'first',
          activeIndex: 0,
        },
        {
          label: '收藏游戏',
          comp: 'NotificationMsgVue',
          name: 'second',
          activeIndex: 1,
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    }
  },
  methods: {
    changeComponent(value) {
      this.activeIndex = value
      // let comItem = this.label.filter((item) => {
      //   return item.name === value
      // })
      // this.activeIndex = comItem[0].activeIndex
      this.activeComponent = this.label[this.activeIndex].comp
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
}
</script>

<style lang="stylus">
.hobby
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  &.jy-wrap--title
    padding: 30px 0 10px 0 !important
    position: relative;
    .hobby-nav
      .el-tabs__item
        background-color: #FFFFFF
        border: 1px solid #E9E9E9
        border-radius: 25px;
        text-align: center;
        padding: 0 20px !important;
        height 30px
        line-height: 30px
        margin-right: 20px
        margin-bottom 10px
        font-size: 14px
      .is-active
        color:#3873FD
        background-color: rgba(56, 115, 253, 0.12);
        border:1px solid #3873FD

.jy-comment--gameshow
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  width 1146px
  padding 0 20px
  & li
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    width 271px
    height 256px
    margin-bottom 30px
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius 16px
    & img
      width: 271px;
      height: 172px;
      overflow hidden
      background: #D8D8D8;
      border-radius: 16px 16px 0px 0px;

.jy-gameshow--info
  margin-left 20px
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;

.jy-gameshow--title
  margin-top 10px
  font-size: 16px;
  font-weight: 700;
  color: #3C3B3B;
  line-height 32px

.jy-gameshoe--content
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
</style>
