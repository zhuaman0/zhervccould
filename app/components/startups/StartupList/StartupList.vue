<template>
  <div class="mt-4 space-y-6">
    <!-- TODO NuxtLink as wrapper and cursor pointer -->
    <!-- TODO Skeletons  as wrapper and cursor pointer -->

    <Loading v-if="!startups.length" />

    <div
      v-else
      @click="toDetailPage(startup.organizationName)"
      class="py-4 px-4 bg-white flex items-start"
      v-for="startup in startups"
      :key="startup.id"
    >
      <img src="@/assets/icons/ubex.png" alt="" />
      <div class="">
        <h1 class="text-[20px]">{{ startup.fullName }}</h1>
        <p class="mt-2">
          {{ startup.organizationName }}
        </p>
        <ul class="flex gap-5 mt-2">
          <li class="border-[#B9B1FC] border-[1px] px-2 py-1">
            {{ startup.investorType }}
          </li>
          <li class="border-[#B9B1FC] border-[1px] px-2 py-1">
            {{ startup.organizationName }}
          </li>
        </ul>
        <div class="flex items-center mt-2">
          <span class="text-[#36CE9F] font-[400] lg:text-[16px] text-[12px]"
            >Подробнее</span
          >
          <Icon
            class="text-[#36CE9F] text-[26px]"
            name="material-symbols-light:chevron-right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {Investor} from '~/types'

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
const router = useRouter()
const props = defineProps<{
  startupList: Investor[]
}>()
const startups = computed(() => props.startupList)

function toDetailPage(id: Investor['organizationName']) {
  router.push(`/startups/${id}`)
}
</script>
