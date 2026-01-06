<template>
  <div class="container">
    <div class="flex justify-between">
      <div>
        <ul class="flex items-center">
          <li
            class="mr-4 cursor-pointer"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            :class="{
              'text-[#36CE9F] border-b-2 border-[#36CE9F]': activeTab === index,
              'text-gray-500': activeTab !== index,
            }"
          >
            {{ tab.label }}
          </li>
        </ul>
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
          {{ currentTab.title }} <br />
          <span class="text-[#7EE4C3]">{{ currentTab.blank }}</span>
        </h1>
      </div>
      <div>
        <ul class="grid grid-cols-2 gap-6">
          <li
            v-for="item in currentTab.items"
            :key="item.number"
            class="border border-[#B6B4FF] p-8 w-[450px] cursor-pointer"
          >
            <div
              class="w-[48px] h-[48px] rounded-full border border-[#36CE9F] flex items-center justify-center text-[#36CE9F] mb-6"
            >
              {{ item.number }}
            </div>

            <span class="text-lg font-semibold mb-4">{{ item.title }}</span>

            <p class="text-gray-600">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
type TabKey = 'startups' | 'investors' | 'cooperation' | 'special'
const activeTab = ref<TabKey>('startups')
const tabs = {
  startups: {
    label: 'Стартапы',
    blank: 'стартапа?',
    title: 'Какие требования для',
    items: [
      {
        number: '01',
        title: 'Технологический уклон в инновации',
        desc: 'Обязательно наличие инновационной технологии',
      },
      {
        number: '02',
        title: 'Зарегистрированное юрлицо или ИП',
        desc: 'Бизнес должен быть оформлен юридически',
      },
      {
        number: '03',
        title: 'Бизнес-план и анализ рынка',
        desc: 'Иметь базовый бизнес-план с описанием идеи и цели',
      },
      {
        number: '04',
        title: 'Наличие MVP или готового продукта',
        desc: 'Проекты на стадии прототипа и идеи временно не публикуются',
      },
    ],
  },
  investors: {
    label: 'Инвесторы',
    blank: 'инвестора?',
    title: 'Какие требования для инвестора?',
    items: [
      {
        number: '01',
        title: 'Опыт инвестирования',
        desc: 'Наличие опыта или инвестиционной стратегии',
      },
      {
        number: '02',
        title: 'Прозрачность',
        desc: 'Понимание рисков и условий',
      },
      {
        number: '03',
        title: 'Прозрачность',
        desc: 'Понимание рисков и условий',
      },
    ],
  },
  cooperation: {
    label: 'Корпорации',
    blank: 'корпорации?',
    title: 'Какие требования для корпорации?',
    items: [
      {
        number: '01',
        title: 'Запрос на инновационные решения',
        desc: 'Корпорация должна иметь конкретную задачу или потребность во внедрении инноваций',
      },
      {
        number: '02',
        title: 'Готовность к пилотным проектам',
        desc: 'Возможность запуска пилотных проектов и тестирования новых технологий',
      },
      {
        number: '03',
        title: 'Назначенный ответственный',
        desc: 'Наличие контактного лица для взаимодействия со стартапами и партнёрами',
      },
      {
        number: '04',
        title: 'Открытость к партнёрству',
        desc: 'Готовность к долгосрочному сотрудничеству и совместному развитию решений',
      },
    ],
  },
  special: {
    label: 'Специалисты',
    blank: 'специалиста?',
    title: 'Какие требования для специалиста?',
    items: [
      {
        number: '01',
        title: 'Профессиональная экспертиза',
        desc: 'Наличие подтверждённых знаний и опыта в своей профессиональной области',
      },
      {
        number: '02',
        title: 'Практический опыт',
        desc: 'Опыт участия в реальных проектах, стартапах или технологических командах',
      },
      {
        number: '03',
        title: 'Готовность к сотрудничеству',
        desc: 'Желание работать в команде и делиться экспертизой с участниками платформы',
      },
      {
        number: '04',
        title: 'Актуальность навыков',
        desc: 'Использование современных инструментов, технологий и методологий',
      },
    ],
  },
}

const currentTab = computed(() => tabs[activeTab.value])
</script>
