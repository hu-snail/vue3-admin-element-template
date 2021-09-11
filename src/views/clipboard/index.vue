<template>
  <div class="clipboard-container">
    <Descrition title="粘贴板 vue3-clipboard">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://github.com/soerenmartius/vue3-clipboard" target="_blank">vue3-clipboard</a>
        作为拖拽库
      </template>
    </Descrition>
    <Descrition title="演示" :showDesc="false"></Descrition>
    <el-input class="input" v-model="msg" placeholder="请输入">
      <template #append>
        <el-button
          type="primary"
          size="small"
          v-clipboard="msg"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
          >复制</el-button
        >
      </template>
    </el-input>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import { ElMessage, ElNotification } from 'element-plus';
  export default {
    components: { Descrition },
    setup() {
      const state = reactive({
        msg: 'vue3-admin 粘贴板',
      });

      const onSuccess = () => {
        ElNotification({
          title: '复制成功',
          message: `内容：${state.msg}`,
          type: 'success',
        });
      };

      const onError = () => {
        ElMessage.error('复制失败');
      };
      return {
        ...toRefs(state),
        onSuccess,
        onError,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .clipboard-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .input {
      width: 260px;
    }
  }
</style>
