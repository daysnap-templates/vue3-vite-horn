<template>
  <hor-view @right="$router.push('/todo/form')">
    <template #right>
      <span>新增</span>
    </template>
    <!-- 搜索 -->
    <hor-search @search="handleSearch"></hor-search>

    <!-- 刷新 -->
    <xxx-scroll :finished="pagingFinished" @refresh="pagingRefresh" @load="pagingLoad">
      <!-- 骨架屏 -->
      <xxx-skeleton
        v-if="pagingStatus.pagingTotal <= 0"
        v-model:error="pagingStatus.pagingError"
        :loading="pagingStatus.pagingTotal < 0"
        @refresh="pagingRefresh"
      ></xxx-skeleton>

      <!-- item cell -->
      <todo-cell v-for="(item, index) in pagingData" :key="index" :item="item"></todo-cell>
    </xxx-scroll>
  </hor-view>
</template>

<script lang="ts" setup>
import { reqTodoList } from '@/api'
import TodoCell from './components/todo-cell.vue'
import type { TodoItem } from '@/types'
import { usePaging } from '@/hooks'

let keyword = ''

const { pagingData, pagingRefresh, pagingLoad, pagingFinished, pagingStatus } = usePaging<TodoItem>(
  async ({ pagingIndex, pagingSize }, { loading }) => {
    const { list, count } = await reqTodoList(
      { pageIndex: pagingIndex, pageSize: pagingSize, keyword },
      loading,
    )
    return { pagingList: list, pagingTotal: count }
  },
  {
    immediate: true,
  },
)

// 搜索
const handleSearch = (key: any) => {
  keyword = key
  pagingRefresh(true)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
</style>
