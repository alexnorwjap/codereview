<script setup></script>

<template>
  <div class="contacts">
    <div class="contacts__top">
      <a class="contacts__link" href="#">&lt;codereview /&gt;</a>
    </div>
    <div class="contacts__bottom">
      <a href="tel:+7(499)110-82-76" class="contacts__tel"
        ><span>+7 (499) 110-82-76</span></a
      >
      <a href="mailto:yourcodereview@gmail.com" class="contacts__mail"
        >yourcodereview@gmail.com</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, calc(-7.68rem + 38.1vw), 60px);

  &__bottom,
  &__top {
    a {
      text-align: right;
      display: flex;
      justify-content: flex-end;
      @media screen and (max-width: 990px) {
        justify-content: flex-start;
        text-align: left;
      }
    }
  }
  &__link {
    font-family: var(--madefor-display);
    font-weight: var(--semi-bold);
    font-size: clamp(1.25rem, calc(-0.98rem + 9.52vw), 1.85rem);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--neutral-500);

    &:hover {
      color: var(--neutral-100);
    }

    @media (max-width: 767px) {
      letter-spacing: -0.05em;
    }
  }
  &__tel {
    margin-bottom: 5px;

    span {
      position: relative;
      font-weight: var(--semi-bold);
      font-size: clamp(1.25rem, calc(0.36rem + 3.81vw), 1.5rem);
      line-height: 1.08;
      letter-spacing: -0.02em;
      color: var(--neutral-100);
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        right: 0;
        width: 0;
        height: 2px;
        background-color: var(--neutral-100);
        margin-top: 10px;
        transition: width 0.3s ease-in-out;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
    @media (max-width: 767px) {
      span {
        line-height: 1.2;
        letter-spacing: -0.03em;
      }
    }
  }
  &__mail {
    font-weight: var(--semi-bold);
    font-size: clamp(1rem, calc(0.55rem + 1.9vw), 1.125rem);
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-500);

    &:hover {
      color: var(--neutral-100);
    }

    @media (max-width: 767px) {
      line-height: 1.12;
    }
  }
}
</style>
