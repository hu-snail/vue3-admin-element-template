<template>
  <div class="echarts-container">
    <Descrition :title="t('echarts.line.title')">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://echarts.apache.org/examples/zh/index.html#chart-type-line" target="_blank"
          >Echarts</a
        >
        作为图表库
      </template>
    </Descrition>
    <Descrition :title="t('echarts.demo')" :showDesc="false"></Descrition>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :title="t('echarts.line.demo1Title')"
          headerIcon="icon-chart-line"
          :style="{
            height: '200px',
          }"
          :options="{
            series,
            xAxis,
            yAxis,
            toolbox,
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :title="t('echarts.line.demo2Title')"
          :index="1"
          headerIcon="icon-chart-line"
          :style="{
            height: '200px',
          }"
          :options="{
            series: series2,
            xAxis,
            yAxis,
            toolbox,
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :title="t('echarts.line.demo3Title')"
          :index="2"
          headerIcon="icon-chart-line"
          :style="{
            height: '200px',
          }"
          :options="{
            series: series3,
            xAxis: xAxis3,
            yAxis: yAxis3,
            tooltip,
            grid,
          }"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import Echarts from '@/components/Echarts/index.vue';
  import { useI18n } from 'vue-i18n';
  export default {
    components: { Descrition, Echarts },
    setup() {
      const { t } = useI18n();
      const state = reactive({
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
        series2: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        toolbox: {
          show: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        },
        xAxis3: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
        ],
        yAxis3: [
          {
            type: 'value',
          },
        ],
        series3: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              show: true,
              position: 'top',
            },
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
        grid: {
          top: '5px',
          left: 0,
          right: '14px',
          bottom: 0,
          containLabel: true,
        },
      });

      return {
        ...toRefs(state),
        t,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .echarts-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
  }
</style>
