<template>
  <el-scrollbar height="100vh">
    <el-menu
      :default-active="defaultActive"
      background-color="#293246"
      class="el-menu-vertical"
      :collapse="isCollapse"
      text-color="#fff"
      router
      active-text-color="#08a17e"
      @open="handleOpen"
      @close="handleClose"
    >
      <Logo />
      <template v-for="item in routes">
        <template v-if="!item.hidden">
          <MenuItem :item="item" :key="item.path" />
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import Logo from '../Logo/index.vue';
  import MenuItem from './MenuItem.vue';
  import { useStore } from 'vuex';

  defineProps({
    isCollapse: {
      type: Boolean,
      default: false,
    },
  });

  const store = useStore();
  const router = useRouter();

  const routes = computed(() => {
    return store.getters['routes/routes'];
  });

  const defaultActive = computed(() => {
    const { fullPath } = router.currentRoute.value;
    return fullPath || '/index';
  });

  const handleOpen = (key, keyPath) => {
    console.log('open:', key, keyPath);
  };

  const handleClose = (key, keyPath) => {
    console.log('close:', key, keyPath);
  };
</script>

<style lang="scss" scoped>
  .el-menu-vertical {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    &:not(.el-menu--collapse) {
      width: 240px;
    }
  }
</style>
