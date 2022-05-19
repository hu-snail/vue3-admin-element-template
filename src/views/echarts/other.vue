<template>
  <div class="echarts-container">
    <Descrition :title="t('echarts.other.title')">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://echarts.apache.org/examples/zh/index.html#chart-type-line" target="_blank"
          >Echarts</a
        >
        作为图表库
      </template>
    </Descrition>
    <Descrition :title="t('echarts.demo')" :showDesc="false"></Descrition>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :title="t('echarts.other.demo1Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '200px',
          }"
          :options="{
            series,
            xAxis,
            yAxis,
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :index="1"
          :title="t('echarts.other.demo2Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '200px',
          }"
          :options="{
            xAxis: {},
            yAxis: {},
            series: series2,
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :index="2"
          :title="t('echarts.other.demo3Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '200px',
          }"
          :options="{
            tooltip,
            series: series3,
          }"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :index="3"
          :title="t('echarts.other.demo4Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '200px',
          }"
          :options="{
            radar,
            series: series4,
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :index="4"
          :title="t('echarts.other.demo5Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '200px',
          }"
          :options="{
            tooltip: tooltip5,
            series: series5,
            textStyle: {
              fontSize: 12,
            },
          }"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <Echarts
          :index="5"
          :title="t('echarts.other.demo6Title')"
          headerIcon="icon-chart-histogram"
          :style="{
            height: '200px',
          }"
          :options="{
            tooltip: tooltip6,
            series: series6,
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
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
        },
        yAxis: {},
        series: [
          {
            type: 'k',
            data: [
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
            ],
          },
        ],
        series2: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [7.08, 5.82],
              [5.02, 5.68],
            ],
            type: 'scatter',
          },
        ],
        tooltip: {
          trigger: 'item',
        },
        series3: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' },
            ],
          },
        ],
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '销售（Sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Technology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 },
          ],
        },
        series4: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '预算分配（Allocated Budget）',
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '实际开销（Actual Spending）',
              },
            ],
          },
        ],
        tooltip5: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        series5: [
          {
            name: 'Pressure',
            type: 'gauge',
            progress: {
              show: true,
            },
            radius: '100%',
            title: {
              fontSize: 12,
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}',
            },
            data: [
              {
                value: 50,
                name: 'SCORE',
              },
            ],
          },
        ],
        tooltip6: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%',
        },
        series6: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 0,
            //x2: 80,
            bottom: 0,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
            },
            labelLine: {
              length: 20,
              lineStyle: {
                width: 1,
                type: 'solid',
              },
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 14,
              },
            },
            data: [
              { value: 60, name: '访问' },
              { value: 40, name: '咨询' },
              { value: 20, name: '订单' },
              { value: 80, name: '点击' },
              { value: 100, name: '展现' },
            ],
          },
        ],
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
    .row {
      margin-top: 20px;
    }
  }
</style>
