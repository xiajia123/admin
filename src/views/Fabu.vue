<template>
  <div>
    <div v-if="num === 2" style="margin-top: 60px">
      <div class="box6">
        <div class="box7">
          <el-button type="danger" @click="Return">返回</el-button>
          <el-button type="primary" @click="handleEdit">发布</el-button>
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
    <el-card style="margin-top: 60px" v-if="num === 1">
      <el-table
        :data="tableData.slice((val1 - 1) * val, val1 * val)"
        style="width: 100%"
      >
        <el-table-column
          :index="indexMethod"
          type="index"
          label="#"
          header-align="center"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="450px"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="100px"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="category"
          label="类目"
          width="150"
          filter-placement="bottom-end"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <el-tag
              disable-transitions
              type="info"
              v-if="scope.row.category === 'React'"
              >{{ scope.row.category }}</el-tag
            >
            <el-tag
              disable-transitions
              type="warning"
              v-if="scope.row.category === 'javaScript'"
              >{{ scope.row.category }}</el-tag
            >
            <el-tag
              disable-transitions
              type="danger"
              v-if="scope.row.category === '工具类'"
              >{{ scope.row.category }}</el-tag
            >
            <el-tag
              disable-transitions
              type="success"
              v-if="scope.row.category === 'Vue'"
              >{{ scope.row.category }}</el-tag
            >
            <el-tag disable-transitions v-if="scope.row.category === '其他'">{{
              scope.row.category
            }}</el-tag>
            <el-tag
              disable-transitions
              type="warning"
              v-if="scope.row.category === '性能优化'"
              >{{ scope.row.category }}</el-tag
            >
            <el-tag
              disable-transitions
              type="danger"
              v-if="scope.row.category === 'Node.js'"
              >{{ scope.row.category }}</el-tag
            >
            <el-tag
              disable-transitions
              type="success"
              v-if="scope.row.category === '小程序'"
              >{{ scope.row.category }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="100px"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="star"
          label="重要性"
          width="200px"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <el-rate
              disabled
              text-color="#ff9900"
              :value="Number(scope.row.star)"
              header-align="center"
              align="center"
            >
            </el-rate>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间"
          width="150px"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作"
          width="450px"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="cli(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="success"
              @click="kan(scope.$index, scope.row)"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </el-card>
    <div v-if="num === 3">
      <div class="div3">
        <el-button type="primary" class="btn2" @click="fan">返回</el-button>
        <h3 class="h3">{{ ruleForm.name }}</h3>
        <p>摘要:{{ ruleForm.region }}</p>
        <p class="p4">发表于{{ ruleForm.date1 }}</p>
      </div>
      <el-card>
        <mavon-editor
          :value="value"
          defaultOpen="preview"
          :subfield="false"
          :toolbarsFlag="false"
          :boxShadow="false"
        ></mavon-editor>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Fabu",
  components: {},
  props: {},
  data() {
    return {
      val: 10,
      val1: 1,
      currentPage1: 1,
      id: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        date3: "",
        date4: ""
      },
      tableData: [],
      num: 1,
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
    kan(index, row) {
      this.num = 3;
      (this.id = row._id),
        (this.ruleForm.name = row.title),
        (this.ruleForm.region = row.abstract),
        (this.ruleForm.date1 = row.author),
        (this.ruleForm.date2 = row.category),
        (this.ruleForm.date3 = row.source),
        (this.ruleForm.date4 = row.star),
        (this.value = row.text),
        (this.value1 = row.date);
    },
    fan() {
      this.num = 1;
    },
    getData() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
        })
        .catch(e => {
          console.log(e);
        });
    },
    indexMethod(index) {
      return index + 1;
    },
    handleDelete(index, row) {
      this.$axios
        .req("api/article/delete", {
          _id: row._id
        })
        .then(res => {
          this.$axios
            .req("api/article/allArticle")
            .then(res => {
              this.tableData = res.data.data;
              // console.log(res);
            })
            .catch(e => {
              console.log(e);
            });
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleEdit() {
      this.num = 1;
      this.$axios
        .req("api/article/update", {
          id: this.id,
          title: this.ruleForm.name,
          abstract: this.ruleForm.region,
          author: this.ruleForm.date1,
          category: this.ruleForm.date2,
          source: this.ruleForm.date3,
          star: this.ruleForm.date4,
          text: this.value,
          date: this.value1
        })
        .then(res => {
          this.$axios
            .req("api/article/allArticle")
            .then(res => {
              this.tableData = res.data.data;
            })
            .catch(e => {
              console.log(e);
            });
          console.log(res.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    cli(index, row) {
      (this.num = 2),
        (this.id = row._id),
        (this.ruleForm.name = row.title),
        (this.ruleForm.region = row.abstract),
        (this.ruleForm.date1 = row.author),
        (this.ruleForm.date2 = row.category),
        (this.ruleForm.date3 = row.source),
        (this.ruleForm.date4 = row.star),
        (this.value = row.text),
        (this.value1 = row.date);
    },
    Return() {
      this.num = 1;
    },
    handleSizeChange(val) {
      this.val = val;
    },
    handleCurrentChange(val) {
      this.val1 = val;
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
.box6 {
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
.btn2 {
  position: absolute;
  left: 10px;
}
.div3 {
  margin-top: 60px;
  text-align: center;
  position: relative;
}
.h3 {
  margin-bottom: 20px;
}
.p4 {
  margin: 15px 0;
  font-size: 12px;
  color: darkgray;
}
</style>
