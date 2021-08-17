<template>
  <el-dropdown>
    <span class="avatar-dropdown">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <img class="user-avatar" :src="avatar" alt="" />
      <div class="user-name">
        {{ userName }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="github">github地址</el-dropdown-item>
        <el-dropdown-item command="gitee" divided>码云地址</el-dropdown-item>
        <el-dropdown-item command="pro" divided>pro付费版地址</el-dropdown-item>
        <el-dropdown-item command="plus" divided>plus付费版地址</el-dropdown-item>
        <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
  export default {
    name: 'VabAvatar',
  };
</script>

<script setup>
  import { ref } from 'vue';
  const avatar = ref('https://i.gtimg.cn/club/item/face/img/2/15922_100.gif');
  const userName = ref('hu-snail');
</script>

<style lang="scss" scoped>
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 10px;
    &:hover {
      background: $base-hover-color;
    }
    .user-avatar {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
</style>
