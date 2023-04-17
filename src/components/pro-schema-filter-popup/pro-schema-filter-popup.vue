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
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useVisible } from '@daysnap/horn-use'
import { banana } from '@daysnap/banana'
import { proSchemaFilterPopupProps, type ProSchemaFilterPopupProps } from './types'

const props = defineProps(proSchemaFilterPopupProps)
const dynamicProps = ref<Partial<ProSchemaFilterPopupProps>>()

const handleSubmit = () => {
  const options = banana.extract(props.fileds)
  confirm(options)
}

const handleReset = () => {
  //
}

const { visible, show, hide, confirm } = useVisible<Partial<ProSchemaFilterPopupProps>>({
  showCallback: (options = {}) => {
    dynamicProps.value = options
    //
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
