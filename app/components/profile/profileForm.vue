<template>
  <div class="max-w-2xl bg-white p-5 rounded-lg shadow-sm">
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold text-[18px] sm:text-[20px]">Личные данные</h2>
      <img
        @click="$router.push('/user/edit')"
        src="@/assets/icons/pen.svg"
        alt="Редактировать"
        class="cursor-pointer w-5 h-5"
      />
    </div>

    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <li>
        <h3 class="text-[14px] text-[#767A87]">Имя и фамилия</h3>
        <p class="text-[16px] text-[#181236]">{{ user?.fullname }}</p>
      </li>
      <li>
        <h3 class="text-[14px] text-[#767A87]">Номер телефона</h3>
        <p class="text-[16px] text-[#181236]">{{ user?.phonenumber }}</p>
      </li>
      <li class="sm:col-span-2">
        <h3 class="text-[14px] text-[#767A87]">Электронная почта</h3>
        <p class="text-[16px] text-[#181236]">{{ user?.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {AuthService} from '~/services'
import type {User} from '~/types'
const user = ref<User | null>(null)

const getUser = async () => {
  AuthService.getMe()
    .then(res => {
      user.value = res
      console.log(res)
    })
    .catch(() => {
      alert('Not registered')
    })
}

onMounted(() => {
  getUser()
})
</script>
