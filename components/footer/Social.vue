<script setup>
defineProps({
  socialData: Array,
})
</script>

<template>
  <div class="social">
    <div class="social__left">
      <a href="#" class="social__politic">Политика конфиденциальности</a>
      <span class="decor"></span>
      <a href="#" class="social__offer">Оферта</a>
    </div>
    <div class="social__right">
      <ul class="social__list">
        <li class="social__item" v-for="item in socialData" :key="item.icon">
          <a :href="item.link" class="social__link" target="_blank"
            ><BaseSvgIcon :icon="item.icon" :width="30" :height="30" />
            <NuxtImg
              class="hover-icon"
              :src="`image/footer/${item.icon}-hover.png`"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  &__left {
    display: flex;
    gap: 10px;
    align-items: center;
    .decor {
      display: inline-block;
      border-radius: 666px;
      width: 5px;
      height: 5px;
      background: var(--neutral-500);
    }
  }
  &__right {
    @media (max-width: 767px) {
      order: -1;
    }
  }
  &__politic,
  &__offer {
    font-size: clamp(0.88rem, calc(0.64rem + 1.02vw), 1.13rem);
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-100);
    &:hover {
      color: var(--neutral-500);
    }
    @media (max-width: 767px) {
      line-height: 1.14;
      letter-spacing: -0.04em;
    }
  }
  &__list {
    display: flex;
    gap: 10px;
  }
  &__link {
    position: relative;
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    color: var(--white);

    .hover-icon {
      position: absolute;
      width: 30px;
      height: 30px;

      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    &:hover {
      .hover-icon {
        opacity: 1;
      }
    }
    &:active {
      .hover-icon {
        opacity: 0;
      }
    }
  }
}
</style>
