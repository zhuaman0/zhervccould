<template>
  <div>
    <ul class="flex items-center">
      <li
        v-for="(filter, index) in selectedFilters.industry"
        :key="index"
        class="bg-[#E7E4FF] mr-2 px-4 py-1"
      >
        {{ filter.name }}
      </li>
      <li
        v-for="(filter, index) in selectedFilters.technology"
        :key="index"
        class="bg-[#E7E4FF] mr-2 px-4 py-1"
      >
        {{ filter.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {string} from 'zod'
import type {Filters} from '../types'

defineProps<{
  selectedFilters: Filters
}>()
</script>
