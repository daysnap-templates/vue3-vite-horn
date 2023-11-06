<template>
  <HorView>
    <div class="c-h10"></div>
    <HorCellGroup>
      <HorCell
        v-for="(item, index) in demos"
        :key="index"
        label="UseTrigger"
        arrow
        @click="$router.push('/hooks/use-trigger')"
      />
    </HorCellGroup>
  </HorView>
</template>

<script setup lang="ts">
  const router = useRouter()

  const demos = computed(() => {
    const routes = router.options.routes
    console.log('routes => ', routes)
    return []
  })
</script>
