<script lang="ts" setup>
import type HeaderVue from '~/components/base/Header.vue';


</script>

<template>
    <div class="flex flex-col min-h-screen bg-[#F5F5F5]">
        <BaseHeader/>
            <div class="flex-shrink-1 flex-grow">
                <slot/>
            </div>
        <BaseFooter/>
    </div>
</template>

<style scoped>
</style>