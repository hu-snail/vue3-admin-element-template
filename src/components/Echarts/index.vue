<template>
  <el-card class="echart-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <div class="card-header-title">
          <component
            class="icon"
            :is="headerIcon"
            theme="filled"
            size="16"
            :strokeWidth="3"
            fill="#333"
            @click="handleCollapse"
          />
          <span class="title">卡片标题</span>
        </div>
        <div class="card-header-right">
          <slot name="header-right"></slot>
        </div>
      </div>
    </template>
    <div class="echarts" id="echarts" :style="style"> </div>
  </el-card>
</template>

<script setup>
  import debounce from 'lodash/debounce';
  import { onMounted, reactive, defineProps } from 'vue';
  // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
  import * as echarts from 'echarts/core';
  // 引入柱状图图表，图表后缀都为 Chart
  import { BarChart, LineChart, PieChart } from 'echarts/charts';
  // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    ToolboxComponent,
  } from 'echarts/components';
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
  import { SVGRenderer } from 'echarts/renderers';

  // 注册必须的组件
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    LineChart,
    PieChart,
    SVGRenderer,
    LegendComponent,
    ToolboxComponent,
  ]);

  const props = defineProps({
    headerIcon: {
      type: String,
      default: 'full-screen',
    },
    style: {
      type: Object,
      default: () => {
        return {
          width: '100%',
          height: '380px',
        };
      },
    },
  });

  let chart = reactive(null);
  onMounted(() => {
    console.log(props);
    initChart();
    window.addEventListener(
      'resize',
      debounce(() => {
        chart.resize(); //页面大小变化后Echarts也更改大小
      }, 200)
    );
  });

  const initChart = () => {
    chart = echarts.init(document.getElementById('echarts'));
    // 绘制图表
    chart.setOption({
      legend: {
        top: 'top',
      },
      toolbox: {
        show: false,
      },
      series: [
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
      ],
    });
  };
</script>
<style lang="scss" scoped>
  .echart-card {
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-title {
        display: flex;
        align-content: center;
        align-items: center;
        color: $base-font-color;
        .icon {
          display: flex;
          padding-right: 5px;
        }
      }
    }
    .echarts {
      background-color: $base-color-white;
    }
  }
</style>
