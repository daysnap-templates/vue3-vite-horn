<template>
  <div class="view-wrap">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/define';
</style>
