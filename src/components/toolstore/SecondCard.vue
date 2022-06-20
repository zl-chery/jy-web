<template>
  <div class="jy-card--all">
    <ul class="jy-card--des">
      <li v-for="item in secondCardList" :key="item.id">
        <div class="jy-card--img">
          <img :src="item.img_url" alt="">
        </div>
        <div class="jy-card">
          <p class="jy-card--title">{{item.name}}</p>
          <p class="jy-card--infomation">{{item.desc | queryString}}</p>
          <p class="jy-card--tips">{{item.name}}进卡不增加云服务时长，时长不足时乃需要购买加时卡。</p>
          <div class="jy-card--num">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <p><span>{{item.price}}</span>鲸钻</p>
          </div>
        </div>
        <div class="jy-card--shopping">
          <el-button class="button-shopping" type="primary" round @click="toShow(item, index)">立即购买</el-button>
          <!-- <SecondCardPayVue :dialogVisible="dialogVisible" @closeDialog="closeDialog"/> -->
           <CardPayVue :item="content" :dialogVisible="dialogVisible" @changeVisable="changeVisable"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CardPayVue from './cardPay/CardPay.vue';
import Http from '@/request/http';
export default {
  name: 'SecondCard',
  props: {
    msg: String
  },
  components: {
    CardPayVue
  },
  data() {
    return {
      num: 1,
      dialogVisible: false,  //dialog
      secondCardList: [], // 卡片
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleChange(value) {
      // console.log(value);
    },
    //dialog
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        })
        .catch(() => {});
    },
    async getSecondCard() {
      //秒进卡
      try {
        let {data} = await Http({
          type: 'cardList', 
          data: {
            type: 1
          }
        })
        this.secondCardList = data.list
      } catch (error) {
        console.log(error)
      }
    },
    toShow(content, index) {
      this.dialogVisible = true
      // this.$set(item, 'dialogVisible', true)
      this.content = content
      this.allCardList[index].dialogVisible = true
    },
    //关闭dialog
    changeVisable(index) {
      this.dialogVisible = false
      this.allCardList[index].dialogVisible = false
    }
  },
  mounted() {
    this.getSecondCard()
    // this.getVipCard()
    // console.log(this.cardList, 'cardList')
  },
  filters: {
    queryString(value) {
      if (!value) return ''
        return `${value.split('。')[0]}。`
    },
  },

}
</script>

<style lang="stylus">
.jy-toolpay--content.jy-card--second
  margin-top 25%
</style>
