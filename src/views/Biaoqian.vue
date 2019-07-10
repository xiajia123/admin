<template>
  <div>
    <div class="box5">
      <el-tabs v-model="activeName">
        <el-tab-pane
          :label="'未读消息' + '(' + num + ')'"
          name="first"
        ></el-tab-pane>
        <el-tab-pane
          :label="'未读消息' + '(' + num1 + ')'"
          name="second"
        ></el-tab-pane>
        <el-tab-pane
          :label="'未读消息' + '(' + num2 + ')'"
          name="third"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <el-card v-if="activeName === 'first'">
      <div
        class="div"
        v-for="item in arr"
        :key="item.id"
        v-show="item.name === 'one'"
      >
        <p>{{ item.title }}</p>
        <p>
          {{ item.time
          }}<el-button class="but" @click="one(item)">已读</el-button>
        </p>
      </div>
      <el-button type="primary" class="but1" @click="oneplus"
        >全部标为已读</el-button
      >
    </el-card>
    <el-card v-else-if="activeName === 'second'">
      <div
        class="div"
        v-for="item in arr"
        :key="item.id"
        v-show="item.name === 'two'"
      >
        <p>{{ item.title }}</p>
        <p>
          {{ item.time
          }}<el-button class="but" @click="two(item)">删除</el-button>
        </p>
      </div>
      <el-button type="danger" class="but1" @click="twoplus"
        >删除全部</el-button
      >
    </el-card>
    <el-card v-else>
      <div
        class="div"
        v-for="item in arr"
        :key="item.id"
        v-show="item.name === 'three'"
      >
        <p>{{ item.title }}</p>
        <p>
          {{ item.time
          }}<el-button class="but" @click="three(item)">还原</el-button>
        </p>
      </div>
      <el-button type="info" class="but1" @click="threeplus"
        >清空回收站</el-button
      >
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Biaoqian",
  components: {},
  props: {},
  data() {
    return {
      activeName: "first",
      arr: [
        {
          id: "1",
          name: "one",
          title: "【系统通知】该项目将于今晚凌晨2点到五点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          id: "2",
          name: "one",
          title: "今晚12点整发大红包,先到先得",
          time: "2018-04-19 21:00:00"
        },
        {
          id: "3",
          name: "two",
          title: "【系统通知】该系统将于今晚凌晨2点到五点进行升级维护",
          time: "2018-04-19 20:00:00 "
        },
        {
          id: "4",
          name: "three",
          title: "【系统通知】您的优惠券已近过期",
          time: "2018-04-19 20:00:00 "
        }
      ]
    };
  },
  methods: {
    one(item) {
      item.name = "two";
    },
    two(item) {
      item.name = "three";
    },
    three(item) {
      item.name = "one";
    },
    oneplus() {
      this.arr.map(item => {
        if (item.name === "one") {
          item.name = "two";
        }
      });
    },
    twoplus() {
      this.arr.map(item => {
        if (item.name === "two") {
          item.name = "three";
        }
      });
    },
    threeplus() {
      this.arr.map(item => {
        if (item.name === "three") {
          item.name = "";
        }
      });
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {
    num() {
      let i = 0;
      this.arr.map(item => {
        if (item.name === "one") {
          i++;
        }
      });
      return i;
    },
    num1() {
      let i = 0;
      this.arr.map(item => {
        if (item.name === "two") {
          i++;
        }
      });
      return i;
    },
    num2() {
      let i = 0;
      this.arr.map(item => {
        if (item.name === "three") {
          i++;
        }
      });
      return i;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.box5 {
  margin-top: 60px;
}
.div {
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: pink solid 1px;
  padding-bottom: 10px;
}
.but {
  margin-left: 10px;
}
.but1 {
  margin-top: 30px;
}
</style>
