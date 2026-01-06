<template>
  <span class="text-sm text-[#9296A1]">Технологии и направления</span>
  <ul class="flex flex-row mt-2">
    <li
      v-for="(technology, index) in technologies"
      :key="index"
      class="border-[1px] border-[#B9B1FC] text-[#181236] text-[14px] flex mr-4 px-3 py-1"
    >
      {{ technology }}
    </li>
  </ul>
</template>

<script setup lang="ts">
type Technologies = {}
defineProps<{
  technologies: string[]
}>()
</script>
