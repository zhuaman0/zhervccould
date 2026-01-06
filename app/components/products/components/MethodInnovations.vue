<template>
  <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px]">
    Методы работы с инновациями
  </h1>
  <ul class="mt-1 flex items-center flex-wrap lg:flex-nowraps">
    <li
      v-for="(innovation, index) in innovations"
      :key="index"
      class="border-[1px] mr-4 lg:mt-0 border-[#B9B1FC] py-[4px] px-[16px] w-auto"
    >
      {{ innovation }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  innovations: string[]
}>()
</script>
