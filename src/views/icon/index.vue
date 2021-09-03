<template>
  <div class="icon-container">
    <h2 class="title">图标 Icon</h2>
    <div class="desc">
      Vue3-admin 推荐使用
      <a href="https://iconpark.oceanengine.com/official" target="_blank">IconPark</a>
      作为图标库
    </div>
    <h2 class="title reset">演示</h2>
    <div class="icon-centent">
      <div class="icon-item" v-for="(item, index) in icon.icons" :key="index">
        <component class="icon-name" size="20" :is="item.name" />
        <p class="icon-title">{{ item.name }}</p>
      </div>
    </div>
    <h2 class="title reset">属性 Props</h2>
    <el-table :data="icon.props" border style="width: 100%">
      <el-table-column prop="param" label="参数" width="180"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="all" label="可选值"> </el-table-column>
      <el-table-column prop="default" label="默认值"> </el-table-column>
      <el-table-column prop="desc" label="说明"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getIcons } from '@/api/icon';
  import { reactive, toRefs, onBeforeMount } from 'vue';
  export default {
    setup() {
      const state = reactive({
        icon: {},
      });

      onBeforeMount(async () => {
        await handleGetIcons();
      });

      const handleGetIcons = async () => {
        getIcons().then((res) => {
          state.icon = res.data;
        });
      };

      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="scss" scoped>
  .icon-container {
    padding: 20px 30px;
    background-color: $base-color-white;
    .desc {
      padding: 15px 20px;
      background-color: rgba($base-color-default, 0.1);
      border-left: 5px solid $base-color-default;
    }
    .title {
      &.reset {
        margin-top: 40px;
      }
    }
    .icon-centent {
      display: flex;
      flex-wrap: wrap;
      .icon-item {
        display: flex;
        align-items: center;
        padding: 5px 15px;
        margin: 5px;
        cursor: pointer;
        border-radius: 6px;
        box-shadow: $base-box-shadow;
        .icon-name {
          width: 30px;
          width: 30px;
        }
      }
    }
  }
</style>
