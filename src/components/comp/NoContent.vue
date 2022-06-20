<template>
  <div class="no-content">
    <img src="@/assets/img/no-content.png" alt="无内容" />
    <div class="no-content-text">暂无内容</div>
  </div>
</template>

<script>
export default {
  name: 'NoContent',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="stylus">
.no-content{
    text-align: center
    width: 350px
    height: 227px
    margin: 100px auto
    .no-content-text{
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #9297A5;
        line-height: 19px;
        margin-top: 9px
    }
}
</style>
