<template>
  <div>
    <HomePageBanner :swiper="swiperList" @toGamePool="toGamePool"/>
    <HomePageGame @toGamePool="toGamePool" :hot="hotList" :play="playList" :new="newlist" :highSort="highSortList" :hotSort="hotSortList"/>
    <HomePageRow @toGamePool="toGamePool" :row="rowList" />
    <HomePageColumn @toGamePool="toGamePool" :cloumn="cloumnList"/>
  </div>
</template>

<script>
import HomePageBanner from './homepage/HomePageBanner.vue'
import HomePageGame from './homepage/HomePageGame.vue'
import HomePageRow from './homepage/HomePageRow.vue'
import HomePageColumn from './homepage/HomePageColumn.vue'


import Http from '@/request/http'

export default {
  name: 'App',
  components: {
    HomePageBanner,
    HomePageGame,
    HomePageRow,
    HomePageColumn,
  },
  data() {
    return {
      swiperList: [], //swiper
      hotList: [],//热门推荐
      playList: [],  //火爆必玩
      newlist: [],  //新游戏榜
      highSortList: [], //高分榜
      hotSortList: [],  //热门榜
      rowList: [], //四列横排
      cloumnList: [], // 六列竖排
    }
  },
  created: async function (){
      try {
        let result = await Http({
            type: 'homePage', 
            data: {
              nav_name: '游戏首页', 
          }
        })
        //swiper
        const regexSipwer = new RegExp('导航区域');
        let dataSwiperList = result.data.list.filter((item) => {
          if(regexSipwer.test(item.layout)) {
            return item?.has_display_games
          }
        })
        this.swiperList = dataSwiperList[0]?.has_display_games?.slice(0, 5)
        console.log(this.swiperList)
        //热门游戏
        const regexHot = new RegExp('热门');
        let dataListHot = result.data.list.filter((item) => {
          if(regexHot.test(item.title)) {
            return item?.has_display_games
          }
        })
        this.hotList = dataListHot[0]?.has_display_games?.slice(0, 5)
        //火爆必玩
        const regexHotTip = new RegExp('飙升');
        let dataListHotTip = result.data.list.filter((item) => {
          if(regexHotTip.test(item.title)) {
            return item?.has_display_games
          }
        })
        this.playList = dataListHotTip[0]?.has_display_games?.slice(0, 9)
        //四列横排
        const regexRow = new RegExp('双列排列');
        let dataRowList = result.data.list.filter((item) => {
          if(regexRow.test(item.layout)) {
            return item?.has_display_games
          }
        })
        this.rowList = dataRowList[0]?.has_display_games?.slice(0, 4)

        //六列竖排
        const regexCloumn = new RegExp('最新活动');
        let dataCloumnList = result.data.list.filter((item) => {
          if(regexCloumn.test(item.title)) {
            return item?.has_display_games
          }
        })
        this.cloumnList = dataCloumnList[0]?.has_display_games?.slice(0, 12)
      } catch (error) {
        console.log(error)
      }
      try {
        //新游戏
        let resultNew = await Http({
            type: 'ranking', 
            data: {
              type: 2,
              debug: 1,
          }
        })
        this.newlist = resultNew.data.slice(0, 10)
        this.newlist.sort((a, b) => {
          return b.score - a.score
        })
        //热门榜
        let resultHot = await Http({
            type: 'ranking', 
            data: {
              type: 2,
              debug: 1,
          }
        })
        this.hotSortList = resultHot.data.slice(0, 10)
        //高分榜
        let resultHeigh = await Http({
            type: 'ranking', 
            data: {
              type: 2,
              debug: 1,
          }
        })
        this.highSortList = resultHeigh.data?.slice(0, 10)
      } catch (error) {
        console.log(error)
      }
  },
  methods: {
    toGamePool() {
      this.$router.push(`/gamePool`)
    }
  }
}
</script>

<style>
</style>
