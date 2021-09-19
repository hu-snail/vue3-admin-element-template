<template>
  <div
    @click="handleClick"
    class="logo-wrapper"
    :class="{ phone: collapse, horizontal: mode === 'horizontal' }"
  >
    <svg-icon name="vue" size="35px" />
    <span class="logo-title" :style="{ color: textColor }" v-if="!collapse"> vue3-admin </span>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
  };
</script>

<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  import { themeConfig } from '@/config/theme';
  const { themeOptions } = themeConfig;

  const store = useStore();
  const router = useRouter();

  const collapse = computed(() => {
    return store.getters.collapse;
  });

  const mode = computed(() => {
    return store.getters['setting/mode'];
  });

  const textColor = computed(() => {
    const whiteColors = ['#fff', '#ffffff', '#FFF', '#FFF', 'rgb(255, 255, 255)'];
    const color = themeOptions[store.getters['setting/theme']][0];
    return whiteColors.indexOf(color) !== -1 ? '#333' : '#fff';
  });

  const handleClick = () => {
    router.replace('/');
  };
</script>
<style lang="scss" scoped>
  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    cursor: pointer;
    &.phone {
      width: 60px;
      padding: 10px 0;
    }
    &.horizontal {
      justify-content: flex-start;
    }

    .logo-title {
      display: inline-block;
      max-width: calc(246px - 60px);
      padding-left: 10px;
      overflow: hidden;
      font-size: $base-font-size-max;
      line-height: 55px;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
</style>
