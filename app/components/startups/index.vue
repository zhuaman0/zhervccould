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
      <PageHeader :title="'Стартапы'" :description="'Всего 3245 стартапов'" />
    </div>
    <div class="grid grid-cols-4 gap-4 pt-7 mb-10 px-16">
      <div class="bg-white py-4 px-4">
        <Filters />
      </div>
      <div class="col-span-3 w-full">
        <UiSearchInput v-model="searchQuery" />

        <StartupList :startupList="products" />

        <Lock />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'startup',
})
import {api} from '#imports'
import {BreadCrumbs} from '~/components/ui'
import StartupList from './StartupList/StartupList.vue'
import {UiModal, ModalDefault, useModalControl} from '~/components/ui'
import type BreadCrumbsVue from '~/components/ui/Crumbs/BreadCrumbs.vue'
import {pathService} from '~/services/path'
import type {InvestorCreateRequest, SelectOption, InvestorResponse} from '~/types'
import Filters from './components/Filters.vue'

const products = ref<InvestorResponse[]>([])
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
    const response = await api.startupApi.getStartupList()
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
