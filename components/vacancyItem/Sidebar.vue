<script setup lang="ts"></script>

<template>
  <aside class="sidebar">
    <VacancyItemSidebarCompany class="sidebar__company" />
    <VacancyItemSidebarAds class="sidebar__ads" />
    <VacancyItemSidebarSimilarJob />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
