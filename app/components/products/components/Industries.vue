<template>
  <span class="text-[#9296A1] text-[14px] font-[400] leading-[20px]">
    Релевантные индустрии
  </span>
  <ul class="mt-[7px] flex items-center flex-wrap lg:flex-nowraps">
    <li
      v-for="(industry, index) in industries"
      :key="index"
      class="border-[1px] mr-4 lg:mt-0 border-[#B9B1FC] py-[4px] px-[16px] w-auto"
    >
      {{ industry }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  industries: string[]
}>()
</script>
