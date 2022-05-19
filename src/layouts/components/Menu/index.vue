<template>
  <el-scrollbar height="100vh">
    <el-menu
      :default-active="defaultActive"
      :background-color="menuBgColor"
      :default-openeds="defaultOpened"
      :unique-opened="uniqueOpenedFlag"
      class="el-menu-vertical"
      :class="{ 'is-black': isBlack }"
      :collapse="isCollapse"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      router
      :mode="mode"
      @open="handleOpen"
      @close="handleClose"
    >
      <Logo v-if="isLogo" />
      <template v-for="item in routes">
        <template v-if="!item.hidden">
          <MenuItem :item="{ ...item, isBlack }" :key="item.path" />
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  export default {
    name: 'Menu',
  };
</script>

<script setup>
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  import { setting } from '@/config/setting';
  const { defaultOpeneds, uniqueOpened } = setting;

  import { themeConfig } from '@/config/theme';
  const { themeOptions } = themeConfig;

  const whiteColors = ['#fff', '#ffffff', '#FFF', '#FFF', 'rgb(255, 255, 255)'];

  defineProps({
    isCollapse: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'vertical',
    },
  });

  const uniqueOpenedFlag = ref(uniqueOpened);

  const store = useStore();
  const router = useRouter();

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

  const routes = computed(() => {
    return store.getters['routes/routes'];
  });

  const isLogo = computed(() => {
    return store.getters['setting/isLogo'];
  });

  const defaultOpened = computed(() => {
    return defaultOpeneds;
  });

  const defaultActive = computed(() => {
    const { fullPath } = router.currentRoute.value;
    return fullPath || '/index';
  });

  const handleOpen = (key, keyPath) => {
    console.log('open:', key, keyPath);
  };

  const handleClose = (key, keyPath) => {
    console.log('close:', key, keyPath);
  };
</script>

<style lang="scss" scoped>
  .el-menu-vertical {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    @include base-scrollbar;
    &:not(.el-menu--collapse) {
      width: $base-menu-width;
    }
  }
</style>
