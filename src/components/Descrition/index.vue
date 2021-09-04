<template>
  <div class="desc-wrapper">
    <h2 class="title">{{ title }}</h2>
    <div class="desc" v-if="showDesc">
      <slot name="descrition"></slot>
    </div>
  </div>
</template>
<script setup>
  import { defineProps } from 'vue';
  defineProps({
    title: {
      type: String,
      default: '标题',
    },
    descrition: {
      type: String,
      default: '描述',
    },
    showDesc: {
      type: Boolean,
      default: true,
    },
  });
</script>
<style lang="scss" scoped>
  .desc-wrapper {
    .desc {
      padding: 15px 20px;
      background-color: rgba($base-color-default, 0.1);
      border-left: 5px solid $base-color-default;
    }
  }
</style>
