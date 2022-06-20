<template>
  <div class="jy-game jy-bgc--gray game-history">
    <div class="jy-mainwidth">
      <div class="jy-gameinfo--title">
        <p class="jy-game--total">共<a href="javascript:;">{{vipList.length}}</a>款游戏</p>
        <div class="jy-game--sort">
          <div>
            <label for="gamesort">排序：</label>
            <el-select
              id="gamesort"
              v-model="value"
              filterable
              placeholder="默认排序"
              @change="getData(value)"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                class="element-input"
              >
              </el-option>
            </el-select>
          </div>
          <div class="jy-gameshow--icon">
            <p class="jy-game--show">展示:</p>
            <img class="jy-game--show" src="~@/assets/img/game-search-active.png" alt="">
            <img class="jy-game--show" src="~@/assets/img/game-search-icon.png" alt="">
          </div>
        </div>
      </div>
      <div class="jy-gamehistory--content">
        <ul class="jy-history--list">
          <li v-for="item in vipList" :key="item.id" @click="toGamePool(item.jump_id)">
            <a href="javascript:;" class="jy-historylist--info">
              <img :src="item.game_icon" alt="" />
              <div class="jy-history--des">
                <p class="jy-historydes--title">{{item.game_name}}</p>
                <p class="jy-historydes--content">
                  {{item.game_desc | queryString}}
                </p>
              </div>
            </a>
            <div class="jy-history--rating">
              <p>{{item.score}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import ButtonBorderGray from '../button/ButtonBorderGray.vue'
// import Http from '@/request/http'
export default {
  name: 'GameHistory',
  props: {
    msg: String,
    vip: Array
  },
  watch: {
    vip:{
      handler(new_value) {
        this.vipList = new_value
      },
      deep: true,
    },
  },
  data() {
    return {
      vipList: this.vip,  //vip游戏库
      options: [
        {
          value: '选项1',
          label: '默认排序',
        },
        {
          value: '选项2',
          label: '按游戏热度',
        },
        {
          value: '选项3',
          label: '按上线时间',
        },
        {
          value: '选项4',
          label: '按游戏评分',
        },
      ],
      value: '',
      buttonContent: [
        {
          value: '开放世界',
        },
        {
          value: '单机',
        },
        {
          value: '多人联机',
        },
      ],
    }
  },
  filters: {
    queryString(value) {
      if (!value) return ''
      return `${value.substr(0, 14)}...`
    },
  },
  methods: {
    //跳转到游戏详情页
    toGamePool() {
      this.$emit('toGamePool')
    },
    //排序
    getData(param) {
      let sortWord = this.options.filters((value, label) => {
        if(param  === value) {
          return label
        } 
      })
      console.log(sortWord)
      //todu  sortWord是排序的方式
      // async function getSortData () {
      //   try {
      //     let result = await Http({
      //       type: '',
      //     })
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.jy-gameshow--icon
  display flex
  justify-content space-between
  align-items center
  & img
    margin-left 8px

.el-select-dropdown__item.selected
  color #3873fd

.jy-game--sort
  & .el-input__inner
    border none
  & label,
  & .jy-game--show
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #444343;

.jy-gameinfo--title
  &>p
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #444343;
    &>a
      color #3873FD

.game-history
  & .jy-game--sort
    flex-flow:wrap
    background:none
    div:first-child
      margin-right:30px
.jy-bgc--gray
  background-color #EFF1F5

.jy-gameinfo--title
  display flex
  justify-content: space-between
  align-items: center

.jy-history--list
  display flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  &>li
    position relative
    margin-bottom 20px
    width 284px
    height 264px
    overflow: hidden
    background-color #fff
    border-radius 16px

.jy-historylist--info
  position relative
  width 284px
  height 264px
  cursor pointer
  &>img
    width 284px
    height 180px

.jy-history--des
  box-sizing border-box
  padding-left 20px
  width 284px
  height 84px

.jy-historydes--title
  margin-top 18px
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #3C3B3B;
  letter-spacing: 1px;

.jy-historydes--content
  margin-top 8px
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  letter-spacing: 1px;

.jy-history--rating
  box-sizing border-box
  position absolute
  right 0
  bottom 56px
  width 55px
  height 28px
  padding-right 6px
  text-align: center
  font-size: 20px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 28px;
  background linear-gradient(#febb36, #fd7607)
  & p
    padding-left 15px
  &::after
    content ''
    position absolute
    top 2px
    left -14px
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 26px solid #fff;
</style>
