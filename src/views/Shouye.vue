<template>
  <div>
    <div class="dv">
      <el-card class="box-card">
        <div class="text item">
          <img src="../assets/用户.svg" class="img" />
          <div>
            <div>New Visits</div>
            <div>
              <countTo
                :startVal="startVal"
                :endVal="obj.visits"
                :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          <img src="../assets/信息.svg" class="img" />
          <div>
            <div>Messages</div>
            <div>
              <countTo
                :startVal="startVal"
                :endVal="obj.messages"
                :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          <img src="../assets/钱.svg" class="img" />
          <div>
            <div>Purchases</div>
            <div>
              <countTo
                :startVal="startVal"
                :endVal="obj.purchases"
                :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          <img src="../assets/购物车.svg" class="img" />
          <div>
            <div>Shoppings</div>
            <div>
              <countTo
                :startVal="startVal"
                :endVal="obj.shopping"
                :duration="3000"
              ></countTo>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <el-card class="box">
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </el-card>
    <div class="box1">
      <el-card class="box3">
        <div class="box2"><ve-radar :data="radarData"></ve-radar></div>
      </el-card>
      <el-card class="box3">
        <div class="box2">
          <ve-pie :data="cakeData" :settings="chartSettings"></ve-pie>
        </div>
      </el-card>
      <el-card class="box3">
        <div class="box2">
          <ve-histogram
            :data="columnData"
            :settings="chartSettings"
          ></ve-histogram>
        </div>
      </el-card>
    </div>
    <div class="box4">
      <el-card class="dv2">
        <el-table :data="arr">
          <el-table-column
            prop="num"
            label="Order_No"
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column label="price" header-align="center" align="center">
            <template slot-scope="scope">
              ￥{{ scope.row.price }}
            </template>
          </el-table-column>
          <el-table-column label="Status" header-align="center" align="center">
            <template slot-scope="arr">
              <el-tag
                :type="
                  arr.row.status == 0
                    ? (arr.status = 'pending')
                    : (arr.status = 'success')
                "
                >{{ arr.status }}</el-tag
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-card>
        <img
          src=" https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
          class="img2"
        />
        <div class="dv3" v-for="(item, index) in list" :key="index">
          <p>{{ item.name }}</p>
          <el-progress
            :percentage="item.progress * 100"
            status="success"
            v-if="item.progress === 1.0"
          ></el-progress>
          <el-progress :percentage="item.progress * 100" v-else></el-progress>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "Shouye",
  components: {
    countTo
  },
  props: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      obj: {},
      startVal: 0,
      arr: [],
      list: [],
      // 折线图
      chartData: {
        columns: ["date", "actual", "expected"],
        rows: []
      },
      // 雷达图
      radarData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "marketing",
          "delelopmer"
        ],
        rows: []
      },
      // 饼图
      cakeData: {
        columns: ["name", "data"],
        rows: []
      },
      // 柱状图
      columnData: {
        columns: ["date", "expected", "actual"],
        rows: []
      }
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/homeData")
        .then(res => {
          this.obj = res.data.data;
          // console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 折线图
    getChit() {
      this.$axios
        .req("api/homeChat")
        .then(res => {
          this.columnData.rows = res.data.data;
          this.chartData.rows = res.data.data;
          // console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 雷达图
    radar() {
      this.$axios
        .req("api/radarChat")
        .then(res => {
          this.radarData.rows = res.data.data;
          // console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 饼图
    cake() {
      this.$axios
        .req("api/ringChat")
        .then(res => {
          this.cakeData.rows = res.data.data;
          // console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 订单
    Order() {
      this.$axios
        .req("api/orderData")
        .then(res => {
          this.arr = res.data.data;
          // console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 进度条
    enter() {
      this.$axios
        .req("api/progress")
        .then(res => {
          this.list = res.data.data;
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getData();
    this.getChit();
    this.radar();
    this.cake();
    this.Order();
    this.enter();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.dv {
  display: flex;
  justify-content: space-between;
}
.text {
  width: 350px;
  height: 80px;
  display: flex;
  justify-content: space-between;
}
.img {
  width: 60px;
  height: 50px;
}
.img2 {
  width: 500px;
  height: 300px;
}
.box {
  margin-top: 20px;
}
.box1 {
  display: flex;
  justify-content: space-between;
}
.box2 {
  width: 500px;
}
.box3 {
  margin-top: 20px;
}
.box4 {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.box-card {
  margin-top: 60px;
}
.dv2 {
  width: 1135px;
}
.dv3 {
  margin: 20px 0;
}
</style>
