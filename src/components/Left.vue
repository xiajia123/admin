<template>
  <div class="nav">
    <el-menu
      style="height: 100%"
      default-active="1"
      background-color="#344055"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="one">
        <i class="el-icon-loading"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="two">
        <i class="el-icon-menu"></i>
        <span slot="title">已发布</span>
      </el-menu-item>
      <el-menu-item index="3" @click="three">
        <i class="el-icon-menu"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="4" @click="four">
        <i class="el-icon-check"></i>
        <span slot="title">发表文章</span>
      </el-menu-item>
      <el-menu-item index="5" @click="five">
        <i class="el-icon-setting"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
      <el-menu-item index="6" @click="six">
        <i class="el-icon-setting"></i>
        <span slot="title">导出excel</span>
      </el-menu-item>
      <el-menu-item index="7" @click="seven">
        <i class="el-icon-setting"></i>
        <span slot="title">图片上传</span>
      </el-menu-item>
      <el-menu-item index="8" @click="eight">
        <i class="el-icon-delete"></i>
        <span slot="title">退出系统</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Left",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    one() {
      this.$router.push("/home");
    },
    two() {
      this.$router.push("/fabu");
    },
    three() {
      this.$router.push("/tongji");
    },
    four() {
      this.$router.push("/fabiao");
    },
    five() {
      this.$router.push("/biaoqian");
    },
    six() {
      this.$router.push("/daochu");
    },
    seven() {
      this.$router.push("/tupian");
    },
    eight() {
      this.$router.push("/tuichu");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  top: 60px;
  width: 200px;
}
</style>
