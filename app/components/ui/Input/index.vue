<template>
  <div>
    <label :for="id">{{ label }}</label>

    <input
      v-model="model"
      :id="id"
      class="mt-[5px] border-[#D2D4DB] w-full border py-4 px-2 outline-[#228B6B]"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
export type InputProps = {
  id: string
  label?: string
  placeholder?: string
  type?: string
}

export type InputEmits = {}

const model = defineModel()
const emit = defineEmits<InputEmits>()
const props = defineProps<InputProps>()
</script>
