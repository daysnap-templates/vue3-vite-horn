<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive max="10" :include="includes">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useKeepAliveByPosition, useTransitionNameByPosition } from '@daysnap/horn-use'

const { includes } = useKeepAliveByPosition(false)

const transitionName = useTransitionNameByPosition({
  enterClass: 'slide-left',
  leaveClass: 'slide-right',
})
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
