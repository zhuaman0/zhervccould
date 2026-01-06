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
import {api} from '#imports'

const model = defineModel<Filters>({default: () => ({industry: [], technology: []})})
const technologies = ref<SelectOption[]>([])
const sourceInfoes = ref<SelectOption[]>([])
const salesModels = ref<SelectOption[]>([])
const industriesFilters = ref<SelectOption[]>([])
import {useToast} from 'vue-toastification'
const toast = useToast()

// const getTechnologies = async () => {
//   api.filterApi
//     .getTechnologyFilters()
//     .then(res => {
//       technologies.value = res
//     })
//     .catch(err => {
//       toast.error('Error')
//     })
// }
// onMounted(() => {
//   getTechnologies()
// })

const industryFilters: SelectOption[] = [
  {
    id: '1',
    name: 'AdTech & MarTech',
  },
  {
    id: '2',
    name: 'Advanced manufacturing',
  },
  {
    id: '3',
    name: 'AgroTech',
  },
  {
    id: '4',
    name: 'Alternative energy',
  },
]

const technologyFilters: SelectOption[] = [
  {
    id: '1',
    name: '3D Printing',
  },
  {
    id: '2',
    name: '5G',
  },
  {
    id: '3',
    name: 'AI / ML',
  },
  {
    id: '4',
    name: 'Analytics / Big Data',
  },
]
</script>
