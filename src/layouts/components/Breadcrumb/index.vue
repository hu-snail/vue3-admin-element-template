<template>
  <el-breadcrumb class="breadcrumb-container" separator=">">
    <el-breadcrumb-item v-for="item in list" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  let list = computed(() => {
    const { matched } = router.currentRoute.value;
    return matched.filter((item) => item.name && item.meta.title);
  });
</script>
