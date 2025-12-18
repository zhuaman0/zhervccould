<template>
  <div class="flex w-full justify-center mt-[15px]">
    <div>
      <AuthRegister :type="typeRegister" v-if="typeRegister" />
    </div>
  </div>
  <AuthResigterType v-if="!typeRegister" @type="handleRegistrationType" />
</template>

<script setup lang="ts">
const typeRegister = ref('')
const handleRegistrationType = (type: string) => {
  typeRegister.value = type
}
</script>
