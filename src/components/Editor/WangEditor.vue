<template>
  <div class="wangeditor">
    <div ref="editor"></div>
    <div class="num" v-if="showCount">
      <span class="current" :class="{ error: currentNum > maxNum }">{{ currentNum }}</span>
      /
      <span class="total">{{ maxNum }}</span>
    </div>
  </div>
</template>

<script>
  import { onMounted, onBeforeUnmount, reactive, ref, toRefs, watch } from 'vue';
  import WangEditor from 'wangeditor';
  import { ElMessage } from 'element-plus';
  import { config } from './config.js';
  export default {
    props: {
      // 提示内容
      placeholder: {
        type: String,
        default: '请输入内容...',
      },

      // 绑定内容
      value: {
        type: String,
        default: '',
      },

      showCount: {
        type: Boolean,
        default: true,
      },

      // 输入最大字符
      maxNum: {
        type: Number,
        default: 1000,
      },

      // 高度
      height: {
        type: Number,
        default: 360,
      },

      // 配置
      options: {
        type: Object,
        default: () => {
          return {
            zIndex: 1,
            focus: true,
          };
        },
      },
    },
    setup(props, context) {
      const editor = ref();
      const state = reactive({
        currentNum: 0,
        wandEditor: null,
      });

      watch(
        () => props.value,
        (val) => {
          if (state.wandEditor) state.wandEditor.txt.html(val);
        },
        {
          immediate: true,
        }
      );

      onMounted(() => {
        state.wandEditor = new WangEditor(editor.value);
        Object.assign(state.wandEditor.config, {
          onchange(val) {
            if (props.showCount) {
              state.currentNum = val.replace(/<\/?.+?>/g, '').length;
              if (state.currentNum > props.maxNum)
                ElMessage.warning(`输入超过最大${props.maxNum}字符限制，请检查删减！`);
            }
            context.emit('update:value', val);
            context.emit('on-change', val);
          },
          onSelectionChange(newSelection) {
            context.emit('on-selection-change', newSelection);
          },
          onblur(newHtml) {
            context.emit('on-blur', newHtml);
          },
          onfocus(newHtml) {
            context.emit('on-focus', newHtml);
          },
          height: props.height,
          ...props.options,
          ...config,
          placeholder: props.placeholder,
        });
        state.wandEditor.create();
      });

      onBeforeUnmount(() => {
        state.wandEditor.destroy();
        state.wandEditor = null;
      });

      return {
        ...toRefs(state),
        editor,
      };
    },
  };
</script>

<style lang="scss">
  .wangeditor {
    .num {
      padding: 5px;
      text-align: right;
      .current {
        color: #67c23a;
      }
      .error {
        color: #f45;
      }
    }
  }
</style>
