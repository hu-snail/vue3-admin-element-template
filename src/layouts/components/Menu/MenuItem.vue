<template>
  <el-menu-item :key="item.path" v-if="!item.meta">
    <i class="el-icon-setting"></i>
    <template #title>{{ item.children[0].meta.title }}</template>
  </el-menu-item>
  <el-submenu :index="item.path" :key="item.path" v-if="item.children.length && item.meta">
    <template #title>
      <i class="el-icon-location"></i>
      <span>{{ item.meta.title }}</span>
    </template>
    <template v-for="option in item.children">
      <menu-item v-if="option.children" :key="option.path" :item="option" />
      <el-menu-item v-else :index="option.path" :key="option.path">
        {{ option.meta.title }}
      </el-menu-item>
    </template>
  </el-submenu>
</template>
<script setup>
  import { defineProps } from 'vue';
  defineProps({
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  });
</script>
