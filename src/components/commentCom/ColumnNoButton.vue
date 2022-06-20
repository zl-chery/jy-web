<template>
  <ul class="jy-comment--gameshow">
      <li>
        <img src="~@/assets/img/jy-logo.jpg" alt="">
        <div>
          <p class="jy-gameshow--title">龙珠Z</p>
          <p class="jy-gameshoe--content">这是一款以激烈的肉搏战为特色…</p>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'ColumnNoButton',
  props: {
    msg: String
  },
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 50)}...`
    }
  },
}
</script>

<style lang="stylus">
.jy-card.jy-gameshow li
  height 306px
  margin-bottom 20px

.jy-gameshow.jy-card
  height 1764px

.jy-card.jy-gameshow .jy-cardinfo
  height 222px
</style>