<template>
  <span
    class="icon-hover full-screen-wrapper"
    :title="isFullScreen ? t('navbar.noFull') : t('navbar.full')"
  >
    <component
      theme="filled"
      size="16"
      fill="#333"
      :strokeWidth="4"
      :is="(isFullScreen ? 'off' : 'full') + '-screen'"
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

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const isFullScreen = computed(() => {
    return store.getters['setting/isFullScreen'];
  });

  const emit = defineEmits(['refresh']);
  const handleClick = () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning('进入全屏失败');
      return false;
    }
    store.dispatch('setting/changeFullScreen', !isFullScreen.value);
    screenfull.toggle();
    emit('refresh', screenfull.isFullscreen);
  };
</script>

<style lang="scss" scoped>
  .full-screen-wrapper {
    padding: 20px 10px;
  }
</style>
