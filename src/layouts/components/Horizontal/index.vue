<template>
  <el-container class="horizontal-container">
    <el-header
      :style="{ 'background-color': menuBgColor }"
      class="head"
      :class="{ fixed: settings.fixedHead }"
    >
      <div class="head-nav">
        <Logo v-if="settings.isLogo" />
        <el-menu
          class="menu"
          :class="{ 'is-black': isBlack }"
          :default-active="defaultActive"
          :background-color="menuBgColor"
          :text-color="textColor"
          :active-text-color="activeTextColor"
          :unique-opened="uniqueOpenedFlag"
          router
          mode="horizontal"
        >
          <template v-for="item in routes">
            <template v-if="!item.hidden">
              <MenuItem :item="item" :key="item.path" />
            </template>
          </template>
        </el-menu>
        <RightPanel :class="{ 'is-black': isBlack }" :color="isBlack ? '#fff' : '#666'" />
      </div>
      <TabBar class="tag" v-if="tag" />
    </el-header>
    <el-main class="main" :class="{ fixed: settings.fixedHead, istag: tag }">
      <AppMain />
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Horizontal',
  };
</script>

<script setup>
  import { computed, ref } from 'vue';
  import { setting } from '@/config/setting';
  const { uniqueOpened } = setting;

  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';

  import { themeConfig } from '@/config/theme';
  const { themeOptions } = themeConfig;

  const whiteColors = ['#fff', '#ffffff', '#FFF', '#FFF', 'rgb(255, 255, 255)'];

  const uniqueOpenedFlag = ref(uniqueOpened);
  const store = useStore();
  const router = useRouter();

  const routes = computed(() => {
    return store.getters['routes/routes'];
  });

  const settings = computed(() => {
    return store.getters['setting/settings'];
  });

  const tag = computed(() => {
    return store.getters['setting/tag'];
  });

  const theme = computed(() => {
    return store.getters['setting/theme'];
  });

  const menuBgColor = computed(() => {
    return themeOptions[theme.value].menuBgColor;
  });

  const isBlack = computed(() => {
    return whiteColors.indexOf(menuBgColor.value) === -1;
  });

  const textColor = computed(() => {
    return whiteColors.indexOf(menuBgColor.value) !== -1 ? '#333' : '#fff';
  });

  const activeTextColor = computed(() => {
    const mcolor = whiteColors.indexOf(menuBgColor.value) !== -1;
    return mcolor ? theme : '#fff';
  });

  const defaultActive = computed(() => {
    const { fullPath } = router.currentRoute.value;
    return fullPath || '/index';
  });
</script>

<style lang="scss" scoped>
  .horizontal-container {
    position: relative;
    align-items: center;
    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: $base-width;
      transition: background-color $base-transition-time;
      &-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
      }

      .menu {
        flex: 1;
      }
      &.fixed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 99;
      }
      .tag {
        width: $base-width;
        padding: 5px 5%;
        margin-top: -1px;
      }
    }
    .main {
      width: calc(90% + 40px);
      margin: 50px 20px 0 20px;
      &[class='el-main main fixed istag'] {
        margin-top: $base-main-fixed-top;
      }
      &[class='el-main main fixed'] {
        margin-top: $base-main-vertical-fixed-notag-top;
      }
      &[class='el-main main'] {
        margin-top: $base-main-notag-top;
      }
    }
    .is-black {
      :deep(.icon-hover:hover) {
        background-color: transparent;
      }
    }
  }
</style>
