<template>
  <div class="">
    <nuxt-link v-for="(link, index) in links" :key="index" :to="link.path">
      {{ link.title }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  links: {
    type: Array<{path: string; title: string}>,
    required: true,
  },
})
</script>
