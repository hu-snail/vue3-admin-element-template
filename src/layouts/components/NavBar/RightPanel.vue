<template>
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
    <el-popover v-if="settings.notice" placement="bottom" :width="320" trigger="hover">
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

    <FullScreen v-if="settings.fullScreen" @refresh="onRefresh" />
    <LangChange />
    <refresh
      v-if="settings.refresh"
      title="刷新"
      @click="handleRefresh"
      class="icon-hover refresh"
      theme="filled"
      size="16"
      fill="#666"
      :strokeWidth="4"
    />
    <Avatar />
    <ThemeSetting />
  </div>
</template>

<script>
  export default {
    name: 'RightPanel',
  };
</script>

<script setup>
  import { computed, nextTick, ref } from 'vue';

  import { noticeList } from './data';

  import FullScreen from '@/components/FullScreen/index.vue';
  import Cell from '@/components/Cell/index.vue';
  import LangChange from '@/components/LangChange/index.vue';

  import { useStore } from 'vuex';

  const store = useStore();

  let activeName = ref('first');

  const settings = computed(() => {
    return store.getters['setting/settings'];
  });

  const onRefresh = () => {};

  const handleRefresh = () => {
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
  .message-box {
    padding: 5px 15px;
    :deep {
      .el-tabs__active-bar {
        width: 70px !important;
      }
    }
  }
</style>
