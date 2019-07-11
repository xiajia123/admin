<template>
  <div class="dv5">
    <div class="dv6">
      <el-card>
        <div class="dv7">欢迎来到小爱后台管理系统</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
        >
          <el-form-item label="请输入用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
        <div class="dv8">
          <el-button :plain="true" type="primary" @click="clic"
            >立即注册</el-button
          >
          <el-button type="primary" @click="clic1" plain>立即登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    return {
      obj: "",
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    clic() {
      let reg = new RegExp(/[\u4E00-\u9FA5]/);
      if (this.ruleForm.name.match(reg)) {
        this.$message({
          message: "用户名不能为中文",
          type: "error"
        });
        this.ruleForm.name = "";
        this.ruleForm.password = "";
      }
      this.$axios
        .req("api/user/register", {
          username: this.ruleForm.name,
          password: this.ruleForm.password
        })
        .then(res => {
          this.obj = res.data;
          console.log(res.data);
          if (this.obj.code === 1) {
            this.$message({
              message: this.obj.message,
              type: "error"
            });
          } else if (this.obj.code === 200) {
            this.$router.push("/signin");
            this.$message({
              message: this.obj.message,
              type: "success"
            });
          } else {
            this.$message({
              message: this.obj.message,
              type: "error"
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    clic1() {
      this.$router.push("/signin");
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

<style scoped>
.dv5 {
  background-image: url("../assets/bg.png");
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.dv6 {
  width: 500px;
  margin: 300px auto;
  text-align: center;
}
.dv7 {
  border-bottom: pink solid 1px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.dv8 {
  display: flex;
  justify-content: space-around;
}
</style>
