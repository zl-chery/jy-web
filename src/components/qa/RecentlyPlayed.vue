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
    </div>
    <div>
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
//最近玩过
import GameRecord from '@/components/person/HobbyCom/GameRecord'

//收藏游戏
import GameCollect from '@/components/person/HobbyCom/GameCollect'
export default {
  name: 'MyHobby',
  props: {
    msg: String,
  },
  components: { GameRecord, GameCollect },
  data() {
    return {
      activeName: 'first',
      activeIndex: 0,
      activeComponent: GameRecord,
      label: [
        {
          label: '最近玩过',
          comp: GameRecord,
          name: 'first',
          activeIndex: 0,
        },
        {
          label: '收藏游戏',
          comp: GameCollect,
          name: 'second',
          activeIndex: 1,
        },
      ],
    }
  },

  methods: {
    changeComponent(value) {
      let comItem = this.label.filter((item) => {
        return item.name === value
      })

      this.activeIndex = comItem[0].activeIndex
      this.activeComponent = this.label[this.activeIndex].comp
    },
  },
}
</script>

<style lang="stylus">
.hobby {
  width: auto !important;
  display: flex;
  flex-flow: column;
  align-items: center;

  .jy-wrap--title {
    padding: 0px 0 15px 0 !important;
    position: relative;
    right: 38%;

    .hobby-nav {
      margin-top 30px
      .el-tabs__item {
        background-color: #FFFFFF;
        border: 1px solid #E9E9E9;
        border-radius: 25px;
        text-align: center;
        padding: 0 20px !important;
        line-height: 40px;
        margin-right: 20px;
        font-size: 14px;
      }

      .is-active {
        color: #3873FD;
        background-color: rgba(56, 115, 253, 0.12);
        border: 1px solid #3873FD;
      }
    }
  }
}

.jy-comment--gameshow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 1146px;
  padding: 0 20px;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 271px;
    height: 256px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius: 16px;

    & img {
      width: 271px;
      height: 172px;
      overflow: hidden;
      background: #D8D8D8;
      border-radius: 16px 16px 0px 0px;
    }
  }
}

.jy-gameshow--info {
  margin-left: 20px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
}

.jy-gameshow--title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #3C3B3B;
  line-height: 32px;
}

.jy-gameshoe--content {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
}
</style>
