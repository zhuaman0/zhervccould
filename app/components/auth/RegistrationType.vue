<template>
  <div class="px-16">
    <BreadCrumbs :item="['Главная', 'Выбор роли']" />
    <h1 class="tx mt-[15px]">Выберите роль для регистрации</h1>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[15px] max-w-[900px]">
      <li v-for="(card, index) in cards" :key="index" class="bg-white p-7">
        <img src="@/assets/icons/startup.svg" :alt="card.title" class="mb-[10px]" />
        <h1 class="text-[24px] font-[600] mb-[10px]">{{ card.title }}</h1>
        <p class="text-[16px] leading-[20px] mb-[10px]">{{ card.desc }}</p>
        <div class="border-[2px] border-[#36CE9F] w-[220px] h-[50px]">
          <button
            class="text-[#36CE9F] font-[600] p-2 w-full h-full"
            @click="typeOfRegistration(card.id)"
          >
            Зарегистрироваться
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {USER_ROLES} from '~/types'
import {BreadCrumbs} from '../ui'
import type BreadCrumbsVue from '../ui/Crumbs/BreadCrumbs.vue'

const route = useRoute()
const router = useRouter()

defineProps({
  cards: {
    type: Array<{id: USER_ROLES; title: string; desc: string; img: string}>,
    regired: true,
  },
})

const emit = defineEmits(['type'])

function typeOfRegistration(type: string) {
  emit('type', type)
}
</script>

<style scoped>
.tx {
  font-size: 30px;
  font-weight: 600;
}
</style>
