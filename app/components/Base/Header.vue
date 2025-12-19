<template>
  <header class="toolbar flex justify-between px-16 py-4 items-center bg-white">
    <div class="left-nav flex items-center">
      <img src="@/assets/icons/logo.svg" alt="" />
      <h1 class="text-[#36CE9F] uppercase ml-[10px] leading-none">
        zher <br />
        venture capital
      </h1>
    </div>
    <div class="center-nav">
      <ul class="flex items-center gap-6">
        <NuxtLink to="/startups" class="nav-link"><li>Стартапы</li></NuxtLink>
        <NuxtLink to="/investor/investors-list" class="nav-link"
          ><li>Инвесторы</li></NuxtLink
        >
        <NuxtLink to="/specials" class="nav-link"><li>Специалисты</li></NuxtLink>
      </ul>
    </div>
    <div class="right-nav flex gap-4">
      <button
        class="border-[#36CE9F] border-r-none border-[3px] text-[#36CE9F] p-2 font-bold"
        @click="$router.push('/auth/registration')"
      >
        Регистрация
      </button>
      <button
        @click="$router.push('/auth/login/')"
        class="bg-[#36CE9F] text-white p-3 font-bold"
      >
        Войти
      </button>
      <div>
        <h1>amaaitp@gmail.com</h1>
        <UiDown v-if="false">
          <DropDefault />
        </UiDown>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useDropControl, DropDefault, UiDown} from '~/components/ui/index'
import type DropDefaultVue from '../ui/Down/DropDefault.vue'
</script>
