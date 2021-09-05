<template>
  <div class="video-wrapper">
    <Descrition title="视频播放器 Xgplayer">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://v2.h5player.bytedance.com/gettingStarted/" target="_blank">Xgplayer</a>
        作为视频播放器, 一款带解析器、能节省流量的HTML5视频播放器
      </template>
    </Descrition>
    <div class="video-body">
      <Descrition title="演示" :showDesc="false"></Descrition>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10"
          ><el-form ref="form" :model="checkform" label-width="80px">
            <el-form-item label="播放格式">
              <el-radio-group v-model="type">
                <el-radio label="MP4"></el-radio>
                <el-radio label="HLS"></el-radio>
                <el-radio label="FLV"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="播放地址">
              <el-input v-model="checkform.url" placeholder="请输入播放地址"></el-input>
            </el-form-item>
            <el-form-item label="视频宽度">
              <el-input v-model="checkform.width" placeholder="请输入视频宽度"></el-input>
            </el-form-item>
            <el-form-item label="视频高度">
              <el-input v-model="checkform.height" placeholder="请输入视频高度"></el-input>
            </el-form-item>
            <el-form-item label="视频封面">
              <el-input v-model="checkform.poster" placeholder="请输入视频封面"></el-input>
            </el-form-item>
            <el-form-item label="自动播放">
              <el-switch
                v-model="checkform.autoplay"
                active-color="#13ce66"
                inactive-color="#e4e7ed"
              />
            </el-form-item>
            <el-form-item label="预设音量">
              <el-slider v-model="checkform.volume" :step="0.1" :max="1" show-stops> </el-slider>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-play" size="small" @click="onSubmit"
                >运行</el-button
              >
            </el-form-item>
          </el-form></el-col
        >
        <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
          <VideoPlayer v-if="reload" ref="player" :options="checkform" class="video-player" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Descrition from '@/components/Descrition/index.vue';
  import VideoPlayer from '@/components/Play/Video.vue';
  import { reactive, toRefs, ref, nextTick } from 'vue';
  export default {
    components: { Descrition, VideoPlayer },
    setup() {
      const player = ref(null);
      const state = reactive({
        reload: true,
        type: 'MP4',
        checkform: {
          url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
          width: 'auto',
          height: 400,
          poster: 'https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
          autoplay: false,
          volume: 0.6,
        },
      });

      const onSubmit = () => {
        Object.assign(player.value.player.config, state.checkform);
        state.reload = false;
        nextTick(() => {
          state.reload = true;
        });
      };

      const formatTooltip = (val) => {
        return val / 10;
      };

      return {
        ...toRefs(state),
        player,
        onSubmit,
        formatTooltip,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .video-wrapper {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .video-body {
      margin-top: 20px;
      .video-demo {
        display: flex;
        .form {
          flex: 0.6;
        }
        .video-player {
          flex: 1;
          margin-left: 20px;
        }
      }
    }
  }
</style>
