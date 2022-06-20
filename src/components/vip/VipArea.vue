<template>
  <div class="jy-vip--banner">

  </div>
</template>

<script>
// import ButtonBorderGray from '../button/ButtonBorderGray.vue'


export default {
  name: 'VipArea',
  props: {
    msg: String
  },
//   components: {
//     ButtonBorderGray
// },
  mounted() {
    this.getList();
  },
  methods:{
    getList() {

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.jy-vip--banner
  width 100%
  height 429px
  background: url('../../assets/img/vip-bgc.png')
</style>
