<template>
  <div>
    <VipArea />
    <VipGame />
  </div>
</template>

<script>
import VipArea from './vip/VipArea.vue'
import VipGame from './vip/VipGame.vue'

export default {
  name: 'App',
  components: {
    VipArea,
    VipGame
  }
}
</script>

<style>
</style>
