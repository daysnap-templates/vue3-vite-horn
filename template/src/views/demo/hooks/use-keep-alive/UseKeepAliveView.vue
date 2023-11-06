<template>
  <HorView>
    <p>includes => {{ includes }}</p>
    <RouterView v-slot="{ Component }">
      <KeepAlive max="10" :include="includes">
        <Component class="use-keep-alive-inner" :is="Component" />
      </KeepAlive>
    </RouterView>
  </HorView>
</template>

<script setup lang="ts">
  import { useKeepAlive } from '@/hooks'

  const { includes } = useKeepAlive()
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
  .use-keep-alive-inner {
    @extend %df1;
  }
</style>
