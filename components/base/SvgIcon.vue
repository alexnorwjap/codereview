<script setup>
defineProps({
  icon: String,
  width: Number,
  height: Number,
})
</script>

<template>
  <svg :width :height>
    <use :href="`#${icon}`"></use>
  </svg>
</template>

<style scoped lang="scss"></style>
