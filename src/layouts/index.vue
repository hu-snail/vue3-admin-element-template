<template>
  <div class="admin-container">
    <Mobile v-if="isMobile" />
    <el-container v-else>
      <Menu :isCollapse="isCollapse" class="hidden-xs-only" />
      <el-container class="container" :style="{ left: isCollapse ? '65px' : '240px' }">
        <el-header
          class="header"
          :class="{ fixed: true }"
          height="60px"
          :style="{ left: isCollapse ? '65px' : '240px' }"
        >
          <NavBar @handleCollapse="handleCollapse" />
          <TabBar />
        </el-header>
        <el-main class="main" :class="{ fixed: true }">
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
  import Mobile from './components/Mobile/index.vue';

  const store = useStore();
  const isMobile = computed(() => {
    return store.getters['setting/isMobile'];
  });

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
      padding: 0;
      transition: all 0.4s;
      &.fixed {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99;
      }
    }
    .main {
      position: relative;
      top: 50px;
      &.fixed {
        top: 110px;
      }
      background-color: $base-content-bg-color;
    }
  }
</style>
