<template>
  <el-scrollbar height="100vh">
    <el-menu
      :default-active="defaultActive"
      background-color="#fff"
      :default-openeds="defaultOpened"
      :unique-opened="uniqueOpenedFlag"
      class="el-menu-vertical"
      :collapse="isCollapse"
      text-color="#333"
      router
      :mode="mode"
      @open="handleOpen"
      @close="handleClose"
    >
      <Logo v-if="isLogo" />
      <template v-for="item in routes">
        <template v-if="!item.hidden">
          <MenuItem :item="item" :key="item.path" />
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { defineProps, computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Logo from '../Logo/index.vue';
  import MenuItem from './MenuItem.vue';
  import { useStore } from 'vuex';
  import { setting } from '@/config/setting';
  const { defaultOpeneds, uniqueOpened } = setting;
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
      width: 240px;
    }
  }
</style>
