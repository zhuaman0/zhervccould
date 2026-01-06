<template>
  <div class="skeleton"></div>
</template>

<style scoped>
.skeleton {
  border-radius: 4px;
  background-color: #a5a5a5;
  animation: skeleton-animation 1.2s infinite ease-in-out;
}

@keyframes skeleton-animation {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
