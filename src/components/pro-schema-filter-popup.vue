<template>
  <div class="pro-schema-filter-popup">
    <xxx-popup :show="visible" @close="hide" title="筛选">
      <!-- 表单 -->
      <pro-schema-form :fields="fileds" />

      <!-- 重置 确认 -->
      <div class="c-fixed-bottom">
        <div class="button-group">
          <van-button class="c-button" @click="handleReset">重置</van-button>
          <van-button class="c-button" type="primary" @click="handleSubmit">确认</van-button>
        </div>
      </div>

      <div class="c-ios-seat"></div>
    </xxx-popup>
  </div>
</template>

<script lang="ts" setup>
import { useVisible } from '@daysnap/horn-use'
import { banana } from '@daysnap/banana'

const props = defineProps({
  fileds: {
    type: Object,
    default: () => ({}),
  },
})

const handleSubmit = () => {
  const options = banana.extract(props.fileds)
  confirm(options)
}

interface Options {
  initialValue?: Record<string, any>
  filedsValue?: Record<string, any>
}

const dynamicProp = ref<Options>({})

const handleReset = () => {
  const { initialValue = {} } = dynamicProp.value
  banana.assignment(initialValue, props.fileds)
}

const { visible, show, hide, confirm } = useVisible<Options>({
  showCallback: (options = {}) => {
    dynamicProp.value = options
    const { initialValue, filedsValue } = options
    if (initialValue !== filedsValue && filedsValue) {
      banana.assignment(filedsValue, props.fileds)
    }
  },
  confirmCallback: (res) => {
    return res
  },
})

defineExpose({
  show,
  hide,
  confirm,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
.pro-schema-filter-popup {
  :deep {
    .hor-view {
      background-color: #fafafa;
    }
  }
}
.button-group {
  @extend %df;
  @extend %aic;
  .c-button {
    @extend %df1;
    + .c-button {
      margin-left: j(10);
    }
  }
}
.c-ios-seat {
  height: j(100);
}
</style>
