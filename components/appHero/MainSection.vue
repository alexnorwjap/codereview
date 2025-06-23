<script setup></script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__head">
        <div class="hero__avatar"
          ><NuxtImg
            src="/image/base/Sophia.png"
            width="96"
            height="99"
            alt="Sofia"
        /></div>
        <h1 class="hero__title"
          >Твой Ассистент&nbsp; <br class="mobile" />
          по поиску работы</h1
        >
        <p class="hero__subtitle"
          >Я собрала для тебя все в одном месте, чтобы ты смог быстро найти
          работу</p
        >
      </div>
      <div class="hero__content content">
        <BaseMenuNav />
        <AppHeroServicesItems />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.mobile {
  display: none;
  @media (max-width: 479px) {
    display: inline;
  }
}
.hero {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    @media (max-width: 479px) {
      gap: 50px;
    }
  }
  &__head {
    display: flex;
    max-width: clamp(275px, calc(8.07rem + 39.95vw), 436px);
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  &__avatar {
  }
  &__title,
  &__subtitle {
    font-family: var(--madefor-display);
    text-align: center;
    letter-spacing: -0.02em;
  }
  &__title {
    font-size: clamp(1.63rem, calc(0.19rem + 6.11vw), 3.13rem);
    font-weight: bold;
    line-height: 1.04;
    color: var(--neutral-800);
    @media (max-width: 767px) {
      line-height: 1.15;
      letter-spacing: -0.04em;
    }
  }
  &__subtitle {
    font-weight: var(--medium);
    font-size: clamp(1.13rem, calc(0.89rem + 1.02vw), 1.38rem);
    line-height: 1.18;
    color: var(--neutral-700);
    @media (max-width: 767px) {
      line-height: 1.22;
      letter-spacing: -0.03em;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>
