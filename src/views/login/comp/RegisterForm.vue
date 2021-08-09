<template>
  <el-form :model="form" :rules="rules" ref="ruleForm" class="login-ruleForm">
    <el-form-item prop="name">
      <el-input placeholder="手机号" v-model="form.name">
        <template #prefix>
          <user theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="form-code">
        <el-input placeholder="验证码" v-model="form.name">
          <template #prefix>
            <user theme="outline" size="16" fill="#999" />
          </template>
        </el-input>
        <el-button class="code-btn">获取验证码</el-button>
      </div>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="输入密码" type="password" v-model="form.password">
        <template #prefix>
          <lock theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="确认密码" type="password" v-model="form.password">
        <template #prefix>
          <lock theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="login-check">
        <el-checkbox v-model="checkedPwd">我同意xxx隐私政策</el-checkbox>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium" class="login-btn" round>注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  const checkedPwd = ref(true);
  const form = reactive({ name: '', password: '' });
  const rules = reactive({
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
  });
</script>

<style lang="scss" scoped>
  .login-ruleForm {
    margin-top: 1rem;
    :deep {
      .el-input__prefix {
        top: 2px;
        padding: 0 4px;
      }
    }
    .login-methods {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .login-btn {
      width: 100%;
      margin-bottom: 1rem;
    }
    .login-check {
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
    .form-code {
      display: flex;
      align-content: center;
      justify-content: space-between;
      .code-btn {
        margin-left: 1rem;
      }
    }
  }
</style>
