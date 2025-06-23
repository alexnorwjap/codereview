<script setup>
const footerNavigationData = [
  { name: 'Программа и тестирование', path: '#' },
  { name: 'Тарифы', path: '#' },
  { name: 'Команда', path: '#' },
  { name: 'О нас', path: '#' },
  { name: 'Блог', path: '#' },
  { name: 'Вакансии', path: '#' },
  { name: 'Запись', path: '#' },
  { name: 'Отзывы', path: '#' },
  { name: 'Вопросы и ответы', path: '#' },
]

const footerSocialData = [
  { icon: 'telegram', link: 'https://web.telegram.org/' },
  { icon: 'youtube', link: 'https://www.youtube.com/' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/' },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <FooterTicker class="footer__ticker" />
    </div>
    <div class="footer__main">
      <FooterNavigation
        class="footer__navigation"
        :footerNavigation="footerNavigationData"
      />
      <FooterTestLink class="footer__test" />
      <FooterContacts class="footer__contacts" />
    </div>
    <div class="footer__bottom">
      <FooterSocial class="footer__social" :socialData="footerSocialData" />
      <FooterRequisites class="footer__requisites" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--neutral-800);
    z-index: -2;
  }
  &:after {
    content: '';
    position: absolute;
    top: 26px;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/image/footer/gradient-footer.png') no-repeat center
      center / cover;
    z-index: -1;
  }
  &__top {
    padding: 11px 0;
    background: var(--gradient-secondary), var(--white);
  }
  &__main,
  &__bottom {
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 15px;
  }
  &__main {
    margin-top: clamp(20px, calc(-1.14rem + 10.2vw), 60px);
    margin-bottom: clamp(20px, calc(-1.14rem + 10.2vw), 60px);
    display: flex;
    gap: clamp(30px, calc(0.68rem + 5.1vw), 50px);
    justify-content: space-between;

    @media (max-width: 990px) {
      display: grid;
      grid-template: repeat(2, auto) / repeat(2, auto);
      justify-content: start;
      column-gap: 0;
    }
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }
  &__test {
    flex: 1 1 auto;
    @media (max-width: 990px) {
      order: -1;
    }
    @media (max-width: 767px) {
      order: 4;
    }
  }
  &__contacts {
    @media (max-width: 990px) {
      order: -2;
    }
  }

  &__bottom {
    margin-bottom: 20px;
  }
  &__social {
    padding-bottom: 18px;
    border-bottom: 1px solid var(--neutral-700);
    margin-bottom: 14px;
  }

  &__requisites {
  }
}
</style>
