<template>
  <div>
    <GameTag @getgametag="getGameTag" :tag="tagList"/>
    <GameInfo :vip="vipList" />
  </div>
</template>

<script>
import GameTag from './game/GameTag.vue'
import GameInfo from './game/GameInfo.vue'

import Http from '@/request/http'

export default {
  name: 'HomePageGamePool',
  components: {
    GameTag,
    GameInfo,
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
      this.getGameInfo(value)
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
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
