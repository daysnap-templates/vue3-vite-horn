<template>
  <van-pull-refresh
    v-model="refreshing"
    class="hor-scroll"
    ref="el"
    :pulling-text="pullingText"
    :loosing-text="loosingText"
    :loading-text="loadingText"
    :success-text="refreshErrorText || successText"
    :disabled="pullDisabled"
    :success-duration="successDuration"
    @refresh="handleRefresh"
  >
    <van-list
      v-model:loading="loading"
      v-model:error="loadError"
      class="hor-scroll-list"
      :error-text="loadErrorText"
      :offset="offset"
      :loading-text="loadingText"
      :finished-text="finishedText"
      :disabled="listDisabled"
      :finished="finished"
      :immediate-check="false"
      @load="handleLoad"
    >
      <slot></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script lang="ts" setup>
const emits = defineEmits(['refresh', 'load'])
defineProps({
  loadingText: {
    type: String,
    default: '加载中，请稍后...',
  },
  pullingText: {
    type: String,
    default: '↓ 下拉即可刷新',
  },
  loosingText: {
    type: String,
    default: '↑ 释放即可刷新',
  },
  successText: {
    type: String,
    default: '刷新成功',
  },
  successDuration: {
    type: [String, Number],
    default: 1000,
  },
  finishedText: {
    type: String,
    default: '没有更多了',
  },
  finished: {
    type: Boolean,
    default: false,
  },
  offset: {
    type: [String, Number],
    default: 100,
  },
  pullDisabled: {
    type: Boolean,
    default: false,
  },
  listDisabled: {
    type: Boolean,
    default: false,
  },
})

const refreshing = ref(false)
const refreshErrorText = ref('')
const loading = ref(false)
const loadError = ref(false)
const loadErrorText = ref('')

const handleRefresh = () => {
  emits('refresh', (error?: string) => {
    refreshErrorText.value = error || ''
    refreshing.value = false

    // 刷新完成需要重置下 load error
    loadError.value = false
    loadErrorText.value = ''
  })
}

const handleLoad = (e: any) => {
  emits('load', (error?: string) => {
    loadError.value = !!error
    loadErrorText.value = error ? `${error}，请点击重新加载` : ''
    loading.value = false
  })
}

const el = ref()
const scrollTo = (top: number) => {
  const instacne = getCurrentInstance()
  if (instacne?.proxy?.$el) {
    instacne.proxy.$el.scrollTop = top
  }
}

defineExpose({
  scrollTo,
})
</script>

<style lang="scss">
@import '@/assets/scss/define.scss';
.hor-scroll {
  @extend %h100;
  @extend %df1;
  @extend %oya;
  :deep {
    .van-list__finished-text,
    .van-list__error-text,
    .van-list__loading {
      @extend %df;
      @extend %aic;
      @extend %jcc;
      @extend %bsb;
      line-height: normal;
      padding: j(16);
      min-height: j(80);
    }
  }
}
</style>
