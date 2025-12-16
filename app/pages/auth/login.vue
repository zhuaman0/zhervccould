<template>
    <div class="">
        <AuthLogin/>
    </div>
</template>


<script setup lang="ts">
import { useToast } from 'vue-toastification';

const toast = useToast()

onMounted(() => {
     toast("I'm a toast!");
})
</script>