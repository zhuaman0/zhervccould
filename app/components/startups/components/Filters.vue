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
  <div class="text-[20px] font-[500]">Фильтр</div>
  <UiCheckBoxGroup
    v-model="selectedFilters.industry"
    :options="industryFilters"
    :label="'Индустрии'"
  />
  <UiCheckBoxGroup
    v-model="selectedFilters.technology"
    :options="technologyFilters"
    :label="'Технология'"
  />
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

watch(
  () => selectedFilters.value.industry,
  newValue => {
    console.log('Industry values:', newValue)
  }
)
</script>
