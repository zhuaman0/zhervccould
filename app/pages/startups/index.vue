<template>
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
    <div>First</div>
    <div class="grid-cols-3">
      <UiUIStartup />
    </div>
  </div>
</template>

<script setup lang="ts">
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
