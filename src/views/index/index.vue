<template>
  <div class="index-conntainer">
    <div class="head-card">
      <div class="avatar">
        <el-avatar :size="50" :src="avatar"></el-avatar>
      </div>
      <div class="head-card-content">
        <h2 class="title">{{ sayHi }}! Vue3-Admin, 开始您一天的工作吧！</h2>
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
              <h3 class="title">vue3相关资源推荐</h3>
            </template>
            <div class="card-body" :class="{ mobile: isMobile }">
              <div class="item">
                <div class="lf">
                  <img width="120" height="40" src="@/assets/nutui.png" />
                </div>
                <div class="desc"> 京东风格的轻量级移动端 Vue 组件库 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img width="40" height="40" src="https://img.yzcdn.cn/vant/logo.png" />
                  <div class="title">Vant</div>
                </div>
                <div class="desc"> 轻量、可靠的移动端 Vue 组件库 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img width="40" height="40" src="@/assets/antd.svg" />
                  <div class="title">Ant Design</div>
                </div>
                <div class="desc"> 为 Web 应用提供了丰富的基础 UI 组件 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img width="40" height="40" src="https://cn.vitejs.dev/logo.svg" />
                  <div class="title">Vite 中文</div>
                </div>
                <div class="desc"> 下一代前端开发与构建工具 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img width="40" height="40" src="@/assets/logo.png" />
                  <div class="title">Vue3 文档</div>
                </div>
                <div class="desc"> 渐进式JavaScript框架vue3中文文档 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img width="40" height="40" src="@/assets/element+.svg" />
                  <div class="title">ElementPlus</div>
                </div>
                <div class="desc"> 一套基于 Vue 3.0 的桌面端组件库 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img
                    width="120"
                    height="40"
                    src="https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.a33e5114.svg"
                  />
                </div>
                <div class="desc"> 2400+基础图标，29种图标分类，提供更多的选择 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img
                    width="40"
                    height="40"
                    src="https://www.naiveui.com/assets/naivelogo.93278402.svg"
                  />
                  <div class="title">Naiveui</div>
                </div>
                <div class="desc"> 一个 Vue 3 组件库，使用 TypeScript </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img
                    style="width: 120px; height: 100%"
                    src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1"
                  />
                </div>
                <div class="desc"> 一个基于 JavaScript 的开源可视化图表库 </div>
              </div>
              <div class="item">
                <div class="lf">
                  <img
                    width="40"
                    height="40"
                    src="https://cdn.docschina.org/home/logo/xgplayer.png"
                  />
                  <div class="title">XGPlayer</div>
                </div>
                <div class="desc"> 带解析器、能节省流量的 Web 视频播放器 </div>
              </div>
            </div>
          </el-card>
          <el-card class="card" shadow="hover">
            <template #header>
              <h3 class="title">生产环境依赖信息</h3>
            </template>
            <el-descriptions class="margin-top" :column="3" :size="size" border>
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
              <h3 class="title">技能列表</h3>
            </template>
            <div class="skill-title">JavaScript</div>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="50"
              status="success"
            ></el-progress>
            <div class="skill-title">HTML</div>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="90"
              status="warning"
            ></el-progress>
            <div class="skill-title">CSS</div>
            <el-progress :text-inside="true" :stroke-width="15" :percentage="70"></el-progress>
            <div class="skill-title">Vue</div>
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="80"
              status="exception"
            ></el-progress>
          </el-card>
          <el-card class="card" shadow="hover">
            <template #header>
              <h3 class="title">快捷导航</h3>
            </template>
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </el-card>
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
  import packpage from '../../../package.json';
  import { ref, computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  const hour = new Date().getHours();
  const thisTime =
    hour < 8
      ? '早上好'
      : hour <= 11
      ? '上午好'
      : hour <= 13
      ? '中午好'
      : hour < 18
      ? '下午好'
      : '晚上好';
  const sayHi = ref(thisTime);
  const avatar = ref('https://i.gtimg.cn/club/item/face/img/2/15922_100.gif');
  const activities = reactive([
    {
      content: '支持使用图标',
      timestamp: '2018-04-12 20:46',
      size: 'large',
      type: 'primary',
      icon: 'el-icon-more',
    },
    {
      content: '支持自定义颜色',
      timestamp: '2018-04-03 20:46',
      color: '#0bbd87',
    },
    {
      content: '支持自定义尺寸',
      timestamp: '2018-04-03 20:46',
      size: 'large',
    },
    {
      content: '支持空心点',
      timestamp: '2018-04-03 20:46',
      type: 'primary',
      hollow: true,
    },
    {
      content: '默认样式的节点',
      timestamp: '2018-04-03 20:46',
    },
    {
      content: '默认样式的节点',
      timestamp: '2018-04-03 20:46',
    },
  ]);
  const store = useStore();
  const isMobile = computed(() => {
    return store.getters['setting/isMobile'];
  });
</script>

<style lang="scss" scoped>
  .index-conntainer {
    width: 100%;
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
