<template>
  <el-form :model="ruleForm" :rules="rules" ref="validateForm" class="login-ruleForm">
    <el-form-item prop="username">
      <el-input :placeholder="t('login.username')" v-model="ruleForm.username">
        <template #prefix>
          <user theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        @keyup.enter="handleLogin"
        :placeholder="t('login.password')"
        type="password"
        v-model="ruleForm.password"
      >
        <template #prefix>
          <lock theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="login-check">
        <el-checkbox v-model="checkedPwd">{{ t('login.rememberPwd') }}</el-checkbox>
        <el-button type="text">{{ t('login.forgotPwd') }}</el-button>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        size="medium"
        :loading="loading"
        class="login-btn"
        round
        @click="handleLogin"
        >{{ t('login.loginBtn') }}</el-button
      >
    </el-form-item>
    <el-divider>{{ t('login.thirdparty') }}</el-divider>
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

<script>
  import { reactive, toRefs, ref, unref, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  export default {
    setup() {
      const { t } = useI18n();
      const store = useStore();
      const router = useRouter();
      const validateForm = ref(null);
      const state = reactive({
        ruleForm: {
          username: 'admin',
          password: 'admin',
        },
        loading: false,
        checkedPwd: false,
        redirect: undefined,
        rules: {
          username: [{ required: true, message: t('login.rules.username'), trigger: 'blur' }],
          password: [{ required: true, message: t('login.rules.password'), trigger: 'blur' }],
        },
      });

      watch(
        () => router.currentRoute,
        ({ _value }) => {
          const route = _value;
          state.redirect = (route.query && route.query.redirect) || '/';
        },
        {
          immediate: true,
        }
      );

      const handleLogin = async () => {
        const form = unref(validateForm);
        if (!form) return;
        await form.validate((valid) => {
          if (valid) {
            state.valid = true;
            state.loading = true;
            store
              .dispatch('user/login', state.ruleForm)
              .then(() => {
                const routerPath =
                  state.redirect === '/404' || state.redirect === '/401' ? '/' : state.redirect;
                console.log(routerPath);
                router.push(routerPath).catch(() => {});
                state.loading = false;
              })
              .catch(() => {
                state.loading = false;
              });
          }
        });
      };
      return {
        ...toRefs(state),
        validateForm,
        handleLogin,
        t,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .login-ruleForm {
    margin-top: 1rem;
    :deep(.el-input__prefix) {
      top: 2px;
      padding: 0 4px;
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
