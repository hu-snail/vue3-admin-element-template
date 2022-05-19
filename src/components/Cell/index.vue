<template>
  <div class="cell-container">
    <div class="cell-item" v-for="(item, index) in list" :key="index">
      <div class="cell-item-meta-avatar">
        <div class="icon-box" v-if="item.icon">
          <component class="icon" theme="outline" size="16" :strokeWidth="3" :is="item.icon" />
        </div>
      </div>
      <div class="cell-item-meta-content">
        <div class="cell-item-meta-title">{{ item[name] }}</div>
        <div class="cell-item-meta-desc">
          <div class="time">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    // 数据
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // key
    name: {
      type: String,
      default: 'title',
    },
  });
</script>

<style lang="scss" scoped>
  .cell-container {
    position: relative;
    box-sizing: border-box;
    transition: all $base-transition-time;
    .cell-item {
      display: flex;
      justify-content: space-between;
      padding: $base-cell-item-padding;
      cursor: pointer;
      border-bottom: $base-border-width-mini solid $base-border-color;
      &:last-child {
        border-bottom: $base-border-none;
      }
      .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: $base-icon-width-super-max;
        height: $base-icon-width-super-max;
        line-height: $base-icon-width-super-max;
        color: $base-color-white;
        text-align: center;
        background-color: $base-color-primary;
        border-radius: $base-border-radius-circle;
        .icon {
          display: inline-flex;
        }
      }
      &-meta {
        display: flex;
        flex: 1;
        align-items: flex-start;
        max-width: 100%;
        &-avatar {
          padding-right: 10px;
        }
        &-content {
          flex: 1 0;
          width: 0;
        }
        &-title {
          margin-bottom: 4px;
          overflow: hidden;
          font-size: 14px;
          line-height: 1.5715;
          color: $base-color-black;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &-desc {
          font-size: 14px;
          line-height: 1.5715;
          .time {
            font-size: 13px;
            color: $base-font-color;
          }
        }
      }
    }
  }
</style>
