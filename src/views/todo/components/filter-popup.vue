<template>
  <van-popup class="filter-popup" :show="visible" position="right" @close="hide">
    <hor-view title="筛选">
      <component v-for="(item, key) in objForm" v-bind="item" :key="key" :is="item.is" />
    </hor-view>
    <hor-field />
  </van-popup>
</template>

<script lang="ts" setup>
import { useVisible } from '@daysnap/horn-use'
import { banana, type MetaDataObject } from '@daysnap/banana'
import { HorField } from '@daysnap/horn-ui'

const objForm = reactive<MetaDataObject>({
  name: {
    label: '姓名',
    value: '',
    is: shallowRef(HorField),
  },
})

const handleSubmit = () => {
  const options = banana.extract(objForm)
  console.log('options => ', options)
}

const { visible, show, hide, confirm } = useVisible()

defineExpose({
  show,
  hide,
  confirm,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
.filter-popup {
  @extend %w100;
  @extend %h100;
}
</style>
