<template>
  <div>
    <GameTag />
    <GameHistory @toGamePool="toGamePool" :vip="vipList"/>
  </div>
</template>

<script>
import GameTag from './game/GameTag.vue'
import GameHistory from './history/GameHistory.vue'

import Http from '@/request/http'


export default {
  name: 'VipGamePool',
  components: {
    GameTag,
    GameHistory,
  },
  data() {
    return {
      vipList: []
    }
  },
  created: async function () {
    try {
        let result = await Http({
            type: 'vipGamePool', 
        })
        this.vipList = result.data
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
