<template>
  <div class="audio">
    <div id="music" class="xg-music"></div>
    <div class="basic-player" v-if="type === 'basic'">
      <div class="play">
        <Icon
          :name="isPlay ? 'pause-one' : 'play'"
          size="24"
          color="#fff"
          @click="handleTogglePlayStatus"
        />
      </div>
      <div class="play-info">
        <div class="play-info-title">林宥嘉·脆弱一分钟</div>
        <div class="play-info-bottom">
          <div class="progress">
            <el-slider
              v-model="progess"
              :max="durationTime"
              :step="0.1"
              :show-tooltip="false"
              @change="handleInputProgress"
            ></el-slider>
          </div>
          <div class="time">{{ currentTime }} / {{ duration }}</div>
          <div class="volume">
            <Icon size="12" :name="volume >= 0.1 ? 'volume-notice' : 'volume-mute'" />
            <div class="volume-slider">
              <el-slider
                v-model="volume"
                vertical
                height="50px"
                :step="0.1"
                :max="1"
                :show-tooltip="false"
                @input="handleInputVolume"
              ></el-slider>
            </div>
          </div>
          <div class="loop">
            <Icon size="12" :name="isLoop ? 'play-cycle' : 'play-once'" @click="handleToggleLoop" />
          </div>
        </div>
      </div>
    </div>
    <el-row class="music-player" :gutter="10" v-if="type === 'music'">
      <div class="progress">
        <el-slider
          v-model="progess"
          :max="durationTime"
          :step="0.1"
          :show-tooltip="false"
          @change="handleInputProgress"
        ></el-slider>
      </div>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="music-info">
          <div class="music-info-cover"> </div>
          <div class="music-info-content">
            <div class="music-info-content_head">
              <span class="title">脆弱一分钟</span>
              <span class="name"> - 林宥嘉</span>
            </div>
            <div class="music-info-content_time"> {{ currentTime }} / {{ duration }} </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="music-play-warp">
          <div class="icon-item">
            <Icon size="24" name="go-start" @click="handleToggleLoop" />
          </div>
          <div class="icon-item play">
            <Icon
              theme="filled"
              size="40"
              :name="isPlay ? 'pause-one' : 'play'"
              color="#08a17e"
              @click="handleTogglePlayStatus"
            />
          </div>
          <div class="icon-item">
            <Icon size="24" name="go-end" @click="handleToggleLoop" />
          </div>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="music-control">
          <div class="icon-item">
            <Icon size="18" :name="isLoop ? 'play-cycle' : 'play-once'" @click="handleToggleLoop" />
          </div>
          <el-popover placement="top" :width="400" trigger="click">
            <template #reference>
              <div class="icon-item">
                <Icon size="18" name="music-list" />
              </div>
            </template>
            <div class="music-list">
              <h3 class="music-list-title">播放列表</h3>
              <div class="item">
                <div class="index">1</div>
                <div class="item-content">
                  <div class="title">脆弱一分钟</div>
                  <div class="name">林宥嘉</div>
                </div>
              </div>
              <div class="item">
                <div class="index">2</div>
                <div class="item-content">
                  <div class="title">脆弱一分钟</div>
                  <div class="name">林宥嘉</div>
                </div>
              </div>
              <div class="item">
                <div class="index">3</div>
                <div class="item-content">
                  <div class="title">脆弱一分钟</div>
                  <div class="name">林宥嘉</div>
                </div>
              </div>
              <div class="item">
                <div class="index">4</div>
                <div class="item-content">
                  <div class="title">脆弱一分钟</div>
                  <div class="name">林宥嘉</div>
                </div>
              </div>
              <div class="item">
                <div class="index">5</div>
                <div class="item-content">
                  <div class="title">脆弱一分钟</div>
                  <div class="name">林宥嘉</div>
                </div>
              </div>
            </div>
          </el-popover>

          <div class="icon-item">
            <Icon size="18" :name="volume >= 0.1 ? 'volume-notice' : 'volume-mute'" />
            <div class="volume-slider">
              <el-slider
                v-model="volume"
                vertical
                height="50px"
                :step="0.1"
                :max="1"
                :show-tooltip="false"
                @input="handleInputVolume"
              ></el-slider>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- <el-progress type="circle" :percentage="190" status="success">
      <el-button type="success" icon="el-icon-check" circle></el-button>
    </el-progress> -->
  </div>
</template>

<script>
  import { reactive, toRefs, onMounted } from 'vue';
  import Music from 'xgplayer-music';
  import Icon from '@/components/Icon/index.vue';
  export default {
    components: { Icon },
    props: {
      type: {
        type: String,
        default: 'basic', // basic 基础版本 mini music 标准音乐版本
      },
      theme: {
        type: String,
        default: '',
      },
    },
    setup() {
      const state = reactive({
        player: null,
        isPlay: false,
        isBasic: false,
        volume: 0.8,
        isLoop: true,
        progess: 0,
        currentTime: '00:00',
        duration: '00:00',
        durationTime: 0,
      });

      onMounted(() => {
        state.player = new Music({
          id: 'music',
          url: [
            {
              src: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3',
              name: '林宥嘉·脆弱一分钟',
              poster:
                '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/poster-small.jpeg',
            },
          ],
          volumeShow: true,
          volume: 0.8,
          width: 900,
          height: 50,
          loop: false,
          preloadNext: true,
          switchKeepProgress: false,
        });

        state.player.on('durationchange', function () {
          state.durationTime = Math.floor(this.duration);
          state.currentTime = formateTime(this.currentTime);
          state.duration = formateTime(this.duration);
        });

        state.player.on('timeupdate', function () {
          state.currentTime = formateTime(this.currentTime);
          state.progess = Math.floor(this.currentTime);
          if (!this.currentTime) state.isPlay = false;
        });

        state.player.on('waiting', function () {
          state.isPlay = false;
        });

        state.player.on('playing', function () {
          state.isPlay = true;
        });

        state.player.on('loadeddata', function () {});

        state.player.on('ended', function () {
          state.isPlay = false;
        });

        state.player.on('error', function () {
          state.isPlay = false;
        });

        console.log(state.player);
      });

      const formateTime = (duration) => {
        let mintues = Math.floor(duration / 60) % 60;
        let seconeds = Math.floor(duration / 1) % 60;
        let timeStr =
          (mintues > 9 ? mintues : `0${mintues}`) +
          ':' +
          (seconeds > 9 ? seconeds : `0${seconeds}`);
        return timeStr;
      };

      const handleTogglePlayStatus = () => {
        if (!state.isPlay) state.player.play();
        else state.player.pause();
        state.isPlay = !state.isPlay;
      };

      const handleToggleLoop = () => {
        if (state.isLoop) state.player.mode = 0;
        else state.player.mode = 2;
        state.isLoop = !state.isLoop;
      };

      const handleInputVolume = (val) => {
        state.player.volume = val;
      };

      const handleInputProgress = (val) => {
        console.log(val);
        state.player.currentTime = val;
      };

      return {
        ...toRefs(state),
        handleTogglePlayStatus,
        formateTime,
        handleInputVolume,
        handleInputProgress,
        handleToggleLoop,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .audio {
    :deep {
      .el-slider__button {
        width: 10px;
        height: 10px;
        border-width: 1px;
      }
    }
    .basic-player {
      display: flex;
      justify-content: space-between;
      box-shadow: $base-box-shadow;
      .play {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 66px;
        height: 66px;
        cursor: pointer;
        background-color: $base-color-default;
        &-info {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 15px 10px 15px;
          &-title {
            width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .progress {
            flex: 1;
          }
          &-bottom {
            display: flex;
            align-items: center;
            height: 10px;
            .time {
              padding: 0 8px;
              font-size: 12px;
            }
            .volume {
              position: relative;
              display: flex;
              align-items: center;
              height: 33px;
              cursor: pointer;
              &-slider {
                position: absolute;
                bottom: 28px;
                left: -12px;
                display: none;
                padding: 10px 0;
                background: $base-color-white;
                box-shadow: $base-box-shadow;
                :deep {
                  .el-slider__button-wrapper {
                    display: none;
                  }
                  .el-slider__bar {
                    background-color: $base-color-default;
                  }
                  &:hover {
                    .el-slider__button-wrapper {
                      display: block;
                    }
                  }
                }
              }
              &:hover,
              &:active {
                .volume-slider {
                  display: block;
                }
              }
            }
            .loop {
              margin-left: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .progress {
      :deep {
        .el-slider {
          .el-slider__button-wrapper {
            display: none;
          }
          .el-slider__bar {
            background-color: $base-color-default;
          }
        }
      }
    }
    .xg-music {
      display: none;
    }
    .music-player {
      position: relative;
      padding: 8px 8px;
      background-color: $base-color-white;
      box-shadow: $base-box-shadow;
      .progress {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        :deep {
          .el-slider {
            --el-slider-margin: 0;
          }
          .el-slider__bar {
            height: 2px;
            background-color: $base-color-default;
          }
          .el-slider__runway {
            background-color: $base-color-white;
          }
        }
      }
      .music-info {
        display: flex;
        align-items: center;
        &-cover {
          width: 50px;
          height: 50px;
          background-color: $base-color-default;
        }
        &-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 10px;
          &_head {
            padding-bottom: 10px;
            .name {
              font-size: 12px;
              color: $base-font-color;
            }
          }
        }
      }
      .music-play-warp {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        .icon-item {
          padding: 10px;
          cursor: pointer;
        }
      }
      .music-control {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 50px;
        .icon-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 33px;
          padding: 10px;
          cursor: pointer;
          .volume-slider {
            position: absolute;
            bottom: 42px;
            left: 0px;
            display: none;
            padding: 10px 0;
            background: $base-color-white;
            box-shadow: $base-box-shadow;
            :deep {
              .el-slider__button-wrapper {
                display: none;
              }
              .el-slider__bar {
                background-color: $base-color-default;
              }
              &:hover {
                .el-slider__button-wrapper {
                  display: block;
                }
              }
            }
          }
          &:hover,
          &:active {
            .volume-slider {
              display: block;
            }
          }
        }
      }
    }
  }
  .music-list {
    &-title {
      padding: 10px 25px 10px 25px;
      margin: 0;
      border-bottom: 1px solid #eee;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 25px;
      cursor: pointer;
      border-bottom: 1px solid #eee;
      .index {
        width: 20px;
      }
      &-content {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
      }
      &:last-child {
        border: 0;
      }
      &:hover {
        color: $base-color-default;
        background-color: rgba($base-color-default, 0.1);
      }
    }
  }
</style>
