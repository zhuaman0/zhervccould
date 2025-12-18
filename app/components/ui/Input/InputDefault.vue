<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      class="mt-[5px] border-[#D2D4DB] w-full border py-4 px-2 outline-[#228B6B]"
      :placeholder="placeholder"
      :type="type"
      :v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: String,
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  value: {
    type: String,
    required: true,
  },
})
</script>
