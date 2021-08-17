<template>
  <div class="app-main-container">
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <router-view class="app-main-height" />
      </keep-alive>
    </transition>
    <footer class="footer-copyright"> Hu-snail vue3-admin 版权所有 © 2019-2021 </footer>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
  };
</script>

<style lang="scss" scoped>
  .app-main-container {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    .app-main-height {
      min-height: calc(100vh - 60px);
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
