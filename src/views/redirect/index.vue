<template>
  <div class="redirect-container" />
</template>
<script lang="ts" setup>
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

onMounted(() => {
  const { query } = route
  const redirectPath: string = query.redirectPath as string
  delete query.redirectPath
  router.replace({
    path: redirectPath,
    query: {
      ...query
    }
  })
})
</script>
