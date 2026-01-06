<template>
  <div class="container px-16 mt-[15px]">
    <h1 class="font-bold text-[28px] sm:text-[32px] my-5">Профиль</h1>
    <ProfileForm />
    <button
      class="max-w-3xl font-bold bg-white mt-[15px] w-full py-3 bg-gray-100 hover:bg-gray-200 text-[#181236] font-[400]"
    >
      Изменить пароль
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'profile',
})
</script>
