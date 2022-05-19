<template>
  <div class="echarts-container">
    <Descrition :title="t('echarts.bar.title')">
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
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <Echarts
          :title="t('echarts.bar.demo1Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '280px',
          }"
          :options="{
            series,
            xAxis,
            yAxis,
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <Echarts
          :index="1"
          :title="t('echarts.bar.demo2Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '280px',
          }"
          :options="{
            series: series2,
            xAxis: xAxis2,
            yAxis: yAxis2,
            calculable,
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
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
          },
        ],
        tooltip: {
          trigger: 'axis',
        },

        calculable: true,
        xAxis2: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
          },
        ],
        yAxis2: [
          {
            type: 'value',
          },
        ],
        series2: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
        ],
        grid: {
          top: '24px',
          right: '18px',
          left: 0,
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
