<template>
  <div class="p-4 container sm:p-6 md:p-8 w-full">
    <BreadCrumbs
      class=""
      :links="[
        {title: 'Главная', path: '/'},
        {title: 'Найти стартап', path: '/'},
        {title: startup?.fullName ? startup.fullName : '', path: ''},
      ]"
    />
    <div class="w-full max-w-4xl md:w-2/3 bg-white mt-4 shadow-sm p-6 sm:p-6">
      <div class="flex items-center h-full">
        <img
          v-if="startup?.profilePhotoPath"
          class="mb-4 w-[50px] h-full"
          :src="image"
          alt="Логотип"
        />
        <Skeleton v-else class="mb-4 rounded- w-[50px] h-[50px]" />

        <h1 v-if="startup" class="text-2xl sm:text-3xl ml-4 font-bold text-[#181236]">
          {{ startup?.fullName }}
        </h1>
        <Skeleton v-else class="h-[30px] ml-4 w-full" />
      </div>

      <div class="mt-4">
        <h2 v-if="startup?.description" class="text-sm text-[#9296A1] mb-1">Описание</h2>
        <Skeleton v-else class="h-[10px] w-[80px]" />
        <p v-if="startup?.description" class="text-base sm:text-[16px] text-[#181236]">
          {{ startup?.description }}
        </p>
        <Skeleton v-else class="h-[200px] w-full mt-4" />
      </div>

      <div class="mt-4">
        <TechnologyWay
          v-if="startup?.technologies"
          :technologies="startup?.technologies"
        />
        <Skeleton v-else class="h-[70px] w-full mt-4" />
        <div
          v-if="startup?.contactFullName && startup?.website && startup?.publicEmail"
          class="grid mt-4 lg:grid-cols-3 grid-cols-1 gap-5"
        >
          <div>
            <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
              Контакты
            </h1>
            <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
              {{ startup?.contactFullName }}
            </p>
          </div>
          <div class="">
            <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
              Ссылка на сайт
            </h1>
            <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
              {{ startup?.website }}
            </p>
          </div>
          <div class="">
            <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
              Электронная почта
            </h1>
            <p class="text-[#181236] text-[16px] font-[400] leading-[20px]">
              {{ startup?.publicEmail }}
            </p>
          </div>
        </div>
        <Skeleton v-else class="h-[70px] w-full mt-4" />
      </div>

      <div v-if="startup" class="flex justify-start mt-4 items-start">
        <button
          class="bg-[#36CE9F] text-white text-[16px] px-20 py-3 hover:opacity-90 transition"
        >
          Связаться
        </button>
      </div>
      <Skeleton v-else class="h-[50px] w-[300px] mt-4" />
    </div>
    <Lock class="max-w-4xl" />
  </div>
</template>

<script setup lang="ts">
import type {DetailInvestorResponse} from '~/types'
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {api} from '~/api'
import {ta} from 'zod/locales'
import BreadCrumbs from '~/components/ui/Crumbs/BreadCrumbs.vue'
import TechnologyWay from '~/components/products/components/TechnologyWay.vue'

const startup = ref()
const route = useRoute()
const getDetailItem = async () => {
  const pathId = route.params.id
  if (!pathId || Array.isArray(pathId)) {
    console.error('Invalid route param id')
    return
  }
  console.log('getDetailItem')

  api.startupApi
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
  return `${import.meta.env.VITE_IMAGE_BASE_URL}${path}`
}

const image = computed(() => {
  return (
    startup.value &&
    `https://zhervcapi.azurewebsites.net${startup.value.profilePhotoPath}`
  )
})
onMounted(() => {
  console.log('MOunted')

  getDetailItem()
  console.log(startup.value?.logoPath)
  console.log('Baby')
})
</script>
