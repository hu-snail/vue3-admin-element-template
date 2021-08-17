<template>
  <div class="admin-container">
    <el-container>
      <Menu :isCollapse="isCollapse" />
      <el-container class="container" :style="{ left: isCollapse ? '60px' : '240px' }">
        <el-header class="header">
          <NavBar @handleCollapse="handleCollapse" />
        </el-header>
        <el-main class="main">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import Menu from './components/Menu/index.vue';
  import NavBar from './components/NavBar/index.vue';
  import AppMain from './components/AppMain/index.vue';
  const store = useStore();

  const isCollapse = computed(() => {
    return store.getters.collapse;
  });
  const handleCollapse = () => {
    store.dispatch('changeCollapse');
  };
</script>

<style lang="scss" scoped>
  .admin-container {
    position: relative;
    overflow: hidden;
    background-color: $base-content-bg-color;
    .container {
      position: absolute;
      right: 0;
      transition: all 0.5s;
    }
    .header {
      padding: 0;
    }
    .main {
      background-color: $base-content-bg-color;
    }
  }
</style>
