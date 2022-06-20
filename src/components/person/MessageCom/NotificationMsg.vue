<template>
  <div class="jy-assets">
    <ul class="jy-message--all">
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">真三国无双8：帝国+真三国无双7：帝国+真三国无双7：猛将传+真三国无双7+真三国无双6猛将传+无双大蛇Z中文版+真三国无双5 (1)</p>
          <div>
            <p class="jy-mssage--info">真·三国无双全系列专区  358来袭，史上最强割草！</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">幻想三国志5后日谈：兰晹篇+幻想三国志5</p>
          <div>
            <p class="jy-mssage--info">乐高星球大战：天行者传奇专题站丨精华索引丨下载</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">任务获取（签到）</p>
          <div>
            <p class="jy-mssage--info">乐高星球大战：天行者传奇专题站丨精华索引丨下载</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">真三国无双8：帝国+真三国无双7：帝国+真三国无双7：猛将传+真三国无双7+真三国无双6猛将传+无双大蛇Z中文版+真三国无双5 (1)</p>
          <div>
            <p class="jy-mssage--info">真·三国无双全系列专区  358来袭，史上最强割草！</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">乐高星球大战：天行者传奇 (13)</p>
          <div>
            <p class="jy-mssage--info">乐高星球大战：天行者传奇专题站丨精华索引丨下载</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">真三国无双8：帝国+真三国无双7：帝国+真三国无双7：猛将传+真三国无双7+真三国无双6猛将传+无双大蛇Z中文版+真三国无双5 (1)</p>
          <div>
            <p class="jy-mssage--info">真·三国无双全系列专区  358来袭，史上最强割草！</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">乐高星球大战：天行者传奇 (13)</p>
          <div>
            <p class="jy-mssage--info">乐高星球大战：天行者传奇专题站丨精华索引丨下载</p>
          </div>
        </div>
        <p class="jy-assets--time">2022-04-16</p>
      </li>
      <li>
        <div class="jy-mssage--task">
          <p class="jy-mssage--title">乐高星球大战：天行者传奇 (13)</p>
          <div>
            <p class="jy-mssage--info">乐高星球大战：天行者传奇专题站丨精华索引丨下载</p>
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
  name: 'NotificationMsg',
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