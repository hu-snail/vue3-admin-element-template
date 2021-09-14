<template>
  <div class="admin-container">
    <el-container>
      <el-container class="container">
        <el-header class="header" height="60px">
          <NavBar @handleCollapse="handleCollapse" />
          <TabBar v-if="tag" />
        </el-header>
        <el-main class="main" :class="{ fixed: fixedHead, istag: !tag }">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
    <el-drawer v-model="isDrawer" direction="ltr" :with-header="false" @close="closeDrawer">
      <Menu />
    </el-drawer>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import NavBar from '../NavBar/index.vue';
  import AppMain from '../AppMain/index.vue';
  import TabBar from '../TabBar/index.vue';
  import Menu from '../Menu/index.vue';

  const store = useStore();

  const isDrawer = computed(() => {
    return store.getters['setting/isDrawer'];
  });

  const tag = computed(() => {
    return store.getters['setting/tag'];
  });

  const fixedHead = computed(() => {
    return store.getters['setting/fixedHead'];
  });

  const handleCollapse = () => {
    store.dispatch('setting/changeDrawer', true);
  };

  const closeDrawer = () => {
    store.dispatch('setting/changeDrawer', false);
  };
</script>

<style lang="scss" scoped>
  .admin-container {
    position: relative;
    background-color: $base-content-bg-color;
    .container {
      position: absolute;
      right: 0;
      left: 0;
      transition: all 0.4s;
    }
    .header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 99;
      padding: 0;
      transition: all 0.4s;
    }
    .main {
      position: relative;
      top: 110px;
      &.istag {
        top: 60px;
      }
      background-color: $base-content-bg-color;
    }
    :deep {
      .el-menu {
        border-right: 0 !important;
      }
    }
  }
</style>
