<template>
  <ErrorPage type="404" :title="t('errorPages.404.desc')" :msg="t('errorPages.404.remark')" />
</template>

<script setup>
  import ErrorPage from '@/components/ErrorPage/index.vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>
