<template>
  <el-scrollbar height="100vh">
    <el-menu
      default-active="/index"
      background-color="#293246"
      class="el-menu-vertical"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#08a17e"
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
  const routes = computed(() => {
    console.log(store.getters['routes/routes']);
    return store.getters['routes/routes'];
  });
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
