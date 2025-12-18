<template>
  <img v-if="icon" :src="icon || defaultIcon" alt="" />
  <h1 v-if="message" class="my-4">{{ message }}</h1>
  <p v-if="desc">{{ desc }}</p>

  <button
    v-if="button"
    @click="handleClose"
    class="bg-[#36CE9F] text-white px-2 py-2 w-full mx-4"
  >
    {{ button }}
  </button>
</template>

<script lang="ts" setup>
import DefaultIcon from '@/assets/icons/correct.svg?url'

const defaultIcon = DefaultIcon
const props = defineProps({
  message: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    require: false,
  },
  button: {
    type: String,
    required: false,
  },
})
const emit = defineEmits(['onClose', 'onOpen'])

const handleClose = () => {
  emit('onClose')
}
</script>
