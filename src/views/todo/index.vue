<template>
  <hor-view @right="$router.push('/todo/form')">
    <template #right>
      <span>新增</span>
    </template>
  </hor-view>
</template>

<script lang="ts" setup>
import { reqTodoList } from '@/api'

reqTodoList({ pageIndex: 1, pageSize: 10 })
  .then((res) => {
    console.log('res => ', res)
  })
  .toast()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define';
</style>
