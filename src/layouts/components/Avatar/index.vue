<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown" :style="{ color }">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <img class="user-avatar" :src="avatar" alt="" />
      <div class="user-name">
        {{ userName }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="github">Github</el-dropdown-item>
        <el-dropdown-item command="logout" divided>{{ t('navbar.logOut') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
  export default {
    name: 'Avatar',
  };
</script>

<script setup>
  import { ref, defineProps } from 'vue';
  import { useStore } from 'vuex';
  import { ElMessageBox } from 'element-plus';
  import { setting } from '@/config/setting';
  import { useRouter } from 'vue-router';
  const { title, recordRoute } = setting;
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const avatar = ref('https://i.gtimg.cn/club/item/face/img/2/15922_100.gif');
  const userName = ref('hu-snail');
  const store = useStore();
  const router = useRouter();

  defineProps({
    color: {
      type: String,
      default: '#666',
    },
  });

  const handleCommand = (command) => {
    switch (command) {
      case 'logout':
        handleLogout();
        break;
      case 'github':
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    ElMessageBox.confirm(`${t('confirm.msg')}${title}？`, t('confirm.title'), {
      confirmButtonText: t('btn.confirm'),
      cancelButtonText: t('btn.cancel'),
      dangerouslyUseHTMLString: true,
      type: 'warning',
    })
      .then(async () => {
        await store.dispatch('user/logout');
        if (recordRoute) {
          const { fullPath } = router.currentRoute._value;
          console.log(fullPath);
          router.push({ path: `/login?redirect=${fullPath}` });
        } else {
          router.push('/login');
        }
      })
      .catch(() => {});
  };
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
