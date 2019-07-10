<template>
  <div>
    <div class="div1">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <el-card>
      <el-table
        :data="tableData.slice((val1 - 1) * val, val1 * val)"
        style="width: 100%"
      >
        <el-table-column label="名称" header-align="center" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.NAME }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品编号" header-align="center" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
          </template>
        </el-table-column>
        <el-table-column label="原价" header-align="center" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.ORI_PRICE }}</span>
          </template>
        </el-table-column>
        <el-table-column label="现价" header-align="center" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.PRESENT_PRICE }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" header-align="center" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogFormVisible = true"
              type="primary"
              icon="el-icon-edit"
              >修改</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
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
    <div class="div2">
      <JsonExcel
        :data="tableData.slice((val1 - 1) * val, val1 * val)"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="filename.xls"
      >
        <el-button type="primary" class="btn">导出xls</el-button>
      </JsonExcel>
      <JsonExcel
        :data="tableData.slice((val1 - 1) * val, val1 * val)"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="filename.xls"
        type="csv"
      >
        <el-button type="danger" class="btn1">导出csv</el-button>
      </JsonExcel>
    </div>
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel";
export default {
  name: "Daochu",
  components: {
    JsonExcel
  },
  props: {},
  data() {
    return {
      formLabelWidth: "80px",
      dialogFormVisible: false,
      dialogTableVisible: false,
      input: "",
      tableData: [],
      currentPage1: 1,
      val: 10,
      val1: 1,
      json_fields: {
        名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ],
    };
  },
  methods: {
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    handleSizeChange(val) {
      this.val = val;
    },
    handleCurrentChange(val) {
      this.val1 = val;
    },
    getData() {
      this.$axios
        .req("api/tableData")
        .then(res => {
          this.tableData = res.data.data;
          console.log(res.data.data);
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
.div1 {
  margin-top: 60px;
  width: 300px;
  margin-bottom: 20px;
}
.div2 {
  display: flex;
}
.btn {
  margin-top: 20px;
}
.btn1 {
  margin-top: 20px;
  margin-left: 50px;
}
</style>
