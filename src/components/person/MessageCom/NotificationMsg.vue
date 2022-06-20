<template>
  <div class="jy-assets">
    <template v-if="msgList.length > 0">
      <ul class="jy-message--all">
        <li v-for="item in list[currentPage1 - 1]" :key="item.id">
          <div class="jy-mssage--task">
            <p class="jy-mssage--title">
              {{ item.data.title }}
            </p>
            <div>
              <p class="jy-mssage--info">
                {{ item.data.desc }}
              </p>
            </div>
          </div>
          <p class="jy-assets--time">{{ item.created_at }}</p>
        </li>
        <!-- <li>
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
      </li> -->
      </ul>
      <div class="jy-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[10, 15, 20, 30]"
          :page-size="page_size"
          layout="total, prev, pager, next, sizes, jumper"
          :total="msgList.length"
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
  name: 'NotificationMsg',
  props: {
    msgList: {
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
      return this.msgList.length > 0
        ? this.arrTrans(this.page_size, this.msgList)
        : [[]]
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
