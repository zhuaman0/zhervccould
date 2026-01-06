<template>
  <div class="absolute top-0 left-0 mt-2 py-2 px-4 rounded-[5px] w-52 bg-white shadow-lg">
    <h3 class="">amaaitp@gmail.com</h3>
    <div class="w-full h-[1px] bg-[#E7E7E7] mt-[10px]"></div>
    <div></div>
    <ul class="mt-[10px]">
      <li
        v-for="(option, index) in optionsDrop"
        :key="index"
        class="flex items-center gap-3 mt-2 text-[14px] text-[#181236] cursor-pointer transition hover:bg-gray-50"
      >
        <NuxtLink class="flex items-center gap-3" :to="option.link">
          <img src="@/assets/icons/document.svg" alt="" class="w-4 h-4" />
          <span>{{ option.title }}</span></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const optionsDrop = [
  {
    title: 'Моя анкета',
    img: '@/assets/icons/document.svg',
    link: '/user/questionnaire',
  },
  {
    title: 'Профиль',
    img: '@/assets/icons/user.svg',
    link: '/user/profile',
  },
  {
    title: 'Выйти',
    img: '@/assets/icons/logout.svg',
    link: '',
  },
]
</script>
