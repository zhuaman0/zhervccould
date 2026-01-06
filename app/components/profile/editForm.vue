<script setup lang="ts"></script>

<template>
  <div class="max-w-2xl bg-white p-5 rounded-lg shadow-sm">
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold text-[18px] sm:text-[20px]">Личные данные</h2>
      <img
        @click="$router.push('/user/edit')"
        src="@/assets/icons/pen.svg"
        alt="Редактировать"
        class="w-5 h-5 cursor-pointer"
      />
    </div>

    <ul class="grid grid-cols-1 gap-6">
      <li>
        <h3 class="text-[14px] text-[#767A87]">Имя и фамилия</h3>
        <UiInputDefault />
      </li>
      <li>
        <h3 class="text-[14px] text-[#767A87]">Электронная почта</h3>
        <UiInputDefault />
      </li>
      <li>
        <h3 class="text-[14px] text-[#767A87]">Номер телефона</h3>
        <UiInputDefault />
      </li>
    </ul>
  </div>
</template>
