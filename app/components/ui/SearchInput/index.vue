<template>
  <label
    :for="id"
    class="flex w-full items-center bg-[#F3F5F9] p-4 space-x-3 cursor-text"
  >
    <img class="" src="@/assets/icons/search.svg" alt="" />
    <input
      :id="id"
      v-model="query"
      placeholder="Поиск"
      class="border-none w-full outline-none"
      type="search"
      @input="debouncedSearch()"
    />
  </label>
</template>

<script setup lang="ts">
export type InputProps = {
  label?: string
  placeholder?: string
  type?: string
}

export type InputEmits = {}

const model = defineModel<string>()
const query = ref<string>()

const id = 'search-input-' + Math.random().toString(36).substr(2, 9)

const debouncedSearch = useDebounce(() => {
  model.value = query.value || ''
}, 500)
</script>
