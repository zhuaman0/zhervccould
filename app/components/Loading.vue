<template>
  <div
    v-if="serviceStore.pageLoading === false"
    class="w-full flex flex-col items-center mt-8 justify-center text-center"
  >
    <img class="animate" src="/assets/icons/loading.svg" alt="" />
    <h1 class="text-[#767A87] text-[16px] font-[400]">
      По вашим запросам ничего не найдено
    </h1>
  </div>
</template>

<script setup lang="ts">
const serviceStore = useServiceStore()
</script>

<style scoped>
.animate {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
