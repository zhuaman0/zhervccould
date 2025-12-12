<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.fullName }}
            </li>
        </ul>
    </div>
    <ModalWindow 
    :message="modalMessage" 
    :open="open"
    :desc="desc"
    :button="button"
    @close="open = false" 
    @open="open = true"
    />
</template>

<script setup lang="ts">
import { api } from '#imports';
import ModalWindow from '~/components/Base/ModalWindow.vue';
import { type ProductListResponse } from '~/types/productTypes';

const products = ref<ProductListResponse['product']>([])
const open = ref(false);
const modalMessage = ref("Ваше обращение успешно отправлено!");
const desc = ref("baby")
const button = ref("click")

const getProucts = async () => {
    try {
        const response: any = await api.productApi.getProductList()
        products.value = response
    }catch(error) {
        console.log(error)
    }
}

onMounted(() => {
    getProucts()
})
</script>