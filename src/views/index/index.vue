<template>
  <div class="container">
    <Echarts :options="{ legend, toolbox, series }">
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
  import { reactive } from 'vue';
  const legend = reactive({
    top: 'top',
  });
  const toolbox = reactive({
    show: true,
  });
  const series = reactive([
    {
      name: '面积模式',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' },
      ],
    },
  ]);
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    color: #f45;
  }
</style>
