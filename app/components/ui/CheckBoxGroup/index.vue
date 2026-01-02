<template>
  <fieldset class="">
    <legend class="mb-1 font-normal">{{ label }}</legend>

    <label
      v-for="(item, index) in options"
      :key="index"
      class="py-1 block space-x-2 cursor-pointer"
    >
      <input
        v-model="model"
        type="checkbox"
        :id="item.value"
        :value="item"
        class="mt-1"
      />
      <span>{{ item.label }}</span>
    </label>
  </fieldset>
</template>

<script setup lang="ts">
import type {SelectOption} from '~/types'
const model = defineModel<SelectOption[]>()

defineProps<{
  label: string
  options: SelectOption[]
}>()
</script>
