<template>
  <hor-view @right="$router.push('/todo/form')">
    <template #right>
      <span>新增</span>
    </template>
    <xxx-scroll :finished="pagingFinished" @refresh="pagingRefresh" @load="pagingLoad">
      <xxx-skeleton
        v-if="pagingStatus.pagingTotal <= 0"
        :loading="pagingStatus.pagingTotal < 0"
        @refresh="pagingRefresh"
      ></xxx-skeleton>
      <todo-cell v-for="(item, index) in pagingData" :key="index" :item="item"></todo-cell>
    </xxx-scroll>
  </hor-view>
</template>

<script lang="ts" setup>
import { reqTodoList } from '@/api'
import TodoCell from './components/todo-cell.vue'
import type { TodoItem } from '@/types'
import { usePaging } from '@/hooks'

const { pagingData, pagingRefresh, pagingLoad, pagingFinished, pagingStatus } = usePaging<TodoItem>(
  async ({ pagingIndex, pagingSize }, { loading }) => {
    const { list, count } = await reqTodoList(
      { pageIndex: pagingIndex, pageSize: pagingSize },
      loading,
    )
    return { pagingList: list, pagingTotal: count }
  },
  {
    immediate: true,
  },
)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
</style>
