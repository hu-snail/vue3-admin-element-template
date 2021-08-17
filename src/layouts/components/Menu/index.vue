<template>
  <el-scrollbar height="100vh">
    <el-menu
      default-active="1-4-1"
      background-color="#293246"
      class="el-menu-vertical"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <Logo />
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
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
