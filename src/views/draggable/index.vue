<template>
  <div class="draggable-container">
    <Descrition title="列表拖拽 vue.draggable">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://github.com/SortableJS/vue.draggable.next" target="_blank">Vue.Draggable</a>
        作为拖拽库
      </template>
    </Descrition>
    <Descrition title="演示" :showDesc="false"></Descrition>
    <div class="draggable-content">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="list">
            <draggable
              :list="myArray"
              group="people"
              :options="{ scroll: true, animation: 150 }"
              @start="drag = true"
              @end="drag = false"
              item-key="id"
            >
              <template #item="{ element }">
                <div class="item">{{ element.id }}-{{ element.name }}</div>
              </template>
            </draggable>
          </div>
          <el-button class="add-btn" type="primary" size="mini" @click="addPeople">Add</el-button>
        </el-col>

        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="res-list">
            <pre>{{ myArray }}</pre>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import draggable from 'vuedraggable';
  export default {
    components: { Descrition, draggable },
    setup() {
      const state = reactive({
        drag: false,
        myArray: [
          {
            id: 1,
            name: '测试',
          },
          {
            id: 2,
            name: '测试',
          },
          {
            id: 3,
            name: '测试',
          },
        ],
      });

      const addPeople = () => {
        let id = state.myArray.length + 1;
        state.myArray.push({ name: '测试', id });
      };

      return {
        ...toRefs(state),
        addPeople,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .draggable-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .list {
      max-width: 450px;
      border: 1px solid $base-border-color;
      .item {
        padding: 10px 15px;
        background-color: $base-color-white;
        border-bottom: 1px dashed $base-border-color;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    .add-btn {
      margin-top: 20px;
    }
    .res-list {
      padding: 15px;
      color: $base-color-default;
      background-color: $base-hover-color;
    }
  }
</style>
