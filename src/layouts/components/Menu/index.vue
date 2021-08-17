<template>
  <el-scrollbar height="100vh">
    <el-menu
      default-active="1-4-1"
      background-color="#293246"
      class="el-menu-vertical"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#08a17e"
    >
      <Logo />
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span></span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { defineProps } from 'vue';
  import Logo from '../Logo/index.vue';
  defineProps({
    isCollapse: {
      type: Boolean,
      default: false,
    },
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
