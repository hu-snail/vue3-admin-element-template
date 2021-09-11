<template>
  <div class="wangeditor-container">
    <Descrition title="富文本 WangEditor">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://www.wangeditor.com/" target="_blank">WangEditor</a>
        作为富文本编辑器
      </template>
    </Descrition>
    <div class="edit-content">
      <Descrition title="演示" :showDesc="false"></Descrition>
      <WangEditor v-model:value="state.content" ref="editor" @on-change="onChange" />
      <Descrition title="常用Api" :showDesc="false"></Descrition>
      <el-button-group>
        <el-button type="primary" size="small" @click="handleGetHtml"> 获取HTML </el-button>
        <el-button type="primary" size="small" @click="handleGetText"> 获取Text </el-button>
        <el-button type="primary" size="small" @click="handleAppend"> 追加新内容 </el-button>
        <el-button type="primary" size="small" @click="handleCreateHtml"> 设置内容</el-button>
        <el-button type="primary" size="small" @click="handleClearContent"> 清空内容</el-button>
      </el-button-group>
      <el-alert
        class="alter-info"
        v-if="state.apiName"
        :title="`当前调用的Api:${state.apiName}`"
        type="success"
      >
      </el-alert>
      <div class="result" v-if="state.reslut">
        {{ state.reslut }}
      </div>
      <Descrition title="属性 Props" :showDesc="false"></Descrition>
      <el-table :data="state.props" border style="width: 100%">
        <el-table-column prop="param" label="参数" width="180"> </el-table-column>
        <el-table-column prop="type" label="类型" width="180"> </el-table-column>
        <el-table-column prop="all" label="可选值"> </el-table-column>
        <el-table-column prop="default" label="默认值"> </el-table-column>
        <el-table-column prop="desc" label="说明"> </el-table-column>
      </el-table>
      <Descrition title="事件 Events" :showDesc="false"></Descrition>
      <el-table :data="state.events" border style="width: 100%">
        <el-table-column prop="param" label="事件名称" width="180"> </el-table-column>
        <el-table-column prop="desc" label="说明"> </el-table-column>
        <el-table-column prop="callback" label="回调参数"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
  import WangEditor from '@/components/Editor/WangEditor.vue';
  import Descrition from '@/components/Descrition/index.vue';
  import { ref, reactive } from 'vue';
  import { ElMessage } from 'element-plus';
  const editor = ref(null);
  const state = reactive({
    content: '测试数据',
    reslut: null,
    apiName: '',
    props: [
      {
        param: 'v-model:value',
        type: 'string',
        all: '-',
        default: '-',
        desc: '富文本内容',
      },
      {
        param: 'height',
        type: 'number',
        all: '-',
        default: '360',
        desc: '高',
      },
      {
        param: 'placeholder',
        type: 'string',
        all: '-',
        default: '请输入内容...',
        desc: '默认内容',
      },
      {
        param: 'showCount',
        type: 'boolean',
        all: 'false',
        default: 'true',
        desc: '是否显示字数统计',
      },
      {
        param: 'maxNum',
        type: 'number',
        all: '-',
        default: '1000',
        desc: '输入最大字符限制',
      },
      {
        param: 'options',
        type: 'object',
        all: 'wangEditor文档：https://www.wangeditor.com/',
        default: '{ zIndex: 1,focus: true}',
        desc: 'wangEditor配置 参考官方文档',
      },
    ],
    events: [
      {
        param: 'on-change',
        desc: '内容改变触发的回调函数',
        callback: '最新的值 newHtml',
      },
      {
        param: 'on-selection-change',
        desc: '选中当前区域内容触发的回调函数',
        callback:
          'newSelection:{text:"wangeditor", // 当前选择文本 html: "<p>wangeditor</p>", //当前选中的html selection: selection, // 原生selection对象 }',
      },
      {
        param: 'on-blur',
        desc: '编辑区域失去焦点触发的回调函数',
        callback: '最新的值 newHtml',
      },
      {
        param: 'on-focus',
        desc: '编辑区域聚焦触发的回调函数',
        callback: '最新的值 newHtml',
      },
    ],
  });

  const handleGetHtml = () => {
    state.reslut = editor.value.getHtml();
    state.apiName = 'wandEditor.txt.html()';
    if (state.reslut) ElMessage.success('获取HTML成功！');
    else ElMessage.warning('暂无HTML内容');
  };

  const handleGetText = () => {
    state.reslut = editor.value.getText();
    state.apiName = 'wandEditor.txt.text()';
    if (state.reslut) ElMessage.success('获取Text成功！');
    else ElMessage.warning('暂无内容');
  };

  const handleAppend = () => {
    editor.value.append('<p>追加的内容</p>');
    state.apiName = 'wandEditor.txt.append()';
    ElMessage.success('追加内容成功！');
  };

  const handleCreateHtml = () => {
    editor.value.setHtml(
      '<p>vue3-admin 中后台管理方案<br>技术栈：<ul><li>Vite2</li><li>Vue3</li><li>Vue-Router4.x</li><li>Vuex4.x</li><li>Element-Plus</li></ul><br>作者：hu-snail</p>'
    );
    state.apiName = 'wandEditor.txt.html("<code></code>")';
    ElMessage.success('设置内容成功！');
  };

  const onChange = () => {};

  const handleClearContent = () => {
    editor.value.clear();
    state.apiName = 'wandEditor.txt.clear()';
    ElMessage.success('清空内容成功！');
  };
</script>
<style lang="scss" scoped>
  .wangeditor-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .edit-content {
      margin-top: 20px;
      .result {
        padding: 15px;
        margin: 15px 0;
        background-color: rgba($base-color-default, 0.1);
      }
      .alter-info {
        margin-top: 15px;
      }
    }
  }
</style>
