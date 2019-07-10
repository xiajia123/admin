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
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <div class="dv8">
            <el-form-item label="请输入验证码" prop="proving" class="el">
              <el-input v-model="ruleForm.proving"></el-input>
            </el-form-item>
            <div v-html="obj" @click="cli"></div>
          </div>
        </el-form>
        <div class="dv8">
          <el-button type="primary" @click="clickItem">立即注册</el-button>
          <el-button type="primary" @click="cli1">立即登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  components: {},
  props: {},
  data() {
    return {
      obj: "",
      obj1: "",
      ruleForm: {
        name: "",
        password: "",
        proving: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        proving: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, message: "长度 4 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/captcha")
        .then(res => {
          if (res) {
            this.obj = res.data;
          }
          // console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    cli() {
      this.getData();
    },
    clickItem() {
      this.$router.push("/register");
    },
    cli1() {
      this.$axios
        .req("api/user/login", {
          username: this.ruleForm.name,
          password: this.ruleForm.password,
          code: this.ruleForm.proving
        })
        .then(res => {
          this.obj1 = res.data;
          console.log(res.data);
          if (
            this.ruleForm.name.length > 2 &&
            this.ruleForm.password.length > 5 &&
            this.ruleForm.proving.length > 3 &&
            this.ruleForm.length !== 0
          ) {
            if (this.obj1.code === 500) {
              this.$message({
                message: "用户名或密码错误",
                type: "error"
              });
            } else if (this.obj1.code === 1) {
              this.$message({
                message: this.obj1.message,
                type: "error"
              });
            } else {
              this.$router.push("/home");
              this.$message({
                message: "登录成功",
                type: "success"
              });
              localStorage.setItem("name", this.ruleForm.name);
              let tiem = new Date();
              let year = tiem.getFullYear();
              let date = tiem.getMonth() + 1;
              let day = tiem.getDate();
              let hours = tiem.getHours();
              let min = tiem.getMinutes();
              let miao = tiem.getSeconds();
              localStorage.setItem(
                "time",
                year +
                  "年" +
                  date +
                  "月" +
                  day +
                  "日" +
                  "" +
                  hours +
                  "时" +
                  min +
                  "分" +
                  miao +
                  "秒"
              );
            }
          }
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
.el {
  width: 300px;
}
</style>
