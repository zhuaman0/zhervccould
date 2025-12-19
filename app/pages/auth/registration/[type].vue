<template>
  <div class="container flex w-full justify-center mt-[15px]">
    <AuthRegister :registerType="type" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const type = String(route.params.type || '')
console.log('route.params', route.params)

// const typeRegister = ref('')
// const handleRegistrationType = (type: string) => {
//   typeRegister.value = type
// }
</script>
