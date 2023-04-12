<template>
  <hor-view @right="$router.push('/todo/form')">
    <template #right>
      <span>新增</span>
    </template>
    <xxx-skeleton
      :loading="false"
      @refresh="handleRefresh"
      @refresh-empty="handleEmptyRefresh"
      @refresh-error="handleErrorRefresh"
    ></xxx-skeleton>
    <xxx-skeleton></xxx-skeleton>
    <xxx-skeleton error="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></xxx-skeleton>
  </hor-view>
</template>

<script lang="ts" setup>
import { reqTodoList } from '@/api'

reqTodoList({ pageIndex: 1, pageSize: 10 })
  .then((res) => {
    console.log('res => ', res)
  })
  .toast()

const handleRefresh = () => {
  console.log('refresh')
}

const handleErrorRefresh = () => {
  console.log('refresh-error')
}

const handleEmptyRefresh = () => {
  console.log('refresh-empty')
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
</style>
