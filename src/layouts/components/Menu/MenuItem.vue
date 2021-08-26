<template>
  <el-menu-item :key="item.path" :index="item.children[0].path" v-if="!item.meta">
    <component
      class="menu-icon"
      v-if="item.children[0].meta.icon"
      theme="outline"
      size="14"
      strokeWidth="3"
      :is="item.children[0].meta.icon"
    />
    <template #title>
      <span class="title">
        {{ item.children[0].meta.title }}
      </span>
    </template>
  </el-menu-item>
  <el-submenu :index="item.path" :key="item.path" v-if="item.children.length && item.meta">
    <template #title>
      <component
        class="menu-icon"
        v-if="item.meta.icon"
        theme="outline"
        size="14"
        strokeWidth="3"
        :is="item.meta.icon"
      />
      <span class="title">{{ item.meta.title }}</span>
    </template>
    <template v-for="option in item.children">
      <menu-item v-if="option.children" :key="option.path" :item="option" />
      <el-menu-item v-else :index="option.path" :key="option.path">
        <component
          class="menu-icon"
          v-if="option.meta.icon"
          theme="outline"
          size="14"
          strokeWidth="3"
          :is="option.meta.iconn"
        />
        <span class="title">
          {{ option.meta.title }}
        </span>
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
<style lang="scss" scoped>
  .menu-icon,
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px !important;
    margin-right: 5px;
  }
</style>
