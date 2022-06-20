<template>
  <div class="jy-game jy-bgc--gray">
    <el-button round class="button-gray">开放世界</el-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBorderGray',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.button-gray.is-round
  padding 7px 15px !important
  border-radius: 17px !important
  color: #9297A5;
</style>
