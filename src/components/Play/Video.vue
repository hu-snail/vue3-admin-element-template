<template>
  <div id="xgplayer"></div>
</template>

<script>
  import { onMounted, reactive, toRefs } from 'vue';
  import Player from 'xgplayer';
  export default {
    name: 'Xgplayer',
    props: {
      options: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    setup(props) {
      const state = reactive({
        player: null,
      });
      onMounted(() => {
        state.player = new Player({
          id: 'xgplayer',
          lang: 'zh-cn',
          crossOrigin: true,
          ...props.options,
          playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
          danmu: {
            comments: [
              {
                duration: 15000,
                id: '1',
                start: 3000,
                txt: '1111',
                style: {
                  //弹幕自定义样式
                  color: '#ff9500',
                },
              },
            ],
            area: {
              start: 0,
              end: 1,
            },
          },
        });
        state.player.emit('resourceReady', [
          {
            name: '超清',
            url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
          },
          {
            name: '高清',
            url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4',
          },
          {
            name: '标清',
            url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
          },
        ]);
        state.player.on('error', function (err) {
          console.log(err, '---');
        });
      });
      return {
        ...toRefs(state),
      };
    },
  };
</script>
