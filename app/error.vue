<template>
  <div class="h-screen flex items-center justify-center">
    <div class="flex flex-col items-center text-center">
      <img class="w-[400px]" src="@/assets/icons/error.png" alt="" />

      <span class="mt-4"> К сожалению, запрашиваемая страница не найдена... </span>

      <NuxtLink to="/">
        <button class="mt-6 bg-[#36CE9F] text-white text-[16px] px-20 py-3">
          Вернуться на главную
        </button></NuxtLink
      >
    </div>
  </div>
</template>
