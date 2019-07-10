<template>
  <div>
    <div class="di">
      <div class="di1">
        <div>今日发布</div>
        <div>{{ sum1 }}</div>
        <i class="el-icon-check"></i>
      </div>
      <div class="di2">
        <div>原创文章</div>
        <div>{{ sum }}</div>
        <i class="el-icon-tickets"></i>
      </div>
      <div class="di3">
        <div>新留言</div>
        <div>0</div>
        <i class="el-icon-loading"></i>
      </div>
      <div class="di4">
        <div>新消息</div>
        <div>0</div>
        <i class="el-icon-chat-dot-round"></i>
      </div>
    </div>
    <div class="di5">
      <div class="di6">
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div class="di6">
        <ve-pie :data="chartDate" :settings="chartSettings"></ve-pie>
      </div>
    </div>
    <div>
      <ve-waterfall :data="chartDatb"></ve-waterfall>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tongji",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      arr: [],
      sum: "",
      sum1: "",
      chartData: {
        columns: ["type", "value"],
        rows: []
      },
      chartDate: {
        columns: ["type1", "value1"],
        rows: []
      },
      chartDatb: {
        columns: ["时间", "数量"],
        rows: []
      }
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.arr = res.data.data;
          let g = _.groupBy(this.arr, "category");
          let arr = [];
          let key = [];
          for (let k in g) {
            key.push(k);
            arr.push(g[k]);
          }
          for (let i = 0; i < key.length; i++) {
            this.chartData.rows.push({ type: key[i], value: arr[i].length });
          }
          let g1 = _.groupBy(this.arr, "source");
          let arr1 = [];
          let key1 = [];
          for (let k1 in g1) {
            key1.push(k1);
            arr1.push(g1[k1]);
          }
          for (let j = 0; j < key1.length; j++) {
            this.chartDate.rows.push({
              type1: key1[j],
              value1: arr1[j].length
            });
          }
          let g2 = _.groupBy(this.arr, "date");
          let arr2 = [];
          let key2 = [];
          for (let k2 in g2) {
            key2.push(k2);
            arr2.push(g2[k2]);
          }
          for (let s = 0; s < key2.length; s++) {
            this.chartDatb.rows.push({
              时间: key2[s].slice(0, key2[s].indexOf("日") + 1),
              数量: arr2[s].length
            });
          }
          let sum = 0;
          this.arr.map(item => {
            if (item.source === "原创") {
              sum++;
            }
            this.sum = sum;
          });
          let tiem = new Date();
          let y = tiem.getFullYear();
          let m = tiem.getMonth() + 1;
          let d = tiem.getDate();
          let tiem1 = y + "年" + m + "月" + d + "日";
          console.log(tiem1);
          let x = 0;
          this.arr.map(item => {
            let tiem2 = item.date.slice(0, item.date.indexOf("日") + 1);
            if (tiem1 === tiem2) {
              x++;
            }
            this.sum1 = x;
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.di {
  display: flex;
  margin-top: 60px;
  margin-right: 10px;
  width: 100%;
}
.di1 {
  text-align: center;
  background: pink;
  color: white;
  width: 25%;
  line-height: 30px;
}
.di2 {
  text-align: center;
  background: palevioletred;
  color: white;
  width: 25%;
  line-height: 30px;
}
.di3 {
  text-align: center;
  background: mediumpurple;
  color: white;
  width: 25%;
  line-height: 30px;
}
.di4 {
  text-align: center;
  background: lightseagreen;
  color: white;
  width: 25%;
  line-height: 30px;
}
.di5 {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.di6 {
  width: 750px;
}
</style>
