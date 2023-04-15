<template>
  <van-popup class="filter-popup" :show="visible" position="right">
    <hor-view title="筛选"> // </hor-view>
  </van-popup>
</template>

<script lang="ts" setup>
import { useVisible } from '@daysnap/horn-use'

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
}
</style>
