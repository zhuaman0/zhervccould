<template>
  <header class="toolbar py-4 items-center bg-white w-full">
    <div class="container flex items-center w-full">
      <NuxtLink class="cursor-pointer w-full flex justify-start" to="/">
        <div class="left-nav flex items-center">
          <img src="@/assets/icons/logo.svg" alt="" />
          <h1 class="text-[#36CE9F] uppercase ml-[10px] leading-none">
            zher <br />
            venture capital
          </h1>
        </div></NuxtLink
      >
      <div class="center-nav w-full flex justify-center">
        <ul class="flex items-center gap-6">
          <NuxtLink to="/startups" class="nav-link cursor-pointer"
            ><li>Стартапы</li></NuxtLink
          >
          <NuxtLink to="/investors" class="nav-link cursor-pointer"
            ><li>Инвесторы</li></NuxtLink
          >
          <NuxtLink to="" class="nav-link cursor-pointer"><li>Специалисты</li></NuxtLink>
        </ul>
      </div>
      <div class="right-nav w-full justify-end flex gap-4">
        <div class="border-[#36CE9F] border-r-none border-[3px]">
          <button
            class="text-[#36CE9F] cursor-pointer p-2"
            @click="$router.push('/auth/registration')"
          >
            Регистрация
          </button>
        </div>
        <button
          @click="$router.push('/auth/login/')"
          class="bg-[#36CE9F] text-white p-3 cursor-pointer"
        >
          Войти
        </button>
        <div @click="openDropDown" class="relative">
          <h1>{{ user?.fullname }} ▾</h1>
          <Transition name="fade">
            <UiDown class="absolute" v-if="dropOpen"> <UiDownDropDefault /> </UiDown
          ></Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useDropControl, DropDefault, UiDown} from '~/components/ui/index'
import type DropDefaultVue from '../ui/Down/DropDefault.vue'
import type DropLanguageVue from '../ui/Down/DropLanguage.vue'
import {AuthService} from '~/services'
import type {User} from '~/types'
const dropOpen = ref(false)

const openDropDown = () => {
  dropOpen.value = !dropOpen.value
}

const user = ref<User | null>(null)

const getUser = async () => {
  AuthService.getMe()
    .then(res => {
      user.value = res
      console.log(res)
    })
    .catch(() => {
      // alert('Not registered')
    })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
