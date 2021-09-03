<template>
  <div class="logo-wrapper">
    <svg-icon name="vue" size="35px" />
    <span class="logo-title" v-if="!collapse"> vue3-admin </span>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const state = useStore();
  const collapse = computed(() => {
    return state.getters.collapse;
  });
</script>
<style lang="scss" scoped>
  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 20px;
    cursor: pointer;
    .logo-title {
      display: inline-block;
      max-width: calc(246px - 60px);
      padding-left: 10px;
      overflow: hidden;
      font-size: $base-font-size-max;
      font-size: 20px;
      font-weight: bold;
      line-height: 55px;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
</style>
