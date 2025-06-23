<script setup>
const { selectedSpeciality } = baseSpecialities()
const active = ref()
const route = useRoute()

const pathLink = {
  vacancies: 'https://jobs.yourcodereview.com/ai/',
  text: 'Автоотклики',
}

const toMain = computed(() => {
  return route.path !== '/'
})

const back = computed(() => {
  if (route.path.startsWith('/vacancy-')) {
    return '/vacancies'
  }
})
const vacancyButton = computed(() => {
  return (
    route.path.startsWith('/vacancies') || route.path.startsWith('/vacancy-')
  )
})

function addAnimation() {
  if (active.value) {
    active.value = false
  } else {
    active.value = true
  }
}
</script>

<template>
  <header class="header">
    <NuxtLink
      :to="back"
      class="header__back-button"
      v-if="route.path.startsWith('/vacancy-')"
      ><BaseSvgIcon icon="arrow" :width="16" :height="16"
    /></NuxtLink>
    <div class="header__container">
      <NuxtLink class="header__logo" :class="[toMain ? 'notMain' : '']" to="/">
        &lt;<span class="font-weight">code</span><span>review</span>/&gt;
      </NuxtLink>
      <button
        type="button"
        class="header__speciality"
        @click.stop="addAnimation"
      >
        <AppHeaderSpecialitySvg /> {{ selectedSpeciality || 'Специализация' }}
        <BaseHeaderArrowSvg :active="active" />
      </button>
      <button type="button" class="header__login">
        <AppHeaderLoginSvg /> <span>Войти</span>
      </button>
      <AppHeaderModalSpeciality v-if="active" @close="active = false" />
    </div>
    <a
      v-if="vacancyButton"
      target="_blank"
      class="header__custom-link"
      :href="[vacancyButton ? pathLink.vacancies : '']"
    >
      <span>{{ pathLink.text }}</span>
    </a>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;

  width: 100%;
  display: flex;
  justify-content: center;

  gap: 10px;

  z-index: 99;
  margin-top: 20px;

  @media (max-width: 479px) {
    margin-top: 43px;
  }

  &__container {
    flex: 1 1 auto;
    margin: 0;
    position: relative;
    max-width: 482px;
    padding: 17px 20px;

    border-radius: 18px;
    backdrop-filter: blur(8px);
    box-shadow: 0 0 12px 0 rgba(24, 44, 194, 0.05);
    background: rgba(255, 255, 255, 0.92);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 479px) {
      max-width: 293px;
      padding: 14px 21px;
    }
  }

  &__back-button {
    display: flex;
    content: '';
    padding: 20px 24px;
    border-radius: var(--radius-18);
    backdrop-filter: blur(8px);
    box-shadow: 0 0 12px 0 rgba(24, 44, 194, 0.05);
    background: rgba(255, 255, 255, 0.92);
    svg {
      color: #636469;
    }
  }

  &__custom-link {
    right: -158px;
    padding: 18px 20px;
    border-radius: var(--radius-18);
    backdrop-filter: blur(8px);

    font-weight: var(--medium);
    font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.125rem);
    line-height: 1.11;
    letter-spacing: -0.03em;
    background: linear-gradient(
      42deg,
      rgba(32, 147, 254, 0.8) 0%,
      rgba(194, 23, 254, 0.8) 100%
    );
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--radius-18);
      z-index: -1;
      background: var(--gradient-primary);
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    &:hover {
      &:after {
        opacity: 0;
      }
    }
    span {
      color: var(--white);
      z-index: 3;
    }

    @media (max-width: 767px) {
      position: fixed;
      bottom: 15px;
      right: 15px;
    }
  }

  &__logo {
    text-align: center;
    font-family: var(--madefor-display);
    font-size: 1.375rem;
    font-weight: var(--semi-bold);
    letter-spacing: -0.05em;
    line-height: 1;
    color: transparent;
    background: var(--gradient-primary);
    background-clip: text;
    cursor: pointer;

    &.notMain {
      @media (min-width: 479px) {
        color: var(--neutral-600);
        background: none;
      }
    }
    .font-weight {
      font-weight: normal;
    }
    @media (max-width: 479px) {
      span {
        display: none;
      }
    }
  }

  &__speciality,
  &__login {
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    font-family: var(--madefor-text);
    font-weight: var(--medium);
    font-size: 1.125rem;
    line-height: 1.22;
    color: var(--neutral-800);
    letter-spacing: -0.03em;

    @media (max-width: 479px) {
      font-size: 1rem;
    }
  }

  &__login {
    span {
      @media (max-width: 479px) {
        display: none;
      }
    }
  }
}
</style>
