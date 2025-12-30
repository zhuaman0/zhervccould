<template>
  <div class="container">
    <div class="px-16 py-4">
      <BreadCrumbs
        class=""
        :links="[
          {title: 'Главная', path: '/'},
          {title: 'Найти стартап', path: '/startups'},
        ]"
      />
      <!-- TODO: <PageHeader title="Стартапы" description="Всего 3245 стартапов" /> -->
      <h1 class="text-black font-bold text-[30px] mt-4">Стартапы</h1>
      <p class="text-gray-400 mt-4">Всего 3245 стартапов</p>
    </div>
    <div class="grid grid-cols-4 gap-4 pt-7 mb-10 px-16">
      <div class="bg-white py-4 px-4">
        <Filters v-model="filters" />
      </div>
      <div class="col-span-3 w-full">
        <UiSearchInput v-model="searchQuery" />

        <StartupList />

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
import StartupList from './StartupList/StartupList.vue'
import {UiModal, ModalDefault, useModalControl} from '~/components/ui'
import type BreadCrumbsVue from '~/components/ui/Crumbs/BreadCrumbs.vue'
import {pathService} from '~/services/path'
import type {Product, SelectOption} from '~/types'
import Filters from './components/Filters.vue'

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
const searchQuery = ref('')

const getProucts = async () => {
  try {
    const response = await api.productApi.getProductList()
    products.value = response
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const getStartups = () => {
  fetch(`test?query=${searchQuery.value}`)
    .then(res => res.json())
    .then(data => {
      products.value = data
    })
    .catch(err => {
      console.log(err)
    })
}

watch(searchQuery, () => {
  getStartups()
})

onMounted(() => {
  getProucts()
})
</script>

<style scoped></style>
