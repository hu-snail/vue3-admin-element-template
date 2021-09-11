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
          <span class="title">{{ title }}</span>
        </div>
        <div class="card-header-right">
          <slot name="header-right"></slot>
        </div>
      </div>
    </template>
    <div class="echarts" :id="`echarts${index}`" :style="style"> </div>
  </el-card>
</template>

<script setup>
  import debounce from 'lodash/debounce';
  import { onMounted, reactive, defineProps } from 'vue';
  // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
  import * as echarts from 'echarts/core';
  // 引入柱状图图表，图表后缀都为 Chart
  import {
    BarChart,
    CandlestickChart,
    FunnelChart,
    GaugeChart,
    LineChart,
    PieChart,
    RadarChart,
    ScatterChart,
  } from 'echarts/charts';
  // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    ToolboxComponent,
    MarkPointComponent,
    MarkLineComponent,
  } from 'echarts/components';
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
  import { CanvasRenderer } from 'echarts/renderers';

  // 注册必须的组件
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    LineChart,
    PieChart,
    RadarChart,
    GaugeChart,
    CandlestickChart,
    ScatterChart,
    CanvasRenderer,
    LegendComponent,
    ToolboxComponent,
    MarkPointComponent,
    MarkLineComponent,
    FunnelChart,
  ]);

  const props = defineProps({
    index: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '标题',
    },
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
    series: {
      type: Array,
      default: () => {
        return [];
      },
    },
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
    grid: {
      type: Object,
      default: () => {
        return {
          top: '10px',
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
        };
      },
    },
  });

  let chart = reactive(null);
  onMounted(() => {
    initChart();
    window.addEventListener(
      'resize',
      debounce(() => {
        chart.resize(); //页面大小变化后Echarts也更改大小
      }, 200)
    );
  });

  const initChart = () => {
    chart = echarts.init(document.getElementById('echarts' + props.index));
    // 绘制图表
    chart.setOption({
      grid: props.grid,
      ...props.options,
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
      margin: 0 auto;
      background-color: $base-color-white;
    }
  }
</style>
