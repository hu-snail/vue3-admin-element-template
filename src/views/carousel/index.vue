<template>
  <div class="carousel-wrapper">
    <Descrition title="轮播 el-carousel">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://element-plus.gitee.io/#/zh-CN/component/carousel" target="_blank"
          >el-carousel</a
        >
        作为轮播组件
      </template>
    </Descrition>
    <div class="video-body">
      <Descrition title="演示" :showDesc="false"></Descrition>
      <div class="carousel-content">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script>
  import Descrition from '@/components/Descrition/index.vue';
  import Carousel from '@/components/Carousel/index.vue';
  import { reactive, toRefs } from 'vue';
  export default {
    components: { Descrition, Carousel },
    setup() {
      const state = reactive({});

      return {
        ...toRefs(state),
      };
    },
  };
</script>

<style lang="scss" scoped>
  .carousel-wrapper {
    padding: $base-main-padding;
    background-color: $base-color-white;
  }
</style>
