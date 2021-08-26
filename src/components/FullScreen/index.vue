<template>
  <span class="icon-hover full-screen-wrapper" :title="fullScreen ? '退出全屏' : '全屏'">
    <component
      theme="filled"
      size="16"
      fill="#333"
      :strokeWidth="4"
      :is="(fullScreen ? 'off' : 'full') + '-screen'"
      @click="handleClick"
    />
  </span>
</template>

<script setup>
  import { defineEmits, computed } from 'vue';
  import screenfull from 'screenfull';
  import { useStore } from 'vuex';
  import { ElMessage } from 'element-plus';
  const store = useStore();

  const fullScreen = computed(() => {
    return store.getters.fullScreen;
  });

  const emit = defineEmits(['refresh']);
  const handleClick = () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning('进入全屏失败');
      return false;
    }
    store.dispatch('setting/changeFullScreen', !fullScreen.value);
    screenfull.toggle();
    emit('refresh', screenfull.isFullscreen);
  };
</script>

<style lang="scss" scoped>
  .full-screen-wrapper {
    padding: 20px 10px;
  }
</style>
