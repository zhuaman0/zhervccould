<template>
  <!-- TODO <UICheckBoxGroup
            v-model="selectedFilters.industry"
            :options="technologyFilters"
            :label="'Индустрии'"
          />
          <UICheckBoxGroup
            v-model="selectedFilters.technology"
            :options="technologyFilters"
            :label="'Технологии'"
          /> -->
  <div class="text-[20px] font-bold">Фильтр</div>

  <ul class="mt-4">
    <p class="mt-2">Индустрии</p>
    <li class="mt-2 ml-4" v-for="item in industryFilters" :key="item.value">
      <input type="checkbox" />
      <span class="ml-2">{{ item.label }}</span>
    </li>
  </ul>
  <ul class="mt-4">
    <p class="mt-2">Технологии</p>
    <li class="mt-2 ml-4" v-for="item in technologyFilters" :key="item.value">
      <input type="checkbox" />
      <span class="ml-2">{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type {SelectOption} from '~/types'

const selectedFilters = ref<{
  industry: SelectOption[]
  technology: SelectOption[]
}>({
  industry: [],
  technology: [],
})

const industryFilters: SelectOption[] = [
  {
    value: 'adtech',
    label: 'AdTech & MarTech',
  },
  {
    value: 'advanced_manufacturing',
    label: 'Advanced manufacturing',
  },
  {
    value: 'agrotech',
    label: 'AgroTech',
  },
  {
    value: 'alternative_energy',
    label: 'Alternative energy',
  },
]

const technologyFilters: SelectOption[] = [
  {
    value: '3d_printing',
    label: '3D Printing',
  },
  {
    value: '5g',
    label: '5G',
  },
  {
    value: 'ai_ml',
    label: 'AI / ML',
  },
  {
    value: 'analytics_big_data',
    label: 'Analytics / Big Data',
  },
]
</script>
