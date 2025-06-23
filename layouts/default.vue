<script setup>
const route = useRoute()
const stars = ref(false)

const isStarsTop = computed(() => {
  return (stars.value = route.path !== '/')
})
</script>

<template>
  <BaseSpriteSvg />
  <LayoutStarsSvg class="bg-stars" :class="isStarsTop ? 'move' : ''" />
  <LayoutAppHeader />
  <main class="page">
    <slot></slot>
  </main>
  <LayoutFooterApp />
</template>

<style scoped>
.bg-stars {
  position: absolute;
  z-index: -10;
  width: 100%;
  top: 0;

  &.move {
    top: -180px;
  }
}
.page {
  margin-top: clamp(152px, calc(70px + 10.71vw), 176px);
  @media (max-width: 479px) {
    margin-bottom: 90px;
  }
}
</style>
