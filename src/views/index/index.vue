<template>
  <div class="container">
    <Echarts>
      <template #header-right> 操作 </template>
    </Echarts>
    <Echarts>
      <template #header-right> 操作 </template>
    </Echarts>
  </div>
</template>

<script>
  export default {
    name: 'Index',
  };
</script>

<script setup>
  import Echarts from '@/components/Echarts/index.vue';
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    color: #f45;
  }
</style>
