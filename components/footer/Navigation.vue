<script setup>
defineProps({
  footerNavigation: Array,
})
</script>

<template>
  <nav class="navigation-footer">
    <ul class="navigation-footer__list">
      <li
        class="navigation-footer__item"
        v-for="(item, index) in footerNavigation"
        :key="index"
      >
        <a href="#" class="navigation-footer__link">{{ item.name }} </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation-footer {
  &__list {
    min-width: 428px;
    height: 158px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 12px 50px;
    @media (max-width: 768px) {
      min-width: auto;
      column-gap: 20px;
    }
    @media (max-width: 480px) {
      max-width: 50%;
    }
  }

  &__link {
    font-size: clamp(1rem, calc(0.55rem + 1.9vw), 1.125rem);
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-100);

    &:hover {
      color: var(--neutral-500);
    }

    @media (max-width: 767px) {
      line-height: 1.12;
    }
  }
}
</style>
