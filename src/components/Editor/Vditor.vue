<template>
  <div id="vditor"></div>
</template>

<script>
  import { onMounted, reactive, toRefs } from 'vue';
  import Vditor from 'vditor';
  import 'vditor/src/assets/scss/index.scss';

  export default {
    props: {
      // 绑定内容
      value: {
        type: String,
        default: '',
      },
      options: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    setup(props, context) {
      const state = reactive({
        vditor: null,
      });

      onMounted(() => {
        state.vditor = new Vditor(
          'vditor',
          Object.assign(
            {
              theme: 'classic',
              height: 'auto',
              width: 'auto',
              minHeight: 360,
              placeholder: '请输入内容...',
              input(value) {
                context.emit('update:value', value);
              },
              focus(value) {
                console.log('focus:' + value);
              },
              blur(value) {
                console.log('blur:' + value);
              },
              esc(value) {
                console.log('esc:' + value);
              },
              ctrlEnter(value) {
                console.log('ctrlEnter:' + value);
              },
              select(value) {
                console.log('select:' + value);
              },
              after: () => {
                state.vditor.setValue('Hello, Vditor + Angular!');
              },
            },
            { ...props.options }
          )
        );
      });

      return {
        ...toRefs(state),
      };
    },
  };
</script>
