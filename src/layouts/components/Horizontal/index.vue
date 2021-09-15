<template>
  <el-container class="horizontal-container">
    <el-header class="head">
      <Logo />
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
    </el-header>
    <TabBar />
    <el-main class="main">
      <AppMain />
    </el-main>
  </el-container>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import RightPanel from '../NavBar/RightPanel.vue';
  import Logo from '../Logo/index.vue';
  import MenuItem from '../Menu/MenuItem.vue';
  import TabBar from '../TabBar/index.vue';
  import AppMain from '../AppMain/index.vue';
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

  const defaultActive = computed(() => {
    const { fullPath } = router.currentRoute.value;
    return fullPath || '/index';
  });
</script>

<style lang="scss" scoped>
  .horizontal-container {
    position: relative;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
      background: $base-color-white;
      .menu {
        flex: 1;
      }
    }
    .main {
      margin: 0 20px;
    }
  }
</style>
