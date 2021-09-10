<template>
  <div class="cropper-wrapper">
    <vueCropper
      ref="cropper"
      :img="option.img"
      :info="option.info"
      :outputSize="option.size"
      :outputType="option.outputType"
      :full="option.full"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :fixedBox="option.fixedBox"
      :original="option.original"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :centerBox="option.centerBox"
      :high="option.high"
      :infoTrue="option.infoTrue"
      @realTime="realTime"
      @imgLoad="imgLoad"
      @cropMoving="cropMoving"
      :enlarge="option.enlarge"
    ></vueCropper>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import { VueCropper } from 'vue-cropper';
  import 'vue-cropper/dist/index.css';
  export default {
    components: { VueCropper },
    setup() {
      const state = reactive({
        option: {
          img: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          outputType: 'jpg',
          canMove: true,
          autoCrop: true,
          infoTrue: true,
          centerBox: true,
          fixedBox: false,
          enlarge: 1,
          autoCropWidth: 5000,
          autoCropHeight: 5000,
        },
      });

      const realTime = (val) => {
        console.log('realTime', val);
      };

      const imgLoad = (val) => {
        console.log('imgLoad', val);
      };

      const cropMoving = (val) => {
        console.log('cropMoving', val);
      };
      return {
        ...toRefs(state),
        realTime,
        imgLoad,
        cropMoving,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .cropper-wrapper {
    width: 100%;
    height: 320px;
  }
</style>
