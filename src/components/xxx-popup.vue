<template>
  <van-popup
    class="hor-popup"
    :show="show"
    position="right"
    @update:show="$emit('update:show', $event)"
    @close="$emit('close', $event)"
  >
    <hor-view :title="title" :use-left-event="false" @left="$emit('left')" @right="$emit('right')">
      <template #left>
        <slot name="left"></slot>
      </template>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
      <slot></slot>
    </hor-view>
  </van-popup>
</template>

<script lang="ts" setup>
defineEmits(['update:show', 'close', 'left', 'right'])
defineProps({
  title: {
    type: String,
    value: '',
  },
  show: {
    type: Boolean,
    value: false,
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/define.scss';
.hor-popup {
  @extend %w100;
  @extend %h100;
}
</style>
