<template>
  <div class="todo-cell">
    <h2>{{ item.name }}</h2>
    <p>{{ item.content }}</p>
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
@import '@/assets/scss/define.scss';

.todo-cell {
  padding: j(16);
  h2 {
    @extend %c3;
    font-size: j(18);
  }
  p {
    @extend %c9;
    margin-top: j(6);
    font-size: j(16);
  }
}
</style>
