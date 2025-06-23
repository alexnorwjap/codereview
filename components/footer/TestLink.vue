<script setup></script>

<template>
  <a class="test-link" href="#">
    <p>
      <span
        >На какую зарплату<br class="mobile" />
        я могу претендовать?</span
      >
      <span>Пройти тест</span>
    </p>
  </a>
</template>

<style scoped lang="scss">
.mobile {
  display: none;
  @media (max-width: 767px) {
    display: inline;
  }
}
.test-link {
  @media (max-width: 990px) {
    align-self: center;
  }
  p {
    display: flex;
    max-width: 156px;

    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(30px, calc(0.68rem + 5.09vw), 50px);

    transition: all 0.3s ease;
    border-radius: var(--radius-8);
    background: var(--neutral-800);

    @media (max-width: 990px) {
      max-width: 345px;
    }
    @media (max-width: 767px) {
      min-width: 345px;
      text-align: center;
      background: rgba(255, 255, 255, 0.05);
    }
  }
  p:hover {
  }

  span:first-child {
    color: var(--neutral-100);
    max-width: 315px;
    @media (max-width: 767px) {
    }
  }
  span:last-child {
    color: var(--neutral-500);
  }
  span {
    font-weight: var(--medium);
    line-height: 1.12;
    letter-spacing: -0.03em;
    transition: all 0.3s ease;
  }

  &:hover span:first-child {
    color: var(--neutral-500);
  }

  &:hover span:last-child {
    color: var(--white);
  }
}
</style>
