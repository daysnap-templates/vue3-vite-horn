<template>
  <div class="todo-item">
    <h2 class="todo-item-name">{{ item.name }}</h2>
    <p class="todo-item-content">{{ item.content }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TodoItem } from '@/types'

defineProps({
  item: {
    type: Object as PropType<TodoItem>,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define';
</style>
