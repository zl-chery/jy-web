/* eslint-disable no-constant-condition */
<template>
  <div class="jy-gamepool--sort">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="sort"
        label="排名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="avator"
        label="玩家信息"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="">
          <p>{{scope.row.name}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="time"
        label="游戏时长">
      </el-table-column>
      <el-table-column
        prop="lastTime"
        label="上次游玩">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button round class="button-foucs" @click="changeFoucs(scope.row.sort, $event)">{{scope.row.operation}}</el-button>
        </template>
      </el-table-column>
    </el-table>


    <!-- <ul class="jy-game--sort">
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">爱吃蛋饼的栗子</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验VIP</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort1.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Phoebe Bryan</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort2.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Marguerite McGuire</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort3.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Bradley Lindsey</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort4.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Bernice Butler</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort5.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Elijah Simpson</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort6.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Donald Carson</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort7.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Rodney Wolfe</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort8.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Gene Higgins</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort9.png" alt="">
    </li>
    <li>
      <img src="../../assets/img/head-user.png" alt="!">
      <div class="jy-gamesort--person">
        <p class="jy-gamesort--nickname">Hilda Cruz</p>
        <p class="jy-gamesort--time">游戏时长：24小时</p>
      </div>
      <div class="jy-gamesort--vip">
        <p>体验vip</p>
      </div>
      <img class="jy-gamesort--info" src="../../assets/img/game-sort10.png" alt="">
    </li>
  </ul> -->
  </div>
  
</template>

<script>
import Http from '@/request/http'
export default {
  name: 'GameSort',
  props: {
    msg: String
  },
  data() {
    return {
      tableData: []
    }
  },
  filters: {
    queryString(value) {
      if(!value) return ''
      return `${value.substr(0, 50)}...`
    }
  },
  methods: {
    changeFoucs(index, e) {
      this.$nextTick(() => {
        // 在 DOM 中删除 comment 组件
        // eslint-disable-next-line no-constant-condition
        if( this.tableData[index-1].operation === '关注'){
          this.tableData[index-1].operation = '已关注'
        }else{
          this.tableData[index-1].operation = '关注';
        }
        if(e.target.tagName.toLowerCase() === 'span'){
          e.target.parentElement.classList.toggle("button-hasfoucsed");
        }
        if(e.target.tagName.toLowerCase() === 'button') {
          e.target.classList.toggle("button-hasfoucsed");
        }
      });
    },
    //获取sort排名
    async getGameList() {
      let gid = this.$route.query.id
      try {
        let {data} = await Http({
          type: 'comment', 
            data: {
              game_id: gid,
          }
        })
        this.tableData = data.map((item) => {
          let operation = '关注'
          let { total_times, updated_at, has_user } = item
          return {
            time: total_times,
            lastTime: updated_at,
            name: has_user.nickname,
            img: has_user.headimg,
            operation,
          }
        })
        this.tableData = this.tableData.sort((a, b) => {
          return b.time - a.time
        }).slice(0, 10).map((item, index) => {
          return {
            ...item,
            sort: ++index
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    //展示评论回复
    showCommentRe(index) {
      this.commentList[index].isComment = !this.commentList[index].isComment
    },
  },
  mounted() {
    try {
      this.getGameList()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="stylus">
.jy-gamepool--sort
  width: 1460px;
  padding 30px 20px

//table hack
.jy-gamepool--sort
  & .el-table__header,
  & .el-table th
    height: 50px;
    background: rgba(239, 241, 245, 0.67);
    border-radius: 8px;
.jy-gamepool--sort
  & .el-table .cell
    overflow hidden
    text-align center
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #444343;
  & tbody tr
    height 100px
    &:hover
      background-color #fff

.jy-gamepool--sort .el-table__row td:nth-of-type(2) .cell
  display flex
  justify-content flex-start
  align-items center
  & img
    width 60px
    height 60px
    border-radius 50%
  & p
    margin-left 26px
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: #444343;

.jy-gamepool--sort .el-table__row td:nth-of-type(1) .cell
  height 100px
  font-size: 44px;
  line-height 100px
  font-family: SanFranciscoText-HeavyItalic, SanFranciscoText;
  font-weight: normal;
  color: #DEDEDE;

.jy-gamepool--sort .el-table__row:nth-of-type(1) td:nth-of-type(1) .cell
  color #FF6210

.jy-gamepool--sort .el-table__row:nth-of-type(2) td:nth-of-type(1) .cell
  color #F98D15

.jy-gamepool--sort .el-table__row:nth-of-type(3) td:nth-of-type(1) .cell
  color #FBBE6C

.jy-gamepool--sort .el-table__row td:nth-of-type(3) .cell,
.jy-gamepool--sort .el-table__row td:nth-of-type(4) .cell
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;

.button-foucs.is-round
  box-sizing border-box
  padding 8px 17px !important
  border-radius: 39px !important
  color #3873FD
  border: 1px solid #3873FD;
  cursor pointer
  &:hover
    color #3873FD
    background-color #fff

.button-hasfoucsed.button-foucs.is-round
  color #9297A5
  background: rgba(146, 151, 165, 0.13);
  border 1px solid transparent
  &:hover
    color #9297A5


.jy-game--sort
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  padding 20px
  background-color #fff
  & li
    position relative
    display flex
    justify-content flex-start
    align-items flex-start
    width 1460px
    padding 20px 0
    border-bottom 1px solid #D9D9D9;
    & img:first-child
      width 80px
      height 80px
      margin-right 20px

.jy-game--sort li:nth-of-type(1)::after
  content: ''
  background: url('../../assets/img/TOP1.png') no-repeat
  position absolute
  left 952px
  bottom 28px
  width 361px
  height 98px

.jy-game--sort li:nth-of-type(2)::after
  content: ''
  background: url('../../assets/img/TOP2.png') no-repeat
  position absolute
  left 988px
  bottom 18px
  width 341px
  height 89px

.jy-game--sort li:nth-of-type(3)::after
  content: ''
  background: url('../../assets/img/TOP3.png') no-repeat
  position absolute
  left 1014px
  bottom 22px
  width 320px
  height 84px

.jy-game--sort li:last-child
  border-bottom 0

.jy-gamesort--person
  margin-top 12px
.jy-gamesort--vip
  width: 63px
  height: 23px
  margin 20px 0 0 12px
  text-align center
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #fff
  background-image: linear-gradient(to right, #fad9a6, #ECB465) 
  line-height: 23px;
  border-radius 4px
  & p
    line-height 23px

li .jy-gamesort--info
  position absolute
  left 1280px
  bottom 50px
  width 83px
  height 30px

.jy-gamesort--nickname
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #444343;
  line-height 32px

.jy-gamesort--time
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #9297A5;
  line-height 28px
</style>