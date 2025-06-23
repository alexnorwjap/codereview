<script setup>
defineProps({
  active: {
    type: Boolean,
  },
})
</script>

<template>
  <svg :class="active ? 'active' : 'inactive'" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 5L11 1" stroke="#86888E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  &.active {
    animation: rotateArrow 0.4s ease-in-out forwards;
  }
  &.inactive {
    animation: rotateArrowBack 0.4s ease-in-out forwards;
  }

  @keyframes rotateArrow {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes rotateArrowBack {
    0% {
      transform: rotate(-180deg);
    }

    100% {
      transform: rotate(0);
    }
  }
}
</style>
