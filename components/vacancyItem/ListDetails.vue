<script setup>
defineProps({
  programDetails: Object,
})
</script>

<template>
  <section class="program-details">
    <h3>{{ programDetails.title }}</h3>
    <br />
    <ul
      ><li v-for="item in programDetails.list" :key="item">
        <p>{{ item }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.program-details {
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h3,
  p {
    font-family: var(--madefor-display);
    font-weight: bold;
    font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.125rem);
    line-height: 1.33;
    letter-spacing: -0.03em;
    color: var(--neutral-800);

    @media (max-width: 767px) {
      line-height: 1.37;
    }
  }
  p {
    font-weight: var(--medium);
    @media (max-width: 767px) {
      line-height: 1.37;
    }
  }
  li {
    list-style: disc;
    margin-left: 25px;
  }
}
</style>
