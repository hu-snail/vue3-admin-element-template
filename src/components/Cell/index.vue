<template>
  <div class="cell-container">
    <div class="cell-item">
      <div class="cell-item-meta-avatar">
        <div class="icon-box">
          <mail class="icon" theme="outline" size="16" :strokeWidth="3" />
        </div>
      </div>
      <div class="cell-item-meta-content">
        <div class="cell-item-meta-title">您收到一条消息</div>
        <div class="cell-item-meta-desc">
          <div class="time">2021-8-26</div>
        </div>
      </div>
    </div>
    <div class="cell-item">
      <div class="cell-item-meta-avatar">
        <div class="icon-box"></div>
      </div>
      <div class="cell-item-meta-content">
        <div class="cell-item-meta-title">您收到一条消息</div>
        <div class="cell-item-meta-desc">
          <div class="time">2021-8-26</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cell-container {
    position: relative;
    box-sizing: border-box;
    transition: all 0.3s;
    .cell-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      cursor: pointer;
      border-bottom: 1px solid $base-border-color;
      &:last-child {
        border-bottom: 0;
      }
      .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        line-height: 32px;
        color: $base-color-white;
        text-align: center;
        background-color: #f45;
        border-radius: 50%;
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
          font-size: 14px;
          line-height: 1.5715;
          color: $base-color-black;
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
