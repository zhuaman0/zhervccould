<template>
  <div class="">
    <AuthLogin />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'login',
})
import {useToast} from 'vue-toastification'

const toast = useToast()
</script>
