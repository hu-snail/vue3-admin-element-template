<template>
  <div class="icon-container">
    <Descrition :title="t('iconPage.title')">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://iconpark.oceanengine.com/official" target="_blank">IconPark</a>
        作为图标库
      </template>
    </Descrition>
    <Descrition :title="t('iconPage.demo')" :showDesc="false"></Descrition>
    <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="skey"> </el-input> -->
    <div class="icon-centent">
      <div
        class="icon-item"
        v-for="(item, index) in list"
        @click="handleClickChip('icon-' + item.name)"
        :key="index"
      >
        <component class="icon-name" size="20" :is="'icon-' + item.name" />
        <p class="icon-title">{{ item.name }}</p>
      </div>
    </div>
    <div class="page">
      <el-pagination
        @current-change="handleCurrentChange"
        v-model:currentPage="currentPage"
        :page-size="49"
        layout="total, prev, pager, next"
        :total="icons.length"
      >
      </el-pagination>
    </div>
    <Descrition :title="t('iconPage.props')" :showDesc="false"></Descrition>
    <el-table :data="icon.props" border style="width: 100%">
      <el-table-column prop="param" :label="t('iconPage.table.label1')" width="180">
      </el-table-column>
      <el-table-column prop="type" :label="t('iconPage.table.label2')" width="180">
      </el-table-column>
      <el-table-column prop="all" :label="t('iconPage.table.label3')"> </el-table-column>
      <el-table-column prop="default" :label="t('iconPage.table.label4')"> </el-table-column>
      <el-table-column prop="desc" :label="t('iconPage.table.label5')"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getIcons } from '@/api/icon';
  import { reactive, toRefs, onBeforeMount } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import { useI18n } from 'vue-i18n';
  import icons from '@icon-park/vue-next/icons.json';
  import { ElMessage } from 'element-plus';
  import { toClipboard } from '@soerenmartius/vue3-clipboard';
  export default {
    components: { Descrition },
    setup() {
      const { t } = useI18n();
      const state = reactive({
        icon: {},
        list: [],
        currentPage: 1,
        currTotal: 49,
        skey: '',
      });

      onBeforeMount(async () => {
        state.list = icons.slice(state.currentPage - 1, state.currTotal);
        await handleGetIcons();
      });

      const handleGetIcons = async () => {
        getIcons().then((res) => {
          state.icon = res.data;
        });
      };

      const handleClickChip = (icon) => {
        toClipboard(icon);
        ElMessage({
          message: '复制成功:' + icon,
          type: 'success',
        });
      };

      const handleCurrentChange = (val) => {
        state.currentPage = val;
        const start = val * 49 - 49;
        const end = val * 49;
        state.list = icons.slice(start, end);
      };

      return {
        ...toRefs(state),
        handleClickChip,
        handleCurrentChange,
        t,
        icons,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .icon-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .title {
      &.reset {
        margin-top: 40px;
      }
    }
    .icon-centent {
      display: flex;
      flex-wrap: wrap;
      .icon-item {
        width: calc(100% / 9);
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
        .icon-title {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-left: 5px;
        }
      }
    }
    .page {
      padding: 10px 0;
    }
  }
</style>
