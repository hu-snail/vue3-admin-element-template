<template>
  <div>
    <img src="../assets/logo.png" />
    <h1 class="title">{{ msg }}{{ $store.state.user.token }}</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script setup>
  import { onBeforeMount, defineProps } from 'vue';
  import { getUser } from '@/api/user.js';
  onBeforeMount(() => {
    getUserInfo();
  });
  defineProps({
    msg: String,
  });

  const getUserInfo = async () => {
    getUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<style lang="scss" scoped>
  a {
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: $base-color;
    transform: translateX(0);
  }
  .title {
    width: 100%;
    color: #f45;
  }
</style>
