<template>
  <div class="index-conntainer">
    <div class="head-card">
      <div class="avatar">
        <el-avatar :size="50" :src="avatar"></el-avatar>
      </div>
      <div class="head-card-content">
        <h2 class="title">{{ sayHi }}! Vue3-Admin, {{ t('indexPage.descTitle') }}</h2>
        <p class="desc">
          vue3-admin 是基于 vue3 + vite2 + Element-Plus + Vue-Router4.x + Vuex4.x +
          Javascript开发的中后台管理平台，开箱即用！赶快试试吧...
        </p>
      </div>
    </div>
    <div class="content">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
          <el-card class="card" shadow="hover">
            <template #header>
              <h3 class="title">{{ t('indexPage.resourceTitle') }}</h3>
            </template>
            <div class="card-body" :class="{ mobile: isMobile }">
              <div
                class="item"
                v-for="(item, index) in state.list"
                @click="handleToDetail(item.url)"
                :key="index"
              >
                <div class="lf">
                  <!-- <img class="img" :src="`${state.prefix}${item.logo}`" /> -->
                  <div class="title" v-if="item.title">{{ item.title }}</div>
                </div>
                <div class="desc"> {{ item.desc }} </div>
              </div>
            </div>
          </el-card>
          <el-card class="card" shadow="hover">
            <template #header>
              <h3 class="title">{{ t('indexPage.envTitle') }}</h3>
            </template>
            <el-descriptions class="margin-top" :column="3" border>
              <el-descriptions-item v-for="(value, key) in packpage.dependencies" :key="key">
                <template #label>
                  {{ key }}
                </template>
                {{ value }}
              </el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <el-card class="card" shadow="hover">
            <template #header>
              <h3 class="title">{{ t('indexPage.orderTitle') }}</h3>
            </template>
            <div class="count-box">
              <div class="item" v-for="(item, index) in state.orderList" :key="index">
                <span class="label">{{ t('indexPage.order.' + item.key) }}</span>
                <CountTo
                  class="count"
                  :class="item.status"
                  :startVal="0"
                  :endVal="item.value"
                  :duration="3000"
                ></CountTo>
              </div>
            </div>
          </el-card>
          <el-card class="card" shadow="hover">
            <template #header>
              <h3 class="title">{{ t('indexPage.skillTitle') }}</h3>
            </template>
            <div v-for="(item, index) in state.skillList" :key="index">
              <div class="skill-title">{{ item.title }}</div>
              <el-progress
                :stroke-width="8"
                :percentage="item.percentage"
                :color="item.color"
              ></el-progress>
            </div>
          </el-card>
          <Echarts
            :title="t('indexPage.chartTitle')"
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
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
  };
</script>

<script setup>
  import { ref, computed, reactive, onBeforeMount } from 'vue';

  import { CountTo } from 'vue3-count-to';
  import Echarts from '@/components/Echarts/index.vue';

  import packpage from '../../../package.json';
  import { useI18n } from 'vue-i18n';
  import { getResouceList } from '@/api/index';

  import { useStore } from 'vuex';
  const store = useStore();

  const { t } = useI18n();

  const state = reactive({
    list: [],
    prefix: '',
    orderList: [],
    skillList: [],
  });

  const hour = new Date().getHours();
  const thisTime =
    hour < 8
      ? t('sayHi.early')
      : hour <= 11
      ? t('sayHi.morning')
      : hour <= 13
      ? t('sayHi.noon')
      : hour < 18
      ? t('sayHi.afternoon')
      : t('sayHi.evening');
  const sayHi = ref(thisTime);
  const avatar = ref('https://i.gtimg.cn/club/item/face/img/2/15922_100.gif');

  const series2 = reactive([
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ]);

  const xAxis = reactive({
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  });

  const yAxis = reactive({
    type: 'value',
  });

  const toolbox = reactive({
    show: true,
  });

  const isMobile = computed(() => {
    return store.getters['setting/isMobile'];
  });

  const onGetResouceList = () => {
    getResouceList().then((res) => {
      const { list, prefix, orderList, skillList } = res.data;
      Object.assign(state, { list, prefix, orderList, skillList });
    });
  };

  const handleToDetail = (url) => {
    window.open(url);
  };

  onBeforeMount(() => {
    onGetResouceList();
  });
</script>

<style lang="scss" scoped>
  .index-conntainer {
    width: $base-width;
    .head-card {
      display: flex;
      align-items: center;
      padding: $base-main-padding;
      background-color: $base-color-white;
      &-content {
        padding-left: 15px;
        .desc {
          color: $base-font-color;
        }
      }
    }
    .content {
      margin: 15px 0;
      .count-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item {
          display: flex;
          flex-direction: column;
          text-align: center;
          .label {
            padding: 10px 0;
            font-size: $base-font-size-big;
          }
          .count {
            font-size: $base-font-size-max;
            font-weight: bolder;
            color: $base-color-primary;
            &.error {
              color: var(--el-color-danger);
            }
            &.success {
              color: var(--el-color-success);
            }
          }
        }
      }
      .title {
        margin: 0;
      }
      .skill-title {
        padding: 10px 0;
        font-weight: 500;
      }
      .card {
        margin-bottom: 15px;
        &-body {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          &.mobile {
            grid-template-columns: repeat(1, 1fr);
          }
          .item {
            box-sizing: border-box;
            padding: 10px 20px;
            margin-top: -1px;
            margin-left: -1px;
            overflow: hidden;
            cursor: pointer;
            border: 1px solid black;
            border: 1px solid #eee;
            transition: box-shadow 0.5;
            .lf {
              display: flex;
              align-items: center;
              max-width: 140px;
              .img {
                width: auto;
                max-width: 120px;
                height: auto;
                max-height: 40px;
              }
            }
            &:hover {
              box-shadow: $base-box-shadow;
            }
            .title {
              padding-left: 5px;
              font-size: 18px;
              font-weight: bold;
            }
            .desc {
              padding: 5px 0;
              font-size: 13px;
              line-height: 1.5;
              color: $base-font-color;
            }
          }
        }
      }
    }
  }
</style>
