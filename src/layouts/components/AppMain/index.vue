<template>
  <div v-if="store.getters['setting/routerView']" class="app-main-container">
    <transition mode="out-in" name="fade-transform">
      <router-view class="app-main-height" />
    </transition>
    <footer class="footer-copyright"> Hu-snail {{ copyrightStr }} 版权所有 © 2021 </footer>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
  };
</script>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { setting } from '@/config/setting';
  const { copyright } = setting;

  const copyrightStr = ref(copyright);
  const store = useStore();
</script>

<style lang="scss" scoped>
  .app-main-container {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    text-align: left;
    .app-main-height {
      min-height: calc(100vh - 140px);
    }
    .footer-copyright {
      min-height: 55px;
      line-height: 55px;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      border-top: 1px dashed $base-border-color;
    }
  }
</style>
