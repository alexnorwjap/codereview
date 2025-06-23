<script setup></script>

<template>
  <div class="ticker">
    <div class="ticker__content">
      <span>
        <BaseSvgIcon icon="duck" :width="18" :height="18" /> Этим сайтом
        пользуется больше 30.000 человек каждый месяц
      </span>
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Сайт был сделан
        джунами с нашего карьерного трека
      </span>
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Этим сайтом
        пользуется больше 30.000 человек каждый месяц
      </span>
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Сайт был сделан
        джунами с нашего карьерного трека
      </span>
    </div>
    <div class="ticker__content">
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Этим сайтом
        пользуется больше 30.000 человек каждый месяц
      </span>
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Сайт был сделан
        джунами с нашего карьерного трека
      </span>
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Этим сайтом
        пользуется больше 30.000 человек каждый месяц
      </span>
      <span
        ><BaseSvgIcon icon="duck" :width="18" :height="18" /> Сайт был сделан
        джунами с нашего карьерного трека
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ticker {
  width: fit-content;
  display: flex;
  animation: scrollLoop 40s linear infinite;
  align-items: center;

  transition: animation-play-state 0.5s;
  &__content {
    white-space: nowrap;
    display: flex;
    gap: 20px;
    width: 200%;
    padding: 0 10px;
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}

@keyframes scrollLoop {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
