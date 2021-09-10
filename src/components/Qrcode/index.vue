<template>
  <div class="qrcode">
    <vue-qrcode
      :value="value"
      :tag="tag"
      :options="{
        width,
        ...options,
      }"
    ></vue-qrcode>
    <img v-if="logo.length" class="qrcode__image" :src="logo" alt="Logo" />
  </div>
</template>

<script>
  import VueQrcode from '@chenfengyuan/vue-qrcode';
  import { reactive, toRefs } from 'vue';
  export default {
    components: { VueQrcode },
    props: {
      value: {
        type: String,
        default: '',
      },
      // 渲染模式
      tag: {
        type: String,
        default: 'canvas', // svg|img|canvas
      },
      width: {
        type: Number,
        default: 200,
      },
      logo: {
        type: String,
        default: '',
      },
      options: {
        type: Object,
        default: () => {
          return {
            errorCorrectionLevel: 'M', // low, medium, quartile, high或L, M, Q, H
          };
        },
      },
    },
    setup() {
      const state = reactive({});
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="scss" scoped>
  .qrcode {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    font-size: 0;
  }

  .qrcode__image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15%;
    height: 15%;
    overflow: hidden;
    background-color: #fff;
    border: 0.25rem solid #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
    transform: translate(-50%, -50%);
  }
</style>
