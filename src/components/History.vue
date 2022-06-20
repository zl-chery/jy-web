<template>
  <div>
    <GameTag @getgametag="getGameTag" :tag="tagList"/>
    <GameHistory :vip="vipList"/>
  </div>
</template>

<script>
import GameTag from './history/GameTag.vue'

import GameHistory from './history/GameHistory.vue'

import Http from '@/request/http'


export default {
  name: 'GameHistoryInfo',
  components: {
    GameTag,
    GameHistory,
  },
  data() {
    return {
      vipList: [], //游戏库
      tagList: [], //标签
    }
  },
  created() {
    this.getGameInfo()
  },
  methods: {
    getGameTag(value) {
      console.log(value, 11111111111)
    },
    //获取游戏标签，游戏信息
    async getGameInfo(label_name) {
      try {
        let result = await Http({
            type: 'gamePool', 
            data: {
              label_name: label_name
            }
        })
        let {data} = await Http({
          type: 'tagList', 
        })
        //标签
        this.tagList = data
        this.vipList = result.data
        console.log(111111111111)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
