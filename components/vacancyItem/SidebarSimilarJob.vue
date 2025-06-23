<script setup lang="ts">
const { similar: similarVacancy } = inject('vacancyData')
</script>

<template>
  <section class="sidebar__similar-jobs similar-jobs">
    <h4 class="similar-jobs__empty" v-if="similarVacancy.length === 0"
      >Похожих вакансий нет, измените фильтр
    </h4>
    <template v-if="similarVacancy.length >= 1">
      <h4 class="similar-jobs__title">Похожие вакансии</h4>
      <div
        class="similar-jobs__job-card"
        v-for="job in similarVacancy"
        :key="job.id"
      >
        <NuxtLink class="similar-jobs__link" :to="`/vacancy-${job.id}`">
          {{ job.title }}</NuxtLink
        >
        <p class="similar-jobs__text">{{ job.company_name }}</p>
      </div>
    </template>
  </section>
</template>

<style scoped lang="scss">
.similar-jobs {
  padding: 20px;
  background: var(--neutral-100);
  border-radius: var(--radius-8);

  &__empty,
  &__title {
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.11;
    letter-spacing: -0.03em;
    color: var(--neutral-800);
  }
  &__title {
    margin-bottom: 20px;
  }

  &__link,
  &__text {
    font-size: 1rem;
    line-height: 1.12;
    letter-spacing: -0.03em;
  }
  &__link {
    font-weight: var(--semi-bold);
    color: var(--neutral-800);
    &:hover {
      color: var(--neutral-500);
    }
  }
  &__text {
    margin-top: 8px;
    font-weight: var(--medium);
    color: var(--neutral-500);
  }
  &__job-card:not(:last-child) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
  }
}
</style>
