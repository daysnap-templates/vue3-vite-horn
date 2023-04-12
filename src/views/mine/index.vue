<template>
  <hor-view :left-arrow="false">
    <hor-cell-group>
      <hor-cell
        v-for="(item, index) in menus"
        :key="index"
        label="TODO"
        icon="hor-version"
        arrow
        @click="handleTransfer(item)"
      />
    </hor-cell-group>
  </hor-view>
</template>

<script lang="ts" setup>
import { useTransfer } from '@daysnap/horn-use'

const handleTransfer = useTransfer()
const menus = ref([
  {
    label: 'TODO',
    path: '/todo',
  },
])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
</style>
