<template>
  <el-container class="horizontal-container">
    <el-header class="head" :class="{ fixed: settings.fixedHead }">
      <div class="head-nav">
        <Logo v-if="settings.isLogo" />
        <el-menu
          class="menu"
          :default-active="defaultActive"
          background-color="#fff"
          :unique-opened="uniqueOpenedFlag"
          text-color="#333"
          router
          mode="horizontal"
        >
          <template v-for="item in routes">
            <template v-if="!item.hidden">
              <MenuItem :item="item" :key="item.path" />
            </template>
          </template>
        </el-menu>
        <RightPanel />
      </div>
      <TabBar class="tag" v-if="tag" />
    </el-header>
    <el-main class="main" :class="{ fixed: settings.fixedHead }">
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

  const defaultActive = computed(() => {
    const { fullPath } = router.currentRoute.value;
    return fullPath || '/index';
  });
</script>

<style lang="scss" scoped>
  .horizontal-container {
    position: relative;
    .head {
      background: $base-color-white;
      &-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
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
        margin-top: -1px;
      }
    }
    .main {
      margin: 50px 20px 0 20px;

      &.fixed {
        margin-top: 110px;
      }
    }
  }
</style>
