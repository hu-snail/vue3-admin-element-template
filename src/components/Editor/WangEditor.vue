<template>
  <div class="wangeditor">
    <div ref="editor"></div>
    <div class="num" v-if="showCount">
      <span class="current" :class="{ error: currentNum > maxNum }">{{ state.currentNum }}</span>
      /
      <span class="total">{{ maxNum }}</span>
    </div>
  </div>
</template>

<script setup>
  import {
    onMounted,
    onBeforeUnmount,
    reactive,
    ref,
    defineProps,
    defineEmits,
    defineExpose,
  } from 'vue';
  import WangEditor from 'wangeditor';
  import { ElMessage } from 'element-plus';
  import { config } from './config.js';

  const props = defineProps({
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
  });

  const emit = defineEmits(['update', 'on-change', 'on-selection-change', 'on-blur', 'on-focus']);

  const editor = ref();

  const state = reactive({
    currentNum: 0,
    wandEditor: null,
  });

  onMounted(() => {
    state.wandEditor = new WangEditor(editor.value);
    Object.assign(state.wandEditor.config, {
      onchange(val) {
        if (props.showCount) {
          state.currentNum = val.replace(/<\/?.+?>/g, '').length;
          if (state.currentNum > props.maxNum)
            ElMessage.warning(`输入超过最大${props.maxNum}字符限制，请检查删减！`);
        }
        emit('update:value', val);
        emit('on-change', val);
      },
      onSelectionChange(newSelection) {
        emit('on-selection-change', newSelection);
      },
      onblur(newHtml) {
        emit('on-blur', newHtml);
      },
      onfocus(newHtml) {
        emit('on-focus', newHtml);
      },
      height: props.height,
      ...props.options,
      ...config,
      placeholder: props.placeholder,
    });
    state.wandEditor.create();
    if (props.value) state.wandEditor.txt.html(props.value);
  });

  onBeforeUnmount(() => {
    state.wandEditor.destroy();
    state.wandEditor = null;
  });

  const getHtml = () => {
    return state.wandEditor.txt.html();
  };

  const getText = () => {
    return state.wandEditor.txt.text();
  };

  const append = (val) => {
    state.wandEditor.txt.append(val);
  };

  const setHtml = (html) => {
    state.wandEditor.txt.html(html);
  };

  const clear = () => {
    state.wandEditor.txt.clear();
  };

  defineExpose({ getHtml, getText, append, setHtml, clear });
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
