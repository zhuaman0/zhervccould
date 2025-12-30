<script lang="ts" setup></script>

<template>
  <div class="flex flex-col min-h-screen bg-[#FAFAFA]">
    <BaseHeader />
    <div class="flex-shrink-1 flex-grow">
      <slot />
    </div>
    <BaseFooter />
  </div>
</template>

<style scoped></style>
