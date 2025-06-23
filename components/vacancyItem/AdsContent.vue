<script setup></script>

<template>
  <aside class="ads-vacancy">
    <a
      href="https://jobs.yourcodereview.com/ai/"
      target="_blank"
      class="ads-vacancy__link"
    >
      <div class="ads-vacancy__image"
        ><NuxtImg src="image/base/Sophia.png" width="49" height="49" />
      </div>
      <div class="ads-vacancy__content">
        <p>Подключи автоотклики — и пусть Софи работает за тебя 24/7</p>
        <p>Попробовать бесплатно</p>
      </div>
      <BaseSvgIcon
        class="ads-vacancy__icon"
        icon="arrow"
        :width="16"
        :height="16"
      />
    </a>
  </aside>
</template>

<style scoped lang="scss">
.ads-vacancy {
  &__link {
    display: flex;
    padding: 8px 30px 8px 15px;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-100);
    border-radius: var(--radius-12);
    transition: background-color 0.4s ease;

    &:hover {
      background-color: #e2e7ff;
    }
  }
  &__link {
  }

  &__image {
    width: 49px;
    height: 49px;
  }
  &__content {
    p {
      font-weight: var(--medium);
      font-size: clamp(0.875rem, calc(0.76rem + 0.51vw), 1rem);
      line-height: 1.25;
      letter-spacing: -0.03em;
      color: var(--neutral-800);
      &:last-child {
        font-weight: bold;
        color: var(--primary-500);
      }

      @media (max-width: 767px) {
        line-height: 1.29;
        letter-spacing: -0.04em;
      }
    }
  }
  &__icon {
    color: #232325;
    transform: rotate(135deg);
  }
}
</style>
