<template>
  <div class="container">
    <div>
      <!-- <button @click="openModal">open 1 modal</button>
    <button @click="openModalTest">open test modal</button> -->
    </div>
    <!-- <UiModal :open="open" @onClose="closeModal">
    <ModalDefault :message="modalMessage" :open="open" :desc="desc" :button="button" />
  </UiModal>

  <UiModal :open="openTest" @onClose="closeModalTest"> test modal </UiModal> -->
    <div class="px-16 py-4">
      <BreadCrumbs
        class=""
        :links="[
          {title: 'Главная', path: '/'},
          {title: 'Найти стартап', path: '/startups'},
        ]"
      />
      <h1 class="text-black font-bold text-[30px] mt-4">Стартапы</h1>
      <p class="text-gray-400 mt-4">Всего 3245 стартапов</p>
    </div>
    <div class="grid grid-cols-4 gap-4 pt-7 mb-10 px-16">
      <div class="bg-white py-4 px-4">
        <div>
          <h1 class="text-[20px]">Фильтр</h1>
          <ul class="mt-4">
            <p class="mt-2">Индустрии</p>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">AdTech & MarTech</span>
            </li>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">Advanced manufacturing</span>
            </li>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">AgroTech</span>
            </li>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">Alternative energy</span>
            </li>
          </ul>
          <ul class="mt-4">
            <p class="mt-2">Технологии</p>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">3D Printing</span>
            </li>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">5G</span>
            </li>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">AI / ML</span>
            </li>
            <li class="mt-2 ml-4">
              <input type="checkbox" />
              <span class="ml-2">Analytics / Big Data</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-3 w-full">
        <div class="relative w-full">
          <input
            placeholder="Поиск"
            class="bg-[#F3F5F9] border-none w-full outline-none py-4 px-12"
            type="text"
          />
          <img class="absolute top-4 left-4" src="@/assets/icons/search.svg" alt="" />
        </div>
        <div class="bg-white py-4 px-4 mt-4">
          <div class="flex items-start">
            <div><img src="@/assets/icons/ubex.png" alt="" /></div>
            <div class="ml-8">
              <h1 class="text-[20px]">Ubex</h1>
              <p class="mt-2">
                Повышаем эффективность рекламы за счёт современных технологий и
                качественного сервиса
              </p>
              <ul class="flex gap-5 mt-2">
                <li class="border-[#B9B1FC] border-[1px] px-2 py-1">AdTech & MarTech</li>
                <li class="border-[#B9B1FC] border-[1px] px-2 py-1">Media</li>
              </ul>
              <div class="flex gap-2 mt-2">
                <span class="text-[#228B6B]">Подробнее</span>
                <span class="text-[#228B6B]">></span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white py-4 psx-4 mt-4">
          <div class="flex items-start">
            <div><img src="@/assets/icons/ubex.png" alt="" /></div>
            <div class="ml-8">
              <h1 class="text-[20px]">Ubex</h1>
              <p class="mt-2">
                Повышаем эффективность рекламы за счёт современных технологий и
                качественного сервиса
              </p>
              <ul class="flex gap-5 mt-2">
                <li class="border-[#B9B1FC] border-[1px] px-2 py-1">AdTech & MarTech</li>
                <li class="border-[#B9B1FC] border-[1px] px-2 py-1">Media</li>
              </ul>
              <div class="flex gap-2 mt-2">
                <span class="text-[#228B6B]">Подробнее</span>
                <span class="text-[#228B6B]">></span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white py-4 px-4 mt-4">
          <div class="flex items-start">
            <div><img src="@/assets/icons/ubex.png" alt="" /></div>
            <div class="ml-8">
              <h1 class="text-[20px]">Ubex</h1>
              <p class="mt-2">
                Мы помогаем предотвращать ошибки диагностики при работе с медицинской
                визуализацией (КТ, МРТ, рентген)
              </p>
              <ul class="flex gap-5 mt-2">
                <li class="border-[#B9B1FC] border-[1px] px-2 py-1">AdTech & MarTech</li>
                <li class="border-[#B9B1FC] border-[1px] px-2 py-1">Media</li>
              </ul>
              <div class="flex gap-2 mt-2">
                <span class="text-[#228B6B]">Подробнее</span>
                <span class="text-[#228B6B]">></span>
              </div>
            </div>
          </div>
        </div>
        <Lock />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'startups',
})
import {api} from '#imports'
import {BreadCrumbs} from '~/components/ui'
import {UiModal, ModalDefault, useModalControl} from '~/components/ui'
import type BreadCrumbsVue from '~/components/ui/Crumbs/BreadCrumbs.vue'
import {pathService} from '~/services/path'
import {type Product} from '~/types'

const products = ref<Product[]>([])
const {open, openModal, closeModal} = useModalControl()
const {
  open: openTest,
  openModal: openModalTest,
  closeModal: closeModalTest,
} = useModalControl()
const modalMessage = ref('Ваше обращение успешно отправлено!')
const desc = ref('baby')
const button = ref('click')

const getProucts = async () => {
  try {
    const response = await api.productApi.getProductList()
    products.value = response
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getProucts()
})
</script>

<style scoped></style>
