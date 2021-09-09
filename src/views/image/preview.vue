<template>
  <div class="img-preview">
    <Descrition title="图片预览 El-Image-Viewer">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://element-plus.gitee.io/#/zh-CN/component/image" target="_blank"
          >El-Image-Viewer</a
        >
        作为图片预览
      </template>
    </Descrition>
    <Descrition title="演示" :showDesc="false"></Descrition>
    <div class="img-content">
      <div
        class="img-item"
        v-for="(item, index) in srcList"
        @click="handlerPreview(index)"
        :key="index"
      >
        <el-image style="width: 100px; height: 100px" :src="item"> </el-image>
      </div>
      <el-image-viewer
        v-if="showPreview"
        :initial-index="previewIndex"
        :url-list="srcList"
        @close="showPreview = false"
      ></el-image-viewer>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  export default {
    components: { Descrition },
    setup() {
      const state = reactive({
        showPreview: false,
        previewIndex: 0,
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        ],
      });

      const handlerPreview = (index) => {
        state.previewIndex = index;
        state.showPreview = true;
      };

      return {
        ...toRefs(state),
        handlerPreview,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .img-preview {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .img-content {
      display: flex;
      flex-wrap: wrap;
      .img-item {
        margin: 5px;
        cursor: pointer;
      }
    }
  }
</style>
