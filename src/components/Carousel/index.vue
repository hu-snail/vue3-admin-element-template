<template>
  <el-carousel :interval="4000" type="card" height="260px">
    <el-carousel-item v-for="item in 6" :key="item"> </el-carousel-item>
  </el-carousel>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({});
</script>

<style lang="scss" scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
