<script setup>
defineProps({
  vacancyData: Array,
})
</script>

<template>
  <ul class="vacancies__items vacancy">
    <li class="vacancy__empty" v-if="Object.keys(vacancyData).length === 0">
      <h3>По твоему фильтру ничего не найдено, попробуйте изменить критерии</h3>
      <BaseLoading />
    </li>
    <template v-for="(item, index) in vacancyData" :key="index">
      <li class="vacancy__item">
        <NuxtLink :to="`vacancy-${item.id}`">
          <h3 class="vacancy__title">{{ item.title }}</h3>
        </NuxtLink>
        <VacanciesTermsItem class="vacancy__terms" :item />
        <div class="vacancy__footer">
          <div class="vacancy__company company">
            <div class="company__img"
              ><NuxtImg width="42" src="/image/base/duckColor.svg"
            /></div>
            <h4 class="company__name">{{ item.company_name }}</h4>
            <p class="company__from">{{ item.location }}</p>
          </div>
          <p class="vacancy__date">
            {{ formattedDate(item.date_publication) }}
          </p>
        </div>
      </li>
      <li class="vacancy__item ads" v-if="index === 4">
        <h3 class="ads__title"
          >Больше никакого поиска <br />
          и откликов — автоматизируй свой путь к работе вместе с Софи!
        </h3>
        <a
          href="https://jobs.yourcodereview.com/ai/"
          target="_blank"
          class="ads__link"
          >Попробовать бесплатно</a
        >
        <div class="ads__img">
          <NuxtImg src="/image/base/Sophia.png" />
        </div>
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
.vacancy {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-family: var(--madefor-display);

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  &__empty {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    h3 {
      max-width: 300px;
      font-weight: var(--medium);
      font-size: clamp(1.125rem, calc(0.89rem + 1.02vw), 1.375rem);
      line-height: 1.18;
      letter-spacing: -0.02em;
      color: var(--neutral-800);
    }
  }

  &__item {
    flex: 0 1 49%;
    padding: 15px;
    background: var(--neutral-100);
    border-radius: var(--radius-8);
    @media (max-width: 990px) {
      flex-basis: 48%;
    }
    @media (max-width: 767px) {
      flex-grow: 1;
      width: 100%;
    }
  }
  &__title {
    font-weight: bold;
    font-size: clamp(1.125rem, calc(0.89rem + 1.02vw), 1.375rem);
    line-height: 1.18;
    letter-spacing: -0.02em;
    color: var(--neutral-800);
    margin-bottom: 10px;

    @media (max-width: 767px) {
      line-height: 1.22;
      letter-spacing: -0.03em;
    }
  }
  &__terms {
    margin-bottom: clamp(30px, calc(0.68rem + 5.1vw), 50px);
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  }

  &__date {
    font-weight: var(--medium);
    font-size: 1rem;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-500);
  }
}

.ads {
  background: var(--gradient-button);
  display: grid;
  grid-template: repeat(2, auto) / 210px auto;
  align-content: space-between;
  align-items: end;

  &__title {
    max-width: 380px;
    grid-column: span 2;

    font-weight: bold;
    font-size: clamp(1.125rem, calc(0.27rem + 1.79vw), 1.375rem);
    line-height: 1.09;
    letter-spacing: -0.02em;
    color: var(--neutral-800);

    @media (max-width: 767px) {
      line-height: 1.22;
      letter-spacing: -0.03em;
    }
  }
  &__link {
    justify-self: start;

    font-family: var(--madefor-text);
    font-weight: var(--semi-bold);
    font-size: 1rem;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: var(--white);

    padding: 10px 15px;
    background: var(--neutral-800);
    border-radius: var(--radius-12);
  }
  &__img {
    justify-self: end;
    width: 94px;
    height: 97px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.company {
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, auto);
  column-gap: 10px;
  align-items: center;
  &__img {
    grid-row: span 2;
    width: 42px;
    height: auto;
  }
  &__name,
  &__from {
    font-weight: var(--semi-bold);
    letter-spacing: -0.03em;
  }
  &__name {
    font-size: 1.125rem;
    line-height: 1.22;
    color: var(--neutral-800);
  }
  &__from {
    font-size: 1rem;
    line-height: 1.25;
    color: var(--neutral-600);
  }
}
</style>
