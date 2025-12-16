<template>
    <div class="">
        <v-breadcrumbs :items="item"></v-breadcrumbs>
    </div>
</template>

<script setup lang="ts">


const props = defineProps({
    item: {
        type: Array as PropType<string[]>,
        required: true
    }
})
</script>