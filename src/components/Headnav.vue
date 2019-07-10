<template>
  <div class="dv">
    <p class="p">欢迎来到小爱后台管理系统</p>
    <p class="p1">{{ num1 }},亲爱的{{ name }},上次登录时间:{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "Headnav",
  components: {},
  props: {},
  data() {
    return {
      name: "",
      num1: "",
      time: ""
    };
  },
  methods: {
    num() {
      let time = new Date();
      let time1 = time.getHours();
      if (time1 >= 6 && time1 < 12) {
        this.num1 = "早上好";
      } else if (time1 >= 12 && time1 < 14) {
        this.num1 = "中午好";
      } else if (time1 >= 14 && time1 < 19) {
        this.num1 = "下午好";
      } else {
        this.num1 = "晚上好";
      }
    }
  },
  mounted() {
    this.name = localStorage.getItem("name");
    this.time = localStorage.getItem("time");
    this.num();
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
.p {
  color: white;
  font-size: 16px;
  margin-left: 20px;
}
.p1 {
  color: white;
  font-size: 16px;
  margin-right: 20px;
}
</style>
