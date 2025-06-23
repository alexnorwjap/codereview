<script setup lang="ts">
const { target: targetVacancy } = inject('vacancyData')
</script>

<template>
  <section class="company-sidebar">
    <div class="company-sidebar__header">
      <NuxtImg
        class="company-sidebar__logo"
        src="/image/base/duckColor.svg"
        width="50"
        height="50"
      />
      <h2 class="company-sidebar__name"> {{ targetVacancy.company_name }}</h2>
      <p class="company-sidebar__location">{{ targetVacancy.location }}</p>
    </div>
    <div class="company-sidebar__info info-company">
      <a
        href="https://jobs.yourcodereview.com/ai/"
        target="_blank"
        class="info-company__link"
        ><span>Получить оффер</span>
      </a>
      <a :href="targetVacancy.url" target="_blank" class="info-company__link"
        >Откликнуться</a
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
.company-sidebar {
  position: relative;
  padding: 20px;
  background: var(--neutral-100);
  border-radius: var(--radius-8);
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    z-index: -1;
  }

  &__header {
    display: grid;
    grid-template: repeat(2, auto) / repeat(2, auto);
    justify-content: flex-start;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 15px;
  }
  &__logo {
    grid-row: span 2;
  }
  &__name {
    font-weight: var(--medium);
    font-size: 1.125rem;
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-800);
  }
  &__location {
    font-weight: var(--medium);
    font-size: 1rem;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-600);
  }
  &__info {
  }
}
.info-company {
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  &__link {
    padding: 15px 0;
    transition: background-color 0.4s ease;
    border-radius: var(--radius-12);

    font-weight: var(--medium);
    font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.125rem);
    line-height: 1.11;
    letter-spacing: -0.03em;
    color: var(--neutral-800);

    @media (max-width: 767px) {
      line-height: 1.25;
    }
    &:first-child {
      span {
        position: relative;
        z-index: 3;
      }
      position: relative;
      background: linear-gradient(
        76deg,
        rgba(244, 184, 184, 0.4) 0%,
        rgba(227, 179, 234, 0.4) 44.71%,
        rgba(197, 201, 241, 0.4) 100%
      );
      &:after {
        content: '';
        position: absolute;
        border-radius: var(--radius-12);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.4s ease;

        background: linear-gradient(
          76deg,
          rgba(244, 184, 184, 0.6) 0%,
          rgba(227, 179, 234, 0.6) 44.71%,
          rgba(197, 201, 241, 0.6) 100%
        );
      }
      &:hover {
        &:after {
          opacity: 0.7;
        }
      }
      &:active {
        &:after {
          opacity: 0.2;
        }
      }
    }

    &:last-child {
      background-color: var(--neutral-200);

      &:hover {
        background-color: var(--neutral-300);
      }
      &:active {
        background-color: var(--neutral-200);
      }
    }
  }
}
</style>
