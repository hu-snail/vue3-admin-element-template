<template>
  <div class="video-wrapper">
    <Descrition title="音频播放器 xgplayer-music">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://v2.h5player.bytedance.com/music" target="_blank">xgplayer-music</a>
        作为音频播放器
      </template>
    </Descrition>
    <div class="video-body">
      <Descrition title="演示" :showDesc="false"></Descrition>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="basic-demo">
            <AudioPlay />
          </div>
        </el-col>
      </el-row>
      <div class="music-demo">
        <AudioPlay type="music" />
      </div>
    </div>
  </div>
</template>

<script>
  import Descrition from '@/components/Descrition/index.vue';
  import AudioPlay from '@/components/Play/Audio.vue';
  import { reactive, toRefs } from 'vue';
  export default {
    components: { Descrition, AudioPlay },
    setup() {
      const state = reactive({});

      return {
        ...toRefs(state),
      };
    },
  };
</script>

<style lang="scss" scoped>
  .video-wrapper {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .video-body {
      position: relative;
      margin-top: 20px;
      .music-demo {
        position: fixed;
        right: calc(25px);
        bottom: 0;
        left: calc(240px + 25px);
      }
    }
  }
</style>
