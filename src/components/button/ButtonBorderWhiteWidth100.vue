<template>
  <el-button round class="button-width100">休闲</el-button>
</template>

<script>
export default {
  name: 'ButtonBorderWhiteWidth100',
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.button-width60.is-round
  padding 7px 21px  !important
  border-radius: 17px !important
  color: #9297A5;
  border 1px solid #fff
  &:hover
    border 1px solid #3873FD
</style>
