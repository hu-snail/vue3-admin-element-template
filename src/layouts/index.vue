<template>
  <div class="admin-container">
    <el-container>
      <Menu :isCollapse="isCollapse" />
      <el-container class="container" :style="{ left: isCollapse ? '65px' : '240px' }">
        <el-header class="header" height="60px" :style="{ left: isCollapse ? '65px' : '240px' }">
          <NavBar @handleCollapse="handleCollapse" />
          <TabBar />
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
  import TabBar from './components/TabBar/index.vue';
  const store = useStore();

  const isCollapse = computed(() => {
    return store.getters.collapse;
  });
  const handleCollapse = () => {
    store.dispatch('setting/changeCollapse');
  };
</script>

<style lang="scss" scoped>
  .admin-container {
    position: relative;
    background-color: $base-content-bg-color;
    .container {
      position: absolute;
      right: 0;
      transition: all 0.4s;
    }
    .header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
      padding: 0;
      transition: all 0.4s;
    }
    .main {
      // margin-top: 110px;
      position: relative;
      top: 110px;
      background-color: $base-content-bg-color;
    }
  }
</style>
