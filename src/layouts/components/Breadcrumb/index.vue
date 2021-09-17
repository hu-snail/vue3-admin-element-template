<template>
  <el-breadcrumb class="breadcrumb-container" separator=">">
    <el-breadcrumb-item v-for="item in list" :key="item.path">
      {{ t('route.' + item.meta.title) }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'Breadcrumb',
  };
</script>

<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const router = useRouter();
  let list = computed(() => {
    const { matched } = router.currentRoute.value;
    return matched.filter((item) => item.name && item.meta.title);
  });
</script>
