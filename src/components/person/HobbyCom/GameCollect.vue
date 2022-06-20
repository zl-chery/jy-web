<template>
  <div>
    <template v-if="total > 0">
      <ul class="jy-comment--gameshow">
        <li v-for="(item, index) in gameCollect[currentPage - 1]" :key="index">
          <img :src="item.has_game.game_main_img" alt="图片" />
          <div class="jy-gameshow--info">
            <p class="jy-gameshow--title">{{ item.game_name }}</p>
            <p class="jy-gameshoe--content">{{ item.has_game.game_desc }}</p>
          </div>
        </li>
      </ul>
      <div class="jy-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          :current-page.sync="currentPage"
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
  name: 'GameCollect',
  data() {
    return {
      gameCollectList: [],
      gameCollect: [],
      currentPage: 1,
      total: 0,
      page_size: 20,
    }
  },
  components: {
    NoContent,
  },
  created() {},
  async mounted() {
    try {
      await Http({
        type: 'gameCollect',
        data: {
          user_token: this.$cookies.get('as_user_token'),
          limit: this.page_size,
        },
      }).then((res) => {
        // console.log(res)
        this.gameCollectList = res.data
        this.gameCollect =
          res.data.length > 0 ? this.arrTrans(10, res.data) : [[]]
        this.total = res.data.length
        // this.gameCollect = res.data
        // this.total = res.data.length
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`)
      this.gameCollect = this.arrTrans(val, this.gameCollectList)
    },
    arrTrans(num, arr) {
      // 一维数组转换为二维数组
      const iconsArr = [] // 声明数组
      arr.forEach((item, index) => {
        const page = Math.floor(index / num) // 计算该元素为第几个素组内
        if (!iconsArr[page]) {
          // 判断是否存在
          iconsArr[page] = []
        }
        iconsArr[page].push(item)
      })
      return iconsArr
    },
  },
}
</script>

<style scoped lang="stylus"></style>
