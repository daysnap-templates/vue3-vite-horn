<template>
  <div class="main-wrap">
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Component class="main-inner" :is="Component" />
      </KeepAlive>
    </RouterView>

    <VanTabbar fixed route placeholder v-model="current">
      <VanTabbarItem
        v-for="(item, index) in computedTabbarRoutes"
        :key="item.path"
        replace
        :to="{ path: item.path, query: $route.query }"
        :icon="index === current ? item.meta?.iconSelected : item.meta?.icon"
      >
        {{ item.meta?.title }}
      </VanTabbarItem>
    </VanTabbar>
  </div>
</template>

<script setup lang="ts">
  import { useKeepAliveByPosition } from '@daysnap/horn-use'

  // 支持 keep-alive
  useKeepAliveByPosition({ name: 'MainView' })

  const router = useRouter()
  const computedTabbarRoutes = computed(() => {
    const routes = router.getRoutes()
    const tabbarRoute = routes.find((item) => item.path === '/')
    return tabbarRoute?.children ?? []
  })

  const route = useRoute()
  const current = ref(computedTabbarRoutes.value.findIndex((item) => item.path === route.path))
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
  .main-wrap {
    @extend %df;
    @extend %fdc;
    @extend %oh;
  }
  .main-inner {
    @extend %df1;
  }
</style>
