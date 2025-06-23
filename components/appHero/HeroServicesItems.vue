<script setup>
const { services } = useServices()
</script>

<template>
  <ul class="services-items">
    <li
      class="services-items__item"
      :class="{ 'pre-last': item.srcPhoto }"
      v-for="(item, index) in services"
      :key="item.icon"
    >
      <NuxtLink
        :to="item.path"
        class="services-items__link"
        :class="[item.class, { 'pre-last': item.srcPhoto }]"
        ><BaseSvgIcon
          class="services-items__icon"
          :icon="item.icon"
          :width="26"
          :height="26"
          v-if="!item.srcPhoto"
        />
        <NuxtImg
          width="115"
          heigth="40"
          :src="item.srcPhoto"
          class="services-items__photos"
          alt="photos"
          v-if="item.srcPhoto"
        />
        <p
          :class="
            item.srcPhoto ? 'services-items__text--pre' : 'services-items__text'
          "
        >
          {{ item.text }}
        </p>
        <span v-if="!item.srcPhoto">{{ item.name }}</span>
      </NuxtLink>
      <a
        href="#"
        class="services-items__link--last"
        v-if="index === services.length - 1"
      >
        <p>Бесплатно</p>
        <p>Разместить вакансию</p>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.services-items {
  max-width: 1020px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 767px) {
    max-width: 506px;
    display: grid;
    grid-template: auto / repeat(2, 1fr);
  }
  @media (max-width: 479px) {
    max-width: 345px;
    gap: 5px;
  }

  &__item {
    position: relative;
    max-width: 249px;
    width: clamp(10.63rem, calc(5.91rem + 20.1vw), 15.56rem);

    flex: 1 0 25%;
    height: clamp(9.38rem, calc(1.62rem + 33.08vw), 17.5rem);

    &:last-child {
      min-width: 100%;
      max-height: 157px;
      flex-grow: 1;
      display: flex;
      gap: 8px;

      @media (max-width: 767px) {
        grid-column: 1 / 3;
        grid-row: span 2;
        flex-direction: column;
      }
      a {
        &:last-child {
          @media (max-width: 767px) {
            max-width: 100%;
            display: flex;
            flex-direction: row-reverse;
            height: auto;
          }
        }
      }
    }
  }

  &__link {
    padding: 20px;
    position: relative;
    z-index: 2;
    height: 100%;
    background: var(--neutral-100);
    border-radius: var(--radius-6);
    display: flex;
    flex-direction: column;
    align-content: space-between;

    overflow: hidden;

    transition: padding 0.4s ease;

    font-family: var(--madefor-text);
    color: var(--neutral-800);
    letter-spacing: -0.03em;

    &:after {
      transition: all 0.4s ease;
      position: absolute;
      z-index: -1;
      content: '';
      bottom: -25%;
      left: -25%;
      width: 100%;
      height: 100%;
      background: url('/image/hero/bg-items.png') no-repeat;
      background-size: cover;
      opacity: 0;
      @media (max-width: 767px) {
      }
    }

    @media (max-width: 767px) {
      justify-content: space-between;
      padding: 15px;
    }

    &.test {
      background: linear-gradient(
        44deg,
        rgba(244, 184, 184, 0.4) 0%,
        rgba(227, 234, 179, 0.4) 44.71%,
        rgba(197, 241, 208, 0.4) 100%
      );
    }
    &.event {
      background: linear-gradient(
        76deg,
        rgba(244, 184, 184, 0.4) 0%,
        rgba(227, 179, 234, 0.4) 44.71%,
        rgba(197, 201, 241, 0.4) 100%
      );
    }

    &.pre-last {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 121px;
      padding-right: 0;

      flex-grow: 1;
      position: relative;
      overflow: hidden;

      &:after {
        display: none;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/image/hero/big-item-bg.png') no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      &:hover {
        &:before {
          opacity: 1;
        }
      }
    }

    &--last {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 20px;
      height: 100%;
      max-width: 249px;
      min-height: 64px;
      flex-grow: 1;
      border-radius: var(--radius-6);
      overflow: hidden;
      position: relative;

      color: var(--white);

      p:first-child {
        border: 1px solid var(--white);
        border-radius: var(--radius-12);
        padding: 3px 10px;

        font-weight: var(--medium);
        font-size: clamp(0.75rem, calc(0.63rem + 0.51vw), 0.88rem);
        line-height: 114%;
        letter-spacing: -0.04em;
      }
      p:last-child {
        max-width: 120px;
        font-weight: var(--semi-bold);
        font-size: clamp(1rem, calc(0.76rem + 1.02vw), 1.25rem);
        line-height: 1.1;
        letter-spacing: -0.03em;

        @media (max-width: 767px) {
          max-width: 100%;
        }
      }

      &:before {
        opacity: 1;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        inset: 0;
        z-index: -2;
        background: var(--neutral-700);
      }
      &:after {
        transition: all 0.4s ease;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        inset: 0;
        z-index: -1;
        background: url('/image/hero/bg-last-item.png') no-repeat;
        background-size: cover;
        opacity: 0;
      }
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }

    span {
      max-width: 200px;
      font-weight: var(--semi-bold);
      font-size: clamp(1rem, calc(0.76rem + 1.02vw), 1.25rem);
      line-height: 1;
      letter-spacing: -0.03em;
      color: var(--neutral-800);
      @media (max-width: 767px) {
        line-height: 1.25;
      }
    }

    @media (hover: hover) {
      &:hover {
        padding-top: 30px;
        &.pre-last {
          padding-top: 25px;
        }
        &:after {
          bottom: 0;
          left: 0;
          opacity: 1;
        }
      }
    }
    @media (max-width: 767px) {
      &:active {
        &:after {
          bottom: 0;
          left: 0;
          opacity: 1;
        }
      }
    }
  }
  &__photos {
  }

  &__text {
    flex: 1 1 auto;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.4s;

    font-weight: var(--medium);
    line-height: 1.25;
    letter-spacing: -0.03em;

    .services-items__link:hover & {
      opacity: 1;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__text--pre {
    white-space: pre-line;
    font-size: clamp(1rem, calc(0.52rem + 2.04vw), 1.5rem);
    font-weight: var(--semi-bold);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--neutral-800);

    @media (max-width: 767px) {
      line-height: 1.12;
    }
  }
  &__icon {
    margin-bottom: 14px;
  }
}
</style>
