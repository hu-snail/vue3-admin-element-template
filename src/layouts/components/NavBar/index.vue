<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <el-tooltip effect="dark" :content="collapse ? '展开' : '收起'" placement="bottom">
            <component
              class="icon-hover fold"
              :is="collapse ? 'menu-fold-one' : 'menu-unfold-one'"
              theme="outline"
              size="24"
              fill="#333"
              @click="handleCollapse"
            />
          </el-tooltip>
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <FullScreen @refresh="onRefresh" />
          <el-tooltip effect="dark" content="刷新" placement="bottom">
            <refresh
              class="icon-hover refresh"
              theme="filled"
              size="18"
              fill="#333"
              :strokeWidth="3"
            />
          </el-tooltip>
          <Avatar />
          <!--  <vab-icon
            title="退出系统"
            :icon="['fas', 'sign-out-alt']"
            @click="logout"
          />-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  };
</script>

<script setup>
  import { defineEmits, computed } from 'vue';
  import { useStore } from 'vuex';

  import Avatar from '../Avatar/index.vue';
  import FullScreen from '@/components/FullScreen/index.vue';
  const store = useStore();
  const collapse = computed(() => {
    return store.getters.collapse;
  });
  const emit = defineEmits(['handleCollapse']);
  const handleCollapse = () => {
    emit('handleCollapse');
  };
  const onRefresh = (value) => {
    console.log(value);
  };
</script>

<style lang="scss" scoped>
  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;
    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;
      .fold-unfold {
        color: $base-color-gray;
        cursor: pointer;
      }
      .fold {
        padding: 20px 10px;
      }
      :deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;
      .refresh {
        padding: 20px 10px;
      }
    }
  }
</style>
