<script setup lang="ts"></script>

<template>
  <a
    href="https://jobs.yourcodereview.com/ai/"
    target="_blank"
    class="ads-sidebar"
  >
    <div class="ads-sidebar__img">
      <NuxtImg
        src="/image/base/Sophia.png"
        width="60"
        height="60"
        class="ads-sidebar__avatar"
      />
    </div>
    <div class="ads-sidebar__content">
      <h4> Не зовут на интервью?</h4>
      <p> Автоматизируй поиск работы своему AI ассистенту Софи </p>
      <div class="ads-sidebar__footer">
        <p>Попробовать бесплатно</p>
        <BaseSvgIcon
          class="ads-sidebar__icon"
          icon="arrow"
          :width="16"
          :height="16"
        />
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.ads-sidebar {
  position: relative;
  background: rgba(249, 227, 168, 0.33);

  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    bottom: -15%;
    left: -15%;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url('/image/vacansyItem/ads-bg.png') center;
    background-size: cover;
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      opacity: 1;
      bottom: 0;
      left: 0;
    }
  }
  &__img {
    margin-bottom: 15px;
  }
  &__content {
    & > h4,
    & > p {
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 1.11;
      letter-spacing: -0.03em;
      color: var(--neutral-800);
    }
    & > p {
      margin-bottom: 50px;
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--tertiary-400);
    p {
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 1.11;
      letter-spacing: -0.03em;
    }
  }
  &__icon {
    transform: rotate(135deg);
  }
}
</style>
