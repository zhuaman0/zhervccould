<template>
  <div class="space-y-6">
    <!-- TODO NuxtLink as wrapper and cursor pointer -->
    <!-- TODO Skeletons  as wrapper and cursor pointer -->

    <Empty v-if="!startups.length" />

    <div
      v-else
      class="bg-white cursor-pointer"
      v-for="startup in startups"
      :key="startup.id"
    >
      <NuxtLink
        class="flex py-4 px-4 items-start"
        :to="`/investors/${startup.organizationName}`"
      >
        <img src="@/assets/icons/red_logo.svg" alt="" />
        <div class="ml-4">
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
          </div></div
      ></NuxtLink>
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
// const image = computed(() => {
//   return (
//     startups.value &&
//     `${import.meta.env.VITE_IMAGE_BASE_URL}${startups.value.profilePhotoPath}`
//   )
// })

// function toDetailPage(id: Investor['organizationName']) {
//   router.push(`/startups/${id}`)
// }
</script>
