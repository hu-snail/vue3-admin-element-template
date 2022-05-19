<template>
  <div class="right-panel">
    <theme
      class="icon-hover theme"
      :title="t('navbar.theme')"
      theme="outline"
      :strokeWidth="4"
      size="16"
      :fill="color"
      @click="handleChangeTheme"
    />
    <el-popover v-if="settings.notice" placement="bottom" :width="320" trigger="hover">
      <template #reference>
        <remind
          class="icon-hover refresh"
          theme="outline"
          size="16"
          :fill="color"
          :strokeWidth="3"
        />
      </template>
      <div class="message-box">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane :label="`${t('tabs.notice')} (5)`" name="first">
            <Cell :list="noticeList" />
          </el-tab-pane>
          <el-tab-pane :label="`${t('tabs.message')} (0)`" name="second">暂无消息</el-tab-pane>
          <el-tab-pane :label="`${t('tabs.email')} (0)`" name="third">暂无邮件</el-tab-pane>
        </el-tabs>
      </div>
    </el-popover>

    <FullScreen :color="color" v-if="settings.fullScreen" @refresh="onRefresh" />
    <LangChange :color="color" />
    <refresh
      v-if="settings.refresh"
      :title="t('navbar.refresh')"
      @click="handleRefresh"
      class="icon-hover refresh"
      theme="filled"
      size="16"
      :fill="color"
      :strokeWidth="4"
    />
    <Avatar :color="color" />
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
  defineProps({
    color: {
      type: String,
      default: '#666',
    },
  });
  import { noticeList } from './data';

  import FullScreen from '@/components/FullScreen/index.vue';
  import Cell from '@/components/Cell/index.vue';
  import LangChange from '@/components/LangChange/index.vue';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

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
      :deep(.el-badge__content.is-fixed) {
        right: calc(10px + var(--el-badge-size) / 2);
      }
    }
    .refresh,
    .theme {
      padding: $base-padding-20-10;
    }
  }
  .message-box {
    padding: $base-padding-5-15;
    :deep(.el-tabs__active-bar) {
      width: $base-tab-width_active !important;
    }
  }
</style>
