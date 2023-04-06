<template>
  <hor-cell label="123" icon="hor-version"></hor-cell>
  <hor-cell label="123" icon="version"></hor-cell>
  <hor-icon name="hor-version" />
  <van-button>111</van-button>
</template>

<script setup lang="ts">
import { useTransitionNameByPosition } from '@daysnap/horn-use'
const transitionName = useTransitionNameByPosition({
  enterClass: 'slide-left',
  leaveClass: 'slide-right',
})
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
@import '@/assets/scss/define.scss';
</style>
