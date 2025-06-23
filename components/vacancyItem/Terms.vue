<script setup>
defineProps({
  targetVacancy: Object,
})
</script>

<template>
  <ul class="terms">
    <li class="terms__item" v-if="targetVacancy.remote"
      ><BaseSvgIcon icon="remote" :width="18" :height="18" /><p
        class="terms__text"
        >удаленно</p
      ></li
    >
    <li class="terms__item" v-else="!targetVacancy.remote">
      <BaseSvgIcon icon="office" :width="18" :height="18" /><p
        class="terms__text"
        >офис</p
      >
    </li>
    <li class="terms__item" v-if="targetVacancy.internship"
      ><BaseSvgIcon icon="internship" :width="18" :height="18" /><p
        class="terms__text"
      >
        стажировка</p
      ></li
    >
    <li class="terms__item" v-if="targetVacancy.salary"
      ><BaseSvgIcon icon="salary" :width="18" :height="18" /><p
        class="terms__text"
      >
        {{ targetVacancy.salary }} $</p
      >
    </li>
    <li class="terms__item" v-else="targetVacancy.salary"
      ><p class="terms__text">не указана</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.terms {
  display: flex;
  align-items: center;
  gap: 12px;
  &__item {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  &__text {
    font-family: var(--madefor-display);
    font-weight: var(--semi-bold);
    font-size: 1rem;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-800);
  }
}
</style>
