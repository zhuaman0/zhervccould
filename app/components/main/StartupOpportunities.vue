<template>
  <section class="bg-[#D6F1E8] w-full h-[558px]">
    <div class="container py-12">
      <div class="flex justify-between">
        <h1 class="text-3xl font-bold text-[#0D0B33]">Возможности для стартапа</h1>
        <div class="gap-[10px]">
          <button @click="onLeft" class="bg-white rounded-full mr-4 w-[30px] h-[30px]">
            <Icon
              class="text-black text-[26px]"
              name="material-symbols-light:chevron-left"
            />
          </button>
          <button @click="onRight" class="bg-white rounded-full w-[30px] h-[30px]">
            <Icon
              class="text-black text-[26px]"
              name="material-symbols-light:chevron-right"
            />
          </button>
        </div>
      </div>

      <div class="mt-[40px] overflow-hidden">
        <ul
          class="flex transition-transform duration-500"
          :style="{transform: `translateX(-${currentIndex * slideWidth}px)`}"
        >
          <li
            v-for="(box, index) in boxes"
            :key="index"
            class="bg-white w-[400px] mr-4 shrink-0 cursor-pointer"
          >
            <div class="py-5 px-4">
              <img class="h-[200px]" :src="box.img" />
              <div class="mt-16">
                <span class="text-lg font-bold">{{ box.title }}</span>
                <p class="mt-2">{{ box.desc }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import beamAnalyst from '@/assets/icons/beam-analytics.svg'
import manSearching from '@/assets/icons/beam-man-searching-for-information-on-the-web.svg'
import remoteWork from '@/assets/icons/beam-remote-work-from-home.svg'
import womanSitting from '@/assets/icons/beam-woman-sitting-at-desk-and-programming.svg'

const boxes = [
  {
    img: womanSitting,
    title: 'Подайте заявку на пилот',
    desc: 'Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них',
  },
  {
    img: manSearching,
    title: 'Найдите инвестора',
    desc: 'Связывайтесь с инвесторами и привлекайте венчурный капитал',
  },
  {
    img: beamAnalyst,
    title: 'Подайте заявку на пилот',
    desc: 'Выбирайте инструменты для повышения эффективности бизнеса и партнеров',
  },
  {
    img: remoteWork,
    title: 'Найдите инвестора',
    desc: 'Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный контент',
  },
  {
    img: womanSitting,
    title: 'Подайте заявку на пилот',
    desc: 'Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный контент',
  },
]

const currentIndex = ref(0)
const slideWidth = 316
const visibleSlides = 3

function onRight() {
  if (currentIndex.value < boxes.length - visibleSlides) {
    currentIndex.value++
  }
}

function onLeft() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
