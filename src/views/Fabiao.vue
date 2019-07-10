<template>
  <div>
    <div class="box6">
      <div class="box7">
        <el-button type="danger">查看</el-button>
        <el-button type="primary" @click="cli">发布</el-button>
      </div>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="name" style="margin-top: 20px">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="name">
        <el-input v-model="ruleForm.region"></el-input>
      </el-form-item>
    </el-form>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo"
    >
      <el-form-item label="作者" prop="name">
        <el-input v-model="ruleForm.date1" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="类目" prop="name">
        <el-select v-model="ruleForm.date2" placeholder="请选择">
          <el-option label="Vue" value="Vue"></el-option>
          <el-option label="React" value="React"></el-option>
          <el-option label="Node.js" value="Node.js"></el-option>
          <el-option label="性能优化" value="性能优化"></el-option>
          <el-option label="javaScript" value="javaScript"></el-option>
          <el-option label="小程序" value="小程序"></el-option>
          <el-option label="工具类" value="工具类"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源" prop="name">
        <el-select v-model="ruleForm.date3" placeholder="请选择">
          <el-option label="原创" value="原创"></el-option>
          <el-option label="转载" value="转载"></el-option>
          <el-option label="与他人合作" value="与他人合作"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="重要性" prop="name">
        <el-select v-model="ruleForm.date4" placeholder="请选择">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="5" value="5"></el-option>
        </el-select>
      </el-form-item>
      <div class="block">
        <span class="sp">发布时间</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </div>
    </el-form>
    <div id="main">
      <mavon-editor v-model="value"></mavon-editor>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fabiao",
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        date3: "",
        date4: ""
      },
      rules: {
        name: [{ required: true, message: "请输入", trigger: "blur" }]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value: ""
    };
  },
  methods: {
    cli() {
      this.$axios
        .req("api/article/create", {
          title: this.ruleForm.name,
          abstract: this.ruleForm.region,
          author: this.ruleForm.date1,
          category: this.ruleForm.date2,
          source: this.ruleForm.date3,
          star: this.ruleForm.date4,
          date: this.value1,
          text: this.value
        })
        .then(res => {
          // console.log(res);
          if (res.data.code === 200) {
            this.$router.push("/fabu");
            this.$message({
              message: "发表成功",
              type: "success"
            });
          }
          if (res.data.code === 500) {
            this.$message({
              message: "发表失败,请填满所有必填项",
              type: "error"
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
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
.box6 {
  margin-top: 60px;
  line-height: 50px;
  background: forestgreen;
  text-align: right;
}
.box7 {
  margin-right: 50px;
}
.demo {
  display: flex;
  justify-content: space-around;
}
.sp {
  margin-right: 10px;
  font-size: 12px;
}
</style>
