<template>
  <div class="bg-white max-w-4xl p-6 mt-2">
    <div class="flex justify-between">
      <div class="flex">
        <img src="@/assets/icons/red_logo.svg" alt="" />
        <div class="ml-4">
          <span class="text-[20px] font-bold">{{ title }}</span>
          <p class="mt-2">0 просмотров</p>
          <div class="flex items-center">
            <img class="w-4" src="@/assets/icons/clock.svg" alt="" />
            <span class="mt-2 text-[16px] ml-2">На проверке</span>
          </div>
        </div>
      </div>
      <div><img src="@/assets/icons/pen.svg" alt="" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
