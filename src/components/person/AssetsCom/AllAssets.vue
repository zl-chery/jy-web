<template>
  <div class="jy-assets">
    <template v-if="assetsList.length > 0">
      <ul class="jy-assets--all">
        <li v-for="item in list[currentPage1 - 1]" :key="item.id">
          <div class="jy-assets--task">
            <p class="jy-assets--title">{{ item.remark }}</p>
            <div>
              <img :src="img(item.coin_type)" alt="图标" />
              <p class="jy-assets--coins">
                {{ coin_type(item.coin_type) }}
                {{ type(item.type) }}{{ item.coins }}
              </p>
            </div>
          </div>
          <p class="jy-assets--time">{{ item.created_at }}</p>
        </li>
        <!-- <li>
        <div class="jy-assets--task">
          <p class="jy-assets--title">任务获取（签到）</p>
          <div>
            <img src="../../../assets/img/person-coins.png" alt="">
            <p class="jy-assets--coins">鲸钻 +5</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-assets--task">
          <p class="jy-assets--title">任务获取（签到）</p>
          <div>
            <img src="../../../assets/img/person-coins.png" alt="">
            <p class="jy-assets--coins">鲸币 +5</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-assets--task">
          <p class="jy-assets--title">任务获取（签到）</p>
          <div>
            <img src="../../../assets/img/person-coins.png" alt="">
            <p class="jy-assets--coins">鲸钻 +5</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-assets--task">
          <p class="jy-assets--title">任务获取（签到）</p>
          <div>
            <img src="../../../assets/img/person-coins.png" alt="">
            <p class="jy-assets--coins">鲸币 +5</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-assets--task">
          <p class="jy-assets--title">任务获取（签到）</p>
          <div>
            <img src="../../../assets/img/person-coins.png" alt="">
            <p class="jy-assets--coins">鲸币 +5</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li> -->
      </ul>
      <div class="jy-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[10, 15, 20, 30]"
          layout="total, prev, pager, next, sizes, jumper"
          :total="assetsList.length"
        >
        </el-pagination>
      </div>
    </template>

    <NoContent v-else />
  </div>
</template>

<script>
import NoContent from '@/components/comp/NoContent'
export default {
  name: 'AllAssets',
  props: {
    msg: String,
    assetsList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: { NoContent },
  data() {
    return {
      currentPage1: 1,
      page_size: 10,
    }
  },
  watch: {
    // shareDialog(newVal){
    //   this.share = newVal
    // }
  },
  computed: {
    list() {
      return this.assetsList.length > 0
        ? this.arrTrans(this.page_size, this.assetsList)
        : [[]]
    },
    img() {
      return (coin_type) =>
        coin_type == 1
          ? require('../../../assets/img/person-dia.png')
          : require('../../../assets/img/person-coins.png')
    },
    coin_type() {
      // return coin_type == 1 ? '鲸钻' : '鲸币'
      return (coin_type) => (coin_type == 1 ? '鲸钻' : '鲸币')
    },
    type() {
      // return type == 1 ? '+' : '-'
      return (type) => (type == 1 ? '+' : '-')
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.page_size = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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

<style lang="stylus"></style>
