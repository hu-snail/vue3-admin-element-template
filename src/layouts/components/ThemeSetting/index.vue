<template>
  <el-drawer
    title="主题设置"
    v-model="isDrawerSetting"
    :direction="direction"
    :before-close="handleClose"
    destroy-on-close
    :size="320"
  >
    <div class="theme-wrapper">
      <el-scrollbar height="85vh">
        <div class="form">
          <el-form label-width="80px" label-position="left">
            <el-form-item label="布局">
              <el-select
                class="theme-select-width"
                v-model="setting.mode"
                size="small"
                placeholder="请选择"
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
            <el-form-item label="主题">
              <el-select
                class="theme-select-width"
                v-model="setting.theme"
                size="small"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in setting.themeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="菜单背景">
              <el-color-picker v-model="setting.menuBgColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="Logo">
              <el-switch v-model="setting.isLogo" />
            </el-form-item>
            <el-form-item label="标签">
              <el-switch v-model="setting.tag" />
            </el-form-item>
            <el-form-item label="面包导航">
              <el-switch v-model="setting.isBreadcrumb" />
            </el-form-item>
            <el-form-item label="固定头部">
              <el-switch v-model="setting.fixedHead" />
            </el-form-item>
            <el-form-item label="全屏">
              <el-switch v-model="setting.fullscreen" />
            </el-form-item>
            <el-form-item label="刷新">
              <el-switch v-model="setting.refresh" />
            </el-form-item>
            <el-form-item label="通知">
              <el-switch v-model="setting.notice" />
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>

      <div class="drawer-footer">
        <el-button size="small">恢复默认</el-button>
        <el-button type="primary" size="small">保存</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
  import { ref, reactive, computed, watch } from 'vue';
  import { useStore } from 'vuex';
  const ORIGINAL_THEME = '#409EFF';
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
        label: '纵向',
      },
      {
        value: 'horizontal',
        label: '横向',
      },
    ],
    theme: '#08a17e',
    themeOptions: [
      {
        value: '#08a17e',
        label: '翠绿',
      },
      {
        value: '#f45555',
        label: '红色',
      },
      {
        value: '#409eff',
        label: '默认',
      },
    ],
    menuBgColor: '#ffffff',
  });

  const direction = ref('rtl');

  const isDrawerSetting = computed(() => {
    return store.getters['setting/isDrawerSetting'];
  });

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
    () => setting.theme,
    async (val) => {
      const oldVal = setting.chalk ? setting.theme : ORIGINAL_THEME;
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
        const url = `https://unpkg.com/element-plus/dist/index.css`;
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
      store.dispatch('setting/setTheme', val);
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
    height: 100%;
    .form {
      flex: 1;
      padding: 0 20px;
    }
    :deep {
      .el-form-item__content {
        text-align: right;
      }
    }
    .theme-select-width {
      width: 120px;
    }
    .drawer-footer {
      position: fixed;
      bottom: 0;
      box-sizing: border-box;
      align-content: center;
      justify-content: space-between;
      width: 320px;
      height: 60px;
      padding: 10px 20px;
      background-color: $base-color-white;
      border-top: 1px solid $base-border-color;
    }
  }
</style>
