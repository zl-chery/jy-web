<template>
  <div class="jy-assets">
    <ul class="jy-assets--all">
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
            <p class="jy-assets--coins">鲸钻 +5</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
    </ul>
    <div class="jy-pagination">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, sizes, jumper"
          :total="1000">
        </el-pagination>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'DiamondAssets',
  props: {
    msg: String,
  },
  components: {
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    }

  },
  watch:{
    // shareDialog(newVal){
    //   this.share = newVal
    // }
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

<style lang="stylus">

</style>