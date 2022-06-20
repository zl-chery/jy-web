<template>

    <div>
        <el-dialog :visible.sync="showGameArchive" :before-close="closeDialog" width="50%" custom-class="dialog">
            <div class="jy-joinhome-dialog">
                <div class="jy-carduse--title">
                    <img src="../../../assets/img/toolpay-cancel.png" alt="取消" @click="closeDialog">
                </div>
                <div class="jy-carduse-content">
                    <div class="original-game-archive" v-for="index in 3" :key="index" @click="itemActive(index)">
                        <div class="jy-carduse--text">
                            <div>
                                <div class="title " :class="{ 'jy-carduse--text-active': index === currentIndex }">原创存档
                                </div>
                                <el-button type="info" round>默认</el-button>
                                <el-button type="warning" plain>使用中</el-button>
                            </div>
                            <div v-show="index !== currentIndex">
                                <a href="#">设为默认</a>
                                <i class="el-icon-delete"></i>
                            </div>
                        </div>
                        <div class="game-archive-list" v-show="index === currentIndex">
                            <div class="game-archive" v-for="(item, index) in 6" :key="index">
                                <div class="label">自动</div>
                                <div class="time">2022-06-08 15:00:00</div>
                                <div class="operation">
                                    <el-button type="text">加载</el-button>
                                    <el-button type="text" @click="transactionDialog = true">寄售</el-button>
                                    <el-button type="text" @click="editDialog = true">编辑</el-button>
                                    <el-button type="text" @click="deleteDialog = true">删除</el-button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- <div class="original-game-archive ">
                        <div class="jy-carduse--text">
                            <div>
                                <div class="title">完美通关存档</div>
                                <el-button type="success" round>已购</el-button>
                            </div>
                            <div>
                                <a href="#">设为默认</a>
                                <i class="el-icon-delete"></i>
                            </div>
                        </div>
                    </div>
                    <div class="original-game-archive ">
                        <div class="jy-carduse--text">
                            <div>
                                <div class="title">完美通关存档</div>
                                <el-button type="success" round>已购</el-button>
                            </div>
                            <div>
                                <a href="#">设为默认</a>
                                <i class="el-icon-delete"></i>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- 删除存档弹窗 -->
            <el-dialog :visible.sync="deleteDialog" width="20%"  append-to-body>
                <div class="jy-joinhome-dialog">
                    <div class="jy-carduse--title small-dialog">
                        <p class="jy-carduse--pay">温馨提示</p>
                        <img src="../../../assets/img/toolpay-cancel.png" alt="取消" @click="deleteDialog = false">
                    </div>
                    <p>您确定删除当前存档吗？</p>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button class="dialog-button-carduse" @click="deleteDialog = false">取 消</el-button>
                    <el-button class="dialog-button-carduse" type="primary" @click="deleteDialog = false">确 定
                    </el-button>
                </span>
            </el-dialog>
            <!-- 寄售弹窗 -->
            <el-dialog :visible.sync="transactionDialog" width="20%"  append-to-body>
                <div class="jy-joinhome-dialog">
                    <div class="jy-carduse--title small-dialog">
                        <p class="jy-carduse--pay">温馨提示</p>
                        <img src="../../../assets/img/toolpay-cancel.png" alt="取消" @click="transactionDialog = false">
                    </div>
                    <p>您确定寄售当前存档吗？</p>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button class="dialog-button-carduse" @click="transactionDialog = false">取 消</el-button>
                    <el-button class="dialog-button-carduse" type="primary" @click="transactionDialog = false">确 定
                    </el-button>
                </span>
            </el-dialog>
            <!-- 编辑存档弹窗 -->
            <el-dialog :visible.sync="editDialog" width="20%" append-to-body>
                <div class="jy-joinhome-dialog">
                    <div class="jy-carduse--title small-dialog">
                        <p class="jy-carduse--pay">出售存档</p>
                        <img src="../../../assets/img/toolpay-cancel.png" alt="取消" @click="editDialog = false">
                    </div>
                    <form>
                        <div>
                            <label for="">存档名</label>
                            <el-input v-model="transactionData.name" placeholder="存档名"></el-input>
                        </div>
                        <div>
                            <label for="">存档描述</label>
                            <el-input v-model="transactionData.desc" placeholder="存档描述"></el-input>
                        </div>
                        <div>
                            <label for="">存档定价</label>
                            <el-select v-model="transactionData.type" placeholder="自定义">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input v-model="transactionData.price" placeholder="自定义价格，最低10鲸钻"></el-input>
                        </div>
                    </form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button class="dialog-button-carduse" @click="editDialog = false">取 消</el-button>
                    <el-button class="dialog-button-carduse" type="primary" @click="editDialog = false">确 定
                    </el-button>
                </span>
            </el-dialog>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "GameArchive",
  props: {
    showDialog: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      showGameArchive: this.showDialog,
      deleteDialog: false,
      transactionDialog: false,
      editDialog: false,
      currentIndex: 1,
      transactionData: {
        name: "",
        desc: "",
        type: "自定义",
        price: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  watch: {
    showDialog(newVal) {
      this.showGameArchive = newVal;
    }
  },
  mounted() {},
  methods: {
    //dialog
    closeDialog() {
      this.showGameArchive = false;
      this.$emit("closeDialog");
    },
    itemActive(index) {
      this.currentIndex = index;
      //   this.$emit('tabClick', index)
    }
  }
};
</script>

<style scoped lang="stylus">
.dialog {
    border-radius: 10px;
}

.jy-joinhome-dialog {
    padding: 20px 15px;

    .jy-carduse--title {
        justify-content: right;
    }

    .small-dialog {
        justify-content: space-between;
    }

    .jy-carduse-content {
        .original-game-archive {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 20px;

            &:first-child {
                margin-top: 0;
            }

            .jy-carduse--text {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 5px;

                >div {
                    display: flex;
                    align-items: center;
                }

                &:hover {
                    background-color: #F2F6FC;
                }
            }

            .jy-carduse--text-active {
                font-size: 16px;
                font-weight: 600;
                border-left: 3px solid #409eff;
                padding-left: 5px;
            }

            .game-archive-list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: 15px;
            }

            .game-archive {
                position: relative;
                width: 46%;
                padding: 15px;
                margin-bottom: 2%;
                background-color: #e4e7ed;
                display: flex;
                justify-content: space-between;
                border-radius: 8px;

                .label {
                    position: absolute;
                    left: 0;
                    top: -10px;
                    padding: 1px 5px;
                    border-top-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    background-color: rgb(252, 170, 91);
                    color: #ffffff;
                    font-size: 12px;
                }

                &:nth-last-child(-n + 2) {
                    margin: 0;
                }
            }

            .operation {
                button {
                    color: rgb(252, 170, 91);
                    padding: 0;
                    margin-left: 15px;
                }

                button:last-child {
                    color: red;
                }
            }

            > div > a {
                margin-right: 5px;
            }
        }
    }

    button {
        margin-left: 10px;
        padding: 5px 10px;
        font-size: 12px;
    }

    form {
        margin-top: 12px;

        div {
            margin-top: 8px;
        }
    }
}

.determine {
    position: fixed;
    height: auto !important;
}
</style>
