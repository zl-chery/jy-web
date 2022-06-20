<template>
  <div>
    <template v-if="total > 0">
      <ul class="jy-comment--gameshow">
        <li v-for="(item, index) in gameRecord" :key="index">
          <img :src="item.has_game.game_main_img" alt="图片" />
          <div class="jy-gameshow--info">
            <p class="jy-gameshow--title">{{ item.game_name }}</p>
            <p class="jy-gameshoe--content">{{ item.has_game.game_desc }}</p>
          </div>
        </li>
      </ul>
      <div class="jy-pagination" v-show="total > 0">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[12, 16, 24, 32]"
          :page-size="page_size"
          layout="total, prev, pager, next, sizes, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </template>
    <NoContent v-else />
  </div>
</template>

<script>
import Http from '@/request/http'
import NoContent from '@/components/comp/NoContent'
export default {
  name: 'GameRecord',
  data() {
    return {
      gameRecord: [],
      currentPage1: 1,
      total: 0,
      page_size: 12,
    }
  },
  components: {
    NoContent,
  },
  async mounted() {
    try {
      await Http({
        type: 'gameRecord',
        data: {
          user_token: this.$cookies.get('as_user_token'),
          limit: this.page_size,
        },
      }).then((res) => {
        // console.log(res)
        this.gameRecord = res.data.data
        this.total = res.data.total
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`)
      try {
        await Http({
          type: 'gameRecord',
          data: {
            user_token: this.$cookies.get('as_user_token'),
            limit: val,
            page: 1,
          },
        }).then((res) => {
          console.log(res)
          this.page_size = val
          this.gameRecord = res.data.data
          this.total = res.data.total
        })
      } catch (error) {
        console.log(error)
      }
    },
    async handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`)
      try {
        await Http({
          type: 'gameRecord',
          data: {
            user_token: this.$cookies.get('as_user_token'),
            limit: this.page_size,
            page: val,
          },
        }).then((res) => {
          console.log(res)
          this.gameRecord = res.data.data
          this.total = res.data.total
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped lang="stylus"></style>
