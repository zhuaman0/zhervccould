<template>
  <div class="mt-4 space-y-6">
    <div
      class="py-4 px-4 bg-white flex items-start"
      v-for="starup in startups"
      :key="starup.id"
    >
      <img :src="starup.logo" alt="" />
      <div class="">
        <h1 class="text-[20px]">{{ starup.name }}</h1>
        <p class="mt-2">
          {{ starup.description }}
        </p>
        <ul class="flex gap-5 mt-2">
          <li
            class="border-[#B9B1FC] border-[1px] px-2 py-1"
            v-for="item in starup.industry"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
        <NuxtLink class="flex gap-2 mt-2 text-[#228B6B]" :to="`/startups/${starup.id}`">
          Подробнее >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const mockStartups = [
  {
    id: 1,
    name: 'Ubex',
    description:
      'Повышаем эффективность рекламы за счёт современных технологий и качественного сервиса',
    industry: ['AdTech & MarTech', 'Media'],
    logo: '@/assets/icons/ubex.png',
  },
  {
    id: 2,
    name: 'TechNova',
    description: 'Инновационные решения для умных городов и устойчивого развития',
    industry: ['Smart City', 'IoT'],
    logo: '@/assets/icons/technova.png',
  },
  {
    id: 3,
    name: 'GreenWave',
    description: 'Экологичные технологии для чистой энергии и сохранения природы',
    industry: ['Clean Energy', 'Sustainability'],
    logo: '@/assets/icons/greenwave.png',
  },
]

const startups = ref(mockStartups)
</script>
