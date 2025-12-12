<template>
  <div>
    <button @click="openModal">open 1 modal</button>
    <button @click="openModalTest">open test modal</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.fullName }}
      </li>
    </ul>
  </div>
  <UiModal :open="open" @onClose="closeModal">
    <ModalDefault :message="modalMessage" :open="open" :desc="desc" :button="button" />
  </UiModal>

  <UiModal :open="openTest" @onClose="closeModalTest"> test modal </UiModal>
</template>

<script setup lang="ts">
import {api} from '#imports'
import {UiModal, ModalDefault, useModalControl} from '~/components/ui'
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
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getProucts()
})
</script>
