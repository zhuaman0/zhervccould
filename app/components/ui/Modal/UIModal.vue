<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed w-full h-full top-0 left-0 bg flex justify-center items-center z-99"
      @click="handleClose"
    >
      <div
        class="bg-white max-w-[400px] min-w-[400px] flex items-center justify-center flex-col py-8 py-8"
        @click.stop
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const emit = defineEmits(['onClose', 'onOpen'])
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
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

const handleClose = () => {
  emit('onClose')
}
</script>

<style scoped>
.bg {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
