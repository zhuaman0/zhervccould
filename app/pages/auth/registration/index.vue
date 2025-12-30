<template>
  <div class="flex w-full justify-center mx-auto mt-[15px]">
    <AuthRegistrationType :cards="cards" @type="handleRegistrationType" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'register',
})
import {USER_ROLES} from '~/types'

const router = useRouter()
const typeRegister = ref('')
const handleRegistrationType = (type: string) => {
  typeRegister.value = type
  router.push(`/auth/registration/${type}`)
}
const cards = [
  {
    id: USER_ROLES.startup,
    title: 'Стартап',
    desc: 'Необходимо выполнить все требования для регистрации стартапа',
    img: '@/assets/icons/investor.svg',
  },
  {
    id: USER_ROLES.investor,
    title: 'Инвестор',
    desc: 'Бизнес-ангел может вернуть до 50% вложений в определенные стартап',
    img: './app/assets/icons/startup.svg',
  },
]
</script>
