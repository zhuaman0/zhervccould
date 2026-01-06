<template>
  <div class="bg-white max-w-4xl p-6 mt-2">
    <div class="flex justify-between">
      <span class="font-bold text-[20px]">Основная информация</span
      ><img src="@/assets/icons/pen.svg" alt="" />
    </div>
    <div class="grid mt-4 lg:grid-cols-3 grid-cols-1 gap-5">
      <div>
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Контактное лицо
        </h1>
        <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
          {{ questionnaire?.fullName }}
        </p>
      </div>
      <div class="">
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Номер телефона
        </h1>
        <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
          {{ questionnaire?.phoneNumber }}
        </p>
      </div>
      <div class="">
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Электронная почта
        </h1>
        <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
          {{ questionnaire?.publicEmail }}
        </p>
      </div>
    </div>
    <div class="grid gap-5 lg:grid-cols-3 grid-cols-1 items-center mt-4">
      <div>
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Наименование организации
        </h1>
        <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
          {{ questionnaire?.organizationName }}
        </p>
      </div>
      <div class="">
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Идентификационный номер
        </h1>
        <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
          {{ questionnaire?.identificationNumber }}
        </p>
      </div>
      <div class="">
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Страна регистрации
        </h1>
        <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
          {{ questionnaire?.countryName }}
        </p>
      </div>
    </div>
    <div class="mt-2 lg:flex-col">
      <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
        Описание
      </h1>
      <a target="_blank" class="text-[#181236] text-[16px] font-[400] leading-[20px]">{{
        questionnaire?.description
      }}</a>
    </div>
    <div class="mt-2 lg:flex-col">
      <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
        Ссылка на проект
      </h1>
      <a target="_blank" class="text-[#181236] text-[16px] font-[400] leading-[20px]">{{
        questionnaire?.website
      }}</a>
    </div>
    <div class="flex items-center mt-2">
      <div>
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Лого
        </h1>
        <a target="_blank">
          <img src="@/assets/icons/red_logo.svg" class="w-full h-[48px] mb-2" alt="" />
        </a>
      </div>
      <div class="ml-[20px]">
        <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
          Презентация
        </h1>
        <a target="_blank">
          <img src="" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {InvestorResponseQuestionnaire} from '~/types'

defineProps<{
  questionnaire: InvestorResponseQuestionnaire
}>()
</script>
