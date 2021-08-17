<template>
  <div class="login-container">
    <div class="login-left">
      <div class="login-left-wrap">
        <h2 class="title"> <span class="logo-text">Hu-Snail</span> Vue3-Admin </h2>
        <img class="img" src="@/assets/login.png" alt="login-bg" />
        <h2 class="desc">开箱即用的中后台管理系统</h2>
      </div>
    </div>
    <div class="login-form">
      <div class="form-warp">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">
            <LoginForm />
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <RegisterForm />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import LoginForm from 'views/login/comp/LoginForm.vue';
  import RegisterForm from './comp/RegisterForm.vue';
  const activeName = ref('first');
  const handleClick = (val) => {
    console.log(val);
  };
</script>

<style lang="scss" scoped>
  .login-container {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: $dark-bg-color;
    .login-left {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 50vw;
      height: 100%;
      background-image: url('@/assets/login-bg-dark.svg');
      background-repeat: no-repeat;
      background-position: 100%;
      background-size: auto 100%;
      &-wrap {
        height: 80vh;
        margin: auto;
        .img {
          width: 280px;
          margin-top: 10vh;
        }
        .logo-text {
          color: $green-color;
        }
        .title,
        .desc {
          font-weight: bold;
          color: #fff;
          letter-spacing: 1.2px;
        }
      }
    }
    .login-form {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50vw;
      height: 100vh;
      .form-warp {
        width: 400px;
        padding: 1rem 3rem 0 3rem;
        margin: auto;
        background-color: #fff;
        border-radius: 8px;
      }
    }
  }
</style>
