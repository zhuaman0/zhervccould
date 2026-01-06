<template>
  <span class="text-[#9296A1] text-[14px] font-[400] leading-[20px]">
    Релевантные стадии развития
  </span>
  <ul class="mt-[7px] flex items-center flex-wrap lg:flex-nowraps">
    <li
      v-for="(stage, index) in stages"
      :key="index"
      class="border-[1px] mr-4 lg:mt-0 border-[#B9B1FC] py-[4px] px-[16px] w-auto"
    >
      {{ stage }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  stages: string[]
}>()
</script>
