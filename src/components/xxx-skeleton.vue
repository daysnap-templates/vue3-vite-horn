<template>
  <div class="hor-skeleton">
    <!-- error -->
    <van-empty class="hor-skeleton-error" v-if="error" image="error" :description="error">
      <van-button
        v-if="errorBtnText"
        round
        type="primary"
        class="hor-skeleton-button"
        @click="$emit('refresh'), $emit('refresh-empty')"
      >
        {{ errorBtnText }}
      </van-button>
    </van-empty>

    <van-loading v-else-if="loading" vertical>{{ loadingDescription }}</van-loading>

    <van-empty class="hor-skeleton-empty" v-else :description="emptyDescription">
      <van-button
        v-if="emptyBtnText"
        round
        type="primary"
        class="hor-skeleton-button"
        @click="$emit('refresh'), $emit('refresh-empty')"
      >
        {{ emptyBtnText }}
      </van-button>
      <slot name="empty"></slot>
    </van-empty>
  </div>
</template>

<script setup lang="ts">
// 需支持的功能
defineProps({
  error: {
    type: String,
    default: '',
  },
  errorBtnText: {
    type: String,
    default: '刷新一下',
  },
  loading: {
    type: Boolean,
    default: true,
  },
  loadingDescription: {
    type: String,
    default: '正在加载中...',
  },
  emptyDescription: {
    type: String,
    default: '暂无数据...',
  },
  emptyBtnText: {
    type: String,
    default: '刷新一下',
  },
})

defineEmits(['refresh', 'refresh-error', 'refresh-empty'])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
.hor-skeleton {
  @extend %df;
  @extend %fdc;
  @extend %aic;
  @extend %jcc;
  min-height: j(330);
}
.hor-skeleton-error {
  :deep {
    .van-empty__description {
      word-break: break-all;
      color: var(--van-danger-color);
    }
  }
}
.hor-skeleton-button {
  padding: 0 j(32);
  min-width: j(160);
}
</style>
