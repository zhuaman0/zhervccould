<template>
  <section class="bg-[#D6F1E8] w-full h-[558px]">
    <div class="max-w-[1300px] mx-auto py-12">
      <div class="flex justify-between">
        <h1 class="text-[25px]">Возможности для стартапа</h1>
        <div class="gap-[10px]">
          <button @click="onRight" class="bg-white rounded-[50%] mr-4 w-[30px] h-[30px]">
            <
          </button>
          <button @click="onLeft" class="bg-white rounded-[50%] w-[30px] h-[30px]">
            >
          </button>
        </div>
      </div>
      <div class="mt-[40px]">
        <ul class="flex">
          <li v-for="(box, index) in boxes" :key="index" class="bg-white">
            <div class="py-5 px-4">
              <img class="h-[200px]" src="@/assets/icons/main.svg" alt="" />
              <div class="mt-2">
                <h1>{{ box.title }}</h1>
                <p>
                  {{ box.desc }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const boxes = [
  {
    title: 'Подайте заявку на пилот',
    desc: 'Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них',
  },
  {
    title: 'Найдите инвестора',
    desc: 'Связывайтесь с инвесторами и привлекайте венчурный капитал',
  },
  {
    title: 'Подайте заявку на пилот',
    desc: 'Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них',
  },
  {
    title: 'Найдите инвестора',
    desc: 'Связывайтесь с инвесторами и привлекайте венчурный капитал',
  },
  {
    title: 'Подайте заявку на пилот',
    desc: 'Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них',
  },
  {
    title: 'Найдите инвестора',
    desc: 'Связывайтесь с инвесторами и привлекайте венчурный капитал',
  },
  {
    title: 'Подайте заявку на пилот',
    desc: 'Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них',
  },
  {
    title: 'Найдите инвестора',
    desc: 'Связывайтесь с инвесторами и привлекайте венчурный капитал',
  },
]

function onRight() {}
function onLeft() {}
</script>
