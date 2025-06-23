<script setup>
const { services } = useServices()
</script>

<template>
  <ul class="services-list">
    <li class="services-list__item" v-for="item in services" :key="item.icon">
      <NuxtLink :to="item.path"
        ><BaseSvgIcon :width="20" :height="20" :icon="item.icon" />{{
          item.name
        }}</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
.services-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px 80px;

  @media (max-width: 768px) {
    max-height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  &__item {
    width: 222px;
    a {
      display: flex;

      gap: 6px;
      align-items: center;
      font-family: var(--madefor-text);

      font-size: 1.125rem;
      line-height: 1.22;
      letter-spacing: -0.03em;
      color: var(--black);
    }
  }
}
</style>
