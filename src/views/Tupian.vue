<template>
  <div>
    <div class="dv9">
      <el-card>
        <p class="p2">支持拖拽</p>
        <div class="dv10">Element UI自带上传组件</div>
        <el-upload class="upload-demo" drag action="/api/upload" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <p class="p3">支持裁剪</p>
        <div class="dv10">vue-image-crop-upload</div>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="/api/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button size="small" type="primary" @click="submitUpload"
            >上传图片</el-button
          >
        </el-upload>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tupian",
  components: {},
  props: {},
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
.dv9 {
  margin-top: 60px;
}
.p2 {
  font-size: 30px;
}
.p3 {
  font-size: 30px;
  margin-top: 20px;
}
.dv10 {
  width: 1500px;
  background: whitesmoke;
  line-height: 60px;
  margin: 20px 0;
  text-indent: 2em;
}
</style>
