<template>
  <Investors />
</template>
<script setup lang="ts">
definePageMeta({
  name: 'Startups',
})

const userStore = useUserStore()

onMounted(() => {
  console.log('User:', userStore.user)
})
</script>
