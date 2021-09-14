<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <component
            :title="collapse ? '展开' : '收起'"
            class="icon-hover fold"
            :is="collapse ? 'menu-fold-one' : 'menu-unfold-one'"
            theme="filled"
            size="16"
            :strokeWidth="4"
            fill="#666"
            @click="handleCollapse"
          />
          <Breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <theme
            class="icon-hover theme"
            title="切换皮肤"
            theme="outline"
            :strokeWidth="4"
            size="16"
            fill="#666"
            @click="handleChangeTheme"
          />
          <el-popover placement="bottom" :width="320" trigger="hover">
            <template #reference>
              <el-badge type="danger" :value="5" class="msg-badge">
                <remind
                  title="消息通知"
                  class="icon-hover refresh"
                  theme="outline"
                  size="16"
                  fill="#666"
                  :strokeWidth="3"
                />
              </el-badge>
            </template>
            <div class="message-box">
              <el-tabs v-model="activeName" stretch @tab-click="handleClick">
                <el-tab-pane label="通知 (5)" name="first">
                  <Cell :list="noticeList" />
                </el-tab-pane>
                <el-tab-pane label="消息 (0)" name="second">暂无消息</el-tab-pane>
                <el-tab-pane label="邮件 (0)" name="third">暂无邮件</el-tab-pane>
              </el-tabs>
            </div>
          </el-popover>

          <FullScreen @refresh="onRefresh" />
          <refresh
            title="刷新"
            @click="handleRefresh"
            class="icon-hover refresh"
            theme="filled"
            size="16"
            fill="#666"
            :strokeWidth="4"
          />
          <Avatar />
          <!--  <vab-icon
            title="退出系统"
            :icon="['fas', 'sign-out-alt']"
            @click="logout"
          />-->
        </div>
      </el-col>
    </el-row>
    <ThemeSetting />
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  };
</script>

<script setup>
  import { defineEmits, computed, nextTick, ref } from 'vue';
  import { useStore } from 'vuex';

  import { noticeList } from './data';

  import Avatar from '../Avatar/index.vue';
  import FullScreen from '@/components/FullScreen/index.vue';
  import Breadcrumb from '../Breadcrumb/index.vue';
  import Cell from '@/components/Cell/index.vue';
  import ThemeSetting from '../ThemeSetting/index.vue';
  const store = useStore();

  let activeName = ref('first');

  const collapse = computed(() => {
    return store.getters.collapse;
  });

  const emit = defineEmits(['handleCollapse']);
  const handleCollapse = () => {
    emit('handleCollapse');
  };
  const onRefresh = (value) => {};

  const handleRefresh = (val) => {
    store.dispatch('setting/setRouterView', false);
    nextTick(() => {
      store.dispatch('setting/setRouterView', true);
    });
  };

  const handleChangeTheme = () => {
    store.dispatch('setting/setSettingDrawer', true);
  };
</script>

<style lang="scss" scoped>
  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;
    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;
      .fold-unfold {
        color: $base-color-gray;
        cursor: pointer;
      }
      .fold {
        padding: 20px 10px;
      }
      :deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;
      .msg-badge {
        :deep {
          .el-badge__content.is-fixed {
            right: calc(10px + var(--el-badge-size) / 2);
          }
        }
      }
      .refresh,
      .theme {
        padding: 20px 10px;
      }
    }
  }
  .message-box {
    padding: 5px 15px;
    :deep {
      .el-tabs__active-bar {
        width: 70px !important;
      }
    }
  }
</style>
