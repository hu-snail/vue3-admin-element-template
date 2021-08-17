<template>
  <div class="admin-container">
    <el-container>
      <Menu :isCollapse="isCollapse" />
      <el-container>
        <el-header class="header">
          <NavBar @handleCollapse="handleCollapse" />
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import Menu from './components/Menu/index.vue';
  import NavBar from './components/NavBar/index.vue';
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
    .header {
      padding: 0;
    }
  }
</style>
