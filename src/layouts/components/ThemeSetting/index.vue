<template>
  <el-drawer
    :title="t('settings.title')"
    v-model="settings.isDrawerSetting"
    :direction="direction"
    :before-close="handleClose"
    destroy-on-close
    :size="320"
  >
    <div class="theme-wrapper">
      <el-scrollbar height="85vh">
        <div class="form">
          <el-form label-width="100px" label-position="left">
            <el-form-item :label="t('settings.layout')">
              <el-select
                class="theme-select-width"
                v-model="settings.mode"
                size="small"
                placeholder="请选择"
                @change="handleChangeMode"
              >
                <el-option
                  v-for="item in setting.modeOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <!-- <el-form-item :label="t('settings.theme')">
              <el-select
                class="theme-select-width"
                v-model="settings.theme"
                size="small"
                placeholder="请选择"
                @change="handleChangeTheme"
              >
                <el-option
                  v-for="item in setting.colorOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item label="Logo">
              <el-switch v-model="settings.isLogo" />
            </el-form-item>
            <el-form-item :label="t('settings.tag')">
              <el-switch @change="handleChangeTag" v-model="setting.tag" />
            </el-form-item>
            <el-form-item :label="t('settings.breadcurmb')">
              <el-switch
                :disabled="settings.mode === 'horizontal'"
                @change="handleChangeBread"
                v-model="setting.isBreadcrumb"
              />
            </el-form-item>
            <el-form-item :label="t('settings.fixed')">
              <el-switch :disabled="isMobile" v-model="settings.fixedHead" />
            </el-form-item>
            <el-form-item :label="t('settings.fullscreen')">
              <el-switch v-model="settings.fullScreen" />
            </el-form-item>
            <el-form-item :label="t('settings.refresh')">
              <el-switch v-model="settings.refresh" />
            </el-form-item>
            <el-form-item :label="t('settings.notice')">
              <el-switch v-model="settings.notice" />
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>
    </div>
    <template #footer>
      <div class="drawer-footer">
        <el-button size="small">{{ t('settings.defaultBtn') }}</el-button>
        <el-button type="primary" size="small" @click="handleToSave">{{
          t('settings.saveBtn')
        }}</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script>
  export default {
    name: 'ThemeSetting',
  };
</script>

<script setup>
  import { ref, reactive, computed, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useI18n } from 'vue-i18n';
  import { themeConfig } from '@/config/theme';
  const { t } = useI18n();

  const { themeOptions } = themeConfig;

  const store = useStore();

  const setting = reactive({
    tag: true,
    chalk: '',
    isLogo: true,
    mode: 'vertical',
    isBreadcrumb: true,
    fixedHead: true,
    fullscreen: true,
    refresh: true,
    notice: true,
    modeOption: [
      {
        value: 'vertical',
        label: t('layout.vertical'),
      },
      {
        value: 'horizontal',
        label: t('layout.horizontal'),
      },
    ],
    colorOptions: [
      {
        value: 'theme1',
        label: t('theme.options.theme1'),
      },
      {
        value: 'theme2',
        label: t('theme.options.theme2'),
      },
      {
        value: 'theme3',
        label: t('theme.options.theme3'),
      },
      {
        value: 'theme4',
        label: t('theme.options.theme4'),
      },
      {
        value: 'theme5',
        label: t('theme.options.theme5'),
      },
      {
        value: 'theme6',
        label: t('theme.options.theme6'),
      },
    ],
  });

  const direction = ref('rtl');

  const settings = computed(() => {
    return store.getters['setting/settings'];
  });

  const isMobile = computed(() => {
    return store.getters['setting/isMobile'];
  });

  const handleToSave = () => {
    store.dispatch('setting/setSettingOptions', settings);
    store.dispatch('setting/setSettingDrawer', false);
  };

  const handleChangeTag = (val) => {
    store.dispatch('setting/setTag', val);
  };

  const handleChangeBread = (val) => {
    store.dispatch('setting/setBreadcrumb', val);
  };

  const handleChangeMode = (val) => {
    store.dispatch('setting/setSettingOptions', settings);
    store.dispatch('setting/setMode', val);
  };

  const handleChangeTheme = (val) => {
    store.dispatch('setting/setTheme', val);
  };

  const handleClose = () => {
    store.dispatch('setting/setSettingDrawer', false);
  };
</script>

<style lang="scss" scoped>
  .theme-wrapper {
    display: flex;
    flex-direction: column;
    height: $base-height;
    .form {
      flex: 1;
    }
    :deep(.el-form-item__content) {
      text-align: right;
    }
    .theme-select-width {
      width: $base-select-width-small;
    }
  }
  .drawer-footer {
    box-sizing: border-box;
    align-content: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: $base-color-white;
    border-top: 1px solid $base-border-color;
  }
  :deep(.el-form-item__content) {
    justify-content: flex-end;
  }
</style>
