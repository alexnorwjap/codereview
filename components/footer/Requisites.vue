<script setup></script>

<template>
  <div class="requisites">
    <p class="requisites__left">
      ИП Примак Максим Андреевич <br />
      ИНН 772142877813 ОГРН 322774600410191
    </p>
    <p class="requisites__right">
      <NuxtImg src="image/base/duckColor.svg" :width="22" :height="22" />
      junior for juniors
    </p>
  </div>
</template>

<style scoped lang="scss">
.requisites {
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__left {
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-500);

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  &__right {
    display: flex;
    gap: 10px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--neutral-200);
    @media (max-width: 767px) {
      order: -1;
    }
  }
}
</style>
