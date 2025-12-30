<script setup lang="ts"></script>

<template>
  <div class="my-[15px]">
    <BreadCrumbs
      class="px-16"
      :item="['Главная', 'Найти стартап', 'Редактировать личные данные']"
    />
    <div class="px-16 mt-[15px]">
      <h1 class="font-bold text-[28px] sm:text-[32px] my-5">
        Редактировать личные данные
      </h1>
      <ProfileEditForm />
      <div class="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <button
          @click="$router.push('/user/profile')"
          class="w-full text-center py-3 bg-gray-100 hover:bg-gray-200 text-[#181236] font-[400]"
        >
          Отменить
        </button>
        <button
          @click=""
          class="w-full bg-[#36CE9F] hover:bg-[#2dbb8c] text-white text-center py-3"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
definePageMeta({
  name: 'edit',
})
import {BreadCrumbs} from '~/components/ui'
</script>
