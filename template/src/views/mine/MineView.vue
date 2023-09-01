<template>
  <div>
    <input type="text" placeholder="请输入" v-model="name" />
    <p>name：{{ name }}</p>
    <input type="text" placeholder="请输入" />
    <RouterLink to="/mine/setting">设置页面</RouterLink>
  </div>
</template>

<script setup lang="ts">
  const name = ref('')
</script>
