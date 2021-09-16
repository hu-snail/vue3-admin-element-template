<template>
  <el-scrollbar height="100vh">
    <router-view></router-view>
  </el-scrollbar>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

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
