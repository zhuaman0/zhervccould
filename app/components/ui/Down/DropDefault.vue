<template>
  <div>
    <ul class="mt-[15px]">
      <li
        v-for="(option, index) in optionsDrop"
        :key="index"
        class="flex items-center gap-2 mt-2"
      >
        <img :src="option.img" alt="" />
        <span>{{ option.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const optionsDrop = [
  {
    title: 'Моя анкета',
    img: '@/assets/icons/document.svg',
  },
  {
    title: 'Профиль',
    img: '@/assets/icons/user.svg',
  },
  {
    title: 'Выйти',
    img: '@/assets/icons/logout.svg',
  },
]
</script>
