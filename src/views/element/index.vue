<template>
  <div class="element-container">
    <Descrition :title="t('element.title')">
      <template #descrition>
        Vue3-admin-element-template使用的是
        <a href="https://element-plus.gitee.io/#/zh-CN/component/installation" target="_blank"
          >Element-Plus</a
        >
        UI组件库，以下是常用的组件
      </template>
    </Descrition>
    <Descrition :showDesc="false" :title="t('element.btn')" />
    <el-row>
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
    </el-row>
    <el-row class="row">
      <el-button-group>
        <el-button type="primary" :icon="ArrowLeft">上一页</el-button>
        <el-button type="primary"
          >下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </el-button-group>
      <el-button-group class="group">
        <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" />
        <el-button type="primary" :icon="Delete" />
      </el-button-group>
    </el-row>
    <Descrition :showDesc="false" :title="t('element.radio')" />
    <el-row class="row">
      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
      <el-radio-group class="group" v-model="radio2">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <Descrition :showDesc="false" :title="t('element.checkBox')" />

    <el-row class="row">
      <el-checkbox v-model="checked1" label="备选项1"></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项1"></el-checkbox>
      <el-checkbox-group class="group" v-model="checkbox">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <Descrition :showDesc="false" :title="t('element.datePicker')" />

    <el-date-picker
      v-model="date"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
    >
    </el-date-picker>
    <Descrition :showDesc="false" :title="t('element.dateTimePicker')" />

    <el-date-picker
      v-model="dateTime"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>

<script setup>
  import { ArrowLeft, ArrowRight, Delete, Edit, Share } from '@element-plus/icons-vue';
  import Descrition from '@/components/Descrition/index.vue';
  import { ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  const radio = ref(3);
  const radio2 = ref('上海');
  const checked1 = ref(true);
  const checked2 = ref();
  const checkbox = ref(['上海']);
  const date = ref();
  const dateTime = ref();
  const cities = reactive(cityOptions);
</script>

<style lang="scss" scoped>
  .element-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
    .row {
      margin: 20px 0;
    }
    .group {
      margin: 0 20px;
    }
  }
</style>
