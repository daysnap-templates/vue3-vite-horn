<template>
  <hor-view @right="$router.push('/todo/form')">
    <template #right>
      <span>新增</span>
    </template>
    <xxx-scroll @refresh="handleRefresh" @load="handleLoad">
      <xxx-skeleton
        :loading="false"
        @refresh="handleRefresh"
        @refresh-empty="handleEmptyRefresh"
        @refresh-error="handleErrorRefresh"
      ></xxx-skeleton>
      <todo-cell v-for="(item, index) in todoList" :key="index" :item="item"></todo-cell>
    </xxx-scroll>
  </hor-view>
</template>

<script lang="ts" setup>
import { reqTodoList } from '@/api'
import TodoCell from './components/todo-cell.vue'
import type { TodoItem } from '@/types'

const todoList = ref<TodoItem[]>([])
const total = ref(0)
const fetchList = async (pageIndex = 1) => {
  const { list, count } = await reqTodoList({ pageIndex, pageSize: 10 })
  total.value = count
  todoList.value = pageIndex === 1 ? list : [...todoList.value, ...list]
}

fetchList()

const handleLoad = () => {
  console.log('load')
}

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
