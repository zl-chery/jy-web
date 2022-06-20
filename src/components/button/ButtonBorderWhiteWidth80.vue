<template>
  <el-button round class="button-width60">休闲</el-button>
</template>

<script>
export default {
  name: 'ButtonBorderWhiteWidth80',
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.button-width60.is-round
  padding 7px 15px  !important
  border-radius: 17px !important
  color: #9297A5;
  border 1px solid #fff
  &:hover
    border 1px solid #3873FD
</style>
