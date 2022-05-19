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
            <el-form-item :label="t('settings.theme')">
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
            </el-form-item>
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
  const ORIGINAL_THEME = '#409EFF';

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

  const getThemeCluster = (theme) => {
    const tintColor = (color, tint) => {
      let red = parseInt(color.slice(0, 2), 16);
      let green = parseInt(color.slice(2, 4), 16);
      let blue = parseInt(color.slice(4, 6), 16);
      if (tint === 0) {
        return [red, green, blue].join(',');
      } else {
        red += Math.round(tint * (255 - red));
        green += Math.round(tint * (255 - green));
        blue += Math.round(tint * (255 - blue));
        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);
        return `#${red}${green}${blue}`;
      }
    };
    const shadeColor = (color, shade) => {
      let red = parseInt(color.slice(0, 2), 16);
      let green = parseInt(color.slice(2, 4), 16);
      let blue = parseInt(color.slice(4, 6), 16);
      red = Math.round((1 - shade) * red);
      green = Math.round((1 - shade) * green);
      blue = Math.round((1 - shade) * blue);
      red = red.toString(16);
      green = green.toString(16);
      blue = blue.toString(16);
      return `#${red}${green}${blue}`;
    };
    const clusters = [theme];
    for (let i = 0; i <= 9; i++) {
      clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
    }
    clusters.push(shadeColor(theme, 0.1));
    return clusters;
  };

  const updateStyle = (style, oldCluster, newCluster) => {
    let newStyle = style;
    oldCluster.forEach((color, index) => {
      newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index]);
    });
    return newStyle;
  };

  const getCSSString = (url, variable) => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          setting[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '');
          resolve();
        }
      };
      xhr.open('GET', url);
      xhr.send();
    });
  };

  watch(
    () => settings.value.theme,
    async (theme) => {
      const val = themeOptions[theme].primary;

      const oldVal = setting.chalk ? settings.value.theme : ORIGINAL_THEME;
      if (typeof val !== 'string') return;
      const themeCluster = getThemeCluster(val.replace('#', ''));
      const originalCluster = getThemeCluster(oldVal.replace('#', ''));

      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = getThemeCluster(ORIGINAL_THEME.replace('#', ''));
          const newStyle = updateStyle(setting[variable], originalCluster, themeCluster);
          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.setAttribute('id', id);
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };
      };
      if (!setting.chalk) {
        const url = `https://unpkg.com/element-plus@2.2.0/dist/index.css`;
        await getCSSString(url, 'chalk');
      }
      const chalkHandler = getHandler('chalk', 'chalk-style');
      chalkHandler();
      const styles = [].slice.call(document.querySelectorAll('style')).filter((style) => {
        const text = style.innerText;
        return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text);
      });
      styles.forEach((style) => {
        const { innerText } = style;
        if (typeof innerText !== 'string') return;
        style.innerText = updateStyle(innerText, originalCluster, themeCluster);
      });
    },
    {
      immediate: true,
    }
  );

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
