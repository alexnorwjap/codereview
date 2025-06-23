<script setup>
const { selectedSpeciality } = baseSpecialities()
const vacanciesStore = useVacanciesStore()
const specialities = ref([])

// Вызываем fetchVacancies, который наполнит store всеми данными для фильтров.
await useAsyncData('vacancies-fetch', () => vacanciesStore.fetchVacancies())

// Теперь, когда мы дошли до этой строки, store уже гарантированно наполнен.
specialities.value = Array.from(
  vacanciesStore.filterCounts.speciality.keys()
).sort()

defineProps({
  yes: Boolean,
})
</script>

<template>
  <ul :class="['menu-nav', { 'hero-nav': yes }]">
    <li
      class="menu-nav__item"
      v-for="(item, index) in specialities"
      :key="`speciality-${index}`"
    >
      <input
        type="radio"
        name="speciality"
        :id="`speciality-${index}`"
        :value="item"
        v-model="selectedSpeciality"
      />
      <label
        :class="{ selected: selectedSpeciality === item }"
        :for="`speciality-${index}`"
        >{{ item }}</label
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu-nav {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  overflow: auto;
  .page & {
    //max-width: 649px;
    width: 100%;
    overflow: visible;
    //justify-content: space-between;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    flex: 0 0 auto;

    input {
      display: none;
    }
    label {
      display: block;
      cursor: pointer;
      padding: 5px 12px 7px;
      font-size: 1.125rem;
      line-height: 1.22;
      font-family: var(--madefor-text);
      background: var(--neutral-100);
      border-radius: var(--radius-12);
      letter-spacing: -0.03em;

      .page & {
        padding: 5px 15px 7px;
        font-size: clamp(1.13rem, calc(0.89rem + 1.02vw), 1.38rem);
        line-height: 1.18;
        letter-spacing: -0.02em;
        @media (max-width: 767px) {
          line-height: 1.22;
        }
      }

      &:hover {
        background: var(--neutral-150);
      }

      &.selected {
        background: var(--gradient-primary);
        color: var(--white);
      }
    }
  }
}
</style>
