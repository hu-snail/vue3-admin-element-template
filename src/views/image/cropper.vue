<template>
  <div class="cropper-container">
    <Descrition title="图片裁剪 Vue-Cropper">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://github.com/xyxiao001/vue-cropper" target="_blank">vue-cropper</a>
        作为图片裁剪组件
      </template>
    </Descrition>
    <Descrition title="演示" :showDesc="false"></Descrition>
    <div class="cropper-content">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <Cropper />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import Cropper from '@/components/Cropper/index.vue';
  export default {
    components: { Descrition, Cropper },
    setup() {
      const state = reactive({});
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="scss" scoped>
  .cropper-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .cropper-content {
      height: 400px;
    }
  }
</style>
