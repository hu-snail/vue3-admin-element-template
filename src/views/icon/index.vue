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
    <div class="search">
      <el-input
        v-model="state.skey"
        placeholder="请输入类型、名称、图标名"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" @click="handleSearchIcon" />
        </template>
      </el-input>
    </div>
    <div class="icon-centent">
      <div
        class="icon-item"
        v-for="(item, index) in state.list"
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
        v-model:currentPage="state.currentPage"
        :page-size="49"
        layout="total, prev, pager, next"
        :total="state.searchFlag ? state.searchList.length : icons.length"
      >
      </el-pagination>
    </div>
    <Descrition :title="t('iconPage.props')" :showDesc="false"></Descrition>
    <el-table :data="state.icon.props" border style="width: 100%">
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

<script setup>
  import { getIcons } from '@/api/icon';
  import { reactive, toRefs, onBeforeMount } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import { useI18n } from 'vue-i18n';
  import icons from '@icon-park/vue-next/icons.json';
  import { ElMessage } from 'element-plus';
  import { Search } from '@element-plus/icons-vue';
  import { toClipboard } from '@soerenmartius/vue3-clipboard';

  const { t } = useI18n();
  const state = reactive({
    icon: {},
    list: [],
    searchList: [],
    currentPage: 1,
    currTotal: 49,
    skey: '',
    searchFlag: false,
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
    console.log(icon)
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
    const iconArr = state.skey ? state.searchList : icons;
    state.list = iconArr.slice(start, end);
  };

  const handleSearchIcon = () => {
    state.currentPage = 1;
    state.currTotal = 49;
    if (!state.skey) {
      state.searchFlag = false;
      state.list = icons.slice(0, 49);
    } else {
      state.searchFlag = true;
      let list = [];
      icons.map((item) => {
        if (
          item.title.indexOf(state.skey) !== -1 ||
          item.name.indexOf(state.skey) !== -1 ||
          item.categoryCN.indexOf(state.skey) !== -1
        ) {
          list.push(item);
        }
      });
      state.searchList = list;
      state.list = state.searchList.slice(state.currentPage - 1, state.currTotal);
    }
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
    .search {
      width: 260px;
      padding: 15px 0;
    }
    .icon-centent {
      display: flex;
      flex-wrap: wrap;
      .icon-item {
        display: flex;
        align-items: center;
        width: calc(100% / 9);
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
          padding-left: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .page {
      padding: 10px 0;
    }
  }
</style>
