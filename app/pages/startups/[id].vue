<template>
  <div class="p-4 container sm:p-6 md:p-8 w-full">
    <div
      class="ml-2 sm:ml-4 md:ml-6 lg:ml-20 w-full max-w-3xl md:w-2/3 bg-white shadow-lg p-6 sm:p-8"
    >
      <div class="flex items-center h-full">
        <img
          v-if="startup?.logoPath"
          class="mb-4 w-[50px] h-full"
          :src="getImage(startup.logoPath)"
          alt="Логотип"
        />
        <h1 class="text-2xl sm:text-3xl ml-4 font-bold text-[#181236] mb-6 sm:mb-8">
          {{ startup?.fullName }}
        </h1>
      </div>

      <div class="mb-6">
        <h2 class="text-sm text-[#9296A1] mb-1">Описание</h2>
        <p class="text-base sm:text-[16px] text-[#181236]">
          {{ startup?.description }}
        </p>
      </div>

      <div class="mb-6">
        <h2 class="text-sm text-[#9296A1] mb-1">Релевантные индустрии</h2>
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in startup?.industries"
            :key="index"
            class="border border-violet-400 text-[#181236] text-[14px] flex mr-4 mb-2 px-3 py-1"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h2 class="text-sm text-[#9296A1] mb-1">Технологии и направления</h2>
        <ul class="flex flex-row">
          <li
            v-for="(item, index) in startup?.technologies"
            :key="index"
            class="border border-violet-400 text-[#181236] text-[14px] flex mr-4 px-3 py-1"
          >
            {{ item }}
          </li>
        </ul>

        <div class="grid gap-5 lg:grid-cols-3 grid-cols-1 mb-[15px] mt-[15px]">
          <div>
            <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
              Стадия инвестирования
            </h1>
            <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
              {{ startup?.organizationName }}
            </p>
          </div>

          <div>
            <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
              Электронная почта
            </h1>
            <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
              {{ startup?.publicEmail }}
            </p>
          </div>

          <div>
            <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
              Страна
            </h1>
            <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
              {{ startup?.countryName }}
            </p>
          </div>
        </div>

        <div class="mb-[15px]">
          <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
            Ссылка на проект
          </h1>
          <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
            {{ startup?.website }}
          </p>
        </div>
      </div>

      <div class="flex justify-start items-start">
        <button
          class="bg-[#36CE9F] text-white text-[16px] px-20 py-3 hover:opacity-90 transition"
        >
          Связаться
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {DetailInvestorResponse} from '~/types'
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {startupApi} from '~/api/startupApi'

const startup = ref<DetailInvestorResponse>()
const route = useRoute()
const getDetailItem = async () => {
  const pathId = route.params.id
  if (!pathId || Array.isArray(pathId)) {
    console.error('Invalid route param id')
    return
  }
  startupApi
    .getDetailList(pathId)
    .then(response => {
      startup.value = response
      console.log(startup.value)
    })
    .catch(err => {
      console.log('You have error')
    })
}

const getImage = (path: any) => {
  return `https://zhervcapi.azurewebsites.net${path}`
}

onMounted(() => {
  getDetailItem()
  console.log(startup.value?.logoPath)
  console.log('Baby')
})
</script>
