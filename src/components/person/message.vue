<template>
  <div class="jy-personwidth">
    <div class="jy-wrap--title jy-personcenter--title">
      <p>消息中心</p>
      <el-tabs
        class="deleteBorder jy-assets--tabs"
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
      <NotificationMsgVue :msgList="msgList" />
    </div>
  </div>
</template>

<script>
//公告
// import AllMsgVue from './MessageCom/AllMsg.vue'

//通知
import NotificationMsgVue from './MessageCom/NotificationMsg.vue'

// //互动
// import InteractionMsgVue from './MessageCom/InteractionMsg.vue'

// //存档
// import ArchivingMsgVue from './MessageCom/ArchivingMsg.vue'
import Http from '@/request/http'
export default {
  name: 'PersonMessage',
  components: {
    // AllMsgVue,
    NotificationMsgVue,
    // InteractionMsgVue,
    // ArchivingMsgVue,
  },
  data() {
    return {
      activeName: 'first',
      activeType: 'notice',
      // activeComponent: AllMsgVue,
      keepComponents: [],
      label: [
        {
          label: '公告',
          // comp: AllMsgVue,
          name: 'first',
          type: 'notice',
          activeIndex: 0,
        },
        {
          label: '通知',
          // comp: NotificationMsgVue,
          name: 'second',
          type: 'notifications',
          activeIndex: 1,
        },
        {
          label: '互动',
          // comp: InteractionMsgVue,
          name: 'thirth',
          type: 'Interaction',
          activeIndex: 2,
        },
        /* {
          label: '存档',
          // comp: ArchivingMsgVue,
          name: 'forth',
          activeIndex: 3,
        }, */
      ],
      message: {
        notice: { page: 1, list: [] },
        notifications: { page: 1, list: [] },
        Interaction: { page: 1, list: [] },
      },
    }
  },
  mounted() {
    this.getMessageList('notice')
    this.getMessageList('notifications')
    this.getMessageList('Interaction')
  },
  methods: {
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })
      this.activeType = comItem[0].type
      // this.activeComponent = this.label[this.activeIndex].comp
    },
    async getMessageList(type) {
      try {
        let msg_type
        switch (type) {
          case 'notice':
            msg_type = '1'
            break
          case 'notifications':
            msg_type = '2'
            break
          case 'Interaction':
            msg_type = '3'
            break
        }
        await Http({
          type: 'notify',
          data: {
            user_token: this.$cookies.get('as_user_token'),
            type: msg_type,
          },
        }).then((res) => {
          // console.log(JSON.stringify(res.data))
          this.message[type].list =
            JSON.stringify(res.data) == '{}' ? [] : res.data
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    msgList() {
      return this.message[this.activeType].list
    },
  },
}
</script>

<style lang="stylus">
.jy-toolstore--title.jy-wrap--title
  padding-top 30px

//去掉elementUI tab的底部灰色线条
.deleteBorder .el-tabs__nav-wrap::after
  height: 0

//去掉elementUI tab切换底部蓝色线条
.deleteBorder .el-tabs__active-bar
  background transparent

.deleteBorder.jy-toolstore--tabs .el-tabs__item
  line-height 46px

.el-tabs__header
  margin-bottom 0

.deleteBorder .el-tabs__item
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 22px;

//tabs  border
.deleteBorder.jy-assets--tabs
  margin-top 27px
  & .el-tabs__item
    box-sizing border-box
    width 74px
    padding 0 21px
    height 30px
    line-height:30px

.deleteBorder.jy-assets--tabs.el-tabs--top .el-tabs__item.is-top:nth-child(2)
  padding-left 21px
.deleteBorder.jy-assets--tabs.el-tabs--top .el-tabs__item.is-top:last-child
  width 76px
  padding-right 21px

.deleteBorder.jy-assets--tabs .el-tabs__item
  border 1px solid #fff
  border-bottom-color #D9D9D9;
  height 32px

.deleteBorder.jy-assets--tabs .el-tabs__item.is-active
  border 1px solid #D9D9D9;
  border-bottom 1px solid #fff
  border-radius 5px 5px  0 0

//全部 鲸钻 鲸币

.jy-assets
  border 1px solid #D9D9D9
  border-radius 0px 5px 5px 5px
  min-height: 570px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%

.jy-message--all
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  width 1106px
  padding 20px 20px 0
  & li
    display flex
    justify-content space-between
    align-items center
    width 1146px
    height 96px
    border-bottom 1px solid #D9D9D9;

.jy-mssage--task
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  width 74%
  & div
    display flex
    justify-content flex-start
    align-items center
    width 100%
    line-height: 24px;
    & img
      width 19px
      height 19px

.jy-mssage--info
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height: 36px;

.jy-assets--title
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height: 24px;

.jy-assets--time
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
</style>
