<template>
  <el-config-provider :locale="localLanguage">
    <el-scrollbar height="100vh">
      <router-view></router-view>
    </el-scrollbar>
  </el-config-provider>
</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import { useStore } from 'vuex';

  import i18n from '@/locales';
  const locale = i18n.global.locale;

  const store = useStore();

  const localLanguage = computed(() => {
    return i18n.global.messages[locale];
  });

  onMounted(() => {
    changeBodyWidth();
    window.addEventListener('resize', changeResize);
  });

  const changeBodyWidth = () => {
    const flag = document.body.getBoundingClientRect().width - 1 < 992;
    store.dispatch('setting/changeMobile', flag);
  };

  const changeResize = () => {
    changeBodyWidth();
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: $base-font-size-default;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
