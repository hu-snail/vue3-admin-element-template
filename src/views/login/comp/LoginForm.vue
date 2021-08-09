<template>
  <el-form :model="form" :rules="rules" ref="ruleForm" class="login-ruleForm">
    <el-form-item prop="name">
      <el-input placeholder="输入用户名" v-model="form.name">
        <template #prefix>
          <user theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="输入密码" type="password" v-model="form.password">
        <template #prefix>
          <lock theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="login-check">
        <el-checkbox v-model="checkedPwd">记住密码</el-checkbox>
        <el-button type="text">忘记密码</el-button>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium" class="login-btn" round>登录</el-button>
    </el-form-item>
    <el-divider>其他登录方式</el-divider>
    <el-form-item>
      <div class="login-methods">
        <wechat theme="outline" size="24" fill="#333" />
        <alipay theme="outline" size="24" fill="#333" />
        <github theme="outline" size="24" fill="#333" />
        <twitter theme="outline" size="24" fill="#333" />
        <google theme="outline" size="24" fill="#333" />
      </div>
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
    }
    .login-check {
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
  }
</style>
