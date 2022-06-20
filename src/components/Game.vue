<template>
  <div>
    <GameTag />
    <GameInfo />
  </div>
</template>

<script>
import GameTag from './game/GameTag.vue'
import GameInfo from './game/GameInfo.vue'

export default {
  name: 'App',
  components: {
    GameTag,
    GameInfo,
  }
}
</script>

<style>
</style>
