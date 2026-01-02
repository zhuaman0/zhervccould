<template>
  <div>
    <ul class="mt-4">
      <p class="mt-2 text-[16px]">{{ label }}</p>
      <li class="mt-2" v-for="(item, index) in options" :key="index">
        <input v-model="model" :value="item" type="checkbox" />
        <span class="ml-2">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {SelectOption} from '~/types'
const model = defineModel<SelectOption[]>()
const query = ref<string>()
defineProps<{
  options: SelectOption[]
  label: string
}>()
</script>
