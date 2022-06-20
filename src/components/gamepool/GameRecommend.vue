<template>
  <div>
    <ul class="jy-card jy-gameshow--rec">
      <li v-for="item in gameList" :key="item.id">
        <router-link :to="{path: '/gamePool', query: {id: item.id}}">
          <div class="jy-cardinfo">
            <img :src="item.game_main_img" alt="!">
          </div>
          <div class="jy-cardGame--des">
            <div class="jy-card--title">
              <p>{{item.game_name}}</p>
              <p>永久使用,永久使用永久使用,永...</p>
            </div>
          </div>
          <div v-show="item.is_vip === 2" class="jy-home--num">
            <p>会员专享</p>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <component :is="activeComponent"></component> -->
  </div>
  
</template>

<script>
// import GameCommentVue from './GameComment.vue'
import Http from '@/request/http'

export default {
  name: 'GameRecommend',
  props: {
    msg: String
  },
  components:{
    // GameCommentVue
  },
  data(){
    return {
      gameList: [],  //推荐游戏列表
      //  activeComponent: GameCommentVue,
    }
  },
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 50)}...`
    }
  },
  methods: {
    //获取相似游戏推荐
    async getGameSimilar() {
      let gid = this.$route.query.id
      try {
        let {data} = await Http({
          type: 'gameSimilar',
          data: {
            game_id: gid,
            game_number: 5
          }
          
        })
        this.gameList = data
      } catch (error) {
        console.log(error)
      }
    },
    toGamePool(id) {
      this.$router.push({
        name:'gamePool',
        params:{id:id}
      })
      console.log(id)
    }
  },
  mounted() {
    this.getGameSimilar()
  }
}
</script>
<style lang="stylus">
.jy-card.jy-gameshow--rec
  flex-direction row
  width 1460px
  height 293px
  margin 0 20px
.jy-card.jy-gameshow--rec li
  position relative
  width 276px
  height 253px
  cursor pointer

.jy-card.jy-gameshow--rec .jy-cardinfo
  width 276px
  height 69%
  & img
    width 100%
    height 100%

.jy-card.jy-gameshow--rec  .jy-cardGame--des
  width 276px
  height 78px
</style>