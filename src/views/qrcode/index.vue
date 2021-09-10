<template>
  <div class="qrcode-container">
    <Descrition title="二维码 Vue-Qrcode">
      <template #descrition>
        Vue3-admin 推荐使用
        <a href="https://github.com/fengyuanchen/vue-qrcode" target="_blank">vue-qrcode</a>
        作为二维码库
      </template>
    </Descrition>
    <Descrition title="演示" :showDesc="false"></Descrition>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <div class="form">
          <el-form ref="form" :model="checkForm" label-width="100px">
            <el-form-item label="二维码内容">
              <el-input
                type="textarea"
                v-model="checkForm.value"
                placeholder="请输入二维码内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="Logo地址">
              <el-input v-model="checkForm.logo" placeholder="请输入Logo地址"></el-input>
            </el-form-item>
            <el-form-item label="宽度">
              <el-input-number
                v-model="checkForm.width"
                @change="handleChange"
                :min="150"
                :max="500"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="Margin">
              <el-input-number
                v-model="checkForm.margin"
                @change="handleChange"
                :min="0"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="色块色">
              <el-color-picker v-model="checkForm.darkColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="背景色">
              <el-color-picker v-model="checkForm.lightColor"></el-color-picker>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <Qrcode
          :value="checkForm.value"
          :logo="checkForm.logo"
          :width="checkForm.width"
          :options="{
            margin: checkForm.margin,
            color: {
              dark: checkForm.darkColor,
              light: checkForm.lightColor,
            },
          }"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  import Descrition from '@/components/Descrition/index.vue';
  import Qrcode from '@/components/Qrcode/index.vue';
  export default {
    components: { Descrition, Qrcode },
    setup() {
      const state = reactive({
        checkForm: {
          width: 200,
          margin: 2,
          darkColor: '#08a17e',
          lightColor: '#fff',
          value: 'https://hu-snail.gitee.io/vue3-admin',
          logo: 'https://gitee.com/hu-snail/vue3-admin/raw/master/src/assets/logo.png',
        },
      });
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="scss" scoped>
  .qrcode-container {
    padding: $base-main-padding;
    background-color: $base-color-white;
  }
</style>
