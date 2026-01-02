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
      <PageHeader :title="'Стартапы'" :description="'Всего 3245 стартапов'" />
    </div>
    <div class="grid grid-cols-4 gap-4 pt-7 mb-10 px-16">
      <div class="bg-white py-4 px-4">
        <Sidebar v-model="selectedFilters" />
      </div>
      <div class="col-span-3 w-full">
        <UiSearchInput v-model="searchQuery" />

        <StartupList :startupList="products" />

        <!-- NotFound component and on loading Loading component -->

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
import Sidebar from './components/Sidebar.vue'
import type {InvestorCreateRequest, SelectOption, Investor} from '~/types'
import type {Filters} from './types'
import {R} from 'vue-router/dist/router-CWoNjPRp.mjs'

const products = ref<Investor[]>([])
const selectedFilters = ref<Filters>({
  industry: [],
  technology: [],
})

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
const loading = ref(false)

const fetchStartups = async () => {
  const payload = {
    industryIds: selectedFilters.value.industry.map(item => item.value),
    technologyIds: selectedFilters.value.technology.map(item => item.value),
    query: searchQuery.value,
  }
  loading.value = true
  api.startupApi
    .getStartupList(payload)
    .then(res => {
      products.value = res
    })
    .catch(err => {
      // tostification.error(err.message)
      console.log(err)
    })
    .finally(() => {
      loading.value = false
    })
}

const getProductsDbounced = useDebounce(fetchStartups, 500)

watch(
  selectedFilters,
  () => {
    getProductsDbounced()
  },
  {deep: true}
)

watch(searchQuery, () => {
  fetchStartups()
})

onMounted(() => {
  fetchStartups()
})
</script>

<style scoped></style>
