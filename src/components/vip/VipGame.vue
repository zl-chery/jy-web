<template>
  <div class="jy-vip jy-bgc--gray">
    <div class="jy-mainwidth">
      <div class="jy-mainwidth">
        <div class="jy-wrap--title jy-vip--time">
          <p>会员不限时长</p>
          <div class="jy-time--info">
            <p>
              <span>{{date.day}}</span>天<span>{{date.hour | paddingLeft}}</span>:<span>{{date.minute | paddingLeft}}</span>:<span>{{date.second | paddingLeft}}</span>
            </p>
          </div>
        </div>
        <div>
          <ul class="jy-history--list jy-vip--nomargin">
            <li v-for="item in freeGame" :key="item.title">
              <a href="javascript:;" class="jy-historylist--info" @click="toGamePool(item.jump_id)">
                <img :src="item.img" alt="">
                <div class="jy-history--des">
                  <p class="jy-historydes--title">{{item.title}}</p>
                  <p class="jy-historydes--content">{{item.desc | queryString}}</p>
                </div>
              </a>
              <div  class="jy-history--rating">
                <p>{{item.score}}</p>
              </div>
            </li>
            <li v-for="item in freeGame.slice(0, 1)" :key="item.desc">
              <a href="javascript:;" class="jy-historylist--info" @click="toGamePool(item.jump_id)">
                <img :src="item.img" alt="">
                <div class="jy-history--des">
                  <p class="jy-historydes--title">{{item.title}}</p>
                  <p class="jy-historydes--content">{{item.desc | queryString}}</p>
                </div>
              </a>
              <div  class="jy-history--rating">
                <p>{{item.score}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="jy-wrap--title">
          <p>会员专享</p>
          <div class="jy-play--more">
            <a href="javascript:;">查看更多 ></a>
          </div>
        </div>
        <ul class="jy-history--list">
          <li v-for="item in onlyForVIP" :key="item.title">
            <a href="javascript:;" class="jy-historylist--info" @click="toGamePool(item.jump_id)">
              <img :src="item.img" alt="">
              <div class="jy-history--des">
                <p class="jy-historydes--title">{{item.title}}</p>
                <p class="jy-historydes--content">{{item.desc | queryString}}</p>
              </div>
            </a>
            <div  class="jy-history--rating">
              <p>{{item.score}}</p>
            </div>
          </li>
          <li v-for="item in onlyForVIP.slice(0, 7)" :key="item.desc">
            <a href="javascript:;" class="jy-historylist--info" @click="toGamePool(item.jump_id)">
              <img :src="item.img" alt="">
              <div class="jy-history--des">
                <p class="jy-historydes--title">{{item.title}}</p>
                <p class="jy-historydes--content">{{item.desc | queryString}}</p>
              </div>
            </a>
            <div  class="jy-history--rating">
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

import Http from '@/request/http';


export default {
  name: 'VipGame',
  props: {
    msg: String
  },
  watch: {
    date: {
      handler(new_value) {
        this.date = new_value
      },
      deep: true,
    }
  },
  data() {
    return {
      onlyForVIP: [], //会员专享
      freeGame: [],  //本周免费
      date: {
        day: '', //天
        hour: '', //时
        minute: '', //分
        second: '',  //秒
      },  //一周倒计时
    }
  },
  // components: {
  //   ButtonBorderGray
  // },
  mounted: async function () {
    try {
      let {data } = await Http({
        type: 'homePage', 
        data: {
          nav_name: '会员游戏',
        }
      })
      //会员专享
      const regexOnlyforVip = new RegExp('会员专享');
      let dataListOnlyforVip = data.list.filter((item) => {
        if(regexOnlyforVip.test(item.title)) {
          return item?.has_display_games
        }
      })
      this.onlyForVIP = dataListOnlyforVip[0]?.has_display_games
      //会员本周免
      const regexFree = new RegExp('本周会员免费游戏');
      let dataListFree = data.list.filter((item) => {
        if(regexFree.test(item.title)) {
          return item?.has_display_games
        }
      })
      this.freeGame = dataListFree[0]?.has_display_games
    } catch (error) {
      console.log(error)
    }
    //一周倒计时
    this.$nextTick(() => {
      setInterval( () => {
        let nowDate = +new Date()
        nowDate = nowDate % 604800 / 1000
        nowDate = 604800 - nowDate
        this.date.day = parseInt(nowDate / 60 / 60 / 24)
        this.date.hour = parseInt(nowDate / 60 / 60 % 24)
        this.date.minute = parseInt(nowDate / 60 % 60);
        this.date.second = parseInt(nowDate % 60);
      }, 1000)
    })
  },
  methods: {
    //跳转到游戏详情页
    toGamePool() {
      this.$router.push(`/gamePool`)
    }
  },
  filters: {
    queryString(value) {
      if (!value) return ''
      return `${value.substr(0, 14)}...`
    },
    paddingLeft(str) {
      return str[1] &&  String(str) || 0 + String(str)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.jy-play--more a:hover
  color #3873FD

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

.jy-vip--nomargin>li
  margin-bottom 0

.jy-vip--time
  display flex !important
  justify-content flex-start !important
  align-items center !important

.jy-time--info
  margin-left 21px
  &>p
    font-size: 20px;
    font-family: MicrosoftYaHei;
    text-align center
    color: #9297A5;
    line-height 40px
    &>span
      display inline-block
      margin  0 8px
      width: 40px;
      height: 40px;
      background: #DDE0E4;
      border-radius: 4px;
</style>
