<template>
  <div class="admin-container">
    <Mobile v-if="isMobile" />
    <template v-else>
      <el-container v-if="mode === 'vertical'">
        <Menu :isCollapse="isCollapse" class="hidden-xs-only" />
        <el-container class="container" :style="{ left: isCollapse ? '65px' : '240px' }">
          <el-header
            class="header"
            :class="{ fixed: fixedHead, istag: !tag }"
            height="60px"
            :style="{ left: isCollapse ? '65px' : '240px' }"
          >
            <NavBar @handleCollapse="handleCollapse" />
            <template v-if="tag">
              <TabBar />
            </template>
          </el-header>
          <el-main class="main" :class="{ fixed: fixedHead, istag: !tag }">
            <AppMain />
          </el-main>
        </el-container>
      </el-container>
      <Horizontal v-if="mode === 'horizontal'" />
      <el-backtop />
    </template>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const isMobile = computed(() => {
    return store.getters['setting/isMobile'];
  });

  const fixedHead = computed(() => {
    return store.getters['setting/fixedHead'];
  });

  const tag = computed(() => {
    return store.getters['setting/tag'];
  });

  const isCollapse = computed(() => {
    return store.getters.collapse;
  });

  const mode = computed(() => {
    return store.getters['setting/mode'];
  });

  const handleCollapse = () => {
    store.dispatch('setting/changeCollapse');
  };
</script>

<style lang="scss" scoped>
  .admin-container {
    position: relative;
    background-color: $base-content-bg-color;
    .container {
      position: absolute;
      right: 0;
      transition: all 0.4s;
    }
    .header {
      padding: 0;
      transition: all 0.4s;
      &.fixed {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99;
      }
    }
    .main {
      position: relative;
      top: 50px;
      overflow-y: auto;
      &.fixed {
        top: 110px;
      }
      &[class='el-main main fixed istag'] {
        top: 60px;
      }
      &[class='el-main main istag'] {
        top: 0;
      }
      background-color: $base-content-bg-color;
    }
  }
</style>
