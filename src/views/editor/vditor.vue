<template>
  <div class="vditor-wrapper">
    <Descrition title="Markdown Vditor">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://b3log.org/vditor/" target="_blank">Vditor</a>
        作为Markdown编辑器
      </template>
    </Descrition>
    <div class="vditor-body">
      <Descrition title="演示" :showDesc="false"></Descrition>
      <Vditor v-model:value="content" />
    </div>
  </div>
</template>

<script>
  import Vditor from '@/components/Editor/Vditor.vue';
  import Descrition from '@/components/Descrition/index.vue';
  import { reactive, toRefs, watch } from 'vue';
  export default {
    components: { Vditor, Descrition },
    setup() {
      const state = reactive({
        content: '<div></div>',
      });

      watch(
        () => state.content,
        (val) => {
          console.log(val, '---');
        },
        {
          immediate: true,
        }
      );
      return {
        ...toRefs(state),
      };
    },
  };
</script>

<style lang="scss" scoped>
  .vditor-wrapper {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .vditor-body {
      margin-top: 20px;
    }
  }
</style>
