<template>
  <div class="space-y-4">
    <div class="text-[20px] font-[500]">Фильтр</div>

    <UiCheckBoxGroup
      v-model="model.industry"
      :options="industryFilters"
      :label="'Индустрии'"
    />

    <UiCheckBoxGroup
      v-model="model.technology"
      :options="technologyFilters"
      :label="'Технология'"
    />
  </div>
</template>

<script setup lang="ts">
import type {SelectOption} from '~/types'
import type {Filters} from '../types'

const model = defineModel<Filters>({default: () => ({industry: [], technology: []})})

const industryFilters: SelectOption[] = [
  {
    value: '1',
    label: 'AdTech & MarTech',
  },
  {
    value: '2',
    label: 'Advanced manufacturing',
  },
  {
    value: '3',
    label: 'AgroTech',
  },
  {
    value: '4',
    label: 'Alternative energy',
  },
]

const technologyFilters: SelectOption[] = [
  {
    value: '1',
    label: '3D Printing',
  },
  {
    value: '2',
    label: '5G',
  },
  {
    value: '3',
    label: 'AI / ML',
  },
  {
    value: '4',
    label: 'Analytics / Big Data',
  },
]
</script>
