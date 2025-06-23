<script setup></script>

<template>
  <div class="loading">
    <NuxtImg src="/image/base/duckColor.svg" />
    <NuxtImg src="/image/base/duckColor.svg" />
    <NuxtImg src="/image/base/duckColor.svg" />
  </div>
</template>

<style scoped lang="scss">
.loading {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 55px;
    height: auto;
    object-fit: cover;
    animation: duckBounce 1.5s ease-in-out infinite;
  }

  img:nth-child(1) {
    animation-delay: 0s;
  }

  img:nth-child(2) {
    animation-delay: 0.4s;
  }

  img:nth-child(3) {
    animation-delay: 0.8s;
  }
}

@keyframes duckBounce {
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.4);
  }
}
</style>
