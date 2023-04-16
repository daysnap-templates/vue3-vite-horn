<template>
  <hor-view @right="handleFilter">
    <template #right>
      <span>筛选</span>
    </template>
    <!-- 搜索 -->
    <hor-search @search="handleSearch"></hor-search>

    <!-- 刷新 -->
    <xxx-scroll
      ref="containerRef"
      :list-disabled="pagingStatus.pagingTotal <= 0"
      :pull-disabled="pagingStatus.pagingTotal <= 0"
      :finished="pagingFinished"
      @refresh="pagingRefresh"
      @load="pagingLoad"
    >
      <!-- 骨架屏 -->
      <xxx-skeleton
        v-if="pagingStatus.pagingTotal <= 0"
        v-model:error="pagingStatus.pagingError"
        :loading="pagingStatus.pagingTotal < 0"
        @refresh="pagingRefresh"
      ></xxx-skeleton>

      <!-- item cell -->
      <todo-cell
        v-for="(item, index) in pagingData"
        :key="index"
        :item="item"
        @click="$router.push({ path: '/todo/details', query: { ...item } })"
      ></todo-cell>
    </xxx-scroll>

    <!-- 功能按钮 -->
    <div class="c-fixed-bottom c-pr">
      <van-button class="c-button" type="primary" @click="$router.push('/todo/form')">
        新增
      </van-button>
    </div>

    <!-- 筛选 -->
    <pro-schema-filter-popup ref="proSchemaFilterPopupInstance" />
  </hor-view>
</template>

<script lang="ts" setup>
import { reqTodoList } from '@/api'
import type { TodoItem } from '@/types'
import { usePaging } from '@/hooks'
import { useKeepAliveByPosition, useKeepPosition } from '@daysnap/horn-use'
import { trap } from '@/utils'
import TodoCell from './components/todo-cell.vue'
import ProSchemaFilterPopup from '@/components/pro-schema-filter-popup.vue'

// keep position
// 1. 页面命名 需保证跟 route.name 一致
defineOptions({ name: 'todo' })
// 2. 支持 keep-alive
useKeepAliveByPosition()
// 3. 恢复位置
useKeepPosition({
  getTarget: () => document.querySelector('.hor-scroll')!,
})

// 搜索
let keyword = ''
const handleSearch = (key: any) => {
  keyword = key
  pagingRefresh(true)
}

// 筛选
const proSchemaFilterPopupInstance = ref<InstanceType<typeof ProSchemaFilterPopup>>()
let query = {} // 默认值
const handleFilter = async () => {
  query = await proSchemaFilterPopupInstance.value!.show()
  pagingRefresh(true)
}

// 监听 刷新 触发
onActivated(() => {
  // 用法组件名称 name + 事件id
  trap.create('trap:todo:refresh', () => {
    pagingRefresh(true)
  })
})

// 分页 hooks
const { pagingData, pagingRefresh, pagingLoad, pagingFinished, pagingStatus } = usePaging<TodoItem>(
  async ({ pagingIndex, pagingSize }, { loading }) => {
    const { list, count } = await reqTodoList(
      { pageIndex: pagingIndex, pageSize: pagingSize, keyword, ...query },
      loading,
    )
    return { pagingList: list, pagingTotal: count }
  },
  {
    immediate: true,
  },
)
</script>
