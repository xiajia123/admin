<template>
  <div id="app">
    <router-view v-if="$route.path === '/'"></router-view>
    <router-view v-else-if="$route.path === '/register'"></router-view>
    <el-container v-else>
      <el-header>
        <headnav></headnav>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <left></left>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import headnav from "./components/Headnav";
import left from "./components/Left";
export default {
  components: {
    headnav,
    left
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background: #2e5e85;
  line-height: 60px;
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0;
}
</style>
