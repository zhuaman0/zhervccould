<template>
  <div>
    <h1 class="text-black font-bold text-[30px] mt-4">{{ props.title }}</h1>
    <p class="text-gray-400 mt-4">Всего {{ total }} стартапов</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})
</script>
