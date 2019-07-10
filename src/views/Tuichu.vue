<template>
  <div class="dv4">
    <h3>期待你的下次光临</h3>
    <el-button type="primary" @click="clic">确认退出</el-button>
  </div>
</template>

<script>
export default {
  name: "Tuichu",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    clic() {
      this.$router.push("/");
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
.dv4 {
  margin-top: 200px;
  text-align: center;
}
</style>
