<template>
  <span class="icon-comp">
    <i
      v-if="name.indexOf('el-icon') !== -1"
      :class="name"
      :style="{ color, 'font-size': size + 'px' }"
    ></i>
    <component
      v-if="type === 'icon-park'"
      :theme="theme"
      :size="size"
      :strokeWidth="strokeWidth"
      :is="name"
      :fill="color"
      class="icon"
    />
    <el-icon v-if="type === 'el-icon'" :style="{ color, 'font-size': size + 'px' }">
      <component :is="name" />
    </el-icon>
  </span>
</template>

<script setup>
  defineProps({
    type: {
      type: String,
      default: 'icon-park',
    },
    size: {
      type() {
        return Number | String;
      },
      default: 14,
    },
    color: {
      type: String,
      default: '#333',
    },
    theme: {
      type: String,
      default: 'outline',
    },
    strokeWidth: {
      type: Number,
      default: 3,
    },
    name: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: 'icon',
    },
  });
</script>
<style lang="scss" scoped></style>
